# React Context API Practice Project

This project is a practice-based React application built to understand and implement **React Context API** and **React Router** in a real-world scenario.

## 🚀 Features

- Product listing page
- Product detail page using dynamic routing
- Global state management using Context API
- Navigation without props drilling
- Clean and responsive UI using Tailwind CSS

## 🛠 Tech Stack

- React
- React Router DOM
- Context API
- Axios
- Tailwind CSS

## 📂 Project Structure

src/
┣ Api/
┃ ┗ api.js
┣ Context/
┃ ┗ ProductDataContext.jsx
┣ Components/
┃ ┣ Product.jsx
┃ ┗ ProductDetailPage.jsx
┣ App.jsx
┗ main.jsx

## 🔁 Application Flow

1. Products are fetched once and stored in Context
2. Product list page displays all products
3. Clicking a product navigates to a dynamic route
4. Product details are rendered without making another API call

## 🎯 Learning Outcomes

- Understood how Context API works for global state
- Implemented React Router with dynamic routes
- Avoided props drilling using Context
- Improved component structure and separation of concerns

## ▶️ How to Run Locally

```bash
npm install
npm run dev

📌 Note

This project is focused on learning React architecture and state management, not on advanced UI animations.

```
