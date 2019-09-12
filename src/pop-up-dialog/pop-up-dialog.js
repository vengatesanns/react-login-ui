import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';

const barPositions = {
    vertical: 'bottom',
    horizontal: 'right'
}


class popUpDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            message: ''
        }
    }


    info = (message) => {
        alert(message);
    }

    error = (message) => {
        alert(message);
    }

    // Snack Bar Open / Close
    openSnackBar = (msg) => {
        this.setState({
            open: true,
            message: msg
        });
    }

    closeSnackBar = () => {
        this.setState({
            open: false,
            message: ''
        });
    }

    render() {
        const { vertical, horizontal } = barPositions;
        const { open, message } = this.state;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    key={`${vertical},${horizontal}`}
                    open={open}
                    onClose={this.closeSnackBar}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> {message} </span>}
                />
            </div>
        )
    }
}
export default popUpDialog