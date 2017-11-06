// Modules
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { NgModule, ApplicationRef } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { ToplistComponent } from './components/toplist/toplist.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AlcoholItemComponent } from './components/alcohol-item/alcohol-item.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { ProfileComponent } from './components/profile/profile.component';

// Services
import { AboutPageComponent } from './components/about-page/about-page.component';
import { DataService } from "./services/data.service";
import { CategoryComponent } from "./components/category/category.component";

import { MessageService } from "./services/message.service";
import { SearchComponent } from "./components/search/search.component";
import { FrontComponent } from "./components/front/front.component";

const appRoutes: Routes = [
	{ path: "", component: FrontComponent },
	{ path: "top", component: ToplistComponent },
	{ path: "categories", component: CategoriesComponent },
	{ path: "item/:id", component: ShowItemComponent },
	{ path: "categories/:name", component: CategoryComponent },
	{path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutPageComponent},
	{path: 'search', component: SearchComponent},

];

@NgModule({
	declarations: [
		AppComponent,
		ToplistComponent,
		CategoriesComponent,
		AlcoholItemComponent,
		ShowItemComponent,
		CategoryComponent,
		SearchComponent,
		FrontComponent,
		ProfileComponent,
		AboutPageComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		InfiniteScrollModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(appRoutes),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCdLQc1B1sfmniQbYHwDaf7moQ5ZXt62BA'
		})
	],
	providers: [DataService, MessageService],
	bootstrap: [AppComponent]

})
export class AppModule {}
