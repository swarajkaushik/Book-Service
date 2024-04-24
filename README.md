# Book-Service

Book-Service is a web application designed to simplify the management and cataloging of books. This project enables users to sign up, log in, and register their books effortlessly. Built on a foundation of modern technologies and utilizing microservices architecture, Book-Service offers a seamless experience for book enthusiasts.

## Key Features
- **User Authentication:** Secure signup and login functionality ensure user data privacy and protection.
- **Book Registration:** Intuitive interface for users to register books by providing essential details such as title, author, and publication year.
- **Tech Stack:** Built using Node.js, Express.js, MongoDB, and JavaScript for server-side development.
- **Microservices Architecture:** Modular design enhances scalability, maintainability, and flexibility.
- **RESTful APIs:** Standardized interface for efficient communication between different components.

## Future Enhancements
- **User Profile Management:** Implement features for users to manage their profiles and account settings.
- **Book Search and Filtering:** Enhance registration functionality with advanced search and filtering options.
- **Integration with External Services:** Explore integration with external book databases or APIs for additional book data.
- **Enhanced Security Features:** Implement encryption and protection against common security threats.

## Getting Started

To get started with Book-Service, follow these steps:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure the environment variables in `.env` file.
4. Start the application using `npm start`.

## Configuration

Before running Book-Service, make sure to set up the following environment variables:

- `PORT`: The port number on which the server will run.
- `MONGO_DB_URL`: The URL of your mongodb server with database name. (mongodb://127.0.0.1:27017/digital-paani-assignment)
- `PASSWORD_KEY`: A secret key used for JWT token generation and verification.
