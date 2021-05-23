import React from 'react'

function OfferSeason(props) {
    return (
        <div className='row  g-3 p-3 my-2 bg-light border'>
            <ul class="nav nav-tabs">
                <li class="nav-item border-top border-primary border-3">
                    <a class="nav-link active" aria-current="page" href="/">Gaming week</a>
                </li>
            </ul>
            <div className="col-md-12 col-lg-6">
                <img src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1620758156_banner-1.jpg" className='img-fluid' alt="" />
                <h4 className='py-2'>title</h4>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="row g-3 text-center">

                    <div className="col-6">
                        <img src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1620758157_banner-2.jpg" alt="" className="img-fluid" />
                        <h4>title</h4>
                    </div>

                    <div className="col-6">
                        <img src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1620758157_banner-3.jpg" alt="" className="img-fluid" />
                        <h4>title</h4>
                    </div>

                    <div className="col-6">
                        <img src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1620758157_banner-4.jpg" alt="" className="img-fluid" />
                        <h4>title</h4>
                    </div>

                    <div className="col-6">
                        <img src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1620758157_banner-5.jpg" alt="" className="img-fluid" />
                        <h4>title</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OfferSeason
