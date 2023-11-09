import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function HomePage() {

const [uploadVideoStatus,setUploadVideoStatus] = useState({})

  return (
    <>
        {/* <div className='container d-flex  alighn-items-center  ' style={{justifyContent:'space-between'}}>
        <Add setUploadVideoStatus ={setUploadVideoStatus}/>
        <Link className='mt-5' to={'/watchHistory'} style={{textDecoration:'none',color:'white '}}> <h5>Watch History</h5></Link>
        </div>
        <div  className=' container-fluid d-flex  mt-3 ' style={{justifyContent:'space-between'}}>
            <View uploadVideoStatus ={uploadVideoStatus}/>
            <Category/>
        </div> */}

<div className='container  d-flex  alighn-items-center'style={{justifyContent:'space-between'}}>
  <Add setUploadVideoStatus={setUploadVideoStatus}/>
  <Link className='mt-5' to={'/watchHistory'} style={{textDecoration:'none',color:'white ',marginRight:'76px'}}> <h5>Watch History</h5></Link>
</div>
    <div className='container mt-4'>
      <div className='d-flex container-fluid w-100 mt-3 mb-3' style={{justifyContent:"space-between"}}>            
      <div className='col-lg-9 mb-5'>
      <h2>All Videos</h2>
      <View uploadVideoStatus={uploadVideoStatus}/>

      </div>
      <div className='col-lg-3'>
      <Category/>

      </div>
    </div>
    </div>

        </>
  )
}

export default HomePage


