import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProfesionComponent } from './profesion/profesion.component';
import { FormProfesionComponent } from './profesion/form-profesion.component';




const routes:Routes=[
  {path:'',redirectTo:'/profesion',pathMatch:'full'},
  {path:'profesion',component:ProfesionComponent},
  {path:'profesion/form',component:FormProfesionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProfesionComponent,
    FormProfesionComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
