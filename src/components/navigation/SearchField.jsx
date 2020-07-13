import React,{useEffect,useRef} from 'react'
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'

const SearchField = (props) => {
    const history=useHistory()

    const input = useRef(null)

    useEffect(()=>{
        input.current.focus()
    },[])

    const search = e =>{
        e.preventDefault()
        history.push(`/search/${e.target['searchFor'].value}`)
        input.current.blur()
        props.setOpenSearchBar(false)
    }

    const closeSearchBar = e =>{
        e.target.parentElement.reset()
        props.setOpenSearchBar(false)
    }

    const searchFieldVariants={
        hidden:{
            opacity:0,
            scaleX:0
        },
        visible:{
            opacity:1,
            scaleX:1
        }
    }

    return (
        <motion.div className='search-field' 
            variants={searchFieldVariants}
            initial='hidden'
            animate='visible'
            exit={{scaleX:0,opacity:0}}
        >
            <form action="" onSubmit={search}>
                <input ref={input} name='searchFor' placeholder='Search for Movie' type="text"/>
                <button type='button' onClick={closeSearchBar}>x</button>
            </form>
        </motion.div>
    )
}

export default SearchField
