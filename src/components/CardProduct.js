
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Card from './Card'


function CardProduct() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    let a = {
        image: [
            'https://cf5.s3.souqcdn.com/item/2021/01/30/13/23/26/41/3/item_L_132326413_9c172b72d6c8c.jpg',
            'https://cf2.s3.souqcdn.com/item/2020/12/29/13/22/20/61/7/item_L_132220617_fef8e06c38ff6.jpg',
            'https://cf1.s3.souqcdn.com/item/2021/01/28/13/23/21/54/0/item_L_132321540_1b1e920a0abcf.jpg',
            'https://cf5.s3.souqcdn.com/item/2021/01/30/13/23/26/42/8/item_L_132326428_9f882ea68882b.jpg',
            'https://cf2.s3.souqcdn.com/item/2021/03/03/13/24/51/22/6/item_L_132451226_574e01f4989b9.jpg',
            'https://cf3.s3.souqcdn.com/item/2021/02/20/13/24/01/02/9/item_L_132401029_1cf353bf7154e.jpg'
        ]
    }

    return (
        <div>
            <div className="row py-3">
                <div className="col-12">

                    <Carousel activeIndex={index} onSelect={handleSelect} className='text-dark'>

                        <Carousel.Item>
                            <div className="row">
                                {a.image.map(img =>
                                    <div className='col-lg-2 col-md-4'>
                                        <Card img={img} />
                                    </div>
                                )}
                            </div>

                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="row">
                                {a.image.map(img =>
                                    <div className='col-lg-2 col-md-4'>
                                        <Card img={img} />
                                    </div>
                                )}
                            </div>

                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="row">
                                {a.image.map(img =>
                                    <div className='col-lg-2 col-md-4'>
                                        <Card img={img} />
                                    </div>
                                )}
                            </div>

                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;