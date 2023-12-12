import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

interface DropdownProps {
  options: string[];
  label: string;
  customStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  menuItemStyle?: React.CSSProperties;
  className?: string;
  onSelectedValueChange?: (selectedValue: string) => void;
}

const CustomDropdown = ({
  options,
  label,
  customStyle,
  selectStyle,
  menuItemStyle,
  className,
  onSelectedValueChange,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleValueChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onSelectedValueChange) {
      onSelectedValueChange(newValue);
    }
  };

  return (
    <FormControl sx={customStyle}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={selectedValue}
        onChange={handleValueChange}
        sx={selectStyle}
        className={className}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option} sx={menuItemStyle}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
