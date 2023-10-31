import React from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Button, FormControl, TextField, Grid  } from '@mui/material';
import { CreateCommentApi } from '../Service/Api';
import { toast } from 'react-toastify';
import Layout from './Layout';


const Comment = () => {

    const {_id}=useParams()
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    
    const[comment,setComment]=useState('')

    const[load,setLoad]=useState(false)
    const nav=useNavigate()

    const handleSubmit=async(e)=>{
    
        e.preventDefault()

        const res=await CreateCommentApi(_id,{
            name,
            email,
            comment
        })
      
        if(res){
            toast.success(res.data && res.data.message)
            console.log(res.data.comment);
            nav(`/blogdetails/${_id}`)
        }
        else{
            toast.error("something went wrong")
        }
    }

  

  return (
   <>
   <Layout title={"Write Comment"}>
   
    <Grid container spacing={2}>
  <Grid item xs={6} >
    

   <h1 style={{marginLeft:"240px"}}>Comment</h1>
    <div  className='container' style={{marginTop:"80px",marginLeft:"200px"}} >
    <form onSubmit={handleSubmit}>
    <div>

    <FormControl defaultValue="" required>

  <TextField placeholder="Write your name here" label="name" type='text' value={name} style={{marginBottom:"20px"}} onChange={(e)=>setName(e.target.value)}/>
   
  <TextField placeholder="Write your email here" label='email' type='email' value={email} style={{marginBottom:"20px"}} onChange={(e)=>setEmail(e.target.value)}/>
 
 
  <TextField placeholder="Write your comment here" label='Comment' type='text' value={comment} style={{marginBottom:"20px"}} onChange={(e)=>setComment(e.target.value)}/>

  
</FormControl>

<div style={{marginLeft:"70px"}}>
<Box sx={{ display: 'flex' }}>
      
      <Button  type="submit" variant='outlined'>
       {
        load ? 
        <CircularProgress/> : "Comment"
       }
</Button>
    </Box>


</div>

  </div>

    </form>

    </div>
    

   
  </Grid>



  <Grid item xs={2} mt={"80px"}>
    <img src="https://www.poynter.org/wp-content/uploads/2023/02/shutterstock_1503263540.png" height={500} width={700} style={{borderRadius:"7%"}} alt="comment" />
  </Grid>

  </Grid>

  </Layout>
   </>
)


}

export default Comment