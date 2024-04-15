# Messenger Frontend

This repository contains the frontend part of the Messenger application, built using Vite and TypeScript. It features a single-page application that dynamically renders components based on user interaction.

## Features

- **Modular TypeScript setup** with Vite.
- **Styling with SCSS**.
- **Dynamic rendering** with Handlebars templates.
- **Express server** for serving built files.

## Quick Navigation Links

To navigate through different parts of the application, use the links below:

- [Login Page](https://dan-messenger.netlify.app/login)
- [Sign Up Page](https://dan-messenger.netlify.app/signup)
- [Chat Page](https://dan-messenger.netlify.app/chat)
- [User Profile](https://dan-messenger.netlify.app/profile)
- [Edit Profile](https://dan-messenger.netlify.app/edit-profile)
- [Edit Profile Inputs](https://dan-messenger.netlify.app/edit-profile-input)
- [Change Password](https://dan-messenger.netlify.app/edit-password)
- [Error 404 Page](https://dan-messenger.netlify.app/404)
- [Error 500 Page](https://dan-messenger.netlify.app/500)

## Live Demo

Check out the live demo of the application [here](https://dan-messenger.netlify.app/).

## Local Development

To set up and run this project locally, follow the instructions below:

### Prerequisites

- Node.js (v12 or later)
- npm (v10.5.0 or later)

### Setup Instructions

1. **Clone the Repository**
   git clone https://github.com/ZubtsovGit/messenger
   cd messenger/frontend

2. **Install Dependencies**
   Navigate to the `frontend` directory and run:
   npm install

3. **Run Development Server**
   To start the development server with hot reloading enabled, use:
   npm run dev

4. **Build the Project**
   To build the project for production, run:
   npm run build

This compiles TypeScript and bundles the application into the `dist` directory.

5. **Start the Express Server**
   After building the project, you can serve it using the included Express server:
   npm start

This will serve the `dist` directory on `http://localhost:3000`.

## Structure

- `src`: Contains the TypeScript source files, components, pages, and styles.
- `dist`: Contains the built files ready for deployment.
- `node_modules`: Contains all npm dependencies.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
