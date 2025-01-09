import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className='w-screen h-auto bg-slate-800 p-4 flex'>
            <div className="w-[30%] flex flex-col gap-2">
                <Link to={'/'} className='flex items-center gap-2 text-4xl text-white no-underline font-bold'>
                <span class="material-symbols-outlined text-3xl text-orange-400">play_circle</span><span>The Player</span>
                </Link>

                <p className='text-slate-300 text-justify mt-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nemo dignissimos excepturi perferendis enim fugit, totam dolores illum dicta quod quaerat eius necessitatibus nulla similique nostrum qui minima voluptatum iusto?</p>

                <p className='text-sm text-slate-100'>Code is licensed by Arshad</p>
                <p className='text-sm text-slate-100'>Currently v5.3.2</p>
            </div>

            <div className="w-1/5 flex justify-center">
               <div className='flex flex-col gap-2 w-max'>
                    <h2 className="text-4xl text-white font-bold">Links</h2>
                    <ul className="flex flex-col p-0 gap-2">
                        <li>
                            <Link to={'/'} className='text-slate-100 no-underline hover:underline'>Landing</Link>
                        </li>
                        <li>
                            <Link to={'/home'} className='text-slate-100 no-underline hover:underline'>Home</Link>
                        </li>
                        <li>
                            <Link to={'/history'} className='text-slate-100 no-underline hover:underline'>History</Link>
                        </li>
                    </ul>
               </div>
            </div>

            <div className="w-1/5 flex justify-center">
               <div className='flex flex-col gap-2 w-max'>
                    <h2 className="text-4xl text-white font-bold">Guides</h2>
                    <ul className="flex flex-col p-0 gap-2">
                        <li>
                            <Link to={'/'} className='text-slate-100 no-underline hover:underline'>React</Link>
                        </li>
                        <li>
                            <Link to={'/home'} className='text-slate-100 no-underline hover:underline'>ReactBootstrap</Link>
                        </li>
                        <li>
                            <Link to={'/history'} className='text-slate-100 no-underline hover:underline'>Router</Link>
                        </li>
                    </ul>
               </div>
            </div>

            <div className="w-[30%] flex flex-col gap-2 justify-start">
                <h2 className="text-4xl text-white font-bold">Contact Us</h2>
                <div className="flex gap-2 w-full">
                    <input type="email" name="" id="" className='w-10/12 outline-none py-2 px-3 rounded-lg border-2 border-orange-400' placeholder='Enter email'/>
                    <button className="border-2 border-orange-400 bg-gray-700 text-white px-2 rounded-lg flex items-center hover:bg-gray-900"><span class="material-symbols-outlined">arrow_forward</span></button>
                </div>

                <div className="w-full mt-3">
                <ul className="flex w-10/12 justify-between p-0">
                    <li><a href="#" className='text-white text-xl hover:opacity-80'><i class='bx bxl-facebook-circle'></i></a></li>
                    <li><a href="#" className='text-white text-xl hover:opacity-80'><i class='bx bxl-twitter' ></i></a></li>
                    <li><a href="#" className='text-white text-xl hover:opacity-80'><i class='bx bxl-github' ></i></a></li>
                    <li><a href="#" className='text-white text-xl hover:opacity-80'><i class='bx bxl-linkedin-square' ></i></a></li>
                    <li><a href="#" className='text-white text-xl hover:opacity-80'><i class='bx bxl-instagram' ></i></a></li>
                    <li><a href="#" className='text-white text-xl hover:opacity-80'><i class='bx bxs-phone' ></i></a></li>
                </ul>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer