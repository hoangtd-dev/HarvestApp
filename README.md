# Harvest Church App

A full-stack application for Harvest Church management, built with Angular (Frontend) and Node.js/Express (Backend).

## Jira Automation

Integrate with Github

## 🏗️ Project Structure

```
HarvestApp/
├── ClientApp/          # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── auth/           # Authentication components
│   │   │   ├── core/           # Core services, guards, models
│   │   │   ├── features/       # Feature modules
│   │   │   ├── layouts/        # Layout components
│   │   │   ├── services/       # API services
│   │   │   ├── shared/         # Shared components
│   │   │   └── store/          # NgRx store
│   │   └── environments/       # Environment configuration
└── ServerSide/         # Node.js Backend
    ├── src/
    │   ├── controllers/        # Route controllers
    │   ├── middlewares/        # Express middlewares
    │   ├── models/            # Data models
    │   ├── routes/            # API routes
    │   ├── services/          # Business logic
    │   ├── types/             # TypeScript types
    │   ├── utils/             # Utility functions
    │   └── validators/        # Request validation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (for frontend development)

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd ServerSide
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration.

4. Start the development server:
   ```bash
   npm run start:dev
   ```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ClientApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:4200`

## 🛠️ Tech Stack

### Frontend

- **Angular 19** - Frontend framework
- **NgRx** - State management
- **Angular Material** - UI components
- **Tailwind CSS** - Styling
- **RxJS** - Reactive programming

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **JWT** - Authentication
- **Express Validator** - Request validation

## 📁 Key Features

- **Authentication System** - JWT-based auth with refresh tokens
- **User Management** - User CRUD operations
- **PPTX Generator** - PowerPoint presentation generation
- **Core Configuration** - Bible and song management
- **Responsive Design** - Mobile-friendly interface
- **Theme Support** - Dark/light mode toggle

## 🔧 Development

### Code Style

- Frontend follows Angular style guide
- Backend uses ESLint and Prettier
- Consistent naming conventions across the project

### API Structure

- RESTful API design
- Versioned endpoints (`/api/v1/`)
- Proper error handling and validation
- Authentication middleware for protected routes

### State Management

- NgRx store for global state
- Feature-based state organization
- Effects for side effects
- Selectors for data access

## 🚨 Important Notes

1. **Environment Variables**: Make sure to set up your `.env` file in the backend
2. **Database**: Currently using mock data, implement database connection as needed
3. **Authentication**: JWT tokens are used for authentication
4. **CORS**: Configured for local development

## 📝 TODO

- [ ] Implement database connection (MongoDB/PostgreSQL)
- [ ] Add comprehensive error handling
- [ ] Implement refresh token logic
- [ ] Add unit and integration tests
- [ ] Set up CI/CD pipeline
- [ ] Add API documentation
- [ ] Implement file upload functionality
- [ ] Add logging system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
