import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import TopNav from './TopNav'
import type { Job } from '../lib/jobs'
import { loadJobs } from '../lib/jobs'

export default function JobDetailsPage() {
  const { jobId } = useParams()
  const navigate = useNavigate()

  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  const job = useMemo(() => jobs.find((j) => j.id === jobId) ?? null, [jobs, jobId])

  if (loading) {
    return (
      <div className="min-h-screen">
        <TopNav />
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <TopNav />
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-red-800">{error}</div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="min-h-screen">
        <TopNav />
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="text-base font-semibold">Job not found</div>
            <button
              onClick={() => navigate('/jobs')}
              className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Back to jobs
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <TopNav />

      <div className="mx-auto max-w-6xl px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Back
        </button>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500">{job.jobType} • {job.experience}</div>
                  <h1 className="mt-1 text-2xl font-bold tracking-tight">{job.title}</h1>
                  <div className="mt-1 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{job.company}</span>
                    <span className="mx-2 text-slate-400">•</span>
                    <span>{job.locationLabel}</span>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-50 px-4 py-2 text-center">
                  <div className="text-xs font-semibold text-emerald-700">Posted</div>
                  <div className="text-sm font-bold text-emerald-800">{job.postedDaysAgo} days ago</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <h2 className="text-sm font-bold text-slate-900">About this job</h2>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                  {job.description}
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-bold text-slate-900">What you’ll do</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>Build and ship features with a product mindset</li>
                  <li>Collaborate across engineering, design, and QA</li>
                  <li>Improve reliability, performance, and developer experience</li>
                  <li>Document decisions and mentor team members</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sticky top-24">
              <div className="text-sm font-bold">Apply (frontend only)</div>
              <div className="mt-2 text-sm text-slate-600">
                This demo simulates application submission. No backend or login is used.
              </div>

             <Link
  to={`/apply/${job.id}`}
  onClick={(e) => e.stopPropagation()}
  className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
>
  Apply Now
</Link>

              <button
                className="mt-3 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  alert('Saved! (Simulation)')
                }}
              >
                Save job
              </button>

              <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                <div className="font-semibold text-slate-800">Note</div>
                <div className="mt-1">
                  You can deploy this as a static site. `jobs.json` lives on the frontend.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

