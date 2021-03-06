import { useState } from 'react';
import './css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import { NavDropdown } from 'react-bootstrap';
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './MenuContent'


const Header = () => {
    const [menuOpen, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true)
    }

    function closeMenu() {
        setMenu(false)
    }


    return (
        <div className="header ">
            <div className="header_content bg-dark text-light px-4">
                <div className="row justify-content-between">
                    <ul className='col-5 header_content_right'>
                        <li>free shopping</li>
                        <li>free Returns</li>
                        <li>Cash on Delivery</li>
                    </ul>

                    <ul className='col-5 header_content_right'>
                        <li>Create an Account</li>
                        <li>Daily Deals</li>
                        <li>Customer Service</li>
                        <li>Sell with Us</li>
                        <li>Track Orders</li>
                        <li>العربية </li>
                    </ul>
                </div>
            </div>


            <nav class="navbar navbar-light ">
                <div class="container-fluid">

                    <CheeseburgerMenu
                        isOpen={menuOpen}
                        closeCallback={closeMenu} 
                        >
                        <MenuContent closeCallback={closeMenu} />
                    </CheeseburgerMenu>

                    <HamburgerMenu
                        isOpen={menuOpen}
                        menuClicked={openMenu}
                        width={30}
                        height={20}
                        strokeWidth={3}
                        rotate={0}
                        color='blue'
                        borderRadius={0}
                        animationDuration={0.5}

                    />



                    <a class="navbar-brand mx-3" href='/'>
                        <img src="https://cf1.s3.souqcdn.com/public/style/img/en/souqAmazon-logo-v2.png" alt="" width="115" height='48' class="d-inline-block align-text-top" />
                    </a>

                    <div className="header_search">
                        <input type="text" className="searchInput border" placeholder='What are you looking For ?' />

                        <SearchIcon className='header_searchIcon bg-primary text-light w-30' />
                    </div>
                    <NavDropdown title="Hello , login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </nav>

        </div>
    )
}

export default Header;