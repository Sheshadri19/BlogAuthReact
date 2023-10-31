import axios from "axios";

const Base_Url='https://restapinodejs.onrender.com'

export const RegisterData=async(data)=>{
    try{

       return await axios.post(`${Base_Url}/api/register`,data)
    }
    catch(error){
        console.log("error while fetching register data");
    }
}


export const loginData=async(data)=>{
    try{
        return await axios.post(`${Base_Url}/api/login`,data)
    }
    catch(error){
        console.log("error while fetching login data");
    }
}

export const getBlogApi=async()=>{
    
    try{
        return await axios.get(`${Base_Url}/api/allBlog`)

    }

    catch(error){
        console.log("error wahile fetching all blog api");
    }
}


export const blogDetailsApi=async(id)=>{
   
    try{
        return await axios.get(`${Base_Url}/api/blogdetails/${id}`)
    }
    catch(error){
        console.log("error while fetching blog details data");
    }
}


export const getCatApi=async()=>{

    try{
        return await axios.get(`${Base_Url}/api/showallcategory`)
    }

    catch(error){
        console.log("error while fecthing all category api");
    }
}


export const GetCommentApi=async(id)=>{

    try{

        return await axios.get(`${Base_Url}/api/comment/${id}`)
    }
    catch(error){

        console.log("eror while fetching all comment api");
    }
}



export const CreateCommentApi=async(id,data)=>{

try{

    return await axios.post(`${Base_Url}/api/blog/${id}/comment/create`,data)
}
catch(error){

    console.log("error while fecthing create comment api");
}

}


export const CategoryDetailsApi=async(id)=>{

    try{

        return await axios.get(`${Base_Url}/api/category/post/${id}`)
    }

    catch(error){

        console.log("error while fetching catergoty data api");
    }
}


export const RecentData=async()=>{

    try{

      return await axios.get(`${Base_Url}/api/letest-post`)
    }
    catch(error){

        console.log("error while fetching recent api");
    }
}


export const BannerAll=async()=>{
    try{
        return await axios.get(`${Base_Url}/api/banner`)
    }

    catch(error){
        console.log("error while fetching banner data");
    }
}   


export const serviceApi=async()=>{

    try{
        return await axios.get(`${Base_Url}/api/service`)
    }
    catch(error){
        console.log("error while fetching the service api");
    }
}


export const testimonialApi=async()=>{

    try{
        return await axios.get(`${Base_Url}/api/testimonial`)
    }

   catch(error){
    console.log("error while fetching testimonial api");
   }
}


export const testimonialImage=async()=>{
    try{
        return await axios.get(`${Base_Url}/api/testimonial/photo`)
    }catch(error){
        console.log("error while fetching testimonial image");
    }
}


export const teamApi=async()=>{

    try{
        return await axios.get(`${Base_Url}/api/team`)
    }catch(error){
        console.log("error while getting team data");
    }
}


export const courseApi=async()=>{
    try{
        return await axios.get(`${Base_Url}/api/course`)
    }
    catch(error){
        console.log("error while fetching course api");
    }
}




export const contactApi=async(data)=>{

    try{
        return axios.post(`${Base_Url}/api/contact/create`,data)
    }
    catch(error){
        console.log("eror while fetching contact api");
    }
}


export const likeApi=async(id)=>{
    try{
        return axios.put(`${Base_Url}/api/blog/like/${id}`)
    }
    catch(error){
        console.log("eror while fetching like api");
    }
}

export const courseApplyApi=async(id, data)=>{
    try{
        return axios.post(`${Base_Url}/api/course/apply/${id}`,data)
    }
    catch(error){
        console.log("error while posting course apply api");
    }

}