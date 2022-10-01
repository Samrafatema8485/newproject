import { Button } from '@mui/material';
import React,{useState} from 'react';

const Bulb = () => {
    const[data,setData]=useState("")
    return (
        <div className='sub'>
            <div className={data?"bulbon":"bulboff"} >
                <Button variant='contained'  className='btn' onClick={e=>setData(!data)}  >{data?"on":"off"}</Button>
            </div>
        </div>
    );
};

export default Bulb;