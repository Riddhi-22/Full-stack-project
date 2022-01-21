import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function TimePicker(props) {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        onChange={props.onChange}
        value = {props.time}
        id="time"
        label={props.label}
        type="time"
        defaultValue="00:00"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
    </Stack>
  );
}
