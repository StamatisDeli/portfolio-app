import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import Page1 from './Page1'
import MenuDrawer from './MenuDrawer'
import Page2 from './Page2'
/*,<Page3 key='3'/>,<Page4 key='4'/>,<Page5 key='5'/>*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            page: false,
            modal: false,
            pages: [<Page1 key='1' />, <Page2 key='2' />]
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.togglePage = this.togglePage.bind(this)
        this.handleHomeButton = this.handleHomeButton.bind(this)
    }

    toggleHome(){
        this.setState(({ home }) => ({ home: !home }));
    }

    toggleModal() {
        this.setState(({ modal }) => ({ modal: !modal }));
        this.toggleHome()
    }

    togglePage(e) {
        this.setState(({ page }) => ({ page: !page }))
        this.toggleModal()
        this.toggleHome()
    }

    handleHomeButton() {
        this.togglePage()
        this.toggleModal()
    }

    render() {
        console.log(this.state.pages[1].key)
        const modal = this.state.modal
        const page = this.state.page
        const home = this.state.home
        return (
            <div className="App">
                <button
                    className="back-button"
                    aria-label="back button"
                    onClick={!home?this.handleHomeButton:null}>
                    <img src="./thumbnails/sdlogo.svg" alt="Back Button"></img>
                </button>
                {home?
                <nav
                    className="nav"
                    onClick={this.toggleModal}>
                    <a title="menu" aria-label="menu">
                        <img src="./thumbnails/hamburger.svg" alt="Back Button"></img>
                    </a>
                </nav>:null}
                {!page && <Page1 />}
                {modal &&
                    <MenuDrawer
                        toggleModal={this.toggleModal}
                        togglePage={this.togglePage}
                        page2={this.state[1]}
                    />}
                {page &&
                    <Page2 />}
            </div>
        )
    }
}

export default App;
