import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { TitleSearchService } from './title-search.service'
import { Title } from './title.model'

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title-detail.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [TitleSearchService]
})
export class TitleComponent {

    title: any;
    
    constructor(private _titleSearchService: TitleSearchService, private route: ActivatedRoute) { }

    ngOnInit() {
        this._titleSearchService.getResultsById(this.route.snapshot.params['id'])
            .then((result) => {
                // set datasource
                if (result.Response == "False") {
                    console.error('Title not found.');
                     window.history.back();
                }
                this.title = result;
            })
            .catch((err) => {
                console.error(err); // logging
            })
    }

      goBack(): void {
          window.history.back();
      }
}