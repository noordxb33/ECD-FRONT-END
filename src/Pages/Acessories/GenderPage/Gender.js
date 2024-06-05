import { Typography, CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';



export default function Gender(props) {
    return (
        <FormContainer
            defaultValues={{ Gender: '' }}
             onSuccess={data => props.postRequest('/Gender', data)}
        >
            <CssBaseline />
            <Grid container
          
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
                        name="Gender" label="Please Enter Gender Name in here" required
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
        </FormContainer>
    )
}



