import { Injectable } from '@angular/core';
import { Http, BrowserXhr,XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";


import List from './List';

@Injectable()
export default class Service{
    constructor(http:Http) {
        this.List = new List(http);
    }
    List:List
};