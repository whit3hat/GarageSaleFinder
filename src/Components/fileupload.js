import React, { Component } from 'react';


class  FileUpload extends Component {
    Post = e => {
        e.preventDefault()
        const file = document.getElementById('inputGroupFile01').files
        const formData = new FormData()
      
        formData.append('img', file[0])
      
        fetch('/api/upload', {
          method: 'POST',
          body: formData,
        }).then(r => {
          console.log(r)
        })
        console.log(file[0])
      }
    render() { 
        return ( 
            <div className="container">
            <div className="jumbotron">
              <h1 className="display-4">Image Uplaoder</h1>
              <p className="lead">
                Upload and retrieve images from a database
              </p>
              <hr className="my-4" />
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
            <button onclick={Post} type="button" className="btn btn-primary">
              Upload
            </button>
          </div>
         );
    }
}
 
export default FileUpload;