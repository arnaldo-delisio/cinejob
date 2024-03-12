import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownSizeProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownSize =  ({ value, onChangeHandler }: DropdownSizeProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent className="custom-dropdown-menu">
        {Array.from({ length: (62 - 36 + 2) / 2 }, (_, index) => 36 + index * 2).map(
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

export default DropdownSize