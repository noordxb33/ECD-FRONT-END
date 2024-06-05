import Year from "./Year";
import YearTable from "./YearTable";
import { Grid } from "@mui/material";

export default function YearPage(props){


    return  (
     <Grid container>
        <Year get={props.getRequest} post={props.postRequest}/>
        <YearTable/>
     </Grid>
    );
}