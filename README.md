# Friend or Foe

#### Description

Friend or Foe is an app that allows users to create and save a quiz about themselves. Once created, they will have the ability to share the quiz with their friends in order to see how well they may know them. Once completed, the user will know if the player is a friend or a foe!
#### Live Links

Frontend: [https://lit-brook-00092.herokuapp.com/](https://lit-brook-00092.herokuapp.com/)

Backend: [https://nameless-garden-31860.herokuapp.com/](https://nameless-garden-31860.herokuapp.com/) - queries: /quizzes or /users

## Screenshots

**Landing Page**
<img width="1366" alt="Screen Shot 2021-07-12 at 11 10 04 AM" src="https://user-images.githubusercontent.com/81186889/125314033-d43b5f80-e303-11eb-91e4-19241b4c1716.png">

**Sign In/Sign Up**
<img width="1335" alt="Screen Shot 2021-07-12 at 11 10 18 AM" src="https://user-images.githubusercontent.com/81186889/125314076-e1f0e500-e303-11eb-8e8a-0c7498e7bc52.png">

**Create Quiz and Questions**
<img width="1405" alt="Screen Shot 2021-07-12 at 11 11 12 AM" src="https://user-images.githubusercontent.com/81186889/125314139-ee753d80-e303-11eb-8b53-4eceafacd614.png">
<img width="1380" alt="Screen Shot 2021-07-12 at 11 11 25 AM" src="https://user-images.githubusercontent.com/81186889/125314158-f1702e00-e303-11eb-9b40-1af9cb3d8eac.png">

**User Dashboard**
<img width="1328" alt="Screen Shot 2021-07-12 at 11 10 36 AM" src="https://user-images.githubusercontent.com/81186889/125314189-faf99600-e303-11eb-93cd-81ab6f57e0fa.png">
<img width="1406" alt="Screen Shot 2021-07-12 at 11 11 00 AM" src="https://user-images.githubusercontent.com/81186889/125314199-fcc35980-e303-11eb-8126-c9aa9195e6d5.png">

**Share Quiz Page**
<img width="1407" alt="Screen Shot 2021-07-12 at 11 11 45 AM" src="https://user-images.githubusercontent.com/81186889/125314414-2a100780-e304-11eb-9f20-3c504b6fc67a.png">

**Player Start Page**
<img width="1400" alt="Screen Shot 2021-07-12 at 11 11 51 AM" src="https://user-images.githubusercontent.com/81186889/125314366-21b7cc80-e304-11eb-8089-e06d04014b45.png">

**Quiz Page**
<img width="1398" alt="Screen Shot 2021-07-12 at 11 11 58 AM" src="https://user-images.githubusercontent.com/81186889/125314390-254b5380-e304-11eb-9c8d-b05fb72d9dfe.png">
<img width="1384" alt="Screen Shot 2021-07-12 at 11 27 51 AM" src="https://user-images.githubusercontent.com/81186889/125314491-398f5080-e304-11eb-9aca-1181b9710a18.png">




## Technologies Used

- HTML, CSS
- Javascript
- React
- NodeJS
- Express
- MongoDB
- Mongoose
- Heroku

## User Stories

**MVP Goals**

- As a user, I would like to be able to create a quiz 
- As a user, I would like to be able to edit or add questions on an existing quiz
- As a user, I would like to be able to create more then one quiz
- As a user, I would like to be able to share the quiz after creation
- As a player, I would like to know how many questions there are
- As a player, I would like to see how many questions I got correct after finishing
- As a player, I would like to know if I am Friend or a Foe

**Strecth Goals**

- Implement JWT Authentication
- Make sure only singed in users can see the quizzes they have made
- Create a user dashboard for signed up/in users to perform CRUD functions and share quizzes

## Installation Instructions

To run locally, you must acquire all necessary environment variables then follow the installation instructions below:

1. Fork and clone [this repository](https://github.com/c1894p/fof-frontend/tree/master)
2. Install all dependencies

   ```
   npm install
   ```

3. Install devDependencies

   ```
   npm install nodemon --save-dev
   ```

4. Start the local server

   ```
   npm run dev
   ```

Otherwise, checkout out the [live links](#live-links)
