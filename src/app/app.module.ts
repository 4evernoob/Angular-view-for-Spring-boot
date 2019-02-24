import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';

const appRoutes: Routes = [
  {
    path: 'articles/',
    component: ProdComponent,
    data: { title: 'Article List' }
  },
  {
    path: 'product-details/:id',
    component: ProdDetailComponent,
    data: { title: 'Article Details' }
  },
  {
    path: 'product-add',
    component: ProdAddComponent,
    data: { title: 'Article Add' }
  },
  {
    path: 'product-edit/:id',
    component: ProdEditComponent,
    data: { title: 'Article Edit' }
  },
  { path: '',
    redirectTo: 'articles/',
    pathMatch: 'full'
  },
  {
	  path:'**',
	  redirectTo:'articles/'
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    ProdComponent,
    ProdAddComponent,
    ProdDetailComponent,
    ProdEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
