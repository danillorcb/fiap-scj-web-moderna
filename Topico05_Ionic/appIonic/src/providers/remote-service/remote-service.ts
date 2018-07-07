import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  url: string = "http://localhost:3000/contatos";
  // url: string = "https://facebook.github.io/react-native/movies.json";

  constructor(public http: Http) { }
  // constructor(public http: HttpClient) { }

  getContatos() {
    return this.http
      .get(this.url)
      .map((res: Response) => res.json());
  }
}
