import React from 'react'
import { useState } from 'react'
import { contactApi } from '../Service/Api'
import { Container, FormControl, TextField ,Button,Paper} from '@mui/material'
import { toast } from 'react-toastify'
import Layout from './Layout'


const Contact = () => {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [phone, SetPhone] = useState('')
    const [message, SetMessage] = useState('')
   

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await contactApi({
            name,
            email,
            phone,
            message
        })
        if (res) {

            console.log("contact", res.data);
            toast.success(res.data.message)
            

        } else {
            toast.error("something went wrong")
        }


    }
    return (
        <>    

        <Layout title={'Contact us'}>
            <Container style={{width:'500px'}}>
                <center><h1>Contact Us</h1></center>
              
                <Paper elevation={20} style={{height:'500px'}}>
            <form onSubmit={handleSubmit} >

               <div style={{paddingLeft:'120px', paddingTop:'100px'}}>
                    <FormControl defaultValue="" required>

                        <TextField placeholder="Write your name here" label="name" type='text' value={name} style={{ marginBottom: "20px" }} onChange={(e) => SetName(e.target.value)} />

                        <TextField placeholder="Write your email here" label='email' type='email' value={email} style={{ marginBottom: "20px" }} onChange={(e) => SetEmail(e.target.value)} />

                        <TextField placeholder="Write your Phone number here" label='phone' type='number' value={phone} style={{ marginBottom: "20px" }} onChange={(e) => SetPhone(e.target.value)} />


                        <TextField placeholder="Write your message here" label='message' type='text' value={message} style={{ marginBottom: "20px" }} onChange={(e) => SetMessage(e.target.value)} />
                                   
                        <Button variant='contained' style={{marginBottom:'10px'}} type='submit' >
                                             message
                                            </Button>

                    </FormControl>
                    </div>
            </form>

            
            </Paper>
            </Container>

            </Layout>
        </>
    )
}

export default Contact