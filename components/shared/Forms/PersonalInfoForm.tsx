"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { personalInfoFormSchema } from "@/lib/validator"
import * as z from "zod"
import { personalInfoDefaultValues } from "@/constants"
import Image from "next/image"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import DropdownGender from "../Dropdowns/DropdownGender"
import DropdownRegion from "../Dropdowns/DropdownRegion"
import { IUser } from "@/lib/database/models/user.model"
import { useRouter } from "next/navigation" // Updated from 'next/navigation' to 'next/router' for correct import
import { updateUser } from "@/lib/actions/user.actions"
import { useUser } from "@clerk/nextjs";
import DropdownNationality from "../Dropdowns/DropdownNationality"

type PersonalInfoFormProps = {
  type: "Update"
  user?: IUser
  userId: string;
}

const PersonalInfoForm = ({ type, user }: PersonalInfoFormProps) => {
  const { user: clerkUser } = useUser(); // Use Clerk hook to get the current user
  const initialValues = user && type === 'Update'
    ? user
    : personalInfoDefaultValues
  const router = useRouter();

  const form = useForm<z.infer<typeof personalInfoFormSchema>>({
    resolver: zodResolver(personalInfoFormSchema),
    defaultValues: initialValues
  });
 
  const onSubmit = async (values: z.infer<typeof personalInfoFormSchema>) => {
    // Check if we have clerkUser before proceeding
    if (!clerkUser) {
      console.error("Clerk user not found");
      return;
    }

    const clerkId = clerkUser.id; // Use clerkId from Clerk user

    const userId = clerkUser.publicMetadata?.userId as string;
    
    const dataToSubmit = {
      // Include all other fields from values directly
      ...values,
      // Then, override and structure the address field as required by the backend
      address: {
        street: values.street,
        city: values.city,
        region: values.region,
        postalCode: values.postalCode,
        country: values.country,
      },
      // Exclude flat address fields by not explicitly including them here
    };

    try {
      const updatedUser = await updateUser(clerkId, dataToSubmit);
      console.log('User updated successfully', updatedUser);
      // Optionally, redirect the user or show a success message
      router.push(`/${userId}/dashboard/profile/`); // Replace '/some-success-page' with your actual success page route
    } catch (error) {
      console.error('Error updating user:', error);
      // Optionally, handle the error, for example by showing an error message to the user
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci il tuo nome" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Cognome</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci il tuo cognome
                  " {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Data di Nascita</FormLabel>
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/calendar.svg"
                        alt="calendar"
                        width={24}
                        height={24}
                        className="filter-grey"
                      />
                      <p className="ml-3 whitespace-nowrap text-grey-600"></p>
                      <DatePicker
                        selected={field.value}
                        onChange={(date: Date) => field.onChange(date)}
                        dateFormat= "dd/MM/yyyy"
                        wrapperClassName="datePicker"
                        placeholderText="Data di Nascita"
                        maxDate={new Date()}
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="vatNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Codice Fiscale</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci il tuo Codice Fiscale" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Genere</FormLabel>
                <FormControl>
                  <DropdownGender onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Cittadinanza</FormLabel>
                <FormControl>
                  <DropdownNationality onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Regione di Residenza</FormLabel>
                <FormControl>
                  <DropdownRegion onChangeHandler={field.onChange} value={field.value}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Comune di Residenza</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci il tuo comune" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Indirizzo di Residenza</FormLabel>
                <FormControl>
                <Input placeholder="Inserisci il tuo indirizzo" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>CAP di residenza</FormLabel>
                <FormControl>
                  <Input placeholder="Inserisci il CAP" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" className="button">Aggiorna</Button>
      </form>
    </Form>
  )
}

export default PersonalInfoForm