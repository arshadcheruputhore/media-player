import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Video from './Video'
import { updateCategoryAPI, videoGetAPI, videoUploadAPI } from '../services/allAPI'
import { toast } from 'react-toastify'



function VideoContainer({VideoRespState, videoDeleteResp, setUpdateCategResp}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoState, setDeleteVideo] = useState('')

  console.log(allVideos);

  useEffect(() => {
    
    getAllVideos()

  }, [VideoRespState, deleteVideoState, videoDeleteResp])

  const getAllVideos = async () => {
      try {
        const res = await videoGetAPI()
        console.log(res);
        
        if (res.status >= 200 && res.status <= 300) {
          setAllVideos(res.data)
        }

      } catch (error) {
        console.log(error);
      }
  }
  
  const preventDragOver = (event) => {
    event.preventDefault();
  }

  const categoryVideoDrop = async (event) => {

    const {categoryDetail, videoDetail} = JSON.parse(event.dataTransfer.getData('categoryVideoDrag'));
    console.log(categoryDetail, videoDetail);

    const updatedCategoryDetail = categoryDetail.allVideos.filter(video => video.id !== videoDetail.id)
    console.log('updated detail is', updatedCategoryDetail);

    const {id, categoryName} = categoryDetail

    try {
      
      const res = await updateCategoryAPI(id, {id, categoryName, allVideos: updatedCategoryDetail})
      console.log(res);

      if (res.status === 200) {
        setUpdateCategResp(res.data)

        try {
          const resUpload = await videoUploadAPI(videoDetail)
          console.log(resUpload);

          if (resUpload.status >= 200 && resUpload.status <= 300) {
            toast.success(`${resUpload.data.caption} added to your collection`);
            getAllVideos()
          }
          else {
            toast.error(`${resUpload.data.response}`)
          }

        } catch (error) {
          console.log(error);
          toast.error(`There is an issue ${resUpload.data.caption} adding to your collection`)
        }
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <section>
        <div className="bg-yellow-600 min-h-dvh" droppable = {true} onDragOver={(e) => preventDragOver(e)} onDrop={(e) => categoryVideoDrop(e)}>
          <h1 className='text-4xl font-semibold text-orange-400 text-center'>All Videos</h1>

          <Row >

              {
              
                allVideos?.length > 0 ? 

                allVideos.map(video => (
                  <Col lg={4} md={6} sm={12}>
                    <Video DisplayData = {video} setDeleteVideo = {setDeleteVideo}/>
                  </Col>
                ))
                : 

                <div className="text-3xl text-center text-red-600 overflow-y-clip mt-4">Nothing To Display</div>
              }
          </Row>
        </div>
      </section>
    </div>
  )
}

export default VideoContainer