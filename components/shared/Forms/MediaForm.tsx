"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller} from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import * as z from "zod"
import { MediaFormSchema } from "@/lib/validator"
import { mediaDefaultValues } from "@/constants"
import { useState } from "react"
import { FileUploader }  from "../FileUploader"
import { useUploadThing } from '@/lib/uploadthing'

type MediaFormProps = {
  userId: string
  type: "Update"
}
const MediaForm = ({ userId, type }: MediaFormProps) => {
  const [files, setfiles] = useState<File[]>([])
  const initialValues = mediaDefaultValues

  const { startUpload } = useUploadThing('imageUploader')

  const form = useForm<z.infer<typeof MediaFormSchema>>({
    resolver: zodResolver(MediaFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof MediaFormSchema>) {

    let uploadedImageUrl = values.photoPP;

    if(files.length > 0 ) {
      const uploadedImages = await startUpload(files)

      if(!uploadedImages) {
        return
      }

      uploadedImageUrl = uploadedImages[0].url
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="photoPP"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Foto Primo Piano</FormLabel>
                <FormControl>
                  <FileUploader 
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setfiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="photoFI"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Foto Figura Intera</FormLabel>
                <FormControl>
                  <FileUploader 
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setfiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button 
          type="submit"
          disabled={form.formState.isSubmitting}
          className="button"
        >

          {form.formState.isSubmitting ? (
            'Aggiornando...'
          ): 'Aggiorna'}</Button>
      </form>
    </Form>
  )
}

export default MediaForm