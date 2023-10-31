import React, { createContext, useContext, useEffect, useState } from 'react'

const ContextAuth=createContext()
const AuthData = ({children}) => {

    const [auth,setAuth]=useState({
        user:null,
        token:''
    })

    useEffect(()=>{
      const data=localStorage.getItem('auth')
      if(data){
        const personData=JSON.parse(data)
      
      setAuth({...auth,
    user:personData.user,
      token:personData.token
          })
        }


    },[])



  return (
<>
<ContextAuth.Provider value={[auth,setAuth]}>
    {children}
</ContextAuth.Provider>

</>
  )
}

const useAuth=()=>useContext(ContextAuth)
export   {AuthData,useAuth}