import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategoryAPI } from '../services/allAPI';
import Category from './Category';



function CategoryContainer({setVideoDeleteRes, updateCategResp}) {

    const [categoryName, setCategoryName] = useState('')
    const [show, setShow] = useState(false);
    const [AddedCategoryState, setAddedCategory] = useState(categoryName)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const handleAddCategory = async() => {

        if (categoryName) {
            
            try {
            
                const res = await addCategoryAPI({categoryName, allVideos:[]})
                console.log(res);
                
                if (res.status > 200 && res.status < 300) {
                    toast.success(`The Category ${categoryName} added successfully...`, {
                        position: 'top-center'
                    })

                    setCategoryName('')
                    setAddedCategory(categoryName)
                    
                }
    
                handleClose()
    
            } catch (error) {
                console.log(error);
            }

        } else {
            toast.warning('Enter Category!!');
        }
    }

  return (
    <div>
        <div className="flex justify-center">
            <Link onClick={handleShow} className="text-3xl text-orange-400 font-semibold no-underline flex items-center gap-2 hover:text-orange-500">Add Category<span class="material-symbols-outlined text-5xl">playlist_add</span></Link>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title className='text-white'>Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p className='text-slate-200'>Enter Following Fields</p>

                <div className=''>
                    <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="name@example.com" style={{backgroundColor: 'black', color: 'white'}}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom" className='text-white'>Category</label>
                    </Form.Floating>
                </div>
                
                </Modal.Body>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'white', color:'orange'}}>
                    Close
                </Button>
                <Button variant="primary" style={{backgroundColor:'orange', color:'white'}} onClick={handleAddCategory}>ADD</Button>
                </Modal.Footer>
            </Modal>
        </div>

        <div className="">
            <Category setVideoDeleteRes = {setVideoDeleteRes} AddedCategoryState = {AddedCategoryState} updateCategResp = {updateCategResp}/>
        </div>
    </div>
  )
}

export default CategoryContainer