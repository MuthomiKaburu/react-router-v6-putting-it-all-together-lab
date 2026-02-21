# Director & Movies Directory Project

## Overview
This project is a **Director and Movie Directory** web application. It allows users to view directors, see their movies, and add new movies for a director. The project uses **React** for the frontend, **React Router** for routing and nested routes, and **json-server** as a simple backend to serve `db.json`.  

The goal of the project is to provide an interactive interface to explore directors and their movies, making it easy to navigate between directors and their works.

---

## Features

- **List all Directors:** Users can see all directors in the directory with clickable links.  
- **Director Details:** Clicking on a director shows their biography and list of movies.  
- **Movie Details:** Clicking on a movie shows its title, duration, and genres.  
- **Add New Movie:** Users can add a new movie for a specific director via a form.  
- **Nested Routing:** Director details and movie details use nested routes to render content dynamically.  
- **Error Handling:** Displays friendly messages if a director or movie is not found.  

---
## structure 
src/
├─ components/
│ ├─ DirectorContainer.jsx # Fetches directors and renders Outlet for nested routes
│ ├─ DirectorList.jsx # Lists all directors with links
│ ├─ DirectorCard.jsx # Shows director bio and movies, renders nested movie routes
│ ├─ MovieCard.jsx # Shows individual movie details
│ └─ MovieForm.jsx # Form to add a new movie for a director
├─ App.jsx # Main app and routing
├─ index.js # Entry point
db.json # JSON database for directors and movies
## Usage

Navigate to /directors to see all directors.
Click a director to view their biography and movies.
Click a movie to see its details.
To add a new movie, click "Add New Movie" and fill in the title, duration, and genres (comma-separated).
The new movie will appear in the director's movie list automatically.

## Key Notes
ID Handling: All IDs are UUID strings in db.json. Comparisons in React are done using string matching.
Nested Routes: Used <Outlet /> to render nested content such as director details and movie details.
State Management: useState and useOutletContext are used to pass directors and setter functions to nested components.
API Calls: fetch is used to get directors and update movies in the JSON server.

## Technologies Used
React – Frontend framework for building UI
React Router DOM – Handles routing and nested routes
json-server – Mock backend for REST API
UUID – Generates unique IDs for new movies
JavaScript (ES6+) – Programming language
CSS/HTML – Styling and layout

