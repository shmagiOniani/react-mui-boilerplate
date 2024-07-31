import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostSort({ options, onSort }:any) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {options.map((option:any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
