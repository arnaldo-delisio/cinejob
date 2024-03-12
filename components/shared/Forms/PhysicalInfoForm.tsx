"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller} from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { physicalInfoFormSchema } from "@/lib/validator"
import * as z from "zod"
import { physicalInfoDefaultValues } from "@/constants"
import Image from "next/image"

import DropdownComplexion from "../Dropdowns/DropdownComplexion"
import DropdownEyeColor from "../Dropdowns/DropdownEyeColor"
import DropdownHairColor from "../Dropdowns/DropdownHairColor"
import DropdownHeight from "../Dropdowns/DropdownHeight"
import DropdownWeight from "../Dropdowns/DropdownWeight"
import DropdownTattoos from "../Dropdowns/DropdownTattoos"
import { tattoos } from '../Dropdowns/DropdownTattoos'
import DropdownSize from "../Dropdowns/DropdownSize"
import DropdownShoes from "../Dropdowns/DropdownShoes"

type PhysicalInfoFormProps = {
  userId: string
  type: "Update"
}
const PhysicalInfoForm = ({ userId, type }: PhysicalInfoFormProps) => {
  const initialValues = physicalInfoDefaultValues

  const form = useForm<z.infer<typeof physicalInfoFormSchema>>({
    resolver: zodResolver(physicalInfoFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof physicalInfoFormSchema>) {
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
            name="eyeColor"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Colore Occhi</FormLabel>
                <FormControl>
                  <DropdownEyeColor onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hairColor"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Colore Capelli</FormLabel>
                <FormControl>
                  <DropdownHairColor onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Altezza</FormLabel>
                <FormControl>
                  <DropdownHeight onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Peso</FormLabel>
                <FormControl>
                  <DropdownWeight onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Taglia</FormLabel>
                <FormControl>
                  <DropdownSize onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Scarpe</FormLabel>
                <FormControl>
                  <DropdownShoes onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
              control={form.control}
              name="complexion"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Etnia</FormLabel>
                  <FormControl>
                    <DropdownComplexion onChangeHandler={field.onChange} value={field.value}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <FormField
            control={form.control}
            name="tattoos"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tatuaggi</FormLabel>
                <FormControl>
                  <DropdownTattoos
                    onChange={(selectedOptions) => {
                      // Convert from OptionType[] back to string[] for the form
                      const value = selectedOptions.map(option => option.value);
                      field.onChange(value);
                    }}
                    // Convert from string[] to OptionType[] for DropdownTattoos
                    value={field.value.map(value => 
                      tattoos.find(option => option.value === value) || { value, label: value }
                    )}
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

export default PhysicalInfoForm