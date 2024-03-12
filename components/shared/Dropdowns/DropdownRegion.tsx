import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropdownRegionProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownRegion =  ({ value, onChangeHandler }: DropdownRegionProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent className="custom-dropdown-menu">
        <SelectItem value="Abruzzo">Abruzzo</SelectItem>
        <SelectItem value="Basilicata">Basilicata</SelectItem>
        <SelectItem value="Calabria">Calabria</SelectItem>
        <SelectItem value="Campania">Campania</SelectItem>
        <SelectItem value="Emilia-Romagna">Emilia-Romagna</SelectItem>
        <SelectItem value="Friuli-Venezia Giulia">Friuli-Venezia Giulia</SelectItem>
        <SelectItem value="Lazio">Lazio</SelectItem>
        <SelectItem value="Liguria">Liguria</SelectItem>
        <SelectItem value="Lombardia">Lombardia</SelectItem>
        <SelectItem value="Marche">Marche</SelectItem>
        <SelectItem value="Molise">Molise</SelectItem>
        <SelectItem value="Piemonte">Piemonte</SelectItem>
        <SelectItem value="Puglia">Puglia</SelectItem>
        <SelectItem value="Sardegna">Sardegna</SelectItem>
        <SelectItem value="Sicilia">Sicilia</SelectItem>
        <SelectItem value="Toscana">Toscana</SelectItem>
        <SelectItem value="Trentino-Alto Adige">Trentino-Alto Adige</SelectItem>
        <SelectItem value="Umbria">Umbria</SelectItem>
        <SelectItem value="Valle d&aposAosta">Valle d&aposAosta</SelectItem>
        <SelectItem value="Veneto">Veneto</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default DropdownRegion