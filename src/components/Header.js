import React from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../Image/search.png';
import cartIcon from '../Image/shopping-cart.png';
import loginIcon from '../Image/user.png';


function Header() {

    const navigate = useNavigate();

    return (
        <>
            <div className='h-20 flex justify-between border-b-4 border-black mb-2 bg-red-200'>
                <div className='my-auto ml-8 text-xl font-bold'>
                    <span className='text-green-400 text-italic'>SHOP</span>
                    <span className='text-grey-400'>LANE</span>

                </div>
                <div className='my-auto flex justify-between text-lg font-bold'>
                    <div className='mr-4 cursor-pointer' onClick={() => { navigate('/') }}>HOME</div>
                    <div className='mr-4'>CLOTHING</div>
                    <div>ACCESSORIES</div>


                </div>
                <div className='mr-8 my-auto flex justify-between'>
                    <div className='mr-4'><img src={searchIcon} alt={'searchIcon'} /></div>

                    <div className='mr-4'><img src={cartIcon} alt={'cartIcon'} /></div>
                    <div><img src={loginIcon} alt={'loginIcon'} /></div>


                </div>
            </div>
        </>
    )
}

export default Header
