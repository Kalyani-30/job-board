# JobHub – AI-Powered Job Board

## Overview

JobHub is a modern job board application designed to help job seekers discover opportunities across India. The platform provides a clean and responsive user interface with advanced search and filtering capabilities, allowing users to quickly discover jobs that match their preferences.

## Live Demo

**Vercel Deployment:**
https://job-board-rouge-five.vercel.app

## GitHub Repository

**Source Code:**
https://github.com/Kalyani-30/job-board

---

## Features

### 1. Job Listings

* Displays 50+ job opportunities across multiple Indian cities.
* Shows job title, company name, location, experience level, salary range, and job type.
* Provides a dedicated job details page for each position.
* Includes direct Apply Now functionality.

### 2. Search Functionality

Users can search jobs using:

* Job title
* Company name
* Skills
* Technologies

Search results update instantly as users type.

### 3. Location Filter

Users can filter jobs by:

* Hyderabad
* Pune
* Bangalore
* Chennai
* Mumbai
* Delhi
* Noida
* Gurgaon
* Kolkata
* Ahmedabad

### 4. Job Type Filter

Supported job types:

* Full-time
* Part-time
* Contract
* Internship

### 5. Experience Filter

Users can filter jobs by:

* Fresher
* 0–2 Years
* 2–5 Years
* 5–8 Years
* 8+ Years

### 6. Reset Filters

A dedicated Reset Filters button clears all selected filters and restores the complete job listing.

### 7. Job Details Page

Each job card navigates to a detailed job page containing:

* Complete job description
* Required skills
* Experience requirements
* Company information
* Application link

### 8. Job Count Display

The application dynamically displays the number of jobs matching the selected filters.

### 9. Responsive Design

Fully optimized for:

* Desktop
* Tablet
* Mobile devices

### 10. Modern UI/UX

* Clean professional design
* Easy navigation
* Fast loading experience
* User-friendly filtering system

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Deployment

* Vercel

### Version Control

* Git
* GitHub

### CI/CD

* GitHub Actions

---

## CI/CD Pipeline

The project uses GitHub Actions and Vercel deployment automation.

### Workflow

1. Code is pushed to GitHub.
2. GitHub Actions validates the project.
3. Build process is executed.
4. Vercel automatically deploys the latest version.
5. Changes become available online.

### Benefits

* Automated deployment
* Continuous Integration
* Faster releases
* Reduced deployment errors

---

## Project Structure

```text
src/
├── components/
├── routes/
├── styles/
├── lib/
│   └── jobs.ts
├── App.tsx
└── main.tsx

public/
└── jobs.json
```

## Future Enhancements

* User Authentication
* Saved Jobs
* Resume Upload
* Company Profiles
* Admin Dashboard
* Backend API Integration
* Email Notifications

---

## AI Usage

AI tools were used for:

* UI/UX planning
* Documentation generation
* CI/CD workflow creation
* Feature ideation and project structure guidance

---

## Conclusion

JobHub is a scalable and responsive job board platform that demonstrates modern frontend development practices, GitHub-based version control, CI/CD automation, and cloud deployment using Vercel.
