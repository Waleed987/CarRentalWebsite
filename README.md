# 🚗 Car Rental Website

A modern, full-stack car rental platform built with React, Node.js, Express, and MongoDB. This application provides a seamless experience for users to browse, select, and rent cars with an intuitive interface and robust backend services.

## ✨ Features

### 🎯 Core Features
- **User Authentication**: Secure signup and login system with JWT tokens
- **Car Catalog**: Browse through a comprehensive collection of vehicles
- **Car Details**: Detailed information including specifications, pricing, and features
- **Order Management**: Complete rental booking system with order tracking
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Admin Panel**: Administrative interface for managing cars and orders

### 🚀 Technical Features
- **Real-time Data**: Dynamic car information and availability updates
- **Secure API**: RESTful API with proper authentication and authorization
- **Database Management**: MongoDB integration with Mongoose ODM
- **Image Handling**: Car image display and management
- **Form Validation**: Client and server-side validation for all user inputs

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library for building interactive interfaces
- **React Router DOM** - Client-side routing for single-page application
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API communication
- **Keen Slider** - Touch-friendly carousel/slider component
- **Lucide React** - Beautiful & consistent icon toolkit

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT (JSON Web Tokens)** - Secure authentication and authorization
- **bcrypt** - Password hashing for security
- **CORS** - Cross-origin resource sharing support

## 📁 Project Structure

```
CarRentalWebsite-1/
├── backend/
│   ├── controllers/          # Request handlers
│   │   ├── auth-controllers.js
│   │   ├── car-controllers.js
│   │   └── order-controllers.js
│   ├── models/              # Database schemas
│   │   ├── Car-model.js
│   │   ├── Order-model.js
│   │   └── User-model.js
│   ├── routes/              # API route definitions
│   │   ├── auth-route.js
│   │   ├── car-route.js
│   │   └── order-route.js
│   ├── seed/                # Database seeding scripts
│   │   ├── carseed.js
│   │   └── userSeed.js
│   ├── utils/               # Utility functions
│   │   └── db.js
│   ├── package.json
│   └── server.js            # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── CarSlider.jsx
│   │   │   ├── DashBottom.jsx
│   │   │   ├── DashHero.jsx
│   │   │   ├── DashNav.jsx
│   │   │   ├── LandFooter.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── OrderForm.jsx
│   │   │   └── SignupPage.jsx
│   │   ├── assets/          # Static assets
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CarRentalWebsite-1
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   npm start
   # or
   node server.js
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/user/signup`
Register a new user account.
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### POST `/api/user/login`
Authenticate user and receive JWT token.
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Car Endpoints

#### GET `/api/cars/carsinfo`
Retrieve all available cars.

#### GET `/api/cars/carsinfo/:id`
Retrieve specific car details by ID.

### Order Endpoints

#### GET `/api/order/orders`
Retrieve all orders (requires authentication).

#### POST `/api/order/orderinfo`
Create a new rental order.
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "area": "Downtown",
  "carId": "car_id_here"
}
```

## 🗄️ Database Models

### User Model
- `email` (String, required) - User's email address
- `password` (String, required) - Hashed password
- `isAdmin` (Boolean) - Admin privileges flag

### Car Model
- `imageUrl` (String, required) - Car image URL
- `name` (String, required) - Car name/model
- `pricePerDay` (Number, required) - Daily rental rate
- `currency` (String, default: 'Euro') - Price currency
- `mileage` (String, default: 'Unlimited') - Mileage allowance
- `deposit` (Number, default: 0) - Required deposit amount
- `class` (String) - Car class/category
- `gearbox` (String, enum: ['Automatic', 'Manual']) - Transmission type
- `maxPassengers` (Number) - Maximum passenger capacity
- `fuel` (String, enum: ['Diesel', 'Petrol', 'Electric', 'Hybrid']) - Fuel type
- `fuelUsage` (Number) - Fuel consumption (L/100km)
- `engineCapacity` (Number) - Engine size (CC)
- `maxLuggage` (Number) - Maximum luggage capacity
- `doors` (Number) - Number of doors
- `minDriverAge` (Number, default: 18) - Minimum driver age
- `year` (Number) - Manufacturing year
- `features` ([String]) - Array of car features

### Order Model
- `firstname` (String) - Customer's first name
- `lastname` (String) - Customer's last name
- `email` (String) - Customer's email
- `area` (String) - Pickup/delivery area
- `car` (Object) - Car details
- `carId` (String) - Reference to car ID
- `createdAt` (Date, default: Date.now) - Order creation timestamp

## 🎨 Frontend Pages

### Landing Page (`/`)
- Hero section with car showcase
- Featured vehicles carousel
- Call-to-action buttons
- Footer with company information

### Authentication Pages
- **Login Page** (`/login`) - User authentication
- **Signup Page** (`/signup`) - New user registration

### Dashboard (`/dashboard`)
- Admin interface for managing cars and orders
- Navigation between different sections
- Data visualization and management tools

### Order Form (`/orderform`)
- Car rental booking interface
- Customer information collection
- Order confirmation and processing

## 🔧 Development

### Available Scripts

**Backend:**
```bash
npm start          # Start the server
npm run dev        # Start with nodemon (if configured)
```

**Frontend:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Code Style
- ESLint configuration for consistent code formatting
- React hooks and modern JavaScript features
- Component-based architecture
- Responsive design principles

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection (local or cloud)
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to platforms like:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ for modern car rental solutions.

---

**Note**: Make sure to update the MongoDB connection string and JWT secret in your environment variables before running the application in production. 