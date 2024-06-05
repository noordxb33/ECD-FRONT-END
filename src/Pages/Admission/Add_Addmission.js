import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export default function AddAdmission() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    father_occupation: "",
    mother_occupation: "",
    father_qualification: "",
    mother_qualification: "",
    class: "",
    grade: "",
    monthly_income: "",
    discount: "",
    age: "",
    childNumber: "",
    anyOtherIncome: "",
    admissionFee: "",
    studentStatus: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //   Use you API endpoints to store data in the database instead of console.log
    //   You Should send the formData object to API

    console.log("Form Data:", formData);
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: 5,
        width: "100%",
        borderRadius: 3,
        bgcolor: "var(--bg-color)",
        padding: 4,
        color: "var(--desc-color)",
      }}
    >
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom>
            Registration Form
          </Typography>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Please insert the Admission for the Gender Resource.
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Father Occupation</InputLabel>
                <Select
                  name="father_occupation"
                  onChange={handleChange}
                  value={formData.father_occupation}
                  label="Father Occupation"
                >
                  <MenuItem value="Teacher">Teacher</MenuItem>
                  <MenuItem value="Doctor">Doctor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Mother Occupation</InputLabel>
                <Select
                  name="mother_occupation"
                  onChange={handleChange}
                  value={formData.mother_occupation}
                  label="Mother Occupation"
                >
                  <MenuItem value="Teacher">Teacher</MenuItem>
                  <MenuItem value="House Wife">House Wife</MenuItem>
                  <MenuItem value="Doctor">Doctor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Father Qualification</InputLabel>
                <Select
                  name="father_qualification"
                  onChange={handleChange}
                  value={formData.father_qualification}
                  label="Father Qualification"
                >
                  <MenuItem value="Bachelor">Bachelor</MenuItem>
                  <MenuItem value="Master">Master</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Mother Qualification</InputLabel>
                <Select
                  name="mother_qualification"
                  onChange={handleChange}
                  value={formData.mother_qualification}
                  label="Mother Qualification"
                >
                  <MenuItem value="Bachelor">Bachelor</MenuItem>
                  <MenuItem value="Master">Master</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Grade</InputLabel>
                <Select
                  name="grade"
                  onChange={handleChange}
                  value={formData.grade}
                  label="Grade"
                >
                  <MenuItem value="A">Grade A</MenuItem>
                  <MenuItem value="B">Grade B</MenuItem>
                  <MenuItem value="C">Grade C</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Class</InputLabel>
                <Select
                  name="class"
                  onChange={handleChange}
                  value={formData.class}
                  label="Class"
                >
                  <MenuItem value="First Class">First Class</MenuItem>
                  <MenuItem value="Second Class">Second Class</MenuItem>
                  <MenuItem value="Third Class">Third Class</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Monthly Income"
                name="monthly_income"
                type="number"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Discount"
                name="discount"
                type="number"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                name="age"
                type="number"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Child Number in Family"
                name="childNumber"
                type="number"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Any Other Income"
                name="anyOtherIncome"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Admission Fee"
                name="admissionFee"
                type="number"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Student Status"
                name="studentStatus"
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  onChange={handleChange}
                  value={formData.gender}
                  label="Gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginTop: "20px",
            }}
          >
            <SendIcon /> Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
