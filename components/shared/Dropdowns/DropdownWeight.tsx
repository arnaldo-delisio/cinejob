import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownWeightProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownWeight =  ({ value, onChangeHandler }: DropdownWeightProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent className="custom-dropdown-menu">
        {Array.from({ length: 256 }, (_, index) => index + 5).map((value) => (
          <SelectItem key={value} value={String(value)}>{value}</SelectItem>
        ))}
      </SelectContent>
    </Select>

  )
}

export default DropdownWeight