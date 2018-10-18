import React from 'react'
import './Page3.css'
import stamatis from './images/stamatis.svg'

class Page3 extends React.Component {
  render() {
    return (
      <section className="page page3">
        <div className="ornament"></div>
        <div className="inform">
          <i className="material-icons">fingerprint</i>
          <h2 className="nameUnder">sta<br />ma<br />tis</h2>
          <p>I am Stamatis Deliyannis, a Front End Developer | Web Designer,<br />
            with a Graphics Design background and a BA.<br />
            I am dedicated to creating elegant, user friendly apps.<br />
            I love design and illustration, and constantly learning new things.<br />
            I have worked with an advertising company, freelance, and  owner of a garden shop.<br />
            I live in Athens Greece, I'm a dad, and in my spare time I go spearfishing, shoot some hoops, or jog.<br />
            Reach me at: <a href="mailto:stamatis.deliyannis@gmail.com" > stamatis.deliyannis@gmail.com</a>
          </p>
        </div>
        <div className="social">
          <ul className="list-social">
            <li>
              <div className="social-container">
                <a href="https://www.facebook.com/stamatis.deliyannis" title="My Facebook Page" target="_blank" rel="noopener">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </li>
            <li>
              <div className="social-container">
                <a href="https://www.linkedin.com/in/stamatis-deliyannis-8274708a/" title="My LinkeIn Page" target="_blank" rel="noopener">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </li>
            <li>
              <div className="social-container">
                <a href="https://github.com/StamatisDeli" title="My GitHub Page" target="_blank" rel="noopener">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div id="stam"><img src={stamatis} alt="stamatis"></img></div>
        <footer>
          <p>&copy; Stamatis Deliyannis 2018</p>
        </footer>
      </section>
    )
  }
}

export default Page3;