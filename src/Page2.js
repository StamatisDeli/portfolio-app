import React from 'react'
import './Page2.css'
import './normalize.css'
import Project from './Project'

class Page2 extends React.Component {
  render() {
    const projects = this.props.projects
    const thumbnails = this.props.thumbnails
    console.log(thumbnails)
    return (
      <section className="page page2">
        <header className="dev-header">
          <h1>Front End Web Development</h1>
          <div className="dev-github">
            <h3>All of my work<br></br>is on Github</h3>
            <div className="dev-social">
              <a href="https://github.com/StamatisDeli" title="My GitHub Page" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </header>
        <div className="web">
          {projects.map((project, i) =>
            <Project
              project={project}
              src={thumbnails[project.src]}
              key={project.id}
            />
          )}
        </div>
      </section>
    )
  }
}

export default Page2;