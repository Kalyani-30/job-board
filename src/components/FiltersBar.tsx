import React from 'react'
import { Search, MapPin, Briefcase, User } from 'lucide-react'
import type { JobCity, Job } from '../lib/jobs'

export default function FiltersBar({
  cities,
  selectedCity,
  onCityChange,
  query,
  onQueryChange,
  selectedType,
  onTypeChange,
  selectedExperience,
  onExperienceChange,
  onClear
}: {
  cities: JobCity[]
  selectedCity: JobCity | 'All'
  onCityChange: (c: JobCity | 'All') => void
  query: string
  onQueryChange: (v: string) => void
  selectedType: Job['jobType'] | 'All'
  onTypeChange: (v: Job['jobType'] | 'All') => void
  selectedExperience: Job['experience'] | 'All'
  onExperienceChange: (v: Job['experience'] | 'All') => void
  onClear: () => void
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-4">
        <h2 className="text-xl font-bold text-white">
          Find Your Dream Job
        </h2>
        <p className="text-sm text-emerald-100">
          Search jobs by role, location and experience
        </p>
      </div>

      {/* Filters */}
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

          {/* Search */}
          <div className="lg:col-span-5">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Search size={16} />
              Search Jobs
            </label>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="React Developer, Java, UI Designer..."
                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-3">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MapPin size={16} />
              Location
            </label>

            <select
              value={selectedCity}
              onChange={(e) => onCityChange(e.target.value as any)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
          <div className="lg:col-span-2">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Briefcase size={16} />
              Type
            </label>

            <select
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value as any)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Experience */}
          <div className="lg:col-span-2">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <User size={16} />
              Experience
            </label>

            <select
              value={selectedExperience}
              onChange={(e) => onExperienceChange(e.target.value as any)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            >
              <option value="All">All</option>
              <option value="Fresher">Fresher</option>
              <option value="0-2 years">0-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5-8 years">5-8 years</option>
              <option value="8+ years">8+ years</option>
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            🔍 Search thousands of verified jobs across India
          </p>

          <button
            onClick={onClear}
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}