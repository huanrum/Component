import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, BrowserXhr,XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";


export default class Socket{
    constructor(url:string) {
        var handle = Date.now();
        this.ws = new WebSocket(url);
        this.ws.onopen = (e)=> {
            console.log('Connection to server opened');
            this.ws.send(JSON.stringify({
                data: handle,
                action: 'login'
            }));
        }
    }

    ngOnInit(){
        console.log('ngOnInit被Angular调用');
        this.ws.onmessage = function (e) {
            document.getElementById('getMessage').innerHTML = JSON.stringify(JSON.parse(e.data),null, 4);
        };
    }
    ngOnDestroy(){
        this.ws.send(JSON.stringify({
            action: 'logout'
        }));
    }


    private ws:WebSocket;
    send(data:any){
        this.ws.send(JSON.stringify({
            data: data
        }));
    }
}