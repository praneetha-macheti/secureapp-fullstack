# 🔐 SecureApp – Full-Stack Authentication System

## 📘 Overview
**SecureApp** is a full-stack web project demonstrating secure user authentication and registration using:

- **Spring Boot (backend)** – Java 17, Maven, Spring Security, JPA  
- **Angular (frontend)** – Angular 17, TypeScript, Bootstrap 5  
- **Database** – H2 (in-memory) / MySQL (optional)

---

## 🚀 Features
✅ Signup & Login forms  
✅ REST API integration  
✅ Secure CORS configuration  
✅ Validation messages in Angular  
✅ User data persistence in backend  

---

## 🧩 Tech Stack
| Layer | Technologies |
|-------|---------------|
| Frontend | Angular 17, TypeScript, Bootstrap 5 |
| Backend | Spring Boot 3, Java 17, Maven |
| Database | H2 (in-memory) or MySQL |
| Tools | VS Code, IntelliJ / Eclipse, Postman |

---

## ⚙️ Running the Project Locally

### 🖥️ Backend
```bash
cd Secureapp
mvn spring-boot:run

Runs at: http://localhost:8080


Frontend
cd frontend
npm install
ng serve --open
Runs at: http://localhost:4200


API Endpoints
| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/api/signup` | Register new user |
| POST   | `/api/login`  | Authenticate user |


Folder Structure
Secureapp/
 ├── src/                   # Spring Boot backend
 ├── frontend/              # Angular frontend
 ├── pom.xml
 └── README.md

Developer

Praneetha Macheti
Email: praneetha.macheti@example.com

GitHub: github.com/praneetha-macheti


