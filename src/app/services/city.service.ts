import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyServiceService } from './alertify-service.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})
export class CityService {
   
    constructor(private httpClient: HttpClient,private alertifyService:AlertifyServiceService, private router:Router) { }
    baseUrl = 'https://localhost:7098/api/';

    getCities(): Observable<City[]> {
        return this.httpClient.get<City[]>(this.baseUrl + "cities");
    }

    getCityById(cityId: number): Observable<City> {
        return this.httpClient.get<City>(this.baseUrl + "cities/detail/?id=" + cityId);
    }

    getPhotosByCity(cityId: number): Observable<Photo[]> {
        return this.httpClient.get<Photo[]>(this.baseUrl + "cities/photos/?cityId=" + cityId);
    }
    add(city: City) {
        this.httpClient.post(this.baseUrl + 'cities/add', city).subscribe(
         { next:(data: any) => {
            this.alertifyService.success("City added successfully.");
            this.router.navigateByUrl('/cityDetail/' + data.id);
          },
          error:(error: any) => {
            this.alertifyService.error("Error adding City.");
            console.error('Error adding city:', error);
          }}
        );
    }    
    
}      
