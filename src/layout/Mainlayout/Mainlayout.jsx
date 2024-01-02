import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

function Mainlayout() {
    const navigation = useNavigation()
    console.log(navigation);

    return (
        <div className='conatiner-main'>
            <Header />

            <div>
                {navigation.state === "loading" ? <Loader /> : <Outlet />}
            </div>
            <Footer />
        </div>
    );
}
export default Mainlayout;
