import React, { Component } from 'react'
import './Page2.css'
import './normalize.css'
import Project from './Project'

class Page2 extends React.Component {
  state = { visible: false }

  handleClick=(project, e)=> {
    //e.preventDefault()
    //e.stopPropagation()
    console.log(e.target.project.id)
    this.setState({
      visible: !this.state.visible.project
    })
  }


  render() {
    //console.log(this.props.visible)
    const projects = this.props.projects
    const thumbnails = this.props.thumbnails
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
              title={project.title}
              description={project.description}
              src={thumbnails[project.src]}
              project={project}
              tags={project.tags}
              url={project.url}
              id={project.id}
              key={project.id}
              subTitle={project.subTitle}
              visible={this.state.visible}
              handleClick={this.handleClick}
            />
          )}
        </div>
      </section>
    )
  }
}

export default Page2;