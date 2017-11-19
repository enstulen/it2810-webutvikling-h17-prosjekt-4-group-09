import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { Item } from '../../interfaces/item';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from '../../services/data.service';

describe('CategoryComponent', () => {
	let component: CategoryComponent;
	let fixture: ComponentFixture<CategoryComponent>;

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
				declarations: [CategoryComponent],
				schemas: [CUSTOM_ELEMENTS_SCHEMA],
				providers: [DataService]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CategoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
