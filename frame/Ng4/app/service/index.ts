import { Injectable } from '@angular/core';
import { Http, BrowserXhr,XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";


import List from './List';
import Socket from './Socket';

@Injectable()
export default class Service{
    constructor(http:Http) {
        this.List = new List(http);
        
        http.get(location.origin + '/websocket?ip=' + location.hostname).subscribe(req=>{
            this.Socket = new Socket(req.json().message);
        })
    }
    List:List
    Socket:Socket
};