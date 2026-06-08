import React from 'react'
import {
  MapPin,
  Briefcase,
  User,
  RotateCcw,
  Filter
} from 'lucide-react'

import type { Job, JobCity } from '../lib/jobs'

export default function FiltersSidebar({
  cities,
  selectedCity,
  onCityChange,
  selectedType,
  onTypeChange,
  selectedExperience,
  onExperienceChange,
  onClear
}: {
  cities: JobCity[]
  selectedCity: JobCity | 'All'
  onCityChange: (c: JobCity | 'All') => void
  selectedType: Job['jobType'] | 'All'
  onTypeChange: (v: Job['jobType'] | 'All') => void
  selectedExperience: Job['experience'] | 'All'
  onExperienceChange: (v: Job['experience'] | 'All') => void
  onClear: () => void
}) {
  return (
    <aside className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-5">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-white" />
          <h2 className="text-lg font-bold text-white">
            Filters
          </h2>
        </div>

        <p className="mt-1 text-xs text-emerald-100">
          Narrow down jobs based on your preferences
        </p>
      </div>

      {/* Body */}
      <div className="p-5">

        {/* Location */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <MapPin size={16} />
            Location
          </label>

          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value as any)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          >
            <option value="All">All Locations</option>

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type */}
        <div className="mt-5">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Briefcase size={16} />
            Job Type
          </label>

          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value as any)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          >
            <option value="All">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Experience */}
        <div className="mt-5">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <User size={16} />
            Experience
          </label>

          <select
            value={selectedExperience}
            onChange={(e) => onExperienceChange(e.target.value as any)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          >
            <option value="All">All Levels</option>
            <option value="Fresher">Fresher</option>
            <option value="0-2 years">0-2 years</option>
            <option value="2-5 years">2-5 years</option>
            <option value="5-8 years">5-8 years</option>
            <option value="8+ years">8+ years</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          onClick={onClear}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <RotateCcw size={16} />
          Reset Filters
        </button>

        {/* Info Card */}
        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <h4 className="text-sm font-semibold text-emerald-800">
            💼 Job Search Tips
          </h4>

          <ul className="mt-2 space-y-2 text-xs text-emerald-700">
            <li>• Use relevant keywords</li>
            <li>• Apply within 24 hours</li>
            <li>• Keep your resume updated</li>
            <li>• Set job alerts</li>
          </ul>
        </div>

        {/* Active Filters Count */}
        <div className="mt-4 rounded-xl bg-slate-100 p-3 text-center">
          <p className="text-xs text-slate-500">
            Active Filters
          </p>

          <p className="text-lg font-bold text-slate-800">
            {[
              selectedCity !== 'All',
              selectedType !== 'All',
              selectedExperience !== 'All'
            ].filter(Boolean).length}
          </p>
        </div>

      </div>
    </aside>
  )
}