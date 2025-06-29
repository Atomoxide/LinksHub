import Link from 'next/link'
import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="z-10 flex w-full items-baseline justify-center rounded-lg text-center px-2 mb-24 md:mb-0">
      <div className="text-sm leading-7 md:tracking-wide text-center text-black dark:text-theme-secondary-light">
        <div>&copy; {new Date().getFullYear()} 星渡斯特拉的以太之光  </div>
        <div className="lg:flex">
          <div className="mr-1 md:-mt-2 lg:mt-0"> 设计与代码移植自：</div>
          <div className="md:-mt-2 lg:mt-0"></div>
          {' '}
          <Link
            href="https://github.com/rupali-codes/LinksHub/tree/main"
            rel="noopener noreferrer"
          >
            <span className="underline ml-1 duration-300 transition-all hover:text-theme-secondary">
            LinksHub Project
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
