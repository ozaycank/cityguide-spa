import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { AlertifyServiceService } from './alertify-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyServiceService,
    private router: Router
  ) {}

  private baseUrl = 'https://localhost:7098/api/';

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(`${this.baseUrl}Cities`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  getCityById(cityId: number): Observable<City> {
    return this.httpClient.get<City>(`${this.baseUrl}Cities/detail/?id=${cityId}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  getPhotosByCity(cityId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}Cities/photos/?cityId=${cityId}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  add(city: City) {
    return this.httpClient.post<any>(`${this.baseUrl}Cities/add`, city).pipe(
      map((response: any) => response.cityId),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.alertifyService.error('An error occurred.');
    console.error('Error:', error);
    return throwError(() => error);
  }
}
