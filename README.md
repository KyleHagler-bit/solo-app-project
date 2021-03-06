# Quick Journal App
## Description
The purpose of this application is to allow the user to catalogue their feelings, activities, and misc. notes daily in a secure, easy-to-use format.
This is accomplished by providing questions for the user to answer and a home page displaying graphs to give more insight to the user about their routines.
The app also allows for past entries to be deleted or updated and a profile page to add some customizability to the application.

We want to solve the issue of people not finding enough time in the day or not finding a reason to catalogue/journal their feeelings. So by creating a quick, easy app to use, we can still self reflect on our day and hopefully get some understanding from the data gathered over time.

## Screenshots
Login page for app
![LoginPage](/Screenshots/login.png?raw=true)

Home page for app containing latest entry and graphs
![HomePage](/Screenshots/homepage.png?raw=true)

Profile page for the user where they can add a profile picture and change color theme
![ProfilePage](/Screenshots/profilepage.png?raw=true)

Page displaying icons to add to journal entry
![IconsPage](/Screenshots/iconspage.png?raw=true)

Page listing all past entries (with ability to delete or edit)
![PastEntries](/Screenshots/pastentries.png?raw=true)


### Prerequisites
* node.js

## Installation
In order to run this from Github, you will need to:
1. Create a database named ```solo_app```
2. Use the queries in the database.sql file to set up all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. (Postico recommended)
3. Clone/fork the repository
4. Open up your editor of choice and run an ```npm install```
5. Run ```npm run server``` in your terminal
6. Run ```npm run client``` in your terminal
7. The npm run client command should open up a new browser tab for you. Register as a new user and get journaling!


### Usage
After registering as a new user, you can customize your profile page (add image, change color theming) or start by making an entry.
The 'make an entry' button in the nav bar will take you the first question where you can follow the instructions to fill out an entry.
The home page and past entries page will prompt you to make a new entry in order to populate the pages with data.

### Built With
The following is a list of the different technologies/libraries used:
  * Chart.js - Javascript library for data visualization
  * Express - web application framework for Node.js
  * Font Awesome - font and icon toolkit
  * Heroku - cloud platform
  * Bootstrap/CSS - design languages/frameworks
  * Node - Javascript runtime environment
  * Passport - authentication middleware
  * PostgreSQL - relational database management system
  * React - Javascript library for building user interfaces
  * React Transition Group - transition library
  * React Tooltip - provides tooltip functionality
  * Redux + Sagas - Javascript library for managing application state
  * SweetAlerts - Javascript library for alerts/confirmations

### License
MIT

### Acknowledgment
Thank you Emerging Digital Academy for providing me the opprutinity to build this app! All support and troubleshooting is much appreciated.

### Support
If you have suggestions or issues, please feel free to email me at khagler.kh@gmail.com