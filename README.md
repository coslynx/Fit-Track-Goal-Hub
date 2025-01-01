# Fit-Track-Goal-Monitor

<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
Fit-Track-Goal-Monitor
</h1>
<h4 align="center">Web application that allows users to track their fitness goals, monitor progress, and share achievements with friends.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="React">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="JavaScript, HTML, CSS">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Node.js">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="Custom, Gemini, OpenAI">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/Fit-Track-Goal-Monitor?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/Fit-Track-Goal-Monitor?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/Fit-Track-Goal-Monitor?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The Fit-Track-Goal-Monitor is a web application that allows fitness enthusiasts to easily set, track, and monitor their fitness goals. Users can authenticate, create personalized goals, log their progress, and share their achievements with friends. The application is built using React for the frontend, Node.js for the backend, and integrates custom, Gemini, and OpenAI-based language models for enhanced user experiences.

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern with separate directories for components, pages, hooks, services, and utilities, ensuring easier maintenance and scalability.             |
| 📄 | **Documentation**  | The repository includes a comprehensive README file that provides an overview of the application, installation instructions, usage examples, API documentation, and deployment guidelines.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as React, Node.js, Axios, Mongoose, Chakra UI, and React Hook Form, which are essential for building the user interface, handling API requests, and managing state.    |
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate components for authentication, goal management, progress tracking, and social sharing.   |
| 🧪 | **Testing**        | The project includes unit tests for key components and services, ensuring the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | The application is designed with performance in mind, using techniques like code splitting, memoization, and optimized database queries to ensure a smooth user experience.    |
| 🔐 | **Security**       | The application implements security measures such as input validation, password hashing, and JWT-based authentication to protect user data and prevent vulnerabilities.   |
| 🔀 | **Version Control**| The project utilizes Git for version control and includes GitHub Actions workflows for automated build and deployment processes.   |
| 🔌 | **Integrations**   | The application interacts with the browser's APIs for features like user authentication and social sharing, and includes integrations with external services like Gemini and OpenAI for advanced language processing capabilities.   |
| 📶 | **Scalability**    | The system is designed to handle increased user load and data volume, utilizing caching strategies and a scalable backend architecture to ensure the application can grow alongside its user base.           |

## 📂 Structure
```text
└─ src
   └─ components
      └─ Button.jsx
      └─ Input.jsx
      └─ Modal.jsx
      └─ Header.jsx
      └─ Footer.jsx
      └─ LoginForm.jsx
      └─ SignupForm.jsx
      └─ GoalList.jsx
      └─ GoalForm.jsx
      └─ GoalCard.jsx
      └─ DashboardStats.jsx
   └─ pages
      └─ Home.jsx
      └─ Dashboard.jsx
      └─ Goals.jsx
      └─ Profile.jsx
   └─ hooks
      └─ useAuth.js
      └─ useGoals.js
   └─ context
      └─ AuthContext.js
      └─ GoalsContext.js
   └─ services
      └─ authService.js
      └─ goalsService.js
   └─ utils
      └─ formatters.js
      └─ validators.js
   └─ styles
      └─ global.css
      └─ theme.js

└─ api
   └─ index.js
   └─ routes
      └─ auth.js
      └─ goals.js
   └─ controllers
      └─ authController.js
      └─ goalsController.js
   └─ models
      └─ User.js
      └─ Goal.js
   └─ middleware
      └─ auth.js
      └─ error.js
   └─ config
      └─ db.js

└─ public
   └─ index.html
   └─ favicon.ico

└─ tests
   └─ components
      └─ GoalForm.test.jsx
   └─ services
      └─ goalsService.test.js

└─ .env
└─ startup.sh
└─ commands.json
└─ package.json
└─ README.md
```

## 💻 Installation

> [!WARNING]
> ### 🔧 Prerequisites
> - Node.js v14+
> - npm 6+
> - MongoDB 4.4+

### 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/Fit-Track-Goal-Monitor.git
   cd Fit-Track-Goal-Monitor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   ```bash
   cp .env.example .env
   # Fill in the required environment variables, e.g., MONGODB_URI
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Usage

### 🏃‍♂️ Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Access the application:
   - Web interface: [http://localhost:3000](http://localhost:3000)
   - API endpoint: [http://localhost:3000/api](http://localhost:3000/api)

> [!TIP]
> ### ⚙️ Configuration
> - The application uses environment variables for configuration, such as the MongoDB connection string and JWT secret.
> - You can modify these variables in the `.env` file to match your local setup.

### 📚 Examples

#### User Registration
```bash
curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username": "newuser", "email": "user@example.com", "password": "securepass123"}'
```

#### Setting a Fitness Goal
```bash
curl -X POST http://localhost:3000/api/goals \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"title": "Weight Loss", "description": "Lose 10 lbs by the end of the year", "targetDate": "2023-12-31", "progress": 0, "status": "active"}'
```

#### Logging Progress
```bash
curl -X POST http://localhost:3000/api/progress \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"goalId": "goal_id_here", "value": 2, "date": "2023-06-15"}'
```

## 🌐 Hosting

### 🚀 Deployment Instructions

Fit-Track-Goal-Monitor can be deployed to various cloud platforms. Here's an example of deploying to Heroku:

1. Install the Heroku CLI:
   ```bash
   npm install -g heroku
   ```
2. Login to Heroku:
   ```bash
   heroku login
   ```
3. Create a new Heroku app:
   ```bash
   heroku create Fit-Track-Goal-Monitor-production
   ```
4. Set up environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_uri_here
   heroku config:set JWT_SECRET=your_jwt_secret_here
   ```
5. Deploy the code:
   ```bash
   git push heroku main
   ```
6. Run database migrations (if applicable):
   ```bash
   heroku run npm run migrate
   ```

### 🔑 Environment Variables

- `MONGODB_URI`: Connection string for the MongoDB database
  Example: `mongodb+srv://username:password@cluster.mongodb.net/database`
- `JWT_SECRET`: Secret key for JWT token generation
  Example: `your-256-bit-secret`

## 📜 API Documentation

### 🔍 Endpoints

- **POST /api/auth/register**
  - Description: Register a new user
  - Body: `{ "username": string, "email": string, "password": string }`
  - Response: `{ "id": string, "username": string, "email": string, "token": string }`

- **POST /api/auth/login**
  - Description: Log in an existing user
  - Body: `{ "email": string, "password": string }`
  - Response: `{ "token": string, "user": { "id": string, "email": string } }`

- **POST /api/goals**
  - Description: Create a new fitness goal
  - Headers: `Authorization: Bearer TOKEN`
  - Body: `{ "title": string, "description": string, "targetDate": date, "progress": number, "status": string }`
  - Response: `{ "id": string, "title": string, "description": string, "targetDate": date, "progress": number, "status": string }`

- **GET /api/goals**
  - Description: Fetch all fitness goals for the authenticated user
  - Headers: `Authorization: Bearer TOKEN`
  - Response: `[{ "id": string, "title": string, "description": string, "targetDate": date, "progress": number, "status": string }]`

- **PUT /api/goals/{goalId}**
  - Description: Update an existing fitness goal
  - Headers: `Authorization: Bearer TOKEN`
  - Body: `{ "title": string, "description": string, "targetDate": date, "progress": number, "status": string }`
  - Response: `{ "id": string, "title": string, "description": string, "targetDate": date, "progress": number, "status": string }`

- **DELETE /api/goals/{goalId}**
  - Description: Delete a specific fitness goal
  - Headers: `Authorization: Bearer TOKEN`
  - Response: `{ "message": "Goal deleted successfully" }`

### 🔒 Authentication

1. Register a new user or log in to receive a JWT token.
2. Include the token in the `Authorization` header for all protected routes:
   ```
   Authorization: Bearer YOUR_JWT_TOKEN
   ```
3. The token will expire after 1 hour. You can request a new token by logging in again.

### 📝 Examples

```bash
# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username": "fitnessuser", "email": "user@example.com", "password": "securepass123"}'

# Response
{
  "id": "user123",
  "username": "fitnessuser",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

# Create a new goal
curl -X POST http://localhost:3000/api/goals \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"title": "Weight Loss", "description": "Lose 10 lbs by the end of the year", "targetDate": "2023-12-31", "progress": 0, "status": "active"}'

# Response
{
  "id": "goal123",
  "title": "Weight Loss",
  "description": "Lose 10 lbs by the end of the year",
  "targetDate": "2023-12-31",
  "progress": 0,
  "status": "active"
}
```

> [!NOTE]
> ## 📜 License & Attribution
> 
> ### 📄 License
> This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.
> 
> ### 🤖 AI-Generated MVP
> This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).
> 
> No human was directly involved in the coding process of the repository: Fit-Track-Goal-Monitor
> 
> ### 📞 Contact
> For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
> - Website: [CosLynx.com](https://coslynx.com)
> - Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
<img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>