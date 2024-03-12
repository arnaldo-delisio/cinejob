import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownGenderProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownGender =  ({ value, onChangeHandler }: DropdownGenderProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Uomo">Uomo</SelectItem>
        <SelectItem value="Donna">Donna</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default DropdownGender