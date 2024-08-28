import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WebApiService {
    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
            }),
            observe: 'response' as 'body',
        };
        return this.httpClient.get(url, httpOptions);
    }

    post(
        url: string,
        body: any,
        headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
        })
    ): Observable<any> {
        return this.httpClient.post(url, body, { headers });
    }

}
