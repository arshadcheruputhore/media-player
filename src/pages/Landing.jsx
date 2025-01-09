import React from 'react'
import musicGif from '../assets/music-gif.gif'
import Card from 'react-bootstrap/Card';
import settingIMG from '../assets/settingimg.avif'
import categoryIMG from '../assets/categoryImg.jpg'
import manageIMG from '../assets/manageImg.avif'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <section className='flex gap-5 w-screen h-[90vh]'>
        <div className="w-1/2 h-full p-7 flex justify-center items-center">
          <div className='flex flex-col gap-3 items-start'>
            <h1 className='text-6xl text-white tracking-tighter'>Welcome to <span className='font-playwright text-4xl text-orange-400'>Media Player</span></h1>

            <p className="text-slate-100 text-justify text-sm leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsum et eligendi harum, dolores exercitationem saepe praesentium, quas tempore voluptas deleniti aspernatur voluptatem laborum, repudiandae vero rerum nemo magnam est.</p>

            <Link to={'/home'} className='bg-orange-400 py-2 px-3 rounded-lg text-white no-underline'>Get Started</Link>
          </div>
        </div>
        <div className="w-1/2 h-full p-7">
          <div className='w-full h-full flex items-center justify-center'><img src={musicGif} alt="" /></div>
        </div>
      </section>

      <section className="w-screen h-auto px-20 py-16 flex flex-col justify-around gap-20">
        <h2 className="font-playwright text-5xl text-center text-orange-400 overflow-visible">Features</h2>

        <div className="grid grid-cols-3 gap-10">
          <div className="bg-gray-600 border-2 border-orange-400 rounded-lg">
            <Card className='w-full'>
              <Card.Img variant="top" src={settingIMG} className='h-80 object-cover'/>
              <Card.Body>
                <Card.Title className='text-5xl text-white font-semibold overflow-clip text-center'>Managing Videos</Card.Title>
                <Card.Text className='text-sm text-slate-100 leading-relaxed mt-3 text-center'>
                  User can upload, view amd remove the videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="bg-gray-600 border-2 border-orange-400 rounded-lg">
            <Card className='w-full'>
              <Card.Img variant="top" src={categoryIMG} className='h-80 object-cover'/>
              <Card.Body>
                <Card.Title className='text-5xl text-white font-semibold overflow-clip text-center'>Categorize Videos</Card.Title>
                <Card.Text className='text-sm text-slate-100 leading-relaxed mt-3 text-center'>
                 User can cateorize the video by drag drop feature
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="bg-gray-600 border-2 border-orange-400 rounded-lg">
            <Card className='w-full'>
              <Card.Img variant="top" src={manageIMG} className='h-80 object-cover'/>
              <Card.Body>
                <Card.Title className='text-5xl text-white font-semibold overflow-clip text-center'>Managing History</Card.Title>
                <Card.Text className='text-sm text-slate-100 leading-relaxed mt-3 text-center'>
                  Users can manage the watch history of all video
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-screen h-auto px-20 py-16">
        <div className="w-full p-14 border-e-4 border-b-4 border-e-orange-400 border-b-orange-400 border-s-2 border-s-white border-t-2 border-t-white rounded-lg flex gap-12">
          <div className="w-1/2">
            <h2 className="text-4xl text-white font-semibold">Simple Fast and Powerfull</h2>

            <div className="flex flex-col gap-2 mt-10">
              <div className="">
                <h3 className="text-xl text-white font-light border-b inline-block pb-1 border-slate-400">Play Everything:</h3>
                <p className="text-sm text-slate-200 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis ullam corrupti sed totam alias molestias soluta, et porro asperiores animi quis velit expedita? Commodi corporis natus aspernatur qui officiis!</p>
              </div>

              <div className="">
                <h3 className="text-xl text-white font-light border-b inline-block pb-1 border-slate-400">Categorize Videos:</h3>
                <p className="text-sm text-slate-200 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis ullam corrupti sed totam alias molestias soluta, et porro asperiores animi quis velit expedita? Commodi corporis natus aspernatur qui officiis!</p>
              </div>

              <div className="">
                <h3 className="text-xl text-white font-light border-b inline-block pb-1 border-slate-400">Manage History:</h3>
                <p className="text-sm text-slate-200 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis ullam corrupti sed totam alias molestias soluta, et porro asperiores animi quis velit expedita? Commodi corporis natus aspernatur qui officiis!</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/nYEoxne_20Y" title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing