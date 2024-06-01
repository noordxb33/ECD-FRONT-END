import { Typography, CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';


export default function YearPage(props){


    return (
        <Grid container>
            <Year getRequest={props.getRequest} postRequest={props.postRequest}/>

            <YearTable/>
        </Grid>
    
    )
}


function Year(props) {


    return (
        <FormContainer
            defaultValues={{ year: '' }}
             onSuccess={data => props.postRequest('/Year', data)}
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
                            margin: 5,
                            width: '80%',
                            border: '1px solid var(--desc-color)',
                            borderRadius: '5px',
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
        </FormContainer>
    )
}



function YearTable() {
    return (
      <MaterialTable
        title="Multiple Detail Panels Preview"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}
        detailPanel={[
          {
            tooltip: 'Show Name',
            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 100,
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '#43A047',
                  }}
                >
                  {rowData.name}
                </div>
              )
            },
          },
          {
            icon: 'account_circle',
            tooltip: 'Show Surname',
            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 100,
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '#E53935',
                  }}
                >
                  {rowData.surname}
                </div>
              )
            },
          },
          {
            icon: 'favorite_border',
            openIcon: 'favorite',
            tooltip: 'Show Both',
            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 100,
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '#FDD835',
                  }}
                >
                  {rowData.name} {rowData.surname}
                </div>
              )
            },
          },
        ]}
      />
    )
  }