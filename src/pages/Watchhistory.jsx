import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteVideoHistory, getAllHistory } from '../Services/allAPI';
function Watchhistory() {

const [history,setHistory] = useState([])

  const allHistory = async()=>{
    const {data} = await getAllHistory()
    // console.log(data);
    setHistory(data)
  }
  console.log(history);
 
//function to remove history

const removeHistory = async(id)=>{
  await deleteVideoHistory(id)
  //to get remaining history
  allHistory()
}

  useEffect(()=>{
    allHistory()
  },[])

  return (
    <>
     <div className='container border border-2 rounded border-secondary  mt-5 mb-5'style={{paddingLeft:'100px',paddingRight:'100px'}}>
      <div className='d-flex'  style={{alignItems:'center',justifyContent:'space-between'}}>
         <h3 className='mt-4 mb-4'>Watch history</h3>
        <Link to={'/homepage'} style={{textDecoration:'none',fontSize:'large'}}><i class="fa-solid fa-arrow-left" style={{paddingRight:'10px'}}></i>Back to Home</Link>
        
      </div>
      <div className="container">
           <Table striped bordered hover>
      <thead> 
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Youtube</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {history.length>0?
        history.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={`${item.youtube}?autoplay=1`} target='_blank'>{item.youtube}</a></td>
          <td>{item.timstamp}</td>
          <td> <button onClick={()=>removeHistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>))
          :
        <p className='mt-5 fw-bolder fs-4 text-danger'>No watch History</p>
      }
      </tbody>
    </Table>  
      </div>
     </div>
    </>
   
  )
}

export default Watchhistory