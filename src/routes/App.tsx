import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import JobsListPage from '../components/JobsListPage'
import JobDetailsPage from '../components/JobDetailsPage'
import ApplyJob from '../components/ApplyJob'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsListPage />} />
      <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
      <Route path="/apply/:id" element={<ApplyJob />} />
      <Route path="*" element={<div className="p-6">Not found</div>} />
    </Routes>
  )
}