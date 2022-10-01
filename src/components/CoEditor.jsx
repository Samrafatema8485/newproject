import { Grid, TextField } from '@mui/material';
import React from 'react';

const CoEditor = () => {
    return (
        <div>
            <Grid container>
                <Grid item  xs={6} > 
                <Grid container>
                    <Grid item xs={4}> <TextField  variant='outlined' /> </Grid>
                    <Grid item xs={4}> <TextField  variant='outlined' /> </Grid>
                    <Grid item xs={4}> <TextField  variant='outlined' /> </Grid>
                </Grid>
                
                i</Grid>
                <Grid item  xs={6} > hi</Grid>
                
            </Grid>
        </div>
    );
};

export default CoEditor;