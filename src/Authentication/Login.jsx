import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './ContextAuth'
import { useState } from 'react'
import { loginData } from '../Service/Api'
import { Button, FormControl, TextField, Grid  } from '@mui/material';


const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const nav=useNavigate()

  const[auth,setAuth]=useAuth()

  const handleSubmit=async(e)=>{
   e.preventDefault()
    const res=await loginData({
      email,
      password
    })

    if(res){
      toast.success(res.data.message)
      console.log("a",res.data);
      
       setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token
       })
       localStorage.setItem('auth',JSON.stringify(res.data))
       nav('/home')
      
    }
  
    else{

      toast.error("something went wrong")
      
    }
  }
  return (
    <>
     <Grid container spacing={1} width={'100%'}>
  <Grid item xs={5} >
    

   <h1 style={{marginLeft:"350px"}}>Login</h1>
    <div  className='container' style={{marginTop:"80px",marginLeft:"300px"}} >
    <form onSubmit={handleSubmit}>
    <div>

    <FormControl defaultValue="" required>
 
  <TextField placeholder="Write your email here" label='email' type='email' value={email} style={{marginBottom:"20px"}} onChange={(e)=>setEmail(e.target.value)}/>
 
  <TextField placeholder="Write your password here" label='password' type='password' value={password} style={{marginBottom:"20px"}} onChange={(e)=>setPassword(e.target.value)}/>

  
</FormControl>

<div style={{marginLeft:"70px"}}>
<Button  type="submit" variant='contained'>
  Login
</Button>

</div>

  </div>

    </form>

    </div>
    

   
  </Grid>



  <Grid item xs={4} mt={"100px"}>
    <img src="https://airproductionservice.com/wp-content/uploads/2021/05/Login.jpg" height={"450px"} width={"450px"} alt="register" />
  </Grid>

  </Grid>

    
    
    </>
  )
}

export default Login