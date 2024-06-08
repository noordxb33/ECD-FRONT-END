// import Year from "./Year";
// import YearTable from "./YearTable";
// import { Grid } from "@mui/material";

// export default function YearPage(props){


    return  (
     <Grid container>
        <Grid
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
        
        item xl={12} lg={12} md={12} sm={12} xs={12} >
        <Year get={props.getRequest} post={props.postRequest}/>

        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <YearTable/>

        </Grid>
     </Grid>
    );
}