import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { videoDeleteAPI, videoHistoryAPI } from '../services/allAPI';



function Video({DisplayData, setDeleteVideo, removeDeleteBtn}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {

    setShow(true);

    const {caption, youtubeUrl} = DisplayData;

    const DateObj = new Date();
    let formattedDateTime = DateObj.toLocaleString();

    console.log(`${formattedDateTime}`);

    const historyDetail = {caption, youtubeUrl, formattedDateTime};


    try {
      
      const res = await videoHistoryAPI(historyDetail)
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteVideo = async(videoID) => {

    if (videoID) {
      
      try {
        
        const res = await videoDeleteAPI(videoID)
        console.log(res);
        setDeleteVideo(res.data)


      } catch (error) {
        console.log(error);
      }
    }
  }


  const videoDragStart = (e, videoID) => {
    console.log(`video drag with id ${videoID}`);

    e.dataTransfer.setData('videoID', videoID);
  }

  return (
    <div>
      <div className="w-full mt-4">
        <Card className='w-full' style={{borderRadius: '11px'}} draggable = {true} onDragStart={(e) => videoDragStart(e, DisplayData?.id)}>
          <Card.Img onClick={handleShow} variant="top" src={DisplayData?.imgUrl} style={{height: '250px'}}/>
          <Card.Body>
            <Card.Title className='text-white flex justify-between items-center w-full' style={{fontWeight: 'bold', fontSize: '24px'}}>
              <span className='overflow-y-clip'>{DisplayData?.caption}</span>

              {
                !removeDeleteBtn &&

                <button className="cursor-pointer" onClick={() => handleDeleteVideo(DisplayData?.id)}><span class="material-symbols-outlined text-2xl text-red-500 hover:text-red-700">delete</span></button>
                
              }
                
            </Card.Title>
            
          </Card.Body>
        </Card>
      </div>


      <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='xl'
      >
        <Modal.Header closeButton>
            <Modal.Title style={{color: 'white', textTransform: 'uppercase'}}>{DisplayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="500" src={`${DisplayData?.youtubeUrl}?autoplay=1`} allow='autoplay'></iframe>
        </Modal.Body>
      </Modal>
      </div>
    </div>
  )
}

export default Video