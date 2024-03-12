'use client'

import { useCallback, Dispatch, SetStateAction, useState } from 'react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {
  const [errorMessage, setErrorMessage] = useState('');
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const maxSize = 3 * 1048576;
    const fileTooLarge = acceptedFiles.some(file => file.size > maxSize);

    if (fileTooLarge) {
      // Set the error message if any file is too large
      setErrorMessage('Grandezza massima file: 3MB');
      return; // Stop further processing
    } else {
      // Reset the error message and proceed with file handling
      setErrorMessage('');
      setFiles(acceptedFiles);
      onFieldChange(convertFileToUrl(acceptedFiles[0]));
    }
  }, [setFiles, onFieldChange]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50">
      <input {...getInputProps()} className="cursor-pointer" />
      {errorMessage && <p className="error-message-photo">{errorMessage}</p>}
      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <Image
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <Image 
            src="/assets/icons/upload.svg" 
            width={77} 
            height={77} 
            alt="file upload" 
          />
          <h3 className="mb-2 mt-2">Trascina la tua foto qui</h3>
          <p className="p-medium-12 mb-4">MAX 3MB</p>
          <Button type="button" className="rounded-full">
            Seleziona
          </Button>
        </div>
      )}
    </div>
  )
}