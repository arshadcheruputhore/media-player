import React, { useEffect, useState } from 'react'
import { deleteCategoryAPI, getCategoryAPI, getDroppedVideo, updateCategoryAPI, videoDeleteAPI } from '../services/allAPI'
import Video from './Video'



function Category({setVideoDeleteRes, AddedCategoryState, updateCategResp}) {

    const [AllCategory, setAllCategory] = useState([])

    useEffect(() => {

      getAllCategory()
      
    }, [AddedCategoryState, updateCategResp])
    
    const getAllCategory = async() => {

        try {
            
            const res = await getCategoryAPI()
            // console.log(res);
            setAllCategory(res.data)

        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteCategory = async(ID) => {
        
        try {
            
            await deleteCategoryAPI(ID)
            getAllCategory()

        } catch (error) {
         console.log(error);   
        }
    }

    const videoDrop = async (categoryID, e) => {

        console.log(`video dropped id is ${categoryID}`);

        const videoID = e.dataTransfer.getData('videoID')
        console.log(videoID);

        try {
            
            const {data} = await getDroppedVideo(videoID)
            console.log(data);

            const selectedCategory = AllCategory?.find(item => item.id === categoryID)
            // console.log(selectedCategory);
            selectedCategory['allVideos'].push(data)

            await updateCategoryAPI(categoryID, selectedCategory)
            getAllCategory()

            const deleteRes = await videoDeleteAPI(videoID)
            setVideoDeleteRes(deleteRes);

        } catch (error) {
            console.log(`error is ${error}`);
        }
    }

    const dragOverPrevent = (event) => {

        event.preventDefault();
    }

    const categoryVideoDragged = (event, categoryDetail, videoDetail) => {
        console.log(event, categoryDetail, videoDetail);

        const draggedDetail = {categoryDetail, videoDetail}
        event.dataTransfer.setData('categoryVideoDrag', JSON.stringify(draggedDetail));
    }

  return (
    <div>
        <div className="w-full mt-4 px-3 flex flex-col gap-3">
            {
                AllCategory?.length > 0 ?

                AllCategory.map(category => (

                    <div onDragOver={(e) => dragOverPrevent(e)} droppable = {true} onDrop={(e) => videoDrop(category.id, e)} className="w-full px-3 py-2 border-2 border-s-white border-t-white border-r-orange-400 border-b-orange-400">
                        <div className='flex justify-between items-center mt-2'>
                            <h1 className='text-gray-200 text-xl'>{category.categoryName}</h1>
                            <button className="cursor-pointer" onClick={() => handleDeleteCategory(category?.id)}><span class="material-symbols-outlined text-3xl text-red-500 hover:text-red-700">delete</span></button>
                        </div>

                        {
                            category?.allVideos.length > 0 &&

                            <div className="w-full flex flex-wrap gap-x-2 justify-around gap-y-5 pb-3">
                            {
                                category?.allVideos?.map(video => (
                                    <div draggable = {true} onDragStart={(e) => categoryVideoDragged(e, category, video)} className="hover:transform hover:scale-105 transition-transform duration-700">
                                        <Video DisplayData={video} removeDeleteBtn = {true}/>
                                    </div>
                                ))
                            }
        
                            </div>
                        
                        }
                    </div>
                ))

                :

                <div className="text-3xl text-red-600 text-center overflow-y-clip">NO CATEGORY TO DISPLAY</div>
            }
        </div>

    </div>
  )
}

export default Category