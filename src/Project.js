import React from 'react'
import './normalize.css'
import './Project.css'

class Project extends React.Component {
  state = { textHidden: true }

  handleClick = () => {
    this.setState({
      textHidden: !this.state.textHidden
    })
  }
  
  render() {
    const textHidden = this.state.textHidden
    return (
      <div className="project-container" >
        <div className="description" onClick={this.handleClick}>{"\u002B"}</div>
        <a href={this.props.url} title={this.props.title} target="_blank" rel="noopener noreferrer">
          <h2>{this.props.title}</h2>
          <h3>{this.props.subTitle}</h3>
          <img src={this.props.src} alt={`A snapshot of ${this.props.title} project in mobile view`}></img>
          <div className="tags">
            {this.props.tags.map((tag, i) => <p key={i} >{tag}</p>)}
          </div>
          {!textHidden ?
            <div className="overlay-text">
                <p>{this.props.description}</p>
            </div> : textHidden}
        </a>
      </div>
    )
  }
}

export default Project
/**
 *           
 * <div className="overlay">
            <div class="text">
              <p>{this.props.description}</p>
            </div>
          </div>
 */