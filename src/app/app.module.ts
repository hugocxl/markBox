import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
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
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  { path: '',  component: LandingPageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'profile',  component: ProfilePageComponent , canActivate: [ RequireUserGuard ] },
  { path: '**', redirectTo: '' }
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    MdBooksPageComponent,
    ProfilePageComponent,
    HelpPageComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent
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
