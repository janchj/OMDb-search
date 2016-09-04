import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TitleSearchComponent } from './title/title-search.component'
import { TitleSearchService } from './title/title-search.service'

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [TitleSearchService]
})
export class AppComponent { }