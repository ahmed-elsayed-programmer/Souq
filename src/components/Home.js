import React from 'react'
import './css/home.css'
import OfferSeason from './OfferSeason'
import CarouselComp from './Carousel'
import Offer from './Offer'
import Ads from './Ads'
import CardProduct from './CardProduct'
function Home() {
    return (
        <div className='Home pt-4 container-xxl'>
            <Offer />
            <CarouselComp />
            <Ads image='https://tpc.googlesyndication.com/simgad/941378534185093377' />
            <OfferSeason />
            <OfferSeason />
            <Ads image="https://souqcms.s3.eu-west-1.amazonaws.com/sanfronto/eg/2020/web/Banners/HPs/Apr/SellonSouq-HP-Strip-en.jpg" />
            <Ads image="https://souqcms.s3-eu-west-1.amazonaws.com/sanfronto/eg/2020/web/Banners/HPs/Sep/Installment-en.jpg" />
            <Ads image="https://cms.souqcdn.com/sanfronto/eg/2018/Web/Banners/HP-Strip/Free-Shipping-en.png" />
            <CardProduct />
            <CardProduct/> 
        </div>
    )
}

export default Home
