# Frontend Developer Assignment

## Introduction

Welcome! This project showcases TV shows using the TV Maze API, highlighting my frontend skills and focus on clean, user-friendly designs.
## Assignment Overview

The project enables users to:

- **Browse Popular TV Shows:** A dashboard displays TV shows categorized by genres such as drama, comedy, and sports, presented in horizontal lists.
- **View Show Details:** Clicking on any TV show reveals detailed information.
- **Search for TV Shows:** A search feature allows users to find specific shows and view their details.

## Features
- **UI Framework:** Tailwind CSS was used for designing a clean and responsive user interface, ensuring a modern look and feel with minimal effort.
- **State Management:** Redux Toolkit simplifies state management, making the app scalable and efficient.
- **Routing:** React Router handles smooth navigation between different sections of the app.
- **API Integration:** Axios provides reliable and easy-to-use API handling.
- **UI Design:** The interface is simple, visually appealing, and user-friendly.

## Architectural Decisions

### Framework
React was selected for its flexibility, widespread adoption, and efficient component-based architecture.

### State Management
I used Redux Toolkit because it’s simple and handles state efficiently with minimal code. The project could have been done without state management, but I included it since the task required it.

### API Handling
Axios was used due to its robust features, such as interceptors and request handling, which made API integration seamless.

### Project Structure
The app is built with a clear, modular structure to make it reusable and easy to maintain.
```plaintext
root
├── component  
│   ├── SearchBar  
│   └── Card  
├── API   
│   ├── apiService     
│   ├── axiosInstance  
│   └── service        
│       └── showService
├── feature   
│   ├── store         
│   └── show          
│       ├── showSlice 
│       └── showThunk 
├── pages     
│   ├── Dashboard   
│   └── ShowDetails 
├── test
│   └── fileMock 
│   
└── share      
    ├── constants 
    │   └── routes
    └── types     
```
## Installation and Usage

### Prerequisites
- Node.js (version >= 14)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/FaezeMashreghi/tvShow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tv-show
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Access the app at [http://localhost:3000](http://localhost:3000).

5. To create a production build:
   ```bash
   npm run build
   ```

6. Run tests:
   ```bash
   npm test
   ```



## Unit Testing

- I wrote unit tests for the SearchBar component using Jest and React Testing Library. These tests ensure that the component functions as expected, including:

- Rendering the search input field.

- Triggering the onSearch callback when the input value changes.

- Clearing the input field when the clear button is clicked.
## Notes

- I developed this project within a time frame of 5-6 hours. It is not a perfect project, as the task description explicitly mentioned that a lot of time should not be spent on it.
- Minimal use of scaffolding tools was ensured to highlight custom implementations.
- The UI is designed to balance simplicity with functionality.

## Why Vite?

- Vite was chosen for its simplicity and speed, allowing me to quickly set up the React project without requiring extensive custom configurations.

