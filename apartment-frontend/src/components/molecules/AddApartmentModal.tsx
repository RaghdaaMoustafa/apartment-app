"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { addApartment } from "@/lib/api";
import { TApartment } from "@/types";
import { FormLabel } from "../atoms/FormLabel";

type FormState = {
  unitName: string;
  unitNumber: string;
  project: string;
  price: string;
  location: string;
  rooms: string;
  description: string;
  available: boolean;
};

type TAddApartmentModalProps = {
  open: boolean;
  onClose: () => void;
  onApartmentAdded: (newApartment: TApartment) => void;
};

export default function AddApartmentModal({
  open,
  onClose,
  onApartmentAdded,
}: TAddApartmentModalProps) {
  const initialForm: FormState = {
    unitName: "",
    unitNumber: "",
    project: "",
    price: "",
    location: "",
    rooms: "",
    description: "",
    available: true,
  };

  const [form, setForm] = useState<FormState>(initialForm);
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setImages([]);
      setLoading(false);
    }
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, String(value))
      );
      images.forEach((file) => formData.append("images", file));

      const newApartment = await addApartment(formData); 

      if (onApartmentAdded) onApartmentAdded(newApartment); 
      onClose();
    } catch (err) {
      console.error("Failed to add apartment", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Apartment</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <FormLabel htmlFor="unitName" name="Unit Name" required />
            <Input
              name="unitName"
              value={form.unitName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="unitNumber" name="Unit Number" required />
            <Input
              name="unitNumber"
              value={form.unitNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="project" name="Project" required />
            <Input
              name="project"
              value={form.project}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="price" name="Price" required />
            <Input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="location" name="Location" required />
            <Input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="rooms" name="Rooms" required />
            <Input
              name="rooms"
              type="number"
              value={form.rooms}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <FormLabel htmlFor="description" name="Description" required />
            <Textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <Label>Available:</Label>
            <Badge
              onClick={() =>
                setForm((prev) => ({ ...prev, available: !prev.available }))
              }
              className={
                form.available
                  ? "bg-green-500 cursor-pointer"
                  : "bg-red-500 cursor-pointer"
              }
            >
              {form.available ? "Yes" : "No"}
            </Badge>
          </div>

          <div>
            <FormLabel htmlFor="images" name="Images" />
            <input
              id="images"
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="border rounded px-2 py-1"
              title="Select images to upload"
              placeholder="Select images"
              required
            />
            {images.length > 0 && (
              <div className="flex gap-2 mt-2 flex-wrap">
                {images.map((file, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-600 border rounded px-2 py-1"
                  >
                    {file.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-full"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-full"
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
