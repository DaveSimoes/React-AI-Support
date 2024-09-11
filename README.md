# 🧠 React-AI-Support

This is an AI-powered real-time customer support assistant, built with React on the frontend and Node.js/Express on the backend, utilizing the OpenAI API to provide smart and automated responses. The project aims to showcase the integration between a high-level AI model and a modern, intuitive user interface.

This assistant can easily be integrated into e-commerce platforms, SaaS applications, or any system that requires automated customer support.

## 🚀 Main Features
- Real-Time Chat: Enables smooth interaction between the user and AI with real-time updates.
- Smart Responses with OpenAI: Uses OpenAI’s text-davinci-003 model to process user queries and deliver detailed, personalized responses.
- Backend Integration (Node.js/Express): The backend handles API requests to OpenAI and communicates with the frontend.
- User-Friendly Interface: Modern frontend built with React, featuring well-styled components for a clean and intuitive user experience.
- Simple Setup: Just add your OpenAI API key in the .env file, and you're ready to go!

## 📂  Folder Structure

```
/client          # React frontend directory
  /src
    /components  # React components
    /styles      # CSS styles
    App.js       # Main React component
    index.js     # React entry point
  package.json   # Frontend dependencies

/server          # Node.js/Express backend directory
  /routes        # API routes
  /controllers   # Request controllers
  app.js         # Server setup
  package.json   # Backend dependencies
.env             # Environment variables file
```

## 🛠️ Technologies Used

Frontend:
- React - JavaScript library for building user interfaces.
- Axios - Library for making HTTP requests.
  
Backend:
- Node.js - JavaScript runtime environment.
- Express.js - Minimalist web framework for Node.js.
- OpenAI API - AI API for natural language processing.
  
## 🔧 Installation and Setup
Requirements
- Node.js (version 14 or higher)
- NPM or Yarn
- OpenAI API Key

Steps to Run

1. Clone the repository:
   
   ```
      git clone https://github.com/DaveSimoes/React-AI-Support.git
    ```

2. Navigate to the server directory and install dependencies:

```
       cd server
       npm install
```

3. Create a .env file in the server directory and add your OpenAI API key:

```
      OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the backend server:

   ```
     npm start

   ```

5. Navigate to the client directory (frontend) and install dependencies:

```
     cd ../client
     npm install 
```

6. Start the frontend server:
   
```
      npm start
```
7. The app will be available at http://localhost:3000.

## ⚙️ Future Features
- User authentication system integration.
- Multi-language support to expand user reach.
- Optimized natural language processing with custom models.
- Add logging and dashboards to monitor interactions.

## 🤝 Contributions:
- Contributions are always welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

📝 License
- This project is licensed under the MIT License - see the LICENSE file for details.



