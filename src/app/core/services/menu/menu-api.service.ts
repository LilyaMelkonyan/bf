import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IMenu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuApiService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<IMenu[]> {
    return this.http.get<IMenu[]>('./assets/json/menu.json');
}
}
