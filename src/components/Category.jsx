import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addAllCategory, deletecategory, getAVideo, getAllcategories, updateCategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import VideoCard from './VideoCard';
import { Col, Row } from 'react-bootstrap'

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName,setCategoryName] = useState("")
  const [category1,setCategory1]= useState([])

  //function to add category
  const addCategory = async()=>{
    console.log(categoryName);
    if(categoryName){

      let body ={
        categoryName,
        allVideos:[]
      }
      const response = await addAllCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category added Succesfully')
        //state value is made null
        setCategoryName("")
        //close the modal
        handleClose()
      }
      else{
        toast.error('Something went Wrong.Please Try Later !!')
      }

    }
    else{
      toast.warning('Please Enter Category Name')
    }
  }

  //function to get all categories
const allCategory = async()=>{
  const {data} = await getAllcategories()
  // console.log(data);
  setCategory1(data)
  allCategory()
}



//function to delete category
const deleteAcategory  = async(id)=>{
  await deletecategory(id)
  // to get all remaining category
  allCategory()
}

//function to prevent reload so that the data we send will not be lost
const dragOver=(e)=>{
  e.preventDefault()
}
const videoDrop = async(e,categoryId)=>{
  console.log(`dropped on the category Id : ${categoryId}`);

  //to get the data send from the videocard
  let videoId = e.dataTransfer.getData("videoID")
  console.log(videoId);
 const {data} = await getAVideo(videoId)
 console.log(data);

 const selectedcategory = category1.find(item=>item.id===categoryId)
 selectedcategory.allVideos.push(data)
 console.log(selectedcategory);

 await updateCategory(categoryId,selectedcategory)
 allCategory()

}


 useEffect(()=>{
  allCategory()
 },[])

  return (
   <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning mt-3 mb-3 ms-3'>Add New Category</button>
      </div>

     {category1?.length>0?
     category1.map((item)=>(  <div  className='mt-3 ms-5 me-3 border border-2 rounded border-secondary p-3' >  
     <div className="d-flex justify-content-between align-items-center" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
       <h6>{item.categoryName}</h6>
       <button onClick={()=>deleteAcategory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>

     </div> 
     <Row>
            <Col>
           {
            item?.allVideos?.length>0?
            item.allVideos.map((card)=>(<VideoCard displayVideo={card} ispresent="true"/>)):
            <p>Nothing to display</p>
           }
            </Col>
          </Row>
     </div>))

      :
                <p className='ms-5 m-3 fw-bolder fs-5 text-danger'>No Category Added</p>
    }
      
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
            <form className='border border-secondary p-3 rounded'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>
  
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='btn btn-success' onClick={addCategory} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
   </>
  )
}

export default Category