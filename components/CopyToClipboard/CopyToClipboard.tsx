import React from 'react'
import { BiCopy } from 'react-icons/bi'
import useCopyToClipboard from 'hooks/useCopyToClipboard'
import { FaCheckSquare } from 'react-icons/fa'

type CopyToClipboardProps = {
  url: string
}

export const CopyToClipboard = ({ url }: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard()

  function handleCopy(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
    copyToClipboard(url)
  }
  return (
    <div
      className="flex items-center justify-center text-center dark:border-none border border-theme-secondary/25 text-theme-secondary dark:text-white gap-x-2 bg-light-primary dark:bg-light-primary dark:bg-opacity-10 dark:hover:bg-opacity-20 rounded-lg mt-2 cursor-pointer relative py-2 px-2 truncate ..."
      onClick={(e) => handleCopy(e)}
    >
      <span className="truncate ...">复制链接</span>
      {success ? ( // Render the FaCheckSquare icon if success is true
        <FaCheckSquare
          size={'1.3rem'}
          aria-label="Link copied" // Add aria-label for accessibility
        />
      ) : (
        <BiCopy // Otherwise, render the default FaRegCopy icon
          size={'1.3rem'}
          aria-label="Copy link to clipboard" // Add aria-label for accessibility
        />
      )}
    </div>
  )
}
