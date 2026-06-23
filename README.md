# Skill-Path

## *Unveil Your Potential*

---

## Team Members

- Amr Moussa Ahmed **(Leader)**
- Ali Mahmoud Omar
- Mohamed Islam Mohamed
- Mohamed Sherif Salah
- Mohamed Anwar Mohamed

## Instructor

Hesham Mohamed

## Project Overview

A smart educational platform that helps students discover the skills best suited to them and turn those skills into practical abilities that can generate real income.

## Project Objectives

The main objective of this project is to build a smart educational platform that helps students discover suitable skills based on their interests, strengths, and goals, and guides them through a structured learning path until they can apply these skills in real-world opportunities that may generate income.

Additional objectives include:

- Providing personalized skill recommendations
- Offering clear learning roadmaps with free resources
- Enabling students to track their progress
- Supporting students in transitioning from traditional education dependency to practical skill acquisition

## Project Scope

This project focuses on developing a web-based platform that includes:

- An interactive assessment (chat or questionnaire) to analyze user interests
- A skill recommendation system based on user responses
- Structured learning roadmaps for selected skills
- Progress tracking features
- A resources section containing articles, tools, and recommended content creators

The initial version (MVP) will include a limited number of skills and basic functionality, with plans for future expansion.

> **Final Deliverable:** The final deliverable will be a fully functional web application that allows users to:
>
> - Complete an interest assessment
> - Receive personalized skill recommendations
> - Follow a step-by-step learning roadmap
> - Track their learning progress
> - Access curated educational resources
>
> The platform will feature a modern, responsive user interface optimized for both desktop and mobile devices.

## Project Plan (5 Weeks)

### Week 1

- TBA

### Week 2

- TBA

### Week 3

- TBA

### Week 4

- TBA

### Week 5

- TBA

## How To Run

### 1) Run MongoDB

You need MongoDB running before starting the backend.

#### Local MongoDB

Use this URI:

```env
MONGO_URI=mongodb://127.0.0.1:27017/skillpath
```

#### MongoDB Atlas

Create a free MongoDB Atlas cluster, then use a connection string like:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/skillpath
```

Make sure your IP is allowed in MongoDB Atlas Network Access.

### 2) Run Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

Health check:

```txt
http://localhost:5000/api/health
```

Auth endpoints:

```txt
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/me
```

### 3) Run Frontend

Open a second terminal from the project root:

```bash
cp .env.example .env
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```
