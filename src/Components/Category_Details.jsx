import React from 'react'
import { useState, useEffect } from 'react'
import { CategoryDetailsApi } from '../Service/Api'
import { useParams } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';

const Category_Details = () => {
    const { _id } = useParams()
    const [cat, setCat] = useState([])

    const [load, setLoad] = useState(true)


    const getCategoryDetails = async () => {

        const res = await CategoryDetailsApi(_id)
        setCat(res?.data?.data)
         setLoad(false)
        console.log("u", res.data.data);

    }

    useEffect(() => {
        getCategoryDetails()
    }, [])

    return (
        <>


        {

            load ?(
                <>
                <Skeleton variant="text" sx={{ fontSize: '3rem' }}  />
                <Skeleton variant="rectangular" width={1000} height={450} />
              </>
            ):(
             
                <>
                      {
                        cat.map((item,idx)=>{
                         return (

                            <>
                            <div key={idx}>
                              <h2>{item.title}</h2>
                              <p dangerouslySetInnerHTML={{__html:item.postText}}></p>
                              </div>
                            </>
                         )

                        })
                      }
                </>

            ) 
        }
        </>
    )
}

export default Category_Details