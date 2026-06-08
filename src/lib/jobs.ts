export type JobCity =
  | 'Hyderabad'
  | 'Pune'
  | 'Bangalore'
  | 'Chennai'
  | 'Mumbai'
  | 'Delhi'
  | 'Noida'
  | 'Gurgaon'
  | 'Kolkata'
  | 'Ahmedabad'

export type Job = {
  id: string
  title: string
  company: string
  city: JobCity
  locationLabel: string
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  experience: '0-2 years' | '2-5 years' | '5-8 years' | '8+ years' | 'Fresher'
  postedDaysAgo: number
  tags: string[]
  description: string
  applyUrl: string
}

export async function loadJobs(): Promise<Job[]> {
  const res = await fetch('/jobs.json')
  if (!res.ok) throw new Error('Failed to load jobs.json')
  const data = (await res.json()) as Job[]
  return data
}

