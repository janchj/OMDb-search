import { Component, Input, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SimpleNotificationsComponent, NotificationsService } from 'angular2-notifications';
import * as _ from 'lodash';

import { TitleSearchService } from './title-search.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'title-search.component.html',
  providers: [ NotificationsService],
  directives: [ SimpleNotificationsComponent, ROUTER_DIRECTIVES]
})

export class TitleSearchComponent {

  // notification config
  public notificationOptions = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 1,
    showProgressBar: true,
    pauseOnHover: true
  };

  // models
  @Input() keywords: string;
  @Output() results: any[] = null;

  constructor(private _titleSearchService: TitleSearchService,
    private _notificationService: NotificationsService) { }

  // run search based on customer's keyword(s)
  search() {

    // clear results
    this.results = null;

    this._titleSearchService.getResultsByKeywords(this.keywords)
      .then((results) => {

        // if status ok, then get the results
        if (results.Response == "False") {
          this.handleInfo('Sorry! no titles match your search. Maybe try a different set of keywords?');
        }
        else
        {
          // set datasource
          this.results = [];
          this.results.push(results);
        }
      })
      .catch((err) => {
        this.handleError(err); // logging

      })
  }

  // handle errors and show a message to user
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // logging
    return this._notificationService.info('Ooops!', errMsg); // show user friendly message
  }

  // handle errors and show a message to user
  private handleInfo(info: any) {
    //console.error(info); // logging?
    return this._notificationService.info('Ooops!', info); // show user friendly message
  }

}