import { Button, Container, Grid, Paper, Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { useParams } from 'react-router-dom'
import { BannerAll, serviceApi, testimonialApi } from '../Service/Api'
import Layout from './Layout'

// iamege='https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg'
const Home = () => {

  // const { _id } = useParams()
  const [image, setImage] = useState([])
  const [serv, SetServe] = useState([])
  const [testi, SetTesti] = useState([])
  const [load, setLoad] = useState(true)
  const imgurl = `https://restapinodejs.onrender.com/api/banner/photo`
  const imagetesti = `https://restapinodejs.onrender.com/api/testimonials/photo`
  const getImageBanner = async () => {
    const res = await BannerAll()

    setImage(res.data.bannerdata)
    setLoad(false)
    console.log('i', res.data.bannerdata);
  }

  const getServiceData = async () => {
    const response = await serviceApi()
    SetServe(response?.data?.data)
    console.log("z", response?.data?.data);
    setLoad(false)
  }


  const testimonialData = async () => {
    const respo = await testimonialApi()
    SetTesti(respo?.data?.testimonials)
    console.log("j", respo?.data?.testimonials);
  }
  // axios.get(`https://restapinodejs.onrender.com/api/banner`)
  useEffect(() => {
    getImageBanner()
    getServiceData()
    testimonialData()
  }, [])
  return (
    <>

<Layout title={"Home"}>

      <Container width={'100%'} >
        {load ? (

          <Skeleton animation="wave" variant="rectangular" height={'670px'} width={'100%'} />

        ) : (
          <Carousel >
            {
              image?.map((item, i) =>
                <>

                  <Paper elevation={20} sx={{ padding: '10px' }} >

                    <img key={i} src={`${imgurl}/${item._id}`} height={670} width={'100%'} alt='' />

                    <div style={{ position: "absolute", top: '50%', left: "20%", right: '20%' }}>
                      <center><h1>{item.title}</h1></center>
                      <p style={{ fontSize: '20px', width:"100%"  }} >{item.description}</p>


                      <Button variant='contained' style={{ left: '260px', bottom: '5px' }}>Read More</Button>



                    </div>

                  </Paper>
                </>
              )}
          </Carousel>
        )
        }
      </Container >
      <center><h1>Services</h1></center><br /><br />
      <div style={{ textAlign: 'center' }}>

        <Container >
          {

            load ? (
              <>
                <Skeleton variant="text" sx={{ fontSize: '3rem' }} animation='wave' />

              </>

            ) : (

              <>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 12, sm: 12, md: 6 }} >

                  {
                    serv.map((ele, idx) => {

                      return (

                        <>

                          <Grid item xs={4} >
                            <Paper elevation={20} sx={{ padding: '10px' }}>
                              <img src="https://blog.calanceus.com/hs-fs/hubfs/shutterstock_1926286916-(1)-(1)-%5BConverted%5D.png?width=2884&name=shutterstock_1926286916-(1)-(1)-%5BConverted%5D.png" height={"150px"} width={"150px"} alt="service" />



                              <h3 style={{ textAlign: 'center' }} >{ele.name}</h3>
                              <p style={{ textAlign: 'center' }}>{ele.details.slice(0, 80)}</p>
                            </Paper>
                          </Grid>


                        </>
                      )
                    })

                  }
                </Grid>


              </>
            )

          }
        </Container>



      </div>


      <div >

        <center ><h1>Testinmonial</h1></center><br /><br />


        <Container>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
              testi.map((item, idx) => {

                return (
                  <>

                    <Grid item xs={6} >
                      <Paper elevation={20} sx={{ padding: '10px' }}>
                        <div style={{ textAlign: 'center' }}>

                          <img key={idx} src={`${imagetesti}/${item._id}`} height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} alt="" />
                          <h3 >{item.name}</h3>
                          <h5>{item.position}</h5>
                          <p>{item.talk.slice(0, 220)}</p>
                        </div>
                      </Paper>
                    </Grid>

                  </>
                )
              })

            }
          </Grid>

        </Container>
      </div>

</Layout>
    </>
  )
}

export default Home