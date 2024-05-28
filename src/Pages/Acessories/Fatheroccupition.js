import TextField from "@mui/material/TextField";
 function Fatheroccupition() {
  return (
    <Paper>
    <h2>Fatheroccupition</h2>

    <TextField
        helperText={ null}
        size="small"
        
        onChange={onChange}
        value={value}
        fullWidth
        label={Name}
        variant="outlined"
        />

    <Button onClick={handleSubmit}>Submit</Button>
    <Button onClick={handleReset}>Reset</Button>
  </Paper>
);
};
export  default Fatheroccupition;