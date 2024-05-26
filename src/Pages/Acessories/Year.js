import { Typography, CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { Toaster } from 'react-hot-toast';

export default function Year(props) {


    return (
        <FormContainer
            defaultValues={{ year: '' }}
            onSuccess={data => props.postRequest('/Year',data)}
        >
            <CssBaseline />
            <Grid container
                sx={{
                    boxShadow: 5,
                    width: '100%',
                    height: '40vh',
                    borderRadius: 3,
                    background: 'var(--bg-color)',
                    padding: 4,
                    color: 'var(--color)'
                    // '&:hover': {
                    //   bgcolor: 'primary.dark',
                    // },
                }}
            >


                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                    <Typography style={{ color: 'var(--desc-color)', widht: '100%' }} variant="h5" noWrap>
                        Please insert the records for the Gender Resource.
                    </Typography>
                    <TextFieldElement
                        sx={{
                            margin:5,
                            width:'80%',
                            border: '1px solid var(--desc-color)',
                            borderRadius:'5px',
                            input: {
                                color:'var(--desc-color)',
                                "&::placeholder": {  
                                    color:'var(--desc-color)',  // <----- Add this.
                                    opacity: 1,
                                },
                            '&:active':{
                                color: 'var(--desc-color)',
                            },
                            },
                            label: { color: 'var(--desc-color)' },
                        }}
                        name="year" label="Please Enter Year Name in here" required 
                        />
                </Grid>

                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>


                    <Stack sx={{ marginTop: '8%' }} direction="row" spacing={2}>
                        <Button type="submit" variant="outlined" sx={{ fontSize: '22px' }} color="success">
                            <AddCircleOutlineIcon sx={{ marginRight: '2%' }} />
                            Add
                        </Button>
                        <Button variant="outlined" color="error">
                            <CancelIcon sx={{ marginRight: '2%' }} />
                            Error
                        </Button>
                    </Stack>
                </Grid>






            </Grid> 
            <Toaster/>

        </FormContainer>
    )
}
