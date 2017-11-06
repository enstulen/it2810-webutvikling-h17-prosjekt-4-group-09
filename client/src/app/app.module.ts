// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from './app.component';
import { ToplistComponent } from './components/toplist/toplist.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AlcoholItemComponent } from './components/alcohol-item/alcohol-item.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { ProfileComponent } from './components/profile/profile.component';

// Services
import { DataService } from "./services/data.service";
import { CategoryComponent } from "./components/category/category.component";

import { CommonModule } from "@angular/common";
import { MessageService } from "./services/message.service";
import { SearchComponent } from "./components/search/search.component";
import { FrontComponent } from "./components/front/front.component";

const appRoutes: Routes = [
	{ path: "", component: FrontComponent },
	{ path: "top", component: ToplistComponent },
	{ path: "categories", component: CategoriesComponent },
	{ path: "item/:id", component: ShowItemComponent },
	{ path: "categories/:name", component: CategoryComponent },
	{ path: "search", component: SearchComponent },
	{path: 'profile', component: ProfileComponent},
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
		ProfileComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		InfiniteScrollModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(appRoutes)
	],
	providers: [DataService, MessageService],
	bootstrap: [AppComponent]
})
export class AppModule {}
