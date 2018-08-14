# MarkHub

## Description

Online notebooks collection based on Markdown.


 ## User stories

### Errors epic
 - **404** - As a user/anon I can see a nice 404 page when I go to a page that doesn’t exist so I know it was my fault 
- **500** - As a user/anon I can see a nice error page when the super team screws it up so I know that is not my fault

 ### Auth epic
 - **Sign Up** - As a user/anon I can sign up on the webpage so I can have an account and access all Markhub funcionalities. 
 - **Login** - As a user I can log in to the application.
 - **Logout** - As a user I can log out from the aplication

### mdBooks epic
 - **List mdBooks** - As a user I can see my mdBooks collection so I can work on them.
 - **Create mdBooks**- As a user I can create mdBooks so I can add mdNotes to it. 
 - **Delete mdBooks**- As a user I can delete my mdBooks and all notes in it.

 
 ### mdNotes epic
 - **Create mdNotes**- As a user I can create mdNotes in md. format.
 - **Edit mdNotes**- As a user I can edit my mdNotes. 
 - **Delete mdNotes**- As a user I can delete my mdNotes.

### Profile
- **View Profile** - As a user I can see my profile page where I can check and edit my info.
- **View help** - As a user I can see a help page with info about how the application works.


## Backlogs:

- As a user I can share and edit notes with other users.

**GitHub**
**Socket.io**

***

## Server
## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|


### mdBooks
|Method|Route|Functionality|
|---|---|---|
|GET| api/myMdBooks| Get all books from logged in user (Id from session - Populate mdNotes id )|
|POST| api/mdBooks| Create new mdBook (Body: title)
|PUT| api/mdBooks/:id| Edit mdBook (Body id, title)
|DELETE| api/mdBooks/:id| Delete mdBook and all notes (Body: id mdBook)|
|POST|api/mdBooks/:id/new|Create new mdNote (body: id, mdNote title, mdNote content)

### mdNotes
|Method|Route|Functionality|
|---|---|---|
|DELETE| api/mdNotes/:id| Delete mdNote (body: id mdNote )
|PUT|api/mdNotes/:id| Edit mdNote (body: id, title, content)

### profile
|Method|Route|Functionality|
|---|---|---|
|getUser()||Get info from currentUser in frontend|
|PUT|api/user/:id|Edit current user info|



## Models

```javascript
User
 - email: String
 - password: String
 - userMdBooks: [{
   type: ObjectId, ref: mdBooks
 }]
```

```javascript
MdBook
 - title: string
 - mdNotes: [{
   type: ObjectId, ref: mdNotes
 }]
```

```javascript
MdNotes
- title: string
- content: string
```

***

## Client
## Routes

  - / (Login/signup)  (require anon)
  - /Home (require user)
  - /mdBooks (require user)
  - /profile (require user)
  - /help (require user)

## Pages

- 404
- Sign up/Sign in
- Home
- MdBooks
- My Profile
- Help

## Components
- Login/Signup form
- Navbar/sidebar
- Mdbooks-list
- list-item (drop down)
- mdNote markdown
- mdNote Html
- profile details
- edit profile details

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Profile Service
  - profile.me()
- mdBooks Service
  - mdBooks.getAll(userId)
  - mdBooks.edit(id)
  - mdBooks.delete(id)
- mdNotes Service
  - mdNotes.getOne(id)
  - mdNotes.edit(id)
  - mdNotes.delete(id)

## Guards

- if logged in cannot access login/signup page
- if not logged in cannot access all pages in app

***

## LINKS



### Trello

https://trello.com/b/FSBUOL9C/markhub

### Git

Client: https://github.com/hcorta/markHub-client
Server: https://github.com/hcorta/markHub-server

[Deploy Link](http://heroku.com)



### Slides.com

[Slides Link](http://slides.com)
