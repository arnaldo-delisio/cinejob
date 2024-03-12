import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownEyeColorProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownEyeColor =  ({ value, onChangeHandler }: DropdownEyeColorProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Marroni">Marroni</SelectItem>
        <SelectItem value="Neri">Neri</SelectItem>
        <SelectItem value="Verdi">Verdi</SelectItem>
        <SelectItem value="Azzurri">Azzurri</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default DropdownEyeColor