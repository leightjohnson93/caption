import React, { Component } from 'react';
import Photo from './Photo';
import axios from 'axios';
import update from 'immutability-helper';

class PhotosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/photos.json')
    .then(response => {
      this.setState({ photos: response.data })
    })
    .catch(error => console.log(error))
  }

  addNewPhoto = () => {
    axios.post(
      'http://localhost:3000/api/v1/photos',
      { photo: { caption: '' } }
    )
    .then(response => {
      const photos = update(this.state.photos, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({ photos: photos })
    })
    .catch(error => console.log(error))
  }


  render () {
    return (
      <div>
        <button className="btn btn-primary newPhotoButton"
          onClick={this.addNewPhoto} >
          New Photo
        </button>
          {this.state.photos.map((photo) => {
          return (<Photo photo={photo} key={photo.id} />)
        })}
      </div>
    )
  }
}

export default PhotosContainer
