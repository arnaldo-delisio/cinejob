import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownHairColorProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownHairColor =  ({ value, onChangeHandler }: DropdownHairColorProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Castani">Castani</SelectItem>
        <SelectItem value="Neri">Neri</SelectItem>
        <SelectItem value="Biondi">Biondi</SelectItem>
        <SelectItem value="Rossi">Rossi</SelectItem>
        <SelectItem value="Grigi">Grigi</SelectItem>
        <SelectItem value="Bianchi">Bianchi</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default DropdownHairColor