import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SuccessComponent } from './success/success.component';



const appRoutes:Routes=[
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Registration', component:RegistrationComponent
  },
  {
    path:'Contact', component:ContactComponent
  },
  {
    path:'Book-ticket', component:BookTicketsComponent
  },
  {
    path:'Home', component:HomeComponent
  },
  {
    path:'MovieList', component:MovieListComponent
  },
  {
    path:'Thankyou', component:ThankyouComponent
  },
  {
    path:'Success', component:SuccessComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookTicketsComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    HomeComponent,
    MovieListComponent,
    ThankyouComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


