import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator
} from "@/components/ui/select"


type DropdownNationalityProps = {
  value?: string
  onChangeHandler?: () => void
}

const DropdownNationality =  ({ value, onChangeHandler }: DropdownNationalityProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Seleziona" />
      </SelectTrigger>
      <SelectContent className="custom-dropdown-menu">
        <SelectItem value="ITA">Italiana</SelectItem>
        <SelectSeparator />
        <SelectItem value="AFG">Afgana</SelectItem>
        <SelectItem value="ALB">Albanese</SelectItem>
        <SelectItem value="DZA">Algerina</SelectItem>
        <SelectItem value="AND">Andorrana</SelectItem>
        <SelectItem value="AGO">Angolana</SelectItem>
        <SelectItem value="AIA">Anguillana</SelectItem>
        <SelectItem value="ATG">Antiguana</SelectItem>
        <SelectItem value="ANT">Antillana</SelectItem>
        <SelectItem value="SAU">Saudita</SelectItem>
        <SelectItem value="ARG">Argentina</SelectItem>
        <SelectItem value="ARM">Armena</SelectItem>
        <SelectItem value="AUS">Australiana</SelectItem>
        <SelectItem value="AUT">Austriaca</SelectItem>
        <SelectItem value="AZE">Azerbaigiana</SelectItem>
        <SelectItem value="BHS">Bahamense</SelectItem>
        <SelectItem value="BHR">Bahraini</SelectItem>
        <SelectItem value="BGD">Bengalese</SelectItem>
        <SelectItem value="BRB">Barbadiana</SelectItem>
        <SelectItem value="BEL">Belga</SelectItem>
        <SelectItem value="BTN">Bhutanese</SelectItem>
        <SelectItem value="BLR">Bielorussa</SelectItem>
        <SelectItem value="BOL">Boliviana</SelectItem>
        <SelectItem value="BIH">Bosniaca</SelectItem>
        <SelectItem value="BRA">Brasiliana</SelectItem>
        <SelectItem value="BRN">Bruneiana</SelectItem>
        <SelectItem value="BGR">Bulgara</SelectItem>
        <SelectItem value="BFA">Burkinabè</SelectItem>
        <SelectItem value="BDI">Burundese</SelectItem>
        <SelectItem value="KHM">Cambogiana</SelectItem>
        <SelectItem value="CMR">Camerunese</SelectItem>
        <SelectItem value="CAN">Canadese</SelectItem>
        <SelectItem value="CPV">Capoverdiana</SelectItem>
        <SelectItem value="CZE">Ceca</SelectItem>
        <SelectItem value="CHL">Cilena</SelectItem>
        <SelectItem value="CHN">Cinese</SelectItem>
        <SelectItem value="CYP">Cipriota</SelectItem>
        <SelectItem value="COL">Colombiana</SelectItem>
        <SelectItem value="COM">Comoriana</SelectItem>
        <SelectItem value="COG">Congolese</SelectItem>
        <SelectItem value="CRI">Costaricana</SelectItem>
        <SelectItem value="HRV">Croata</SelectItem>
        <SelectItem value="CUB">Cubana</SelectItem>
        <SelectItem value="DNK">Danese</SelectItem>
        <SelectItem value="DMA">Dominicana</SelectItem>
        <SelectItem value="ECU">Ecuadoregna</SelectItem>
        <SelectItem value="EGY">Egiziana</SelectItem>
        <SelectItem value="SLV">Salvadoregna</SelectItem>
        <SelectItem value="ARE">Emiratina</SelectItem>
        <SelectItem value="ERI">Eritrea</SelectItem>
        <SelectItem value="EST">Estone</SelectItem>
        <SelectItem value="ETH">Etiopica</SelectItem>
        <SelectItem value="FJI">Fijiana</SelectItem>
        <SelectItem value="PHL">Filippina</SelectItem>
        <SelectItem value="FIN">Finlandese</SelectItem>
        <SelectItem value="FRA">Francese</SelectItem>
        <SelectItem value="GAB">Gabonese</SelectItem>
        <SelectItem value="GMB">Gambiana</SelectItem>
        <SelectItem value="GEO">Georgiana</SelectItem>
        <SelectItem value="GHA">Ghanese</SelectItem>
        <SelectItem value="JAM">Giamaicana</SelectItem>
        <SelectItem value="JPN">Giapponese</SelectItem>
        <SelectItem value="JOR">Giordana</SelectItem>
        <SelectItem value="GRC">Greca</SelectItem>
        <SelectItem value="GRD">Grenadina</SelectItem>
        <SelectItem value="GTM">Guatemalteca</SelectItem>
        <SelectItem value="GIN">Guineana</SelectItem>
        <SelectItem value="GUY">Guyanese</SelectItem>
        <SelectItem value="HTI">Haitiana</SelectItem>
        <SelectItem value="HND">Honduregna</SelectItem>
        <SelectItem value="IND">Indiana</SelectItem>
        <SelectItem value="IDN">Indonesiana</SelectItem>
        <SelectItem value="IRN">Iraniana</SelectItem>
        <SelectItem value="IRQ">Irachena</SelectItem>
        <SelectItem value="IRL">Irlandese</SelectItem>
        <SelectItem value="ISL">Islandese</SelectItem>
        <SelectItem value="ISR">Israeliana</SelectItem>
        <SelectItem value="KAZ">Kazaka</SelectItem>
        <SelectItem value="KEN">Kenyana</SelectItem>
        <SelectItem value="KGZ">Kirghisa</SelectItem>
        <SelectItem value="KIR">Kiribatiana</SelectItem>
        <SelectItem value="KWT">Kuwaitiana</SelectItem>
        <SelectItem value="LAO">Laotiana</SelectItem>
        <SelectItem value="LVA">Lettone</SelectItem>
        <SelectItem value="LBN">Libanese</SelectItem>
        <SelectItem value="LBR">Liberiana</SelectItem>
        <SelectItem value="LBY">Libica</SelectItem>
        <SelectItem value="LIE">Liechtensteinese</SelectItem>
        <SelectItem value="LTU">Lituana</SelectItem>
        <SelectItem value="LUX">Lussemburghese</SelectItem>
        <SelectItem value="MAC">Macedone</SelectItem>
        <SelectItem value="MWI">Malawiana</SelectItem>
        <SelectItem value="MYS">Malese</SelectItem>
        <SelectItem value="MDV">Maldiviana</SelectItem>
        <SelectItem value="MLI">Maliana</SelectItem>
        <SelectItem value="MLT">Maltese</SelectItem>
        <SelectItem value="MAR">Marocchina</SelectItem>
        <SelectItem value="MRT">Mauritana</SelectItem>
        <SelectItem value="MRT">Mauriziana</SelectItem>
        <SelectItem value="MEX">Messicana</SelectItem>
        <SelectItem value="MDA">Moldava</SelectItem>
        <SelectItem value="MNG">Mongola</SelectItem>
        <SelectItem value="MNE">Montenegrina</SelectItem>
        <SelectItem value="MOZ">Mozambicana</SelectItem>
        <SelectItem value="MMR">Myanmar</SelectItem>
        <SelectItem value="NAM">Namibiana</SelectItem>
        <SelectItem value="NRU">Nauruana</SelectItem>
        <SelectItem value="NPL">Nepalese</SelectItem>
        <SelectItem value="NIC">Nicaraguense</SelectItem>
        <SelectItem value="NGA">Nigeriana</SelectItem>
        <SelectItem value="NOR">Norvegese</SelectItem>
        <SelectItem value="NCL">Nuova Caledoniana</SelectItem>
        <SelectItem value="NZL">Neozelandese</SelectItem>
        <SelectItem value="OMN">Omanita</SelectItem>
        <SelectItem value="NLD">Olandese</SelectItem>
        <SelectItem value="PAK">Pakistana</SelectItem>
        <SelectItem value="PLW">Palauana</SelectItem>
        <SelectItem value="PAN">Panamense</SelectItem>
        <SelectItem value="PNG">Papuana</SelectItem>
        <SelectItem value="PRY">Paraguaiana</SelectItem>
        <SelectItem value="PER">Peruviana</SelectItem>
        <SelectItem value="POL">Polacca</SelectItem>
        <SelectItem value="PRT">Portoghese</SelectItem>
        <SelectItem value="PRI">Portoricana</SelectItem>
        <SelectItem value="QAT">Qatariota</SelectItem>
        <SelectItem value="GBR">Regno Unito</SelectItem>
        <SelectItem value="DOM">Dominicana</SelectItem>
        <SelectItem value="ROU">Rumena</SelectItem>
        <SelectItem value="RUS">Russa</SelectItem>
        <SelectItem value="RWA">Ruandese</SelectItem>
        <SelectItem value="SLV">Salvadoregna</SelectItem>
        <SelectItem value="SMR">Sammarinese</SelectItem>
        <SelectItem value="WSM">Samoana</SelectItem>
        <SelectItem value="STP">Sao Tome e Principe</SelectItem>
        <SelectItem value="SEN">Senegalese</SelectItem>
        <SelectItem value="SCG">Serba</SelectItem>
        <SelectItem value="SYC">Seychellois</SelectItem>
        <SelectItem value="SLE">Sierraleonese</SelectItem>
        <SelectItem value="SGP">Singaporiana</SelectItem>
        <SelectItem value="SYR">Siriana</SelectItem>
        <SelectItem value="SVK">Slovacca</SelectItem>
        <SelectItem value="SVN">Slovena</SelectItem>
        <SelectItem value="SOM">Somala</SelectItem>
        <SelectItem value="ESP">Spagnola</SelectItem>
        <SelectItem value="LKA">Srilankese</SelectItem>
        <SelectItem value="USA">Statunitense</SelectItem>
        <SelectItem value="ZAF">Sudafricana</SelectItem>
        <SelectItem value="SDN">Sudanese</SelectItem>
        <SelectItem value="SUR">Surinamese</SelectItem>
        <SelectItem value="SWE">Svedese</SelectItem>
        <SelectItem value="CHE">Svizzera</SelectItem>
        <SelectItem value="SWZ">Swazilandese</SelectItem>
        <SelectItem value="TJK">Tagika</SelectItem>
        <SelectItem value="TWN">Taiwanese</SelectItem>
        <SelectItem value="TZA">Tanzaniana</SelectItem>
        <SelectItem value="DEU">Tedesca</SelectItem>
        <SelectItem value="THA">THailandese</SelectItem>
        <SelectItem value="TGO">Togolese</SelectItem>
        <SelectItem value="TON">Tongana</SelectItem>
        <SelectItem value="TTO">Trinidad e Tobago</SelectItem>
        <SelectItem value="TUN">Tunisina</SelectItem>
        <SelectItem value="TUR">Turca</SelectItem>
        <SelectItem value="TKM">Turkmena</SelectItem>
        <SelectItem value="TUV">Tuvaluana</SelectItem>
        <SelectItem value="UKR">Ucraina</SelectItem>
        <SelectItem value="UGA">Ugandese</SelectItem>
        <SelectItem value="HUN">Ungherese</SelectItem>
        <SelectItem value="URY">Uruguaiana</SelectItem>
        <SelectItem value="UZB">Uzbeka</SelectItem>
        <SelectItem value="VUT">Vanuatu</SelectItem>
        <SelectItem value="VAT">Vaticana</SelectItem>
        <SelectItem value="VEN">Venezuelana</SelectItem>
        <SelectItem value="VNM">Vietnamita</SelectItem>
        <SelectItem value="YEM">Yemenita</SelectItem>
        <SelectItem value="ZMB">Zambiana</SelectItem>
        <SelectItem value="ZWE">Zimbabwiana</SelectItem>
      </SelectContent>
    </Select>

  )
}

export default DropdownNationality