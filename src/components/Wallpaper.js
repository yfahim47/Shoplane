import React, { useState } from 'react';
import img1 from '../Image/img1.png';
import img2 from '../Image/img2.png';
import img3 from '../Image/img3.png';
import img4 from '../Image/img4.png';

function Wallpaper() {
    const images = [
        { sln: 0, img: img1 },
        { sln: 1, img: img2 },
        { sln: 2, img: img3 },
        { sln: 3, img: img4 },
    ];
    const [image, setImage] = useState(images[0]);


    const handleClick = (id) => {
        const selectedImage = images.find((obj) => (
            obj.sln === id
        ));
        setImage(selectedImage);
    }

    return (
        <div>

            <div className=''>
                <img src={image.img} alt={'Image'} className='object-fill mx-auto' />
            </div>

            <div className='space-x-3 flex justify-center mt-5'>

                {images.map((item) => (
                    <span key={item.sln} className={
                        `${item.sln !== image.sln ?
                            'h-4 w-4 bg-red-500 rounded-full hover:bg-green-500 cursor-pointer' :
                            'h-4 w-4 rounded-full bg-green-500 cursor-pointer'}`}
                        onClick={() => {
                            handleClick(item.sln)
                        }}
                    ></span>


                ))}
            </div>




        </div>
    )
}

export default Wallpaper
