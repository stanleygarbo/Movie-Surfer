import React,{useState,useEffect} from 'react'
import SearchField from './SearchField'
import {AnimatePresence} from 'framer-motion'

const Nav = ({windowDimensions}) => {
    const [showNavBg,setShowNavBg]=useState(false)
    const [openMenu,setOpenMenu] = useState(false)
    const [openSearchBar,setOpenSearchBar] = useState(false)
  
    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
        document.body.style.overflowY=openMenu?'scroll':'hidden'
    }

    useEffect(()=>{
        if(window.scrollY >= 30){
            setShowNavBg(true)
        }
        window.addEventListener('scroll',scrolled)
        return ()=>window.removeEventListener
    },[])

    const scrolled=()=>{
        if(window.scrollY >= 30){
            setShowNavBg(true)
        }
        else{
            setShowNavBg(false)
        }
    }

    return (
        <div className='nav-container'>
            <nav 
                style={{
                    backgroundColor:showNavBg && 'rgb(0, 7, 29)',
                    boxShadow:showNavBg && '0px 0px 10px rgba(0,0,0,0.5)'
                }}
            >
                <p>GARBO<span>.</span></p>
                <AnimatePresence>
                    {openSearchBar && <SearchField setOpenSearchBar={setOpenSearchBar} />}
                </AnimatePresence>
                <button className='search-btn material-icons' onClick={()=>setOpenSearchBar(!openSearchBar)}>
                    search
                </button>

                {
                    windowDimensions.x >=700 ?
                    <Links />
                    :
                    <div className='menu' style={{right:openMenu ? '0%':'-100%'}}>
                        <Links toggleMenu={toggleMenu}/>
                    </div>
                }

                {windowDimensions.x <700 && openMenu && <div className='closer' onClick={toggleMenu}></div>}

                {
                windowDimensions.x >=700 ?
                null
                :
                <div className='hamburger-container' onClick={toggleMenu}>
                    <div className='hamburger-lines' 
                    style={{transform:openMenu && 'translateY(10px) rotate(492deg)',
                    width:'34px'
                    
                    }}></div>
                    <div className='hamburger-lines' 
                    style={{transform:openMenu && 'rotate(905deg)',
                    opacity: openMenu && '0',
                    width:'25px'
                    
                    }}></div>
                    <div className='hamburger-lines' 
                    style={{transform:openMenu && 'translateY(-10px) rotate(585deg)',
                    width:openMenu?'34px':'16px'
                    
                    }}></div>
                </div>
                }
            </nav>
        </div>
    )
}

const Links =({toggleMenu})=>
    <ul>
        <li><a onClick={toggleMenu} target='blank' href='https://github.com/stanleygarbo/Movie-Explorer'>GitHub</a></li>
        <li><a onClick={toggleMenu} target='blank' href='https://github.com/stanleygarbo/Movie-Explorer'>Login</a></li>
        <li><a onClick={toggleMenu} target='blank' href='https://github.com/stanleygarbo/Movie-Explorer'>Links</a></li>
    </ul>



export default Nav

