# BarCode - a Cocktail Search and Library App

## Collaborators are:

### Mae We Serve You

- Zoe (Luting) Chen
- Dennis Frymire
- Leo Ham
- Matt Hart

## Concept

A working full-stack application using the MERN stack that allows users to search for cocktail recipes from an external API, as well as submit and edit their own recipes to the community database.

## Technologies Used

- HTML
- CSS
- JavaScript
- MongoDB
- Express
- React
- Node.js
- JSX

## Wireframe

<img src="https://github.com/dfrymire79/project-3-cocktail-app/blob/dev/public/wireframe-project-3.png?raw=true" alt text="wire frame">

## User Stories

As a user, I want to be able to search for cocktails by …

- specific name
- ingredient or multiple ingredients
- newest cocktails added
- random cocktails to try
- alcoholic versus non-alcoholic

As a user, I want to be able to…

- save drinks I want to try / have tried to my profile
- edit ingredients and measuring and instructions on how to make
- make notes about the drink itself (“have tried/not tried yet” option? “Favorite/Not Favorite”? )

## The App

https://barcode-cocktail-app.herokuapp.com/

## Approach

As a group, we researched APIs and brainstormed app ideas. By process of eliminating our lesser desired options, we chose to create an API centered around cocktails. We also decided from the outset to do a mobile-first design approach.

All of that great SCRUM advice we received? We ended up disregarding it, not purposefully, but as we organically found our groove as a group, with limited availability to meet outside of structured class time. 

Leo and Zoe took on building out the server, models, and the initial show pages. Matt took ownership of wireframing the design, and later, the CSS design. Dennis took on the user stories and other UI elements of the sight, as well as creating the initial database for testing. He also took on managing Github and deploying to Heroku.

These roles stayed somewhat consistent through the week, but we all eventually came together to fine-tune the React components and how they rendered.

## Challenges

- As noted above, we found ourselves having limited availability to meet outside of structured class time. By the end of Wednesday evening's class, we all began jumping into help into each other's designated roles. (But seriously, Leo was the real MVP in figuring out the API search functions.)

- We discovered the API we chose was somewhat limiting after we got underway. For example, we were able to create separate searches by specific drink name or ingredient, or alcholic or non-alcoholic, but was unable to combine everything into one search. The API had different URLs for each time of filter, and some filters brought back very limited info. (For example, searching by ingredient only brings back drink names and images, but not the actual ingredients or measurings.) 

- We found ourselves unable to directly transfer search results from the API into our own database, which would be ideal for the user in a "real world" scenario. 

- We wanted users to be able to filter for alcholic or non-alcholic drinks. That was possible with the API, but again, the information that specific search brought back was limiting.

## What We Would Like To Revisit

- We would like to revisit and address the API issues noted above.

- We would like to come back and add user authentication. We didn't feel comfortable tackling that in the time left after we achieved our other goals. 



