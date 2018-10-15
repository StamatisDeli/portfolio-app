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
                    <a data-key='1' onClick={!this.props.page?this.props.indexP:null}>Web Development</a>
                    <a data-key='2' onClick={!this.props.page?this.props.indexP:null}>About + Contact</a>
                </div>
            </div>
        )
    }
}

export default MenuDrawer;