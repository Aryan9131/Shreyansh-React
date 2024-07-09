import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({setPostType}) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="type"
        onChange={(e) => setPostType(e.target.value)}
      >
        <FormControlLabel value="Post" control={<Radio />} label="Post" />
        <FormControlLabel value="Event" control={<Radio />} label="Event" />
      </RadioGroup>
    </FormControl>
  );
}
