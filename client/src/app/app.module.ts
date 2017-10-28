// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ToplistComponent } from './components/toplist/toplist.component';
import { CategoriesComponent } from './components/categories/categories.component';

const appRoutes: Routes = [
  {path: '', component: ToplistComponent},
  {path: 'categories', component: CategoriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToplistComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
