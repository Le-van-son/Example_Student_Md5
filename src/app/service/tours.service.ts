import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tours} from "../model/tours";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:3000/tuors'
@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Tours[]> {
    return this.httpClient.get<Tours[]>(API_URL);
  };
  save(tours: Tours): Observable<any> {
    return this.httpClient.post(API_URL, tours);
  }
  findById(id: any): Observable<Tours> {
    return this.httpClient.get<Tours>(API_URL + `/${id}`);
  }
  delete (id: any): Observable<Tours> {
    return this.httpClient.delete<Tours>(API_URL + `/${id}`);
  }
  editTour(id: any , tour: any): Observable<any> {
    return this.httpClient.put(API_URL + `/${id}` , tour);
  }
}
