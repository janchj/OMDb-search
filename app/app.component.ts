import { Component } from '@angular/core';

import { SearchComponent, SearchService } from './search/index'

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <app-search></app-search>
        </div>`,
    directives: [SearchComponent],
    providers: [SearchService]
})
export class AppComponent { }