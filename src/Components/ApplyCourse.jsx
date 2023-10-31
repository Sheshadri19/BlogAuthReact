import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { courseApplyApi } from '../Service/Api'
import { toast } from 'react-toastify'
import { Container, FormControl, TextField ,Button,Paper} from '@mui/material'

const ApplyCourse = () => {
  const {_id}=useParams()
 
  console.log('id', _id);

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [city,setCity]=useState('')
  const [address,setAddress]=useState('')
  const [qualification,setQualification]=useState('')
  const [programing_knowledge,setPrograming_knowledge]=useState('')
  const [experiance,setExperiance]=useState('')

const nav=useNavigate()

const handleApply=async(e)=>{
  e.preventDefault()

  const respon=await courseApplyApi(_id,{
    name,
    email,
    phone,
    city,
    address,
    qualification,
    programing_knowledge,
    experiance
  })

  if(respon){
    console.log("p",respon.data);
    toast.success(respon.data.message)
    nav('/course')
  }
  else{
    toast.error("something went wrong")
  }

}


    
  return (
    <>

    <Container>
   
    
    <Paper elevation={10} style={{height:'750px'}}>
    <center><h1>Apply Course</h1></center>
    <form onSubmit={handleApply} >

<div style={{paddingLeft:'460px', paddingTop:'10px'}}>
     <FormControl defaultValue="" required>

         <TextField placeholder="Write your name here" label="name" type='text' value={name} style={{ marginBottom: "20px" }} onChange={(e) => setName(e.target.value)} />

         <TextField placeholder="Write your email here" label='email' type='email' value={email} style={{ marginBottom: "20px" }} onChange={(e) => setEmail(e.target.value)} />

         <TextField placeholder="Write your Phone number here" label='phone' type='number' value={phone} style={{ marginBottom: "20px" }} onChange={(e) => setPhone(e.target.value)} />

         <TextField placeholder="Write your city here" label='city' type='text' value={city} style={{ marginBottom: "20px" }} onChange={(e) => setCity(e.target.value)} />

         <TextField placeholder="Write your address here" label='address' type='text' value={address} style={{ marginBottom: "20px" }} onChange={(e) => setAddress(e.target.value)} />
         
         <TextField placeholder="Write your qualification here" label='qualification' type='text' value={qualification} style={{ marginBottom: "20px" }} onChange={(e) => setQualification(e.target.value)} />
         
         <TextField placeholder="Write your programming knowledge here" label='Programming knowledge' type='text' value={programing_knowledge} style={{ marginBottom: "20px" }} onChange={(e) => setPrograming_knowledge(e.target.value)} />
         
         <TextField placeholder="Write your Experience here" label='Experience' type='text' value={experiance} style={{ marginBottom: "20px" }} onChange={(e) => setExperiance(e.target.value)} />


                    
         <Button variant='contained' style={{marginBottom:'10px'}} type='submit' >
                             Apply 
                             </Button>

     </FormControl>
     </div>
</form>

    


    </Paper>
    </Container>
    
    </>
  )
}

export default ApplyCourse