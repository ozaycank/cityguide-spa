import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/file-upload/file-uploader.class';
import { AlertifyServiceService } from '../services/alertify-service.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/photo';
const URL  = 'https://localhost:7098/api/'
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  constructor(private authService:AuthService, private alertifyService:AlertifyServiceService, private activatedRoute:ActivatedRoute) {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item:any) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
 
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
 
    this.uploader.response.subscribe( res => this.response = res );
   }
  photos:Photo[] = [];
  uploader!:FileUploader;
  baseUrl!:'https://localhost:7098/api';
  currentMain!:Photo;
  currentCity:any;
  ngOnInit() {
  this.initializeUploader();
  }
  initializeUploader(){
    this.uploader = new FileUploader({
      url:this.baseUrl+'cities/'+this.currentCity+'/photos',
      authToken: 'Bearer' + localStorage.getItem('token'),
      isHTML5:true,
      allowedFileType:['image'],
      autoUpload:false,
      removeAfterUpload:true,
      maxFileSize:10*1024*1024
    })
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo: Photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded, // Change this to match the 'dateAdded' property
          description: res.description,
          isMain: res.isMain,
          cityId: res.cityId
        };
        this.photos.push(photo);
      }
    }
    

  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
