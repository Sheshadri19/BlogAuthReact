import React, { useState } from 'react'
import { courseApi, teamApi } from '../Service/Api'
import { useEffect } from 'react'
import { Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid,Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from './Layout';


const Course = () => {
    const {_id}=useParams()
    const [course, SetCourse] = useState([])
    const [load,setLoad]=useState(true)
    const navi=useNavigate()
    const courseImage = 'https://restapinodejs.onrender.com/api/course/photo'

    const courseData = async () => {
        const res = await courseApi()
        SetCourse(res?.data?.Courses)
        console.log("y", res.data.Courses);
        setLoad(false)
    }

    useEffect(() => {
        courseData()
    }, [])

    return (
        <>

        <Layout title={'Courses'}>

        {
         
            <Container style={{marginTop:'40px'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {      
                        course.map((item,idx) => {

                            return (

                                <>

                                    <Grid item xs={3} key={idx}>
                                        <Card sx={{ maxWidth: 345 }}>
                                        <CardContent >
                                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'} color={'green'}>
                                                      <h3>{item.name}</h3> 
                                                    </Typography>

                                        </CardContent>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="220"
                                                    width='150'
                                                    image={`${courseImage}/${item._id}`}
                                                    alt="courses"
                                                />
                                                <CardContent >
                                                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'} color={'green'} >
                                                        <h2>{item.fees}/-</h2>
                                                    </Typography>
                                                    <Typography variant="body2"  textAlign={'center'} color={'green'} >

                                                      <p>{item.requirement}</p>
                                                      <h2>{item.duration}</h2>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>

                                         <center><Button variant='contained' style={{marginBottom:'10px'}} onClick={()=>navi(`/applycourse/${item._id}`)} >
                                             Apply 
                                            </Button>
                                            </center> 
                                        </Card>
                                    </Grid>

                                </>


                            )

                        })
                
                        
                    }


                </Grid>
            </Container>

             
             
             }

</Layout>
        </>
    )
}

export default Course