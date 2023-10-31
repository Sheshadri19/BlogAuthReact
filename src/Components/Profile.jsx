import React from 'react'
import { useAuth } from '../Authentication/ContextAuth'
import { Grid, Paper } from '@mui/material'


const Profile = () => {
    const [auth]=useAuth()
  return (
    <>

<Grid container spacing={1}>


  <Grid item xs={7}>
  <h1 style={{marginLeft:"250px"}}>User Data</h1>

<img src="https://blog.atinternet.com/wp-content/uploads/2020/12/data-model-user-centric.png" height={'500px'}width={"700px"} alt="data" />

  </Grid>




  <Grid item xs={4} mt={"100px"}>
{/*    
  <pre>
{JSON.stringify(auth,null,4) }
</pre> */}


<table border={"10px"} >
   <center> <tr>
        <td>Name</td>
        <td>email</td> 
        <td>Mobile</td>
    </tr>


    <tr>
        <td>{auth?.user?.name} </td>
        <td>   {auth?.user?.email} </td>
        <td> {auth?.user?.mobile} </td>

    </tr>
    </center>


</table >


  </Grid>

   
  </Grid>
      
     
    </>
  )
}

export default Profile