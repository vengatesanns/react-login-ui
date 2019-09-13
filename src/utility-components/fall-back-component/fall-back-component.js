import React from 'react';
import ErrorPage from '../../assets/error-page.jpg';
import Styles from './fall-back.module.css'


function FallBackComponent() {
    return (
        <div className={Styles.background}>
            <img src={ErrorPage} alt="error-page.jpg" />
        </div>
    );
}
export default FallBackComponent;
