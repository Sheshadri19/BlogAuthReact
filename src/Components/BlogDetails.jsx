import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetCommentApi, blogDetailsApi, getBlogApi, likeApi } from '../Service/Api'
import { BarLoader } from 'react-spinners'
import { Button, Container, Grid, Skeleton, Typography } from '@mui/material'
import Layout from './Layout'
import { toast } from 'react-toastify'
import ThumbUp from '@mui/icons-material/ThumbUp';
const BlogDetails = () => {

  const img = "https://restapinodejs.onrender.com"
  const {_id}=useParams()
const [user,setUser]=useState({})
const [comment,setComment]=useState([])
const [load,setLoad]=useState(true)

const [like,setLike]=useState(true)

const [islike,setIslike]=useState(localStorage.getItem(`${_id}`)==='true')


const nav=useNavigate()


const getBlogDetails=async()=>{

  const res=await blogDetailsApi(_id)

  setUser(res.data.data)
 
  console.log("f",res.data.data);

  setLoad(false)
}

const commentData=async()=>{

  const response= await GetCommentApi (_id)

  setComment(response?.data?.post?.comment?.comments)
  console.log("z",response.data.post.comment.comments);
}

useEffect(()=>{

  getBlogDetails()
  commentData()
},[])

const handleLikes = async () => {
  try {
    if(!islike){
      const res=await likeApi(_id)
      setLike(res?.data?.likes)
      console.log('l',res.data.likes);
      localStorage.setItem(`${_id}`, 'true')
      getBlogDetails()
      setIslike(true)
    }
    else{
      toast.error('Already liked')
    }
  }
  catch(error){
    console.log("something went wrong ");
  }

}
  return (
  <>
<Layout title={"Blog Details"}>
<Container>
<h1>Blog Details</h1><hr /><hr />
{    
   !load === false? (
         <BarLoader style={{marginTop:"20px"}}/>
   ):(   
    <div className="container" >

      <h1>{user.title}</h1>
      <img src={`${img}/api/blog/image/${user._id}`}  alt="image" height={600} width={1000} style={{ borderRadius: "7%" }}/>
      <h4>ID :{user._id}</h4>
      <p><b>Post:</b>
        <p dangerouslySetInnerHTML={{__html:user?.postText}}></p></p> <br />  

      <time dateTime='2020-01-01'>Date Time : {(new Date(user.createdAt)).toLocaleDateString()}        </time>
         
      
      
      <button onClick={() => handleLikes()} disabled={islike}> <ThumbUp/>  &nbsp; ({user?.likes})</button>
      
        </div>
   )
   }
</Container>
     
     <hr /><hr />

     <Container>
           <h1>Comments</h1>
           <CommentIcon /> ({comment.length} ) <Button onClick={()=>nav(`/comment/${user._id}`)}   type="submit" variant='outlined' > Write Comment </Button>
       {    !load?(
          comment.map((item,indx)=>{

            return (

              <>
              
              <h3>{item.name}</h3>
              <Typography color="text.secondary">{item.comment}</Typography>
              <Typography color="text.secondary">{item.email}</Typography>
              
              </>
            )
          })

       ):(

         <>
         <Skeleton  variant="text" sx={{ fontSize: '3rem' }} />
         <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
         <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
         <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
         </>
       )

       }
             
     </Container>
  
     </Layout>
     </>
  )
}

export default BlogDetails