import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponent } from './about-page.component';
import { AgmCoreModule } from '@agm/core';

describe('AboutPageComponent', () => {
	let component: AboutPageComponent;
	let fixture: ComponentFixture<AboutPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					AgmCoreModule.forRoot({
						apiKey: 'AIzaSyCdLQc1B1sfmniQbYHwDaf7moQ5ZXt62BA'
					})
				],
				declarations: [AboutPageComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it(
		'should render title in a h1 tag',
		async(() => {
			fixture = TestBed.createComponent(AboutPageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#header').textContent).toContain('OM APK');
		})
	);
});
