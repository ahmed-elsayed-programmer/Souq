import React from 'react'
import Card from './Card';

function ListProduct() {
    return (
        <div className='list-product'>
            <div className="row">
                <div className="col-2">
                    <h3>Hello world</h3>
                </div>
                <div className="col-8">
                    <div className="row my-3">
                        <h5>Mobile Phone </h5>
                    </div>
                    <div className="row ">
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        
                        <div className="col-4">
                            <Card img='https://cf2.s3.souqcdn.com/item/2020/01/07/10/29/52/84/0/item_XL_102952840_7aa943b3f9bec.jpg' />
                        </div>
                        
                    </div>
                </div>
                <div className="col-2">
                    <h3>Hello wrold</h3>
                </div>
            </div>

        </div>
    )
}

export default ListProduct;
