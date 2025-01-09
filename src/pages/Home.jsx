import React, { useState } from 'react'
import AddVideo from '../components/AddVideo'
import VideoContainer from '../components/VideoContainer'
import Video from '../components/Video'
import { Link } from 'react-router-dom'
import CategoryContainer from '../components/CategoryContainer'


function Home() {

  const [VideoRespState, setVideoRes] = useState('')
  const [videoDeleteResp, setVideoDeleteRes] = useState('')
  const [updateCategResp, setUpdateCategResp] = useState('')

  return (
    <div>
      <section className='w-screen min-h-96 px-16'>
        <div className='w-full h-24 flex justify-between items-center'>
          <div className="">
            <AddVideo setVideoRes = {setVideoRes}/>
          </div>
          <div className='overflow-y-clip'>
            <Link to={'/history'} className="text-2xl text-orange-400 font-semibold no-underline hover:text-orange-500">Watch History</Link>
            
          </div>
        </div>

        <div className="w-full flex gap-5 justify-between py-3">
          <div className="w-1/2 h-full">
            <VideoContainer VideoRespState = {VideoRespState} videoDeleteResp = {videoDeleteResp} setUpdateCategResp = {setUpdateCategResp}/>
          </div>

          <div className="w-1/2 h-full">
            <CategoryContainer setVideoDeleteRes = {setVideoDeleteRes} updateCategResp = {updateCategResp}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home