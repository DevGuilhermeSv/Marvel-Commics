import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
   ts = new Date().getMilliseconds();
   //hash = md5(this.ts + "1f24504521f3751d82ce28828714fa08245a148690716f845301a38e357037bdc9b47351");

  public getComics(params:Params): Observable<any>{

   return this.http.get(`https://gateway.marvel.com:443/v1/public/comics`,{params})

  }
}
