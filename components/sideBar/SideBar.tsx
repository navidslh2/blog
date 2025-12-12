import { navbar } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='w-full p-3  text-sm border border-gray-300 rounded-md bg-white'>
      <div className='border-b-2 pb-2 border-gray-300/80'>دسته بندی</div>
      <div className='flex flex-col gap-5 pt-2'>
        {navbar.map(items =>
            items.children && 
            items.children.map(item =>(
                <Link href={item.href} key={item.title} className="p-2 pr-3 border-r-2 border-gray-300/80 relative group hover:pr-4 hoverEffect z-0">
                  <div className="after:content-[''] after:absolute after:w-3 after:h-3 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[7px] after:translate-x-0 after:border-2 after:border-gray-300 after:bg-white after:outline-2 after:outline-white group-hover:after:bg-amber-400 group-hover:after:border-amber-400 hoverEffect z-0">{item.title}</div></Link>
            ))
        )}
      </div>
    </div>
  )
}

export default SideBar
