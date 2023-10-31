import React from 'react'
import { useState } from 'react'
import { teamApi } from '../Service/Api'
import { useEffect } from 'react'
import { CardActionArea, Container, Grid, Skeleton } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const About = () => {

  const [team, SetTeam] = useState([])
  const [load, setLoad] = useState(true)
  const teamimage = 'https://restapinodejs.onrender.com/api/team/photo'
  const teamData = async () => {
    const res = await teamApi()
    SetTeam(res?.data?.TeamMember)
    setLoad(false)
    console.log("o", res.data.TeamMember);
  }

  useEffect(() => {
    teamData()
  }, [])


  return (
    <>

      <Container >


        <center><h1>Our Team</h1></center>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            load ? (

              <>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                  <Grid item xs={6}>
                   
                    <Skeleton sx={{ height: 350, width: 350, mt: 7 }} animation="wave" variant="box" />

                    
                  </Grid>
                  <Grid item xs={6}>
                  
                    <Skeleton sx={{ height: 350, width: 350, mt: 7 }} animation="wave" variant="box" />

                
                  </Grid>

                </Grid>

              </>
            )


              : (
                team.map((item, idx) => {
                  return (

                    <>
                      <Grid item xs={6} >
                    
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="300"
                              width='150'
                              image={`${teamimage}/${item._id}`}
                              alt="teams"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                                {item.name}

                              </Typography>
                              <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                                {item.possession}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>



                      </Grid>

                    </>
                  )
                })
              )
          }

        </Grid>


      </Container>
    </>
  )
}

export default About