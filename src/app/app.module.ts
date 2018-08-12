import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MdBooksPageComponent } from './pages/md-books-page/md-books-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Services

import { AuthService } from './services/auth.service';

// Guards

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';

const routes: Routes = [
  { path: '',  component: HomePageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'signup',  component: SignupPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'profle',  component: ProfilePageComponent , canActivate: [ RequireUserGuard ] },
  { path: '**', redirectTo: '' }
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    LandingPageComponent,
    HomePageComponent,
    MdBooksPageComponent,
    ProfilePageComponent,
    HelpPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
