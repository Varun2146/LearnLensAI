# LearnLens AI

LearnLens AI is a full-stack web application that helps learners discover the best educational resources for any technology or programming topic. It aggregates trusted learning resources from multiple platforms, including official documentation, GitHub, YouTube, roadmap.sh, Coursera, Udemy, NPTEL, GeeksforGeeks, W3Schools, MDN, Stack Overflow, and Reddit.

## Features

* Search learning resources for any technology
* Official documentation recommendations
* YouTube tutorial suggestions
* GitHub repository recommendations
* Learning roadmaps
* Online course recommendations
* Technical articles and references
* Community discussion links
* Difficulty level selection (Beginner, Intermediate, Advanced)
* Responsive design for mobile, tablet, and desktop
* Dark and Light mode
* Bookmark topics using Local Storage
* Copy topic functionality
* Share topic functionality
* Loading and error handling screens

## Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Axios
* React Icons
* Vite

### Backend

* Node.js
* Express.js
* SQLite
* CORS
* Dotenv

## Project Structure

```text
LearnLensAI
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── styles
│   │   └── App.jsx
│   │
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── database
│   ├── data
│   ├── app.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/LearnLensAI.git
```

```bash
cd LearnLensAI
```

## Backend Setup

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

The backend runs on:

```
http://localhost:5000
```

## Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

## API Endpoint

### Search Resources

```
GET /search
```

Example:

```
/search?q=React&level=beginner
```

### Query Parameters

| Parameter | Description                      |
| --------- | -------------------------------- |
| q         | Technology or topic name         |
| level     | beginner, intermediate, advanced |

## Supported Resource Platforms

* Official Documentation
* GitHub
* YouTube
* roadmap.sh
* GeeksforGeeks
* W3Schools
* MDN Web Docs
* Coursera
* Udemy
* NPTEL
* Stack Overflow
* Reddit

## Key Features

* Modern responsive interface
* Fast search experience
* Difficulty-based learning recommendations
* Trusted educational platforms
* Bookmark support
* Share functionality
* Copy topic option
* Clean and intuitive UI
* Mobile-friendly design

## Future Enhancements

* User authentication
* Search history
* AI-generated learning paths
* Personalized recommendations
* Resource ratings and reviews
* Trending technologies
* Multi-language support

## Author

**Varun J**

Information Science and Engineering Student

## License

This project is created for educational and portfolio purposes.
