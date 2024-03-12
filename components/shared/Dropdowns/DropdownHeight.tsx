import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownHeightProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownHeight =  ({ value, onChangeHandler }: DropdownHeightProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent className="custom-dropdown-menu">
        {Array.from({ length: 201 }, (_, index) => index + 40).map((value) => (
          <SelectItem key={value} value={String(value)}>{value}</SelectItem>
        ))}
      </SelectContent>
    </Select>

  )
}

export default DropdownHeight