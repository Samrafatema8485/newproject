import React from "react";
import { TextField,Button } from "@mui/material";

export const DataEntry=()=>{
    return(
        <div className="sub">
            <h1>Data Entry Form</h1>
             <TextField label="First Name"  variant="outlined" /> <br /><br />
             <TextField label="Middle Name"  variant="outlined"/><br /><br />
             <TextField label="last Name"  variant="outlined"/>
             <br />
             <br />
             <TextField label="Mobile Number" variant="outlined"/>
             <TextField label="Email ID" variant="outlined" />
             <TextField label="H NO." variant="outlined" />
             <br />
             <br />
             <TextField label="Area Name" variant="outlined" />
             <TextField label="Location" variant="outlined" />
             <br />
             <br />
             <TextField label="City Name" variant="outlined" />
             <TextField label="Pin Code" variant="outlined" />
             <br />
             <br />
             <Button variant="contained">Submit</Button>
             <Button variant="contained">Cancel</Button>

            
        </div>
    )
}