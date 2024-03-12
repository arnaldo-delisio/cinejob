import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownComplexionProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownComplexion =  ({ value, onChangeHandler }: DropdownComplexionProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Caucasica">Caucasica</SelectItem>
        <SelectItem value="Orientale">Orientale</SelectItem>
        <SelectItem value="Africana">Africana</SelectItem>
        <SelectItem value="Araba">Araba</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default DropdownComplexion