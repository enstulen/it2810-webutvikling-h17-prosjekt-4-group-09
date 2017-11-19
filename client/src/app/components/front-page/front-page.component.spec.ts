import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageComponent } from './front-page.component';

describe('FrontPageComponent', () => {
	let component: FrontPageComponent;
	let fixture: ComponentFixture<FrontPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [FrontPageComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(FrontPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it(
		'should render title in a h1 tag with correct text',
		async(() => {
			fixture = TestBed.createComponent(FrontPageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#header').textContent).toContain(
				'APK - Alkohol Per Krone'
			);
		})
	);
	it(
		'should render subheader',
		async(() => {
			fixture = TestBed.createComponent(FrontPageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#subheader'));
		})
	);
	it(
		'should render googe play image',
		async(() => {
			fixture = TestBed.createComponent(FrontPageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#google-play'));
		})
	);
	it(
		'should render appstore image',
		async(() => {
			fixture = TestBed.createComponent(FrontPageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#appstore'));
		})
	);
	it(
		'should render iphone',
		async(() => {
			fixture = TestBed.createComponent(FrontPageComponent);
			fixture.detectChanges();
			const compiled = fixture.debugElement.nativeElement;
			expect(compiled.querySelector('#iphone'));
		})
	);
});
