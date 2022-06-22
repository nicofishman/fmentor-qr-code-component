import React, { FC } from 'react';
import qr from '../Assets/image-qr-code.png'

interface QRComponentProps {

};

const QRComponent: FC<QRComponentProps> = () => {
    return (
        <div className='bg-white w-auto h-auto rounded-2xl flex flex-col items-center mx-7 shadow-lg drop-shadow-xl'>
            <div className="p-7">
                <img src={qr} className='rounded-2xl w-auto sm:w-96 h-auto sm:h-96'/>
            </div>
            <div className='px-5 w-96'>
                <p className='text-center font-bold text-dark-blue text-3xl h-auto'>Improve your front-end skills by building projects</p>
            </div>
            <div className='px-10 w-96 pb-14 py-3'>
                <p className='text-grayish-blue text-lg text-center h-auto'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    );
};

export default QRComponent;
