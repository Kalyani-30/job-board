import React from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
//   Facebook,
//   Linkedin,
//   Twitter,
//   Instagram
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600">
                <Briefcase size={20} className="text-white" />
              </div>

              <h2 className="text-xl font-bold text-white">
                JobHub
              </h2>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Find your dream job from thousands of verified opportunities
              across India.
            </p>

            {/* <div className="mt-4 flex gap-3">
              <Facebook className="cursor-pointer hover:text-white" />
              <Linkedin className="cursor-pointer hover:text-white" />
              <Twitter className="cursor-pointer hover:text-white" />
              <Instagram className="cursor-pointer hover:text-white" />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-white">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/remote-jobs" className="hover:text-white">
                  Remote Jobs
                </Link>
              </li>
              <li>
                <Link to="/saved-jobs" className="hover:text-white">
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Interview Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                support@jobhub.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Hyderabad, India
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} JobHub. All rights reserved.
        </div>

      </div>
    </footer>
  )
}