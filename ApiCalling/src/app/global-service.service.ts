import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private httpClient: HttpClient, private http: Http,) { }

  url = "http://192.168.100.22:8080/KG_WEB_APP_TEMP/KGAPI/Inward/InwardData"

  json: any;

  async postData(obj: any) {
    let response = await this.http.post(this.url, obj).toPromise();
    return await response.json();

  }

}










