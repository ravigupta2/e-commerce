import { Injectable } from '@angular/core';
import {CommonService} from "./common";
import {HttpService} from "./http/http.service";

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    constructor(public common: CommonService , public http:HttpService) {
    }

}
