
import Carousel from 'react-elastic-carousel';




function CarouselComp() {
    return (
        <div>
            <div className="row py-3">
                <div className="col-lg-9 col-md-12">

                    <Carousel>
                    
                            <img
                                className="d-block w-100"
                                src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1621359384_GW-MB-Name-en.jpg"
                                alt="First slide"
                            />
                        
                    
                            <img
                                className="d-block w-100"
                                src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1620755387_GW-MB-Gaming-en.jpg"
                                alt="Second slide"
                            />

                        
                    
                            <img
                                className="d-block w-100"
                                src="https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/L_1621510361_GW-MB-Sneakers-en.jpg"
                                alt="Third slide"
                            />
                        
                    </Carousel>
                </div>
                <div className="col-3 ads">
                    <img src="https://tpc.googlesyndication.com/simgad/859822793315136415" className='img-fluid' alt="" />
                    <img src="https://tpc.googlesyndication.com/simgad/10374724182842071294" className='my-3 img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
}

export default CarouselComp;