import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from './services/message.service';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					BrowserModule,
					HttpModule,
					FormsModule,
					InfiniteScrollModule,
					NgbModule.forRoot(),
					RouterTestingModule,
					AgmCoreModule.forRoot({
						apiKey: 'AIzaSyCdLQc1B1sfmniQbYHwDaf7moQ5ZXt62BA'
					})
				],
				declarations: [AppComponent],
				providers: [MessageService, DataService]
			}).compileComponents();
		})
	);
	it(
		'should create the app',
		async(() => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.debugElement.componentInstance;
			expect(app).toBeTruthy();
		})
	);
	// it(
	// 	`should have as title 'app'`,
	// 	async(() => {
	// 		const fixture = TestBed.createComponent(AppComponent);
	// 		const app = fixture.debugElement.componentInstance;
	// 		expect(app.title).toEqual('app');
	// 	})
	// );
});
