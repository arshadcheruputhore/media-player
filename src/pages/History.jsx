import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, watchHistoryAPI } from '../services/allAPI'



function History() {

  const [watchHistory, setWatchHistory] = useState([])
  console.log(watchHistory);

  useEffect(() => {
    
    getWatchHistory()
  
  }, [])
  


  const handleDeleteHistory = async (videoID) => {

    try {
      
      await deleteWatchHistory(videoID)
      getWatchHistory()

    } catch (error) {
      console.log(error);
    }
  }

  const getWatchHistory = async () => {

    try {
      const res = await watchHistoryAPI() 
      console.log(res);
      setWatchHistory(res.data)


    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <section className='w-screen h-auto px-16'>
        <div className='w-full h-24 flex justify-between  items-center'>
          <div className="">
            <h2 className='text-4xl text-orange-500 border-b pb-1'>Watch History</h2>
          </div>
          <div className='overflow-y-clip'>
            <Link to={'/home'} className="text-2xl text-orange-400 font-semibold no-underline hover:text-orange-500  flex items-end gap-2">Back to <span class="material-symbols-outlined text-5xl">home</span></Link>
            
          </div>
        </div>
      </section>

      <section className="">

          <div className="w-full h-auto px-12 flex justify-center">
            <ul className="flex flex-col w-4/5 p-0">
              <li className="flex justify-between items-center py-2 text-xl font-bold text-slate-100 px-3 bg-gray-700">
                <div className="">#</div>
                <div className="w-1/5 text-center">Caption</div>
                <div className="w-1/5 text-center">URL</div>
                <div className="w-1/5 text-center">Date and Time</div>
                <div className="text-end hover:text-gray-300 cursor-pointer"><span class="material-symbols-outlined text-4xl">more_vert</span></div>
              </li>
            </ul>
          </div>
        {
          watchHistory?.length > 0 ?

          watchHistory.map((videoHist, index) => (

            <div className="w-full h-auto px-12 py-1 flex justify-center">
              <ul className='flex flex-col w-4/5 p-0'>
              <li className="flex justify-between items-center pb-2 px-3 text-lg font-light text-white border-b border-gray-500">
                <div className="">{index + 1}</div>
                <div className="w-1/5 text-center">{videoHist.caption}</div>
                <div className="w-1/5 text-center"><a href={videoHist.youtubeUrl} target="_blank" rel="noopener noreferrer">{videoHist.youtubeUrl}</a></div>
                <div className="w-1/5 text-center">{videoHist.formattedDateTime}</div>
                <div className="cursor-pointer text-end"><button onClick={() => handleDeleteHistory(videoHist.id)}><span class="material-symbols-outlined text-3xl text-red-500 hover:text-red-700">delete</span></button></div>
                </li>
              </ul>
            </div>

          ))
        
        :

        <div className="text-4xl text-red-600 text-center overflow-y-clip pt-10">No videos watched yet</div>
      
      }
      </section>
    </div>
  )
}

export default History