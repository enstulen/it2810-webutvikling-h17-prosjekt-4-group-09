import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplistComponent } from './toplist.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from '../../services/message.service';
import { DataService } from '../../services/data.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToplistComponent', () => {
	let component: ToplistComponent;
	let fixture: ComponentFixture<ToplistComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					BrowserModule,
					HttpModule,
					FormsModule,
					InfiniteScrollModule,
					NgbModule.forRoot()
				],
				declarations: [ToplistComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA],
				providers: [MessageService, DataService]
			}).compileComponents();
		})
	);
	beforeEach(() => {
		fixture = TestBed.createComponent(ToplistComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it(
		'should render sort',
		async(() => {
			fixture = TestBed.createComponent(ToplistComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#sort'));
		})
	);
});
