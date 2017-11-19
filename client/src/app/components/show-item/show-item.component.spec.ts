import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItemComponent } from './show-item.component';
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
describe('ShowItemComponent', () => {
	let component: ShowItemComponent;
	let fixture: ComponentFixture<ShowItemComponent>;

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
				declarations: [ShowItemComponent],
				providers: [MessageService, DataService]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ShowItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
