import React, { Component } from 'react';
import Photo from './Photo';
import axios from 'axios';
import PhotoForm from './PhotoForm'
import update from 'immutability-helper';

class PhotosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      editingPhotoId: null
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
      this.setState({
        photos: photos, 
        editingPhotoId: response.data.id 
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="container">
        <button className="newPhotoButton btn btn-primary "
          onClick={this.addNewPhoto} >
          New Photo
        </button>
        <div>
          {this.state.photos.map((photo) => {
            if(this.state.editingPhotoId === photo.id) {
              return (<PhotoForm photo={photo} key={photo.id} />)
            } else {
              return (<Photo photo={photo} key={photo.id} />)
            }
        })}
        </div>
      </div>
    )
  }
}

export default PhotosContainer
