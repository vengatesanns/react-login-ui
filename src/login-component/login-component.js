import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './login-component.css';
import logo from '../assets/login-image.png';

class LoginComponent extends Component {


    render() {
        const header = <img alt="Card" src={logo} />;
        const footer = <span>
            <Button label="Save" icon="pi pi-check" style={{ marginRight: '.25em' }} />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
        </span>;
        return (
            <div className="box-border">
                <Card footer={footer} header={header}>
                    Content
</Card>

            </div>
        )
    }
}
export default LoginComponent