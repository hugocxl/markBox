import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Pages

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MdBooksPageComponent } from './pages/md-books-page/md-books-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PinnedPageComponent } from './pages/pinned-page/pinned-page.component';

// Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MdNoteComponent } from './components/md-note/md-note.component';
import { MdBookNavComponent } from './components/md-book-nav/md-book-nav.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { PinnedPreviewComponent } from './components/pinned-preview/pinned-preview.component';

// Services

import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { MdBooksService } from './services/md-books.service';
import { FilesaverService } from './services/filesaver.service';
import { HighlightService } from './services/highlight.service';


// Guards

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { CardPinnedComponent } from './components/card-pinned/card-pinned.component';


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
  { path: 'search',  component: SearchPageComponent, canActivate: [ RequireUserGuard ] },
  { path: 'pinned',  
  component: PinnedPageComponent, 
  canActivate: [ RequireUserGuard ],
  children: [
      { 
        path: ':id', 
        component: PinnedPreviewComponent,
      }
    ]
  },
  { path: 'settings',  component: SettingsPageComponent, canActivate: [ RequireUserGuard ] },
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
    SearchPageComponent,
    SettingsPageComponent,
    SearchComponent,
    PinnedPageComponent,
    CardPinnedComponent,
    PinnedPreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    ProfileService,
    FilesaverService,
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
