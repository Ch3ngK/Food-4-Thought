# Food-4-Thought

## Proposed Level of Achievement  
Project Apollo 

## Motivation  
There exists numerous websites providing a list of the top local foods in Singapore by credible food critics that incoming tourists and locals can refer to for food recommendations. Although these websites are reliable, it would be better to hear from locals who live in different areas of Singapore, and are more knowledgeable of the food available in their areas. This ensures that underrated foods in obscure locations are brought to surface for tourists and locals to enjoy, creating a better food discovery experience. Therefore, we decided to develop a web-app curated by real locals who have experience tasting local foods.

This was coupled with the fact that we wanted to learn more about web application development, about how we are able to combine the various suites of coding languages that serve the functions for frontend and backend to create a fully functioning application.

## Aim  
To bring out the hidden, local food to tourists and even locals who have yet to experience Singapore’s myriad of food.

## User Stories
1. As a Singaporean, who is a proud citizen of this nation, I would want to be able to know the hidden gems around my area in order to bring friends from other countries to those places and show off my country

2. As a Singaporean, who is tired of eating the same outside food that I have been eating since childhood, to be able to find new places to eat

3. As a Singaporean, who loves to find new food places to try out, to be able to find places in the palm of my hand

4. As a Singaporean, I want to be able to find food places conveniently

5. As a Singaporean, I want to be able to find food places that has good reviews and that are backed up by reputable Singaporeans

6. As a Singaporean, I want to be able to help to contribute to the food scene in Singapore, to help other people find their favourite foods

7. As a Singaporean, I want to have our own application that is proudly Singaporean owned to have a unique community to share food with each other and visitors as well

8. As a Singaporean, I want an application that is easy to navigate and easy to use, even for the elderly

## Scope of the Project

Food-4-thought will be a web-based application that will provide information about highly recommended food places of various different cuisines and where the user will be able to input their thoughts as well.

If the user is feeling adventurous, they will be able to create a food trail that they are able to follow as they go about their day of discovery. The users can navigate around Singapore using the built-in Google Maps feature that will be integrated into the application.

Food-4-thought’s features will be highlighted below, using the following format:  
[Proposed] - features for the application by Splashdown  
[Current Progress] - elaboration on our current progress of the specific feature

## Features 

### Feature 1

_FOOD CUISINES RECOMMENDATION TO THE USER_
 
**[Proposed]**  
Our proposed food recommendation system to the user will be featured on the main page of the application after the user has logged in. The system is designed to assist users by simplifying the decision-making process when choosing what to eat, and offering personalized food suggestions tailored to the user's preferences.

This will be achieved by choosing 3 dishes from 3 different cuisines that will be updated daily and be shown in the main page. The user is then able to click the recommended dish and would be redirected to the page which displays all of the food places with regards to the dish.

**[Current Progress]**  
Currently, our proof-of-concept is just a static design of 3 cuisines hard-coded into the main page in order for users to visualize how it would look like blended into the main page. 


### Feature 2

_A FORUM OF FOOD RECOMMENDATION FOR LOCALS_

**[Proposed]**  
Users are able to search their desired food or food places by searching through their desired categories such as the cuisine, name, etc. There will be a 'Cuisines' button in the main page that will lead to the page where the users are able to choose their desired cuisine. The users are then able to click on the cuisines that they would like to eat and it would lead them to a page with the various dishes or food places that are available corresponding to the cuisine. 

**[Current Progress]**  
For Milestone 1, we would be implementing a hard-coded version of the forum for these food places with clickable buttons that will be able to lead to the next page. However, the information of those pages would be still and non-interactive as we have not integrated the database into the application.

### Feature 3

_INTEGRATED GOOGLE MAPS SYSTEM_

**[Proposed]**  
These integrated google maps systems would be able to allow the user to pin the places of interest for food, as well as provide accurate directions to the location of the food places that they have selected. Moreover, the user would be able to see their current location and how far they are away from the location of the food place that they have selected.

**[Current Progress]**  
For Milestone 1, this has yet to be implemented. Users would not be able to see the food places on the maps yet as we have yet to integrate the database.

### Feature 4

_FOOD TRAIL SYSTEM_

**[Proposed]**  
The user would be able to plan a mini 1-day food trail for local food, which includes directions for each food location that is modeled as a ‘stop’ in their culinary journey. The system will provide directions in between stops, ensuring a seamless experience. The trail can be extended to two or more days depending on the user’s preferences or requirements. Additionally, users can create their own personalised food trails by selecting the foods they desire from the various cuisines provided. Based on their selections, the system will draft a mini schedule to guide them. 

**[Current Progress]**  
For Milestone 1, this has yet to be implemented as we have not yet integrated with the google maps API. However, we are planning to include a basic implementation of the food trail idea by utilising a system that the user is able to add certain locations to a list which is similar to a task editor.

### Feature 5

_REVIEWS SYSTEM_

**[Proposal]**  
The user would be able to submit reviews and rate food locations from a scale of 1 to 5 stars, especially for places they consider to be a 'hidden gem' in Singapore. Other users would be able to see the review and would be able to upvote that particular place if they agree. If other users disagree with the review, they would be able to downvote and then be prompted to include their own rating and feedback of the place. 

**[Current Progress]**  
For Milestone 1, this has yet to be implemented. This would be considered an additional extension of our other features. A hard-coded simulation of the review system has been created for demonstration purposes only.

## Tech Stack 

### Frontend
- User interface (HTML/CSS/TypeScript)
- Application Programming Interface (Postman API for Get and Post Requests)
- React (Using Next.js)

### Backend
- Account and Storage system (Supabase Database)

### Editors
- Visual Studio Code Editor

### Version / Source Control
- Git / Github

## What is different in our product?    

Most food apps like Google Maps reviews surface the usual popular spots but we go deeper. Our web application highlights truly hidden gems through local reviews, upvotes, and real experiences, helping users discover places they would not otherwise know existed. It is about uncovering the overlooked, not just following the main crowd. 

## Project Timeline & Milestones

### Milestone 1

| Tasks                                  | Description                                                                 | Date               |
|----------------------------------------|-----------------------------------------------------------------------------|--------------------|
| **Frontend application design**        | Design the web application looks for login page                             | 22 May - 24 May    |
|                                        | Design the web application looks for main/home page                         | 24 May - 25 May    |
|                                        | Design the web application looks for food trial page                        | 28 May - 29 May    |
|                                        | Design the web application looks for cuisines page                          | 28 May - 29 May    |
|                                        | Design the web application looks for food places page                       | 28 May - 31 May    |
|                                        | Design the web application looks for 'Forgot password' and 'Sign-up'        | 29 May - 30 May    |
| **Backend research**                   | Familiarising and learning about Supabase and how it connects to frontend   | 18 May - 2 June    |

#### Evaluation Milestone 1 (2 June):
- Ideation of how the application will look  
- Proof-of-concept: basic navigation between different pages

### Milestone 2

| Tasks                                  | Description                                                                 | Date               |
|----------------------------------------|-----------------------------------------------------------------------------|--------------------|
| **Frontend application design (cont’d)** | Design the web application looks for the reviews page                     | 2 June - 8 June    |
|                                        | Design the web application for the maps page                                | 2 June - 8 June    |
| **User Interface**                     | Standardise the overall UI of the application                               | 2 June - 8 June    |
|                                        | Main Menu screen                                                            | 2 June - 8 June    |
|                                        | Ensure the UI is consistent                                                 | 2 June - 8 June    |
| **Database Integration (Supabase)**    | All pictures are loaded from Supabase                                       | 9 June - 27 June   |
|                                        | Cuisines and food places can be saved and displayed                         |                    |
|                                        | Ability to save and load the website again                                  |                    |
|                                        | Authentication                                                              |                    |
| **Testing and Debugging**              | Preparation for Milestone 2                                                 | 27 June - 30 June  |

#### Evaluation Milestone 2 (30 June): Linking with Database
- State is saved every time the application is loaded  
- Improved application UI  
- Authentication

### Milestone 3

| Tasks                                  | Description                                                                 | Date               |
|----------------------------------------|-----------------------------------------------------------------------------|--------------------|
| **Integration with Google Maps API**   | Integrate Google Maps support for food places                               | 1 July - 12 July   |
|                                        | Tagging of food places on the application via Google Maps                   |                    |
|                                        | Wayfinding to the food place via Google Maps                                |                    |
| **Implementing Forum System**          | Ability to upvote / downvote                                                | 13 July - 23 July  |
|                                        | Add reviews to food places                                                  |                    |
|                                        | Add pictures together with the reviews                                      |                    |
| **Testing / Debugging**                | Ensuring all the systems work well together                                 | 24 July - 28 July  |

#### Evaluation Milestone 3 (28 July): First Working Prototype
- The entire application should work cohesively

### Milestone 4

| Tasks                                  | Description                                                                 | Date               |
|----------------------------------------|-----------------------------------------------------------------------------|--------------------|
| **Refinement**                         | Improving flow                                                              | 28 July - 27 August|
|                                        | Testing, feedback, user experience                                          |                    |
|                                        | Testing and debugging                                                       |                    |
| **Additional Review Feature**          | Ability to review users (improving credibility)                             | 28 July - 13 August|

### Splashdown: Completed Application with Add-ons
📅 **Delivery Date**: 27 August

## Proof-of-Concept
[insert pictures]

### Set-up and how to launch the application:
1. Download the file containing the source code
2. Ensure that you have `npm` and `react` installed (to install: run `npm install` and `npm install react-router-dom`)
3. Open up command prompt or terminal
4. Navigate to your file folder that has react installed using the command prompt using `cd`
5. Type in `npm start` in the terminal
6. Access the website at `https://localhost:3000` in your own preferred browser

## Work Log 
Refer to the attached spreadsheet:  
https://docs.google.com/spreadsheets/d/1qe_nvHuZnz0J5dqBilppvNbm5iTy96aV8VkNIo450n4/edit?usp=sharing
