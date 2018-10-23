import React from 'react'
import './Page2.css'
import './normalize.css'
import Project from './Project'

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techUsed: [],
      workingProjectsList:this.props.projects
    }
  }

  componentDidMount() {
    this.getTech()
  }
  getTech = () => {
    let jsonRaw = this.props.projects.map(p => p.tags)
    const merged = [].concat(...jsonRaw)
    const final = [...new Set(merged)]
    this.setState({ techUsed: final })
    return final
  }
  handleClick = (e) => {
    const projects = this.props.projects
    const clickTarget = e.target.dataset.key
    const selectedProjects = projects.filter(project =>
      project.tags.includes(clickTarget)
    )
    this.setState({workingProjectsList:selectedProjects})
    console.log(clickTarget, selectedProjects)
  }
  render() {
    const projects = this.props.projects
    const thumbnails = this.props.thumbnails
    const techUsed = this.state.techUsed
    const workingProjectsList = this.state.workingProjectsList
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
        <div className="tech-selector">
          <h3>Filter projects by clicking on a tech:</h3>
          {techUsed.map((tech, i) => <p key={i} data-key={tech} onClick={this.handleClick}>{tech}</p>)}
        </div>
        <div className="web">
          {workingProjectsList.map((project) =>
            <Project
              project={project}
              src={thumbnails[project.src]}
              key={project.title}
              projects={projects}

            />
          )}
        </div>
      </section>
    )
  }
}

export default Page2;