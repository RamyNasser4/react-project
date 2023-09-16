import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function MultipleSelect(props) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setColorName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Colors</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={props.color}
          onChange={handleChange}
          input={<OutlinedInput value={props.color.toString()} style={{textAlign : "left"}} label="Name" />}
        >
          {props.colors.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
              style={{textAlign : "left"}}
            >
              {item.color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
