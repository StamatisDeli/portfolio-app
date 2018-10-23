import React from 'react'
import './normalize.css'
import './Project.css'



class Project extends React.Component {
  state = { textHidden: true}

  handleClick = (e) => {
    this.setState({
      textHidden: !this.state.textHidden
    })
    console.log(this.state, this.props.project.id)
  }

  render() {
    const textHidden = this.state.textHidden
    return (
      <div className="project-container" >
        <div className="description" onClick={this.handleClick} id={this.props.project.id}>{"\u002B"} </div>
        <a href={this.props.project.url} title={this.props.project.title} target="_blank" rel="noopener noreferrer" >
          <h2>{this.props.project.title}</h2>
          <h3>{this.props.project.subTitle}</h3>
          <img src={this.props.src} alt={`A snapshot of ${this.props.project.title} project in mobile view`}></img>
          <div className="tags">
            {this.props.project.tags.map((tag, i) => <p key={i} >{tag}</p>)}
          </div>
          {!textHidden &&
            <div className="overlay-text" onChange={this.handleChange}>
                <p>{this.props.project.description}</p>
            </div>}
        </a>
      </div>
    )
  }
}

export default Project