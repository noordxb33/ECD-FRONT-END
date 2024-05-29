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

<<<<<<< Updated upstream
    <Button onClick={handleSubmit}>Submit</Button>
    <Button onClick={handleReset}>Reset</Button>
  </Paper>
);
};
export  default Fatheroccupition;
=======
 
 
const Fatheroccupition = () => {
    const [Name, setName] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(Name) 
    }
 
    return (
        <React.Fragment>
            <h2>Fatheroccupition</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label=" Name"
                        onChange={e => setName(e.target.value)}
                        value={Name}
                        fullWidth
                        required
                    />
                    </Stack>
    <Button variant="outlined" color="secondary" type="submit">Slect</Button>
    </form>
       

</React.Fragment>
    )
}
export default Fatheroccupition;
 
>>>>>>> Stashed changes
