import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from '../../interfaces/item';

import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';

describe('CategoriesComponent', () => {
	let component: CategoriesComponent;
	let fixture: ComponentFixture<CategoriesComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					BrowserModule,
					HttpModule,
					FormsModule,
					InfiniteScrollModule,
					NgbModule.forRoot(),
					RouterTestingModule
				],
				declarations: [CategoriesComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CategoriesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
