import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RecentData, getBlogApi, getCatApi } from '../Service/Api'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Button, Container, Grid, TextField } from '@mui/material';
import Layout from './Layout';
const Blog = () => {
  const img = "https://restapinodejs.onrender.com"

  const [user, setUser] = useState([])
  const [cat, setCat] = useState([])
  const [searchItem, setSearchItem] = useState("");
  const [recent, setRecent] = useState([])

  const [load, setLoad] = useState(true)
  const navigate = useNavigate()


  const GetApi = async () => {

    const res = await getBlogApi()

    setUser(res.data.data)
    setLoad(false)

    console.log(res.data);


  }

  const CategoryData = async () => {

    const res = await getCatApi()

    setCat(res.data.data)

    console.log(res.data);
  }

  const recentDetails = async () => {

    const res = await RecentData()
    setRecent(res?.data?.data)
    console.log(res.data.data);
  }


  useEffect(() => {
    GetApi();
    CategoryData();
    recentDetails()
  }, [])

  console.log(user);
  const dataPerRow = 3;
  const [loadMore, setloadMore] = useState(dataPerRow);
  const handleMore = () => {
    setloadMore(loadMore + dataPerRow);
  }

  // Search
  

  const handleSearch = () => {
    const encodeVal = encodeURIComponent(searchItem);
    navigate(`/search/${encodeVal}`);
    setSearchItem("");
  };

  return (
    <>
      <Layout title={"All Blog"}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8} ml={"10px"}>
            <center><h1 style={{ color: 'blue' }}>Blogs</h1></center>
            {
              load ? (
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="rectangular" width={1000} height={400} />
                </Stack>
              ) : (
                user?.slice(0, loadMore)?.map((blogs, idx) => {
                  return (
                    <>
                      <div key={idx}>
                        <h1>{blogs.title}</h1>
                        <hr />
                        <img src={`${img}/api/blog/image/${blogs._id}`} alt="" height={500} width={900} style={{ borderRadius: "7%" }} />

                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: blogs?.postText.slice(0, 400) }}></p>
                      </div>

                      <Button variant="contained" onClick={() => navigate(`/blogdetails/${blogs._id}`)}>Blog Details</Button>
                    </>
                  )
                }))}
            <br /><br />

            {
              loadMore < user.length && (<Button variant="contained" onClick={handleMore}>Load More</Button>
              )
            }
          </Grid>

          <Grid item xs={3} mt={"80px"}>

          <TextField
                name="search"
                type="text"
                placeholder="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                margin="0"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

            <center><h1 style={{ color: 'blue' }}>Category</h1><hr /></center>
            {
              !load ? (
                cat.map((item, idx) => {
                  return (
                    <>
                      <Link to={`/categorydetails/${item._id}`}><h4 >{item.category}</h4></Link>
                    </>
                  )
                })

              ) : (

                <>
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                </>
              )

            }

            <h1 style={{ color: 'blue' }} >Recnt post</h1><hr />


            {
              recent.map((item, idx) => {
                return (

                  <>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <span><img src={`${img}/api/blog/image/${item._id}`} alt="" srcset="" height={'70px'} width={'70px'} /></span>
                      </Grid>
                      <Grid item xs={8}>
                        <Link to={`/blogdetails/${item._id}`} style={{ textDecoration: "none" }}><h4>{item.title}</h4></Link>
                        <time dateTime='2020-01-01'>Date Time : {(new Date(item.createdAt)).toLocaleDateString()}</time>
                      </Grid>
                    </Grid>


                  </>
                )
              })

            }
          </Grid>

        </Grid>

      </Layout>
    </>
  )
}

export default Blog