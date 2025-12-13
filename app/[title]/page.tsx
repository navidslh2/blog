'use client'
import { posts } from '@/lib/data'
import MarkdownRenderer from '@/ui/MarkdownRenderer'
import { useParams } from 'next/navigation'
import React from 'react'

const PostPage = () => {
    const params = useParams()
    const post = posts.find(item => item.slug === params.title)
  return (
    <div className='pt-30'>
        {post && <MarkdownRenderer content={post?.description}/> } 
    </div>
  )
}

export default PostPage
