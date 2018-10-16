import React from 'react'
import './normalize.css'
import './Project.css'

class Project extends React.Component {

  render() {
    return (
      <div className="project-container">
        <div className="description">{"\u002B"}</div>
        <a href={this.props.url} title={this.props.title} target="_blank" rel="noopener noreferrer">
          <h2>{this.props.title}</h2>
          <h3>{this.props.subTitle}</h3>
          <img src={this.props.src} ></img>
          <div className="tags">
            {this.props.tags.map((tag,i) => <p key={i} >{tag}</p>)}
          </div>
        </a>
      </div>
    )
  }
}

export default Project
//          <p>{this.props.description}</p>
/**
 *           <div className="overlay">
            <div class="text">
              <p>{this.props.description}</p>
            </div>
          </div>
 */