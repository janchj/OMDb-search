import { beforeEachProviders, it, describe, expect, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SimpleNotificationsComponent, NotificationsService } from 'angular2-notifications';

import { TitleSearchComponent } from './title-search.component';
import { TitleSearchService } from './title-search.service';

describe('SearchComponent', () => {
    let builder: TestComponentBuilder;

    beforeEachProviders(() => [
        TitleSearchComponent,
        NotificationsService,
        BaseRequestOptions,
        MockBackend,
        TitleSearchService,
        provide(Http, {
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
        })]);

    beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
        builder = tcb;
    }));

    it('should inject the component', inject([TitleSearchComponent],
        (component: TitleSearchComponent) => {
            expect(component).toBeTruthy();
        }));

    it('should create the component', inject([], () => {
        return builder.createAsync(ModalComponentTestController)
            .then((fixture: ComponentFixture<any>) => {
                let query = fixture.debugElement.query(By.directive(TitleSearchComponent));
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
  directives: [TitleSearchComponent]
})
class ModalComponentTestController {
}
