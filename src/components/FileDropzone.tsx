// components/FileDropzone.tsx
"use client";
import { useDropzone } from "react-dropzone";
import { use, useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

type FileDropzoneProps = {
  onDrop: (acceptedFiles: File[]) => void;
  onRemove: () => void;
  value?: File[];
};

export function FileDropzone({ onDrop, onRemove, value }: FileDropzoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple: false,
  });

  useEffect(() => {
    if (value?.[0]) {
      const objectUrl = URL.createObjectURL(value[0]);
      setPreview(objectUrl);
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setPreview(null);
    }
  }, [value]);

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded h-full min-h-28 flex flex-col items-center justify-center relative p-4 text-center cursor-pointer ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {value?.length && preview ? (
        <div className="flex flex-col items-center space-y-2">
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover rounded-md"
          />
          <p className="text-sm text-green-600">{value[0].name}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="text-red-500 hover:text-red-700 absolute top-2 right-2 cursor-pointer"
            aria-label="Remove file"
          >
            <X className="w-4 h-4 " />
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          Drag & drop a file, or click to upload company logo
        </p>
      )}
    </div>
  );
}
