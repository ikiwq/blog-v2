'use client';
import { POST_PER_PAGE } from '@/app/constants';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  totalElements: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    totalElements
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? POST_PER_PAGE;

  return (
    <div className='flex items-center justify-center gap-2'>
      <div className="flex items-center justify-center gap-4">
        <button
          disabled={!hasPrevPage}
          onClick={() => { router.push(`?page=${Number(page) - 1}`) }}
          className="flex items-center justify-center px-4 h-10 text-base font-medium 
          text-gray-500 bg-white border border-gray-300 rounded-lg enabled:hover:bg-gray-200 enabled:hover:text-gray-700 
          dark:bg-neutral-800 dark:border-neutral-700 dark:text-gray-400 dark:enabled:hover:bg-neutral-700 dark:enabled:hover:text-white duration-200">
          Previous
        </button>

        <div className='font-exo2'>
          {page} of {Math.ceil(totalElements / Number(per_page))}
        </div>

        <button
          disabled={!hasNextPage}
          onClick={() => { router.push(`?page=${Number(page) + 1}`) }}
          className="flex items-center justify-center px-4 h-10 text-base font-medium 
          text-gray-500 bg-white border border-gray-300 rounded-lg enabled:hover:bg-gray-200 enabled:hover:text-gray-700 
          dark:bg-neutral-800 dark:border-neutral-700 dark:text-gray-400 dark:enabled:hover:bg-neutral-700 dark:enabled:hover:text-white duration-200">
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationControls