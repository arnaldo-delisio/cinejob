import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownShoesProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownShoes =  ({ value, onChangeHandler }: DropdownShoesProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent className="custom-dropdown-menu">
        {Array.from({ length: 50 - 16 + 1 }, (_, index) => 16 + index).map(
          (value) => (
            <SelectItem key={value} value={String(value)}>
              {value}
            </SelectItem>
          )
        )}
      </SelectContent>


    </Select>

  )
}

export default DropdownShoes