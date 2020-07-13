import React from 'react'

const Ratings = ({ratings}) => {
    return (
        <div className='ratings__container'>
            <div className='votes'>
                <div className="votes__icon">&#9733;</div>
                <pre>{ratings && ratings}</pre>
            </div>
            <div className='vote'>
                <div className="vote__icon">&#9734;</div>
                <pre>Vote</pre>
            </div>
            <div className='add'>
                <div className="add__icon">+</div>
                <pre>Add</pre>
            </div>
        </div>
    )
}

export default Ratings
