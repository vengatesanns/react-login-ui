import React, { Component } from 'react'

class popUpDialog extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    info = (message) => {
        alert(message);
    }

    error = (message) => {
        alert(message);
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}
export default popUpDialog