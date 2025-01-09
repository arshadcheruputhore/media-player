import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-slate-900 py-3" sticky='top'>
            <Container>
                <Navbar.Brand href="#">
                <Link to={'/'} className='flex items-center gap-2 no-underline text-2xl text-black font-bold'>
                    <span class="material-symbols-outlined text-orange-400">play_circle</span><span className='text-white'>The Player</span>
                </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header