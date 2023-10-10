import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable()
export class CityService {

    constructor(private httpClient: HttpClient) { }
    path = "https://localhost:7098/api/";
    getCities(): Observable<City[]> {
        return this.httpClient.get<City[]>(this.path + "cities");
    }
    getCityById(cityId:number): Observable<City> {
        return this.httpClient.get<City>(this.path + "cities/detail/?id=" + cityId);
    }
    getPhotosByCity(cityId:number): Observable<Photo[]> {
        return this.httpClient.get<Photo[]>(this.path + "cities/photos/?cityId="+cityId);
    }

}
