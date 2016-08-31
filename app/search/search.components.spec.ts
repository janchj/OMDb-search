import { beforeEachProviders, it, describe, expect, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import { SimpleNotificationsComponent, NotificationsService } from 'angular2-notifications';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

describe('SearchComponent', () => {
    let builder: TestComponentBuilder;

    beforeEachProviders(() => [
        SearchComponent,
        NotificationsService,
        BaseRequestOptions,
        MockBackend,
        SearchService,
        provide(Http, {
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
        })]);

    beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
        builder = tcb;
    }));

    it('should inject the component', inject([SearchComponent],
        (component: SearchComponent) => {
            expect(component).toBeTruthy();
        }));

    it('should create the component', inject([], () => {
        return builder.createAsync(ModalComponentTestController)
            .then((fixture: ComponentFixture<any>) => {
                let query = fixture.debugElement.query(By.directive(SearchComponent));
                expect(query).toBeTruthy();
                expect(query.componentInstance).toBeTruthy();
            });
    }));

});

@Component({
  selector: 'test',
  template: `
    <app-search></app-search>
  `,
  directives: [SearchComponent]
})
class ModalComponentTestController {
}
