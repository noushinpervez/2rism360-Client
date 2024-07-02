# 2rism360

## Project Overview
**2rism360** is a tourism management website focusing on Southeast Asia. It aims to provide information about various tourist spots in countries like Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia, helping users in planning their trips effectively.

## Key Features
- **User Authentication and Authorization:** Secure login and registration using Firebase authentication with Google and GitHub Sign-in integration.
- **CRUD Operations:** Users can add, update, view, and delete tourist spots. Private routes ensure only authenticated users can perform these actions to keep information accurate and up-to-date.
- **Dynamic Content:** Display tourist spots categorized by countries with detailed information such as location, average cost, seasonality, and travel time.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase (Email/Password, Social Login: Google, GitHub)
- **Hosting:** Netlify (Frontend), Vercel (Backend)

## Live Site
[Visit 2rism360](https://2rism360.netlify.app/)

## Server Repository
[2rism360 Server Repository](https://github.com/noushinpervez/2rism360-Server)

## Local Setup Instructions
To run the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/noushinpervez/2rism360-Client.git
    ```

2. **Navigate to the project directory and install dependencies:**
    ```sh
    cd 2rism360-Client
    npm install
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the client directory and add necessary configuration variables (Firebase config):
   
   ```plaintext
   VITE_API_KEY=
   VITE_AUTH_DOMAIN=
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET=
   VITE_MESSAGING_SENDER_ID=
   VITE_APP_ID=
   ```

   - Replace each variable (VITE_API_KEY, VITE_AUTH_DOMAIN, etc.) with your actual configuration keys and values **without quotations**.

4. **Run the client:**
    ```sh
    npm run dev
    ```

5. **Access the application:**
    The application will run on `http://localhost:5173`.

Follow these instructions to set up and locally run the client-side of 2rism360 to explore its features and functionalities.