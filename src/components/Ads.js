import React from 'react'

function Ads(props) {
    return (
        <div className='ads row my-4'>
            <div className="col">
                <img className='img-fluid' src={props.image} alt="" />
            </div>
        </div>
    )
}

export default Ads
