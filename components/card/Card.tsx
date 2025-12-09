
import type { Post } from '@/lib/type'
import Image from 'next/image'

interface Props {
  post:Post
}

const Card = ({post}:Props) => {
  const {image, title} = post
  return (
    <div className='w-full h-full flex flex-col rounded-sm border border-gray-200 group hover:-translate-y-1 transition-all duration-500 ease-in-out hover:shadow-md'>
      <div >
        <Image src={image} alt={title} width={300} height={250} className='rounded-t-sm'/>
      </div>
      <div className='p-2'>
        {title}
      </div>
      <div className='bg-gray-200 p-2 w-full flex items-center justify-center rounded-b-sm group-hover:bg-amber-400 hoverEffect group-hover:text-white'>
        بیشتر بخوانید
      </div>
    </div>
  )
}

export default Card
