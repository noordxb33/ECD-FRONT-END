import { Typography, CssBaseline, Divider, Grid, Stack, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement, SelectElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Fee(props) {

    const [student, setStudent] = useState([]);
    const [year, setYear] = useState([]);
    const [month, setMonth] = useState([]);
    const [amount, setAmount] = useState();

    useEffect(() => {
        props.getRequest('/Year', setYear)
        props.getRequest('/Month', setMonth)
        props.getRequest('/Student', setStudent)
    }, [])

    return (
        <FormContainer
            defaultValues={{ student_id: '', month_id: '', year_id: '', amount_value: '' }}
            onSuccess={data => {
                props.postRequest('/Fee', {
                    month_id: data.month_id.id,
                    year: data.year.id,
                    student_id: data.student_id.id, 
                    amount: data.amount_value
                })
                data.month_id = '';
                data.year = '';
                data.student_id = '';
                data.amount = '';
            }
            }>
            <CssBaseline />
            <Grid container
                sx={{
                    boxShadow: 5,
                    width: '80%',
                    height: '100%',
                    margin: '2% 10%',
                    borderRadius: 3,
                    background: 'var(--bg-color)',
                    color: 'var(--color)',
                    padding: 4,
                }}
                spacing={4}
            >
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <Typography style={{ color: 'var(--desc-color)', widht: '100%', textAlign: 'center' }} variant="h5" noWrap>
                        Fee Form
                    </Typography>
                </Grid>
                <Grid item lg={6} xl={6} xs={12} sm={12} md={12}>
                    <SelectElement
                        name="student_id"
                        label="Select Student"
                        value={student}
                        options={student}
                        sx={{
                            borderRadius: '5px',
                            '& .MuiInputLabel-root': {
                                color: 'var(--desc-color)',
                                '&.Mui-focused': {
                                    color: 'var(--color)',
                                },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '1px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'var(--color)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '2px',
                                },
                            },
                        }}
                        required
                        fullWidth
                    />
                </Grid>

                <Grid item lg={6} xl={6} xs={12} sm={12} md={12}>
                    <SelectElement
                        name="month_id"
                        label="Select Month"
                        value={month}
                        options={month}
                        sx={{
                            borderRadius: '5px',
                            '& .MuiInputLabel-root': {
                                color: 'var(--desc-color)',
                                '&.Mui-focused': {
                                    color: 'var(--color)',
                                },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '1px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'var(--color)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '2px',
                                },
                            },
                        }}
                        required
                        fullWidth
                    />
                </Grid>

                <Grid item lg={6} xl={6} xs={12} sm={12} md={12}>
                    <SelectElement
                        name="year_id"
                        label="Select Year"
                        value={year}
                        options={year}
                        sx={{
                            borderRadius: '5px',
                            '& .MuiInputLabel-root': {
                                color: 'var(--desc-color)',
                                '&.Mui-focused': {
                                    color: 'var(--color)',
                                },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '1px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'var(--color)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '2px',
                                },
                            },
                        }}
                        required
                        fullWidth
                    />
                </Grid>

                <Grid item lg={6} xl={6} xs={12} sm={12} md={12}>
                    <TextFieldElement
                        name="amount_value"
                        label="Enter the Amount"
                        type='number'
                        value={amount}
                        sx={{
                            borderRadius: '5px',
                            '& .MuiInputLabel-root': {
                                color: 'var(--desc-color)',
                                '&.Mui-focused': {
                                    color: 'var(--color)',
                                },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '1px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'var(--color)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'var(--color)',
                                    borderWidth: '2px',
                                },
                            },
                        }}
                        required
                        fullWidth
                    />
                </Grid>

                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <Stack 
                    direction="row" 
                    spacing={2}
                    sx={{ 
                        width: '30%', 
                        margin: '0 35%'
                     }} 
                    >
                        <Button 
                        type="submit"
                        variant="outlined" 
                        sx={{ fontSize: '16px' }} 
                        color="success">
                            <AddCircleOutlineIcon sx={{ marginRight: '2%' }} />
                            Add
                        </Button>
                        <Button variant="outlined" color="error">
                            <CancelIcon sx={{ marginRight: '2%' }} />
                            Clear
                        </Button>
                    </Stack>
                </Grid>
            </Grid>

        </FormContainer >
    )
}