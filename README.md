
---

# Shiv Shakti Fabrics Backend

Backend service for the Shiv Shakti Fabrics website.  
Handles authentication, fabric specifications, and customer requests.  
Built with **Node.js/Express**, connected to **MongoDB Atlas**, and deployed on **Render**.

Live API: [https://shiv-shakti-backend-2.onrender.com](https://shiv-shakti-backend-2.onrender.com)

---

## Features

- ### Authentication  
  Login & Signup endpoints with secure password hashing (bcrypt).  

- ### Request Quote  
  POST endpoint for customers to submit quote requests.  

- ### Fabric Specifications  
  GET endpoints serving subtype and specification data.  

- ### Validation  
  Proper schema validation for all inputs using Mongoose.  

- ### Cloud Database  
  MongoDB Atlas integration for storing user and fabric data.  

---

## Getting Started (For Developers)

### Prerequisites
- Node.js (>= 14.x)  
- npm or yarn  
- MongoDB Atlas account  

### Installation

```bash
git clone https://github.com/mishra6868/Shiv-Shakti-Backend.git
cd Shiv-Shakti-Backend
npm install
```

### Running Locally

Create a `.env` file with your MongoDB connection string and any required secrets:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the server:

```bash
npm run dev
```

Backend runs at: **http://localhost:5000**

---

## API Endpoints

### Authentication
- `POST /signup` → Register new user (passwords hashed before saving).  
- `POST /login` → Authenticate user and return success message.  

### Fabrics
- `GET /fabrics/:type` → Get subtypes for a fabric (e.g., Polyester).  
- `GET /specifications/:subtype` → Get specifications for a subtype.  

### Quotes
- `POST /request-quote` → Submit a quote request.  

---

## Example API Requests (Postman / curl)

### Signup
```http
POST https://shiv-shakti-backend-2.onrender.com/signup
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "userId": "64f1a2b..."
}
```

---

### Login
```http
POST https://shiv-shakti-backend-2.onrender.com/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "Login successful"
}
```

---

### Request Quote
```http
POST https://shiv-shakti-backend-2.onrender.com/request-quote
Content-Type: application/json

{
  "fabricType": "Polyester",
  "subtype": "Polyester Satin",
  "quantity": 100,
  "customerName": "John Doe",
  "contact": "john@example.com"
}
```

**Response:**
```json
{
  "message": "Quote request submitted successfully",
  "quoteId": "64f1a3c..."
}
```

---

## Tech Stack

- ### Backend Framework  
  Node.js + Express  

- ### Database  
  MongoDB Atlas (Mongoose ODM)  

- ### Validation  
  Mongoose schema validation  

- ### Security  
  Password hashing (bcrypt)  

- ### Deployment  
  Render  

---

## Project Structure

```plaintext
shiv-shakti-backend/
│── src/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── controllers/   # Business logic
│   ├── middleware/    # Validation
│   └── server.js      # Entry point
│── package.json
│── .env.example       # Environment variables template
```

---

## Contributing

Contributions are welcome!  
1. Fork the repo  
2. Create a new branch (`feature/your-feature`)  
3. Commit changes  
4. Push and open a Pull Request  

---

## Contact

- Organization: Shiv Shakti Fabrics  
- Email: hm48031032@gmail.com  
- Phone: +91 6280759713  

---

