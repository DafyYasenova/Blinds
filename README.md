# "Blinds"
React JS course project

# Overview:
'Blinds' is an online app for interior blinds. In it you can find a wide variety of models and colors. 
The project was developed during the React JS course at Software University.

# Installation and Getting Started
To set up the project:

Clone the repository: https://github.com/DafyYasenova/Blinds.git

Navigate to the project folder.

Client side:
- navigate to client folder: cd client
- npm run dev

Server side: use practice server SoftUni, having initialized ready posts.

There are registered users with email and password:

peter@abv.bg : 123456

george@abv.bg : 123456

- Open new terminal
- Navigate to server: cd server
- Install all dependencies using: npm install
- Start server: node server.js

Run the project and enjoy!


# Features:
## Authentication: 
Done by registering and logging in to the system
## Home page: 
Visible to everyone logged into the app.
## About page: 
Shows some background and information about the blinds. The page is visible to everyone logged into the app.
## Contact: 
Can be accessed by everyone.
## Catalog: 
Published posts are visible to everyone, but only logged in users can access detailed information about each post. Not logged in users are redirected to the login page.
## Details: 
This page contains information such as name of the blind, product number, category, material, colors, price, additional information, photo of the relevant blind. 
- There is a comment section for that particular post, from other registered users. 
- There is a button to return to the catalog.
- Logged in users can like/dislike the respective post, add comment in dropdown section, but only if they are not the creator of the connected post.
- Edit page - every logged in user can edit their posts.
- Delete -  every logged in user can delete their posts.
## Create page: Visible only for logged in users.
## Search page: Accessible page only for logged in user. In it you can search for a specific product by name.
- When starting the search page, 3 latest published blinds appear. 
- During a search, this section is hidden and the relevant search results or caption, if none are found, appear in its place.
## Profile page: every registered and logged in user has access to his profile page, which contains information about the user himself, as well as all the posts created by him.

# Technologies
- React library
- Vite
- React Router DOM
- HTML
- CSS
- JavaScript
# License
This project is licensed under the MIT License.
# Notice:
The app is not responsive. To look good on screens larger than 15.6 inches, please increase your resolution.
