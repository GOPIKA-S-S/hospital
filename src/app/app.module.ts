import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontviewComponent } from './frontview/frontview.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontviewComponent,
    SearchDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
