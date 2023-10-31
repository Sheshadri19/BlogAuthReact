import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlogApi, getCatApi } from '../Service/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Grid, Skeleton, Stack, TextField } from '@mui/material';

const Search = () => {

  const { encodeVal } = useParams()
  console.log('en', encodeVal);

  const searchItem = decodeURIComponent(encodeVal);
  const [blog, setBlog] = useState([]);
  const [load,setLoad]=useState(true)
  const [cat, setCat] = useState([])
  
  const nav = useNavigate()

  const CategoryData = async () => {

    const res = await getCatApi()

    setCat(res.data.data)

    console.log(res.data);
  }

  // console.log(user);
  const dataPerRow = 3;
  const [loadMore, setloadMore] = useState(dataPerRow);
  const handleMore = () => {
    setloadMore(loadMore + dataPerRow);
  }

  // Search
  const imgUrl = "https://restapinodejs.onrender.com";

  const getBlog = async () => {
    const response = await getBlogApi()
    setBlog(response?.data?.data);
    setLoad(false)
  };

  useEffect(() => {
    getBlog();
    CategoryData();
  }, []);

  console.log("data", blog);
  const img = "https://restapinodejs.onrender.com"

  const result = blog.filter((blogs) => {
    const searchItemLower = searchItem.toLowerCase();
    const titleLower = blogs.title.toLowerCase();
    const categoryLower = blogs.category.toLowerCase();
    const text = blogs.postText.replace(/<[^>]*>/g, "");
    const textLower = text.toLowerCase();

    return (
      titleLower.includes(searchItemLower) ||
      categoryLower.includes(searchItemLower) ||
      textLower.includes(searchItemLower)
    );
  });

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8} ml={"10px"}>
            <center><h1 style={{ color: 'blue' }}>Blogs</h1></center>
            {
              load ? (
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  <Skeleton variant="rectangular" width={'100%'} height={400} />
                </Stack>
              ) : (
                
                  result?.map((item,idx) => {
                    return (
                      <>
          
                        <div key={idx}>
                          <h1>{item.title}</h1>
                          <hr />
                          <img src={`${img}/api/blog/image/${item._id}`} alt="" height={500} width={900} style={{ borderRadius: "7%" }} />
          
                          <hr />
                          <p dangerouslySetInnerHTML={{ __html: item?.postText.slice(0, 400) }}></p>
                        </div>
          
                        <Button variant="contained" onClick={() => nav(`/blogdetails/${item._id}`)}>Blog Details</Button>
          
          
                      </>
                    )
                  }))}
                  <br /><br />

            {
              loadMore < result.length && (<Button variant="contained" onClick={handleMore}>Load More</Button>
              )
            }
          </Grid>

          <Grid item xs={3} mt={"80px"}>

          <TextField
                name="search"
                type="text"
                placeholder="Search"
                value={searchItem}
                // onChange={(e) => setSearchItem(e.target.value)}
                margin="0"
                // onKeyPress={(e) => {
                //   if (e.key === "Enter") {
                //     handleSearch();
                //   }
                // }}
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

          
          </Grid>

        </Grid>
    
    </>
  )
}

export default Search