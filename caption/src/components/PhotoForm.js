import React, { Component } from 'react'
import axios from 'axios'

class PhotoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      caption: this.props.photo.caption
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBlur = () => {
    const photo = {
      caption: this.state.caption
    }

  axios.put(
    `http://localhost:3000/api/v1/photos/${this.props.photo.id}`,
    { photo: photo }
  )
  .then(response => {
    console.log(response)
  })
  .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
        <form
          className="form-control"
          onBlur={this.handleBlur}
        >
          <input
            className="input"
            type="text"
            name="caption"
            placeholder="Caption this photo"
            value={this.state.caption}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default PhotoForm
