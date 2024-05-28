import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';


export default function BatchesForm() {
    return (

        <
        FormContainer

        defaultValues = {
            { year: '' }
        }
        onSuccess = { data => props.postRequest('/Year', data) } >
        <
        CssBaseline / >
        <
        Grid container sx = {
            {
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
            }
        } <
        Box component = "form"
        sx = {
            {
                '& > :not(style)': { m: 1, width: '25ch' },
            }
        }
        noValidate autoComplete = "off" >
        <
        TextField id = "outlined-basic"
        label = "GradeName"
        variant = "outlined" / >
        <
        TextField id = "outlined-basic"
        label = "StartMonth"
        variant = "outlined" / >
        <
        TextField id = "outlined-basic"
        label = "EndMonth"
        variant = "outlined" / >
        <
        TextField id = "outlined-basic"
        label = "StartYear"
        variant = "outlined" / >
        <
        TextField id = "outlined-basic"
        label = "EndYear"
        variant = "outlined" / >
        <
        /Box>
    )
} <
/FormContainer>