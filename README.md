# 🎓 Academic Program Management System (APMS)

> A full-stack web platform designed to manage academic programs and educational regulations efficiently across universities and faculties.  
> **Developed as a Graduation Project – Helwan University, Faculty of Computers & Artificial Intelligence (Information Systems Department).**

---

## 🧩 Project Overview

The **Academic Program Management System (APMS)** streamlines how universities handle academic programs — ensuring consistency, transparency, and compliance with educational standards.

### Main Roles
- **Super Admin:** Full control over users, universities, faculties, and configurations.  
- **Admin:** Manages faculties, academic programs, and lookup values.  
- **Staff Member (User):** Manages academic programs, GPA rules, grading scales, and related data.

---

## 🚀 Features

- 🔐 **Authentication & Authorization:** Secure login & registration with JWT  
- 🧑‍💼 **User Management:** Create, update, delete, and assign roles  
- 🏛️ **University & Faculty Management:** Manage multiple institutions  
- 🧾 **Program Management:** Add, edit, delete academic programs and settings  
- ⚙️ **Lookup & Configuration:** Dynamic lookup management  
- 🧠 **Auditing & Logging:** Track all operations for transparency  
- 🧩 **Design Patterns:** Generic Repository, Specification, Unit of Work  

---

## 🧱 System Architecture

### Backend
- **Framework:** ASP.NET Core  
- **Language:** C#  
- **Architecture:** Onion Architecture  
- **Database:** Microsoft SQL Server  
- **Hosting:** Microsoft Azure  

### Frontend
- **Framework:** React.js  
- **UI Tools:** Adobe XD for design  
- **API Integration:** RESTful endpoints with Axios  
- **Styling:** Tailwind CSS / Bootstrap  

---

## ⚙️ Installation & Setup

### 🖥️ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/)
- [Visual Studio](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/)

---

### 🧩 Backend Setup (ASP.NET Core)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/APMS.git
   cd APMS/backend
   ```

2. **Configure the database connection:**
   - Open `appsettings.json`
   - Update your SQL Server connection string:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Server=YOUR_SERVER;Database=APMS;Trusted_Connection=True;MultipleActiveResultSets=true"
     }
     ```

3. **Apply migrations & seed data:**
   ```bash
   dotnet ef database update
   ```

4. **Run the backend API:**
   ```bash
   dotnet run
   ```
   The API should now be running on `https://localhost:5001/`

---

### 💻 Frontend Setup (React.js)

1. **Navigate to the frontend folder:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root of the frontend directory:
     ```
     REACT_APP_API_URL=https://localhost:5001/api
     ```

4. **Run the React app:**
   ```bash
   npm start
   ```
   The app should now be running at `http://localhost:3000/`

---

## 🧪 Testing

### Functional Tests
- Login / Registration  
- Manage Users / Faculties / Programs / Controls  
- Role-based authorization  

### Non-Functional Tests
- Performance  
- Security  
- Scalability  
- Usability  

---

## 🧭 Development Methodology

- **Approach:** System Development Life Cycle (SDLC)  
- **Model:** Agile methodology  
- **Phases:** Planning → Analysis → Design → Development → Testing → Deployment → Maintenance  

---

## 👨‍💻 Project Team

| Name | 
|------|
| **Ahmed Mohamed Naeem** | 
| **Mohmoud Magdy Ahmed** |
| **Mohamed Nasr Mohamed** | 
| **Sama Omar Shaaban** | 
| **Donia Ali Mokhtar** | 
| **Omnia Aboalezz Ahmed** |


**Supervisor:** Prof. Safaa Azzam  
**Technical Advisor:** Eng. Ibrahim Badawy  

---

## 🔮 Future Work

- Complete **Student Management Module**
- Add **Financial Management** and **Reporting Dashboard**
- Integrate with **Learning Management Systems (LMS)**
- Enhance UI/UX for accessibility
- Deploy full cloud version via **Azure**

---

### 🌐 Links
- Documentation : https://drive.google.com/file/d/1RrwpaKZgLQ6etdSDQ49YCb3uqVKkcfI9/view?usp=sharing

---
