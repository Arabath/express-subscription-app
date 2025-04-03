Features
👉 Advanced Rate Limiting and Bot Protection: with Arcjet that helps you secure the whole app.

👉 Database Modeling: Models and relationships using MongoDB & Mongoose.

👉 JWT Authentication: User CRUD operations and subscription management.

👉 Global Error Handling: Input validation and middleware integration.

👉 Logging Mechanisms: For better debugging and monitoring.

👉 Email Reminders: Automating smart email reminders with workflows using Upstash.



Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/Arabath/express-subscription-app
cd express-subscription-app

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
Running the Project

npm run dev
Open http://localhost:5500 in your browser or any HTTP client to test the project.