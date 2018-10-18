import React from 'react'
import './Page3.css'

class Page3 extends React.Component {
    render() {
      return (
        <section className="page page3">
          <div className="ornament"></div>
          <div className="inform">
            <i className="material-icons" styles={{'font-size':'40px', 'color':'yellow'}}>fingerprint</i>
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
        </section>
      )
    }
  }
  
  export default Page3;