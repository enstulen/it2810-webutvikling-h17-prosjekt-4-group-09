import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholItemComponent } from './alcohol-item.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';
import { Item } from '../../interfaces/item';

import { AppComponent } from '../../app.component';
import { ToplistComponent } from '../../components/toplist/toplist.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { ShowItemComponent } from '../../components/show-item/show-item.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { SearchComponent } from '../../components/search/search.component';
import { FrontComponent } from '../../components/front/front.component';
import { AboutPageComponent } from '../../components/about-page/about-page.component';
import { CategoryComponent } from '../../components/category/category.component';
class RouterStub {
	navigateByUrl(url: string) {
		return url;
	}
}

const appRoutes: Routes = [
	{ path: '', component: FrontComponent },
	{ path: 'top', component: ToplistComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'products/:id', component: ShowItemComponent },
	{ path: 'categories/:name', component: CategoryComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'search', component: SearchComponent }
];
describe('AlcoholItemComponent', () => {
	let component: AlcoholItemComponent;
	let fixture: ComponentFixture<AlcoholItemComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule.withRoutes(appRoutes)],
				declarations: [AlcoholItemComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AlcoholItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
