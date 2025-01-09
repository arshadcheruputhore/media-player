import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { videoUploadAPI } from '../services/allAPI';


function AddVideo({setVideoRes}) {

    const [videoDetail, setVideoDetail] = useState({caption: "", imgUrl: "", youtubeUrl: ""});
    const [isValidUrl, setValidUrl] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(videoDetail);

    const embaddingURL = (url) => {
        
        if (url.includes('v=')) {
          const embedded =  url.split('v=')[1].slice(0, 11);
          console.log(embedded);
          setVideoDetail({...videoDetail, youtubeUrl: `https://www.youtube.com/embed/${embedded}`})
          setValidUrl(false)
        }
        else {
          setVideoDetail({...videoDetail,youtubeUrl: ''});
          setValidUrl(true)          
        }
    }

    const handleUpload = async () => {
      const {caption, imgUrl, youtubeUrl} = videoDetail;

      if (caption && imgUrl && youtubeUrl) {
        
        try {
          const res = await videoUploadAPI(videoDetail)
          console.log(res);

          if (res.status >= 200 && res.status <= 300) {
            setVideoRes(res.data);
            toast.success(`${res.data.caption} added to your collection`);
            handleClose()
          }
          else {
            toast.error(`${res.data.response}`)
          }

        } catch (error) {
          console.log(error);
          toast.error(`There is an issue to upload ${res.data.caption}`)
        }
        

      } else {
        toast.warn('Enter all field completely!!!');
      }
    }

  return (
    <div>
        <div className='overflow-y-clip'>
            <Link onClick={handleShow} className="text-2xl text-orange-400 font-semibold no-underline flex items-center gap-2 hover:text-orange-500">Add New Video <span class="material-symbols-outlined text-5xl">playlist_add</span></Link>

            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className='text-white'>Upload Video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className='text-slate-200'>Please Upload Following Fields</p>

              <div className=''>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="name@example.com" style={{backgroundColor: 'black', color: 'white'}}
                    onChange={(e) => setVideoDetail({...videoDetail, caption: e.target.value})}
                  />
                  <label htmlFor="floatingInputCustom" className='text-white'>Caption</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Password" style={{backgroundColor: 'black', color: 'white'}}
                    onChange={(e) => setVideoDetail({...videoDetail, imgUrl: e.target.value})}
                  />
                  <label htmlFor="floatingPasswordCustom" className='text-white'>Image URL</label>
                </Form.Floating>
                <Form.Floating>
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="Password" style={{backgroundColor: 'black', color: 'white'}}
                    onChange={(e) => embaddingURL(e.target.value)}
                  />
                  <label htmlFor="floatingPasswordCustom" className='text-white'>Youtube URL</label>
                </Form.Floating>
                { isValidUrl && <div className="text-sm text-red-600 text-left">Enter valid url</div>}
              </div>
            
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'white', color:'orange'}}>
                Close
              </Button>
              <Button variant="primary" style={{backgroundColor:'orange', color:'white'}} onClick={handleUpload}>Upload</Button>
            </Modal.Footer>
          </Modal>
        </div>

    </div>
  )
}

export default AddVideo