import type { ReactNode } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import logoSVG from '../../assets/clock-ten.svg'
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen mx-auto">
      <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <div className="flex items-center mx-auto lg:px-6 max-w-7xl px-14">
          <div className="flex flex-row items-center">
            <Link
              className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors"
              href="/"
            >
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7V12L9.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </Link>
            <ul className="flex items-center content-center">
              <li className="ml-2 text-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </li>
              <li className="font-medium" style={{ letterSpacing: '.01px' }}>
                <a
                  className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors text-accents-6 duration-200 hover:text-accents-8 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Next.js Quickstart
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-end flex-1 hidden md:flex">
            <nav className="inline-flex flex-row items-center">
              <span className="flex items-center h-full ml-2 cursor-not-allowed text-accents-5">
                <a
                  data-variant="ghost"
                  className="relative inline-flex items-center justify-center cursor pointer no-underline px-3.5 rounded-md font-medium outline-0 select-none align-middle whitespace-nowrap transition-colors ease-in duration-200 text-success hover:bg-[rgba(0,68,255,0.06)] h-10 leading-10 text-[15px]"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
              </span>
              <span className="flex items-center h-full ml-2 cursor-not-allowed text-accents-5">
                <a
                  data-variant="primary"
                  className="relative inline-flex items-center justify-center cursor pointer no-underline px-3.5 rounded-md font-medium outline-0 select-none align-middle whitespace-nowrap transition-colors ease-in duration-200 border border-solid text-background bg-success border-success-dark hover:bg-success/90 shadow-[0_5px_10px_rgb(0,68,255,0.12)] h-10 leading-10 text-[15px]"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                 Useful Stuff
                </a>
              </span>
            </nav>
          </div>
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          My footer here{` `}

        </a>
      </footer>


    </div>
  )
}
