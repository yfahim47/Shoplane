import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productList from '../Common/productList';

function Product() {

    const { id, name } = useParams();
    console.log('Id: ', id, name)

    const [selectedProduct, setSelectedProduct] = useState({});
    const [test, setTest] = useState(true);

    //console.log(productselectedProduct, 'productselectedProduct')
    const [pic, setPic] = useState()
    const ImageHandler = (picture) => {

        setPic(picture);
    }

    useEffect(() => {
        const product = productList.find(item => item.id === id);
        setSelectedProduct(product);

        setPic(product.preview);
    }, [])

    console.log('selected product:', selectedProduct);

    return (

        <>
            <div className='flex justify-between mx-32'>
                <div className='w-1/3'>
                    <img src={pic} />
                </div>
                <div className='w-2/3 ml-20 my-5'>
                    <div className='text-4xl'>{selectedProduct.name}</div>
                    <div className='text-lg text-grey-600'>{selectedProduct.brand}</div>
                    <div className='text-green-700 text-3xl'>Price:{' ' + selectedProduct.price}</div>
                    <div className='text-2xl text-grey-600'>Discription</div>
                    <div className='text-2xl text-yellow-900'>{selectedProduct.description}</div>
                    <div className='text 2xl font-bold'>Product Preview</div>
                    <div className='flex justify-between mt-4'>
                        {selectedProduct?.photos?.map((photo) => {
                            return (
                                <>
                                    <div className=''>
                                        <div className='ml-4 border-4 border-black cursor-pointer hover:border-green-600'
                                            onClick={() => {
                                                ImageHandler(photo)
                                            }}
                                        >
                                            <img className='w-fit' src={photo} />
                                        </div>

                                    </div>
                                </>
                            )
                        })}

                    </div>
                    {/* <div className='bg-yellow-500' onClick={() => { setTest(!test) }}>This look</div>
                    {test && (<div className='bg-red-500 mt-10'> this is test div</div>)} */}
                </div>
            </div>
        </>


    )
}

export default Product;
