import React, { useEffect, useMemo, useState } from 'react'
import TopNav from './TopNav'
import FiltersSidebar from './FiltersSidebar'
import JobCard from './JobCard'
import type { Job, JobCity } from '../lib/jobs'
import { loadJobs } from '../lib/jobs'
import Footer from './Footer'

const ALL_CITIES: JobCity[] = [
  'Hyderabad',
  'Pune',
  'Bangalore',
  'Chennai',
  'Mumbai',
  'Delhi',
  'Noida',
  'Gurgaon',
  'Kolkata',
  'Ahmedabad'
]

export default function JobsListPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<JobCity | 'All'>('All')
  const [selectedType, setSelectedType] = useState<Job['jobType'] | 'All'>('All')
  const [selectedExperience, setSelectedExperience] = useState<Job['experience'] | 'All'>('All')

  useEffect(() => {
    let mounted = true

    ;(async () => {
      try {
        const data = await loadJobs()
        if (!mounted) return
        setJobs(data)
      } catch (e: any) {
        if (!mounted) return
        setError(e?.message ?? 'Failed to load jobs')
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return jobs
      .filter((j) => (selectedCity === 'All' ? true : j.city === selectedCity))
      .filter((j) => (selectedType === 'All' ? true : j.jobType === selectedType))
      .filter((j) =>
        selectedExperience === 'All'
          ? true
          : j.experience === selectedExperience
      )
      .filter((j) => {
        if (!q) return true

        const hay = [
          j.title,
          j.company,
          j.city,
          j.locationLabel,
          j.jobType,
          j.experience,
          ...j.tags
        ]
          .join(' ')
          .toLowerCase()

        return hay.includes(q)
      })
      .sort((a, b) => a.postedDaysAgo - b.postedDaysAgo)
  }, [jobs, query, selectedCity, selectedType, selectedExperience])

  const clear = () => {
    setQuery('')
    setSelectedCity('All')
    setSelectedType('All')
    setSelectedExperience('All')
  }

  return (
    <div className="min-h-screen">
      <TopNav />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Find jobs across India
            </h1>

            <div className="mt-1 text-sm text-slate-600">
              Hyderabad, Pune, Bangalore, Chennai, Mumbai, Delhi, Noida,
              Gurgaon, Kolkata, Ahmedabad
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-xs font-semibold text-slate-500">
              Showing
            </div>

            <div className="text-lg font-bold">
              {loading ? '...' : filtered.length}
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FiltersSidebar
              cities={ALL_CITIES}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              selectedExperience={selectedExperience}
              onExperienceChange={setSelectedExperience}
              onClear={clear}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                {error ? (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    {error}
                  </div>
                ) : loading ? (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="animate-pulse rounded-xl border border-slate-200 bg-white p-4"
                      >
                        <div className="h-4 w-2/3 rounded bg-slate-200" />
                        <div className="mt-2 h-3 w-1/2 rounded bg-slate-200" />
                        <div className="mt-3 h-3 w-3/4 rounded bg-slate-200" />
                        <div className="mt-3 h-3 w-2/3 rounded bg-slate-200" />
                      </div>
                    ))}
                  </div>
                ) : filtered.length === 0 ? (
                  <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                    <div className="text-base font-semibold">
                      No jobs found
                    </div>

                    <div className="mt-1 text-sm text-slate-600">
                      Try removing filters.
                    </div>

                    <button
                      onClick={clear}
                      className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      Reset
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}