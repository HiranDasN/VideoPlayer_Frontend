import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllvideos } from '../Services/allAPI'

function View(uploadVideoStatus) {

  const [allVideo,setAllVideo] = useState([])

  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const getAllUploadVideo = async()=>{
    const response =  await getAllvideos()
    const {data} = response
    console.log(data);
    setAllVideo(data)
  }
  console.log(allVideo);

 useEffect(()=>{
  getAllUploadVideo()
  setDeleteVideoStatus(false)},[uploadVideoStatus,deleteVideoStatus])

  return (
    <>
      
       <Row> 
        { allVideo.length>0?
        allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={4}>
        <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>))
      :  
        <h5 className='mt-5 mb-5 fw-bolder fs-4 text-danger' style={{marginLeft:'105px'}}>Nothing to display</h5>
        }
       </Row>
    </>
  )
}

export default View