import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BatchesForm() {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="GradeName" variant="outlined" />
    <TextField id="outlined-basic" label="StartMonth" variant="outlined" />
    <TextField id="outlined-basic" label="EndMonth" variant="outlined" />
    <TextField id="outlined-basic" label="StartYear" variant="outlined" />
    <TextField id="outlined-basic" label="EndYear" variant="outlined" />
  </Box>
  )
}
