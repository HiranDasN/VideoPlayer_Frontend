import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Toast } from 'react-toastify/dist/components';

function Add({setUploadVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Data , setData] = useState({
    id:"",
    caption:"",
    url:"",
    youtube:""
  })
  console.log(Data);

  const embeded= (e)=>{
    const{value} =e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setData({...Data,youtube:link})
  }
  console.log(Data);

  const handleuplaod =async ()=>{
    const {id,caption,url,youtube}=Data
    if (!id || !caption || !url ||!youtube){
      toast.warning("please fill the form completely")
    }
    else{
      const response = await uploadVideo(Data)
      console.log(response);
      if(response.status>=200 && response.status<300){

        setUploadVideoStatus(response.data)

        toast.success('uploaded Successfully')
        // to close the tab 
        handleClose()
      }
      else{
        console.log(response);
        toast.error('something went wrong.Try again!!')
      }
    }

  }


  return (
    <>
   <div> 
    <button onClick={handleShow} className='btn btn-info mt-5'>Upload new video{' '}<i class="fa-solid fa-cloud-arrow-up fa-bounce ms-2"></i></button>
   </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className='border border-secondary p-3 rounded'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setData({...Data,id:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setData({...Data,caption:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text"  placeholder="Enter Video Image URL" onChange={(e)=>setData({...Data,url:e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter YouTube Video Link" onChange={embeded}/>
          </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className='bg-info' onClick={handleuplaod}>Upload</Button>
        </Modal.Footer>
    </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Add


//https://youtu.be/1F3hm6MfR1k?si=BwNLyswX7OyPbIUF
// src="https://www.youtube.com/embed/1F3hm6MfR1k?si=hI4ia5oe6C2yJz6L" 

