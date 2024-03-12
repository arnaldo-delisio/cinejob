import React from 'react';
import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { StylesConfig } from 'react-select';
import { ControlProps } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface DropdownTattoosProps {
  onChange: (newValue: MultiValue<OptionType>) => void;
  value: MultiValue<OptionType>;
}

export const tattoos: OptionType[] = [
  { value: 'Nessuno', label: 'Nessuno' },
  { value: 'Viso', label: 'Viso' },
  { value: 'Collo', label: 'Collo' },
  { value: 'Busto', label: 'Busto' },
  { value: 'Braccia', label: 'Braccia' },
  { value: 'Gambe', label: 'Gambe' },
];

const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided: ControlProps<OptionType, true>) => ({
    ...provided,
    backgroundColor: '#F6F6F6', // bg-grey-50
    height: '54px',
    placeholder: { color: '#545454' }, // text-grey-500
    borderRadius: '9999px', // rounded-full
    padding: '16px', // p-regular-16
    paddingLeft: '10px', // px-5
    paddingRight: '5px', // px-5
    paddingTop: '3px', // py-3
    paddingBottom: '3px', // py-3
    border: 'none',
    boxShadow: 'none', // focus-visible:ring-transparent focus:ring-transparent
    '&:hover': { border: 'none' },
    '&:focus': { boxShadow: 'none' },
  }),

  valueContainer: (provided: ControlProps<OptionType, true>) => ({
    ...provided,
    flexWrap: 'wrap', // Allow the tags to wrap
    overflowX: 'auto', // Enable horizontal scrolling
    overflowY: 'hidden', // Prevent vertical scrolling
    maxHeight: '30px',
  }),

  placeholder: (defaultStyles: ControlProps<OptionType, true>) => ({
    ...defaultStyles,
    color: '#000000', // Set your desired placeholder color here
  }),
  // You might need to define other parts like menu, option, etc., similarly.
};

const DropdownTattoos: React.FC<DropdownTattoosProps> = ({ onChange, value }) => {
  return (
    <Select
      isMulti
      options={tattoos}
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

export default DropdownTattoos;
