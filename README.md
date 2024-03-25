# To Dos App (ReactJS and Firebase)

## To Dos project
This is a application made with ReactJS and Firebase. The project consist of a personal To Dos App where the user needs to be authenticated to have access to view (READ) his/her to do list, to add (CREATE) , edit (UPDATE) and delete (DELETE) to dos. The to do list can be filtered by state: completed - pending - all.

**Frontend:**
Making use of Create React App , the app was created in React JS. It uses Typescript, Material-UI for the styling and Redux-toolkit to handle the app states. The UI consist of views -the authentication and home view- and a modal form to add and edit todos. 


**Backend:**
Firebase was installed and used to handle the backend authentication and the To Dos data using the SDKs implementation and a Realtime Database. 
Given the fact that the to do list corresponds to a user and that it can only be accessed and handled by the authenticated user, the API route structure used is: `/users/{idToken}/todos/{todoId}`.

<br />
<br />

## Setting the app up in a local environment

1. **Go to the desired location for the project and clone the current repository:**

    ```bash
    Git clone https://github.com/danimar95/todos-firebase-project.git
    ```
2. **Install the Project Dependencies:**

    Make sure you are in the projects directory first `to-dos-project` and run
    ```bash
    npm install
    ```
3. **Start the React Application and Access it running:**
     ```bash
     npm run start 
    ```
    
    Access the application via `https://localhost:3000` (in case you are not running anything in port 3000)

<br />
<br />

## Project structure
The project is based out of 5 folders within the src folder:

-**components**: including a layout folder, here are situated all the layout components that are a sum of components but not big engough to conform a view.

-**redux**: this folder includes the store definition file and the slices files (auth and todos) with initial states and reducers functions.

-**hooks**: includes a file with useful redux hooks. One to dispatch action and o ther one to select a state.

-**services**: includes an auth folder with the Sign up and Login firebase requests.

-**views**: includes 2 existing views within the app. The authentication view, including register and log in forms and the home view with the to do list.

<br />
<br />

## Authentication
By making use of Firebase `createUserWithEmailAndPassword`  and `signInWithEmailAndPassword` auth methods the user can Register and Log in intro the app. For both processes it will need an email and a password.

The authentication is being handled through the existence of an accessToken that will define the user view (between the authentication and home page). The token is saved within the state of the app and on local storage to allow the user to still have access to the app even if he refresh the page.

