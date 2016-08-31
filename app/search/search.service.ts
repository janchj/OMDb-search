import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// api config
const config = {
  API_URL: 'http://www.omdbapi.com',
};

@Injectable()
export class SearchService {
  constructor(private _http: Http) { }

  // fetch results from external source
  fetchResults(url: string) {
    return this._http.get(url)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); // logging
        return Promise.reject(err);
      });
  }

  // get results by keyword
  getResultsByKeywords(keywords: string) {
    var queryUrl = config.API_URL + `/?t=${keywords}&plot=short&r=json`;
    return this.fetchResults(queryUrl);
  }
}