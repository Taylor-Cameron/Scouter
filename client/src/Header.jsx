import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
        <div className="header">
            <div className="logo">
                        <img
                        src={require('./docs/logo.png')}
                        alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                      />
                </div>
            <div className="site-title">
                POWER SCOUTER
            </div>
            <div className="date">
                {this.props.date.time}
            </div>

        </div>
        )
    }
}

export default Header