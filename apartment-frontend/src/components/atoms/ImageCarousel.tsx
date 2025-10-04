/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TImageCarouselProps = {
  images?: string[];
  alt: string;
}

export default function ImageCarousel({ images = [], alt }: TImageCarouselProps) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full h-80 md:h-96 mb-6">
      {images.length > 0 ? (
        <img
          src={images[currentImg]}
          alt={alt}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-500">
          No images available
        </div>
      )}

      {images.length > 1 && (
        <>
          <Button
            onClick={prevImage}
            disabled={images.length <= 1}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={20} />
          </Button>

          <Button
            onClick={nextImage}
            disabled={images.length <= 1}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight size={20} />
          </Button>
        </>
      )}
    </div>
  );
}
