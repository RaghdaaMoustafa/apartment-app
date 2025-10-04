"use client";

import React from "react";

type FormLabelProps = {
  htmlFor: string;
  name: string;
  required?: boolean;
};

export const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  name,
  required = false,
}) => {
  return (
    <label htmlFor={htmlFor} className="font-medium">
      {name} {required && <span className="text-red-500">*</span>}
    </label>
  );
};
