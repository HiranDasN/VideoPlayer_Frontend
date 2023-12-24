import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteAVideos} from '../Services/allAPI';

function VideoCard({displayVideo,setDeleteVideoStatus,ispresent,deleteVideoFromCategory}) {

  const[show,setShow] = useState(false)
  const handleClose =()=> setShow(false)
  const handleShow = async() => {setShow(true);

    const{caption,youtube}=displayVideo
    
    let today=new Date()
    console.log(today);
    let timstamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timstamp);
    
    let videodetails={caption,youtube,timstamp}
    await addToHistory(videodetails)
      }

const removeVideo = async(id)=>{
  const response = await deleteAVideos(id)
  setDeleteVideoStatus(true)

}

//function to drag the videocard
const cardDrag = (e,id)=>{
  console.log(`The Id of the videoCard dragged is ${id}`);
  e.dataTransfer.setData("videoID",id)
}

const handleDeleteButtonClick = () => {
  // Call the deleteVideoFromCategory function with the video ID
  deleteVideoFromCategory(displayVideo.id);
};

  return (
    <>
           <Card className='mt-4' style={{ width: '100%',height:'380px' }} draggable onDragStart={(e)=>cardDrag(e,displayVideo?.id)}>
        <Card.Img height={'280px'} onClick={handleShow} variant="top" src={displayVideo.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayVideo.caption}</h6>
            
            {!ispresent?
              <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
            :
            <button onClick={handleDeleteButtonClick}  className='btn btn-warning'><i class="fa-solid fa-trash-can"></i></button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="530" src={`${displayVideo.youtube}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
      </Modal>
  </>  
   
  )
}

export default VideoCard