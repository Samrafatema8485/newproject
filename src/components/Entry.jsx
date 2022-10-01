import React from "react";
import { TextField, Button, Rating, Select, MenuItem } from "@mui/material";
export const Entry = ()=>{
    return(
        <div className="sub">
          <h1>Data Entry here</h1>
          <TextField label="Enter Name" variant="outlined" />
          <br />
          <br />
          <Button variant="contained" color="warning">Submit</Button> 
          <Select>
            <MenuItem>Ten</MenuItem>
            <MenuItem>Hundred</MenuItem>
            <MenuItem>Thousand</MenuItem>
          </Select>
          <br />
          <br />
          <Rating value="3"/>

        </div>
        
    );
};
 
 