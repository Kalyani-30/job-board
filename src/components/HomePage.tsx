import { Link } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Find Your Dream Job
          </h1>

          <p className="mt-4 text-slate-600">
            Discover thousands of opportunities across India.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/jobs"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-white"
            >
              Explore Jobs
            </Link>

            <Link
              to="/jobs"
              className="rounded-xl border px-6 py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}