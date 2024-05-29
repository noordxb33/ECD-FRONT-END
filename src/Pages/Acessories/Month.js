import { Typography, CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement,AutocompleteElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect,useState } from 'react';
export default function Month(props) {
        const [years,setYears]=useState([]);



    useEffect(()=>{
        props.getRequest('/Year',setYears)
    },[])
    
    return (
        <FormContainer
            defaultValues={{ month:'',year_id:''}}
            onSuccess={data => {
                props.postRequest('/Month', {month:data.month,year_id:data.year_id.id})
                data.month='';
                data.year_id='';
            }
            }>
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
                            margin: 5,
                            width: '80%',
                            border: '1px solid var(--desc-color)',
                            borderRadius: '5px',
                            label: { color: 'var(--desc-color)' },
                        }}
                        name="month" label="Please Enter the Month Name in here" required
                         />
                </Grid>
                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                <AutocompleteElement sx={{marginTop:'20%'}}
                        name="year_id"
                        options={years}
                        />
                   
                </Grid>
                <Grid item xs ls g sm md>
                <Stack direction="row" spacing={2}>
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
        </FormContainer>
    )
}
