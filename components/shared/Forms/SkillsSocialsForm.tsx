"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller} from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { SkillsSocialsFormSchema } from "@/lib/validator"
import * as z from "zod"
import { skillsSocialsDefaultValues } from "@/constants"
import DropdownSkills, { skills } from '../Dropdowns/DropdownSkills'
import DropdownLanguages from "../Dropdowns/DropdownLanguages"
import DropdownEquipment from "../Dropdowns/DropdownEquipment"
import { Input } from "@/components/ui/input"

type SkillsSocialsFormProps = {
  userId: string
  type: "Update"
}
const SkillsSocialsForm = ({ userId, type }: SkillsSocialsFormProps) => {
  const initialValues = skillsSocialsDefaultValues

  const form = useForm<z.infer<typeof SkillsSocialsFormSchema>>({
    resolver: zodResolver(SkillsSocialsFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SkillsSocialsFormSchema>) {
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
            name="languages"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Lingue</FormLabel>
                <FormControl>
                  <DropdownLanguages
                    onChange={(selectedOptions) => {
                      // Convert from OptionType[] back to string[] for the form
                      const value = selectedOptions.map(option => option.value);
                      field.onChange(value);
                    }}
                    // Convert from string[] to OptionType[] for DropdownTattoos
                    value={field.value.map(value => 
                      skills.find(option => option.value === value) || { value, label: value }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Competenze</FormLabel>
                <FormControl>
                  <DropdownSkills
                    onChange={(selectedOptions) => {
                      // Convert from OptionType[] back to string[] for the form
                      const value = selectedOptions.map(option => option.value);
                      field.onChange(value);
                    }}
                    // Convert from string[] to OptionType[] for DropdownTattoos
                    value={field.value.map(value => 
                      skills.find(option => option.value === value) || { value, label: value }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="equipment"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Attrezzatura</FormLabel>
                <FormControl>
                  <DropdownEquipment
                    onChange={(selectedOptions) => {
                      // Convert from OptionType[] back to string[] for the form
                      const value = selectedOptions.map(option => option.value);
                      field.onChange(value);
                    }}
                    // Convert from string[] to OptionType[] for DropdownTattoos
                    value={field.value.map(value => 
                      skills.find(option => option.value === value) || { value, label: value }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="linkedin"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Linkedin</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci l'URL del tuo profilo" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="youtube"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>YouTube</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci l'URL del tuo profilo" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci l'URL del tuo profilo" {...field} className="input-field"/>
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

export default SkillsSocialsForm