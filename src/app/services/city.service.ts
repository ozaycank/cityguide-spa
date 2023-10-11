import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable()
export class CityService {
    private baseUrl = 'https://localhost:7098/api/'; // Update this URL to match your API endpoint

    constructor(private httpClient: HttpClient) { }

    getCities(): Observable<City[]> {
        return this.httpClient.get<City[]>(this.baseUrl + 'cities');
    }

    getCityById(cityId: number): Observable<City> {
        return this.httpClient.get<City>(this.baseUrl + 'cities/detail/?id=' + cityId);
    }

    getPhotosByCity(cityId: number): Observable<Photo[]> {
        return this.httpClient.get<Photo[]>(this.baseUrl + 'cities/photos/?cityId=' + cityId);
    }
}
