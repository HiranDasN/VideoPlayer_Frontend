import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURl"


// upload video 
export const uploadVideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}


//get all uploaded videos

export const getAllvideos = async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"")
}

//to delete a video
export const deleteAVideos = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

// api calll to add history 

export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api  call to get history from json-server
export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api  call to add category to json-server
export const addAllCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

//api call to delete history 
export const deleteVideoHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api call to get all categories from json-server

export const getAllcategories = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

//to delete a category from json-server
export const deletecategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get a particular video from  http://localhost:8000/video
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

//api to add the category with new videos
export const updateCategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}

//to delete vedio inside category
export const deleteCatVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}