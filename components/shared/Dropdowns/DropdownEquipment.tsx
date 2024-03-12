import React, { CSSProperties } from 'react';
import Select, { CSSObjectWithLabel, MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { StylesConfig, GroupBase, ControlProps } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface DropdownEquipmentProps {
  onChange: (newValue: MultiValue<OptionType>) => void;
  value: MultiValue<OptionType>;
}

export const skills: OptionType[] = [
  { value: 'Bicicletta', label: 'Bicicletta' },
  { value: 'Monopattino', label: 'Monopattino' },
  { value: 'Skate', label: 'Skate' },
  { value: 'Pattini', label: 'Pattini' },
  { value: 'Chitarra', label: 'Chitarra' },
  { value: 'Violino', label: 'Violino' },
  { value: 'Violoncello', label: 'Violoncello' },
  { value: 'Tromba', label: 'Tromba' },
  { value: 'Sax', label: 'Sax' },
];

const animatedComponents = makeAnimated();


const customStyles: StylesConfig<OptionType, true> = {
  control: (base: CSSObjectWithLabel, props: ControlProps<OptionType, true, GroupBase<OptionType>>) => ({
    ...base,
    backgroundColor: '#F6F6F6',
    height: '54px',
    borderRadius: '9999px',
    padding: '16px',
    paddingLeft: '10px',
    paddingRight: '5px',
    paddingTop: '3px',
    paddingBottom: '3px',
    border: 'none',
    boxShadow: 'none',
    ':hover': { border: 'none' },
    ':focus': { boxShadow: 'none' },
  }),

  valueContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    flexWrap: 'wrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    maxHeight: '30px',
  }),

  // Correctly typing other style overrides as needed.
};


const DropdownEquipment: React.FC<DropdownEquipmentProps> = ({ onChange, value }) => {
  return (
    <Select
      isMulti
      options={skills}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder ="Seleziona"
      onChange={onChange}
      value={value}
      components={animatedComponents}
      closeMenuOnSelect={false}
      styles={customStyles}
    />
  );
};

export default DropdownEquipment;
