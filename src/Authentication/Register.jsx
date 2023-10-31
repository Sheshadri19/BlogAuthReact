import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, FormControl, TextField, Grid, colors  } from '@mui/material';
import { RegisterData } from '../Service/Api';
const Register = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [mobile,setMobile]=useState('')
const [password,setPassword]=useState('')

const [load,setload]=useState(false)
  
const nav=useNavigate()

const handleSubmit=async(e)=>{
  e.preventDefault()
setload(true)
    const res=await RegisterData({

    name,
    email,
    mobile,
    password
    });
if(res){
  nav('/login')
  console.log("reg",res.data);
  toast.success(res.data.message)
  setload(false)
}else{
  toast.error("something went wrong")
}


}


  return (
    <>
    <Grid container spacing={2}>
  <Grid item xs={6} >
    

   <h1 style={{marginLeft:"240px"}}>Register</h1>
    <div  className='container' style={{marginTop:"80px",marginLeft:"200px"}} >
    <form onSubmit={handleSubmit}>
    <div>

    <FormControl defaultValue="" required>

  <TextField placeholder="Write your name here" label="name" type='text' value={name} style={{marginBottom:"20px"}} onChange={(e)=>setName(e.target.value)}/>
   
  <TextField placeholder="Write your email here" label='email' type='email' value={email} style={{marginBottom:"20px"}} onChange={(e)=>setEmail(e.target.value)}/>
 
  <TextField placeholder="Write your Mobile number here" label='phone' type='number' value={mobile} style={{marginBottom:"20px"}} onChange={(e)=>setMobile(e.target.value)}/>

  <TextField placeholder="Write your password here" label='password' type='password' value={password} style={{marginBottom:"20px"}} onChange={(e)=>setPassword(e.target.value)}/>

  
</FormControl>

<div style={{marginLeft:"70px"}}>
<Box sx={{ display: 'flex' }}>
      
      <Button  type="submit" variant='outlined'>
       {
        load ? 
        <CircularProgress/> : "Register"
       }
</Button>
    </Box>


</div>

  </div>

    </form>

    </div>
    

   
  </Grid>



  <Grid item xs={2} mt={"100px"}>
    <img src="https://t4.ftcdn.net/jpg/02/62/46/47/360_F_262464703_mlUp5osTFwJzVNJLStSslo6kxHB7Kicw.jpg" alt="register" />
  </Grid>

  </Grid>

    
    
    </>
  )
}

export default Register