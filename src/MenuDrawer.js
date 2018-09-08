import React from 'react'
import './MenuDrawer.css'
import './normalize.css'

class MenuDrawer extends React.Component {
    render() {
        return (
            <div className="menu-drawer">
                <div>
                    <a 
                    className="close-drawer"
                    aria-label="Close"
                    onClick={this.props.toggleModal}
                    >&times;</a>
                </div>
                <div className="drawer-content">
                    <a data-key='2' 
                    onClick={!this.props.page?this.props.togglePage:null}
                    >Web Development</a>
                    <a data-key='3'>DTP Oldies</a>
                    <a data-key='4'>Illustrations</a>
                    <a data-key='5'>About + Contact</a>
                </div>
            </div>
        )
    }
}

export default MenuDrawer;