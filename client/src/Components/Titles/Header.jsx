import React, { Component } from 'react';

class Header extends Component {
    showInformation = (event) => {
        this.props.setModalData(true)
    }

    render() {
        return (
            <div className="header">
                <img
                    className="logo"
                    onClick={() => { window.location.reload() }}
                    src={require('../../docs/logo.png')}
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
                <div className="site-title">
                    POWER SCOUTER
            </div>
                <div className="date">
                    {this.props.date.time}
                </div>
                <img
                    className="header-icon"
                    onClick={this.props.setModalData}
                    src={require('../../docs/information.png')}
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
                <img
                    className="header-icon"
                    onClick={() => { window.location.reload() }}
                    src={require('../../docs/refresh.png')}
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
            </div>
        )
    }
}

export default Header

