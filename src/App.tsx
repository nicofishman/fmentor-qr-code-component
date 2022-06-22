import React, { FC } from 'react';
import QRComponent from './Components/QRComponent';

interface AppProps {

};

const App: FC<AppProps> = () => {
    return (
        <div className="bg-light-gray text-white flex h-screen w-full justify-center items-center text-3xl">
            <QRComponent />
        </div>
    );
};

export default App;
