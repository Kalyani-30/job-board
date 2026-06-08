import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ApplyJob() {
  const { id } = useParams()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resume: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      jobId: id,
      ...form
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-20 max-w-lg rounded-3xl bg-white p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold text-emerald-600">
          🎉 Application Submitted
        </h2>

        <p className="mt-3 text-slate-600">
          Your application has been submitted successfully.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto my-10 max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">
        Apply for Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full rounded-xl border p-3"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-xl border p-3"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full rounded-xl border p-3"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <select
          required
          className="w-full rounded-xl border p-3"
          onChange={(e) =>
            setForm({ ...form, experience: e.target.value })
          }
        >
          <option value="">Select Experience</option>
          <option>Fresher</option>
          <option>0-2 years</option>
          <option>2-5 years</option>
          <option>5+ years</option>
        </select>

        <input
          type="file"
          required
          className="w-full rounded-xl border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}