import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'projects/public/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private baseURI: string = environment.apiRoot;

  constructor(private http: HttpClient) {}

  public setURI(baseUrl: string): void {
    this.baseURI = baseUrl;
  }

  doPost(
    endpint: string,
    body: any,
    options: object = {},
    baseUrl?: string
  ): Observable<any> {
    const urlRoot = baseUrl || this.baseURI;
    return this.http.post(`${urlRoot}/${endpint}`, body, options);
  }
  doGet(
    endpint: string,
    options: object = {},
    baseUrl?: string
  ): Observable<any> {
    const urlRoot = baseUrl || this.baseURI;
    return this.http.get(`${urlRoot}/${endpint}`, options);
  }
  doDelete(
    endpint: string,
    options: object = {},
    baseUrl?: string
  ): Observable<any> {
    const urlRoot = baseUrl || this.baseURI;
    return this.http.delete(`${urlRoot}/${endpint}`, options);
  }
  doPut(
    endpint: string,
    body: any,
    options: object = {},
    baseUrl?: string
  ): Observable<any> {
    const urlRoot = baseUrl || this.baseURI;
    return this.http.put(`${urlRoot}/${endpint}`, body, options);
  }
}
