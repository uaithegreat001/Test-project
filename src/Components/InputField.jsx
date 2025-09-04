import React from "react";

export function InputField({ label, type = "text", name, value, onChange, required = true, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-normal text-sm text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border rounded px-3 py-2 min-w-0 w-full focus:outline-none focus:ring-0 focus:border-t-2 focus:border-b-2 focus:border-emerald-500 transition"
        {...props}
      />
    </div>
  );
}
