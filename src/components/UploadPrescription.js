import React, { Component } from 'react'

export default class UploadPrescription extends Component {
    uploadWidget() {
        window.cloudinary.openUploadWidget({ cloud_name: 'dlld49z2k', upload_preset: 'humw6nxm'},
            function(error, result) {
              if(!error && result && result.event === "success") { 
                 let text = "Please Check the uploaded prescription at "+ encodeURIComponent(result.info.secure_url);
                 let link = "http://wa.me/918248161684?text=" + text;
                 window.location.href=link;
              }
            });
    }
    render() {
        return (
            <div>
                <button  onClick={this.uploadWidget.bind(this)} className=" cloudinary-button btn btn-primary btn-sm">Upload Prescription</button>
            </div>
        )
    }
}
