import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/Rx'; //get everything from Rx  
import { Observable } from 'rxjs/Observable';

import { Customer } from './customer'

@Injectable()
export class CustomersService {
    private url: string = 'http://localhost:20947/api/customers';
    //private url: string = 'https://jsonplaceholder.typicode.com/posts/1';
    headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get(this.url, this.options)
            .map(resp => (resp.json() as Customer[]));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}