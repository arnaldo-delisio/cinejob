import React from 'react';
import Select, { CSSObjectWithLabel, GroupBase, MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { StylesConfig } from 'react-select';
import { ControlProps } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface DropdownLanguagesProps {
  onChange: (newValue: MultiValue<OptionType>) => void;
  value: MultiValue<OptionType>;
}

export const skills: OptionType[] = [
  { value: 'Italiano', label: 'Italiano' },
  { value: 'Inglese', label: 'Inglese' },
  { value: 'Francese', label: 'Francese' },
  { value: 'Spagnolo', label: 'Spagnolo' },
  { value: 'Portoghese', label: 'Portoghese' },
  { value: 'Tedesco', label: 'Tedesco' },
  { value: 'Arabo', label: 'Arabo' },
  { value: 'Russo', label: 'Russo' },
  { value: 'Mandarino', label: 'Mandarino' },
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
}

const DropdownLanguages: React.FC<DropdownLanguagesProps> = ({ onChange, value }) => {
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

export default DropdownLanguages;
