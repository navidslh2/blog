import { posts } from '@/lib/data'
import Card from './Card'



const Cards = () => {
  return (
    <div className='grid grid-cols-3 gap-7'>
      {posts.map(post =>(
        <div key={post.id} className='col-span-1'>
        <Card post={post} />
        </div>        
      ))}
    </div>
  )
}

export default Cards
