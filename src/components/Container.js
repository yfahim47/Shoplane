import React from 'react';
import { useNavigate } from 'react-router-dom';
// import product from './Product';
import productList from '../Common/productList';
import Wallpaper from '../components/Wallpaper';

function Container() {

    const navigate = useNavigate();
    const handleClick = (id, name) => {
        console.log(id);
        navigate(`/Product/${id}/${name}`)
    }

    return (
        <div className='mx-auto'>
            <Wallpaper />

            <div className='text-4xl font-bold my-5 ml-4'>Clothing for Men and Women</div>
            <div className='flex '>
                {productList.map((product) => (
                    product.isAccessory === false &&
                    <div key={product.id} className='border-4 mx-5 border-black cursor-pointer hover:border-red-600' style={{ width: '360px', }}
                        onClick={() => handleClick(product.id, product.name)}
                    >

                        <div className='' >
                            <img className='w-full' style={{ height: '360px' }} src={product.preview} alt={'Image'}></img>

                        </div>
                        <div className='mx-5 ml-2'>
                            <div className='font-bold text-xl'>{product.name}</div>
                            <div className='text-lg'>{product.brand}</div>
                            <div className='text-lg text-green-600 font-bold'>Rs{' ' + product.price}</div>
                        </div>

                    </div>
                ))}
            </div>

            <div className='text-4xl font-bold my-5 ml-4'>Accessories for Men and Women</div>

            <div className='flex mx-5'>
                {productList.map((product) => {
                    return (
                        product.isAccessory === true ?
                            <div className='border-4 mx-5 border-black cursor-pointer hover:border-red-600 bg-grey-600' style={{ width: '360px' }}
                                onClick={() => handleClick(product.id, product.name)}
                            >

                                <div className='' >
                                    <img className='w-full' style={{ height: '360px' }} src={product.preview} alt={'Image'}></img>

                                </div>
                                <div className='mx-5 ml-2'>
                                    <div className='font-bold text-xl'>{product.name}</div>
                                    <div className='text-lg'>{product.brand}</div>
                                    <div className='text-lg text-green-600 font-bold'>Rs{' ' + product.price}</div>
                                </div>

                            </div>
                            :
                            ''
                    )
                })}
            </div>

        </div>
    )
}

export default Container;
