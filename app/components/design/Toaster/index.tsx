'use client';

import { ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'dark',
} as ToastContainerProps;

const Toaster = () => {
    return <ToastContainer {...toastConfig} />;
};

export default Toaster;
