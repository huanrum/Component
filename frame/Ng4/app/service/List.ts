import { Injectable } from '@angular/core';
import { Http, BrowserXhr,XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";


export default class List{
    constructor(http:Http) {
        this.http = http;
    }
    private http:Http;
    get(): Observable<Response>
    {
        return this.http.get('http://192.168.1.248:8888/mall/book/story?pageNumber=1&pageSize=13?pageNumber=1&pageSize=13');
    }
}