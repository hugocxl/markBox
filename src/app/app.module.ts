import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MdBooksPageComponent } from './pages/md-books-page/md-books-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Services

import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { MdBooksService } from './services/md-books.service';



// Guards

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MdNoteComponent } from './components/md-note/md-note.component';
import { MdBookNavComponent } from './components/md-book-nav/md-book-nav.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: '',  component: LandingPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: 'home',  component: HomePageComponent, canActivate: [ RequireUserGuard ] },
  { path: 'mdBooks',  
    component: MdBooksPageComponent, 
    canActivate: [ RequireUserGuard ],
    children: [
      { 
        path: ':id', 
        component: CardListComponent,
      }, 
      {
        path: ':id/mdNotes/:id', 
        component: MdNoteComponent 
      }
    ]
  },
  { path: 'profile',  component: ProfilePageComponent , canActivate: [ RequireUserGuard ] },
  { path: 'help',  component: HelpPageComponent , canActivate: [ RequireUserGuard ] },
  { path: '**', redirectTo: '' },
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
    SignupFormComponent,
    MdNoteComponent,
    MdBookNavComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    ],
  providers: [
    AuthService,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard,
    MdBooksService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
