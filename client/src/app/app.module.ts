// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Components
import { AppComponent } from './app.component';
import { ToplistComponent } from './components/toplist/toplist.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AlcoholItemComponent } from './components/alcohol-item/alcohol-item.component';
import { ShowItemComponent } from './components/show-item/show-item.component';

// Services
import {DataService} from './services/data.service';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

const appRoutes: Routes = [
  {path: '', component: ToplistComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'item/:id', component: ShowItemComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'front', component: FrontPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ToplistComponent,
    CategoriesComponent,
    AlcoholItemComponent,
    ShowItemComponent,
    AboutPageComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InfiniteScrollModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
