import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
        <div className="header">
            <div className="date">
                {this.props.date}
            </div>
            <button value="Refresh Page" className="refresh" onClick={() => {window.location.reload()}}>
            <img src={ require('../../docs/refresh.png') } alt="refresh"/>
            </button>
        </div>
        )
    }
}

export default Header