"use client"
import { posts } from "@/lib/data";
import Card from "./Card";
import { useEffect, useState } from "react";
import type { Post } from "@/lib/type";
import { useSearchParams } from "next/navigation";
import Pagination from "@/ui/Pagination";


const Cards = () => {
  const [postsToShow, setPostsToShow] = useState<Post[]>([])
  const searchParams   = useSearchParams()
  const page = searchParams?.get("page")?? '1'
  const currentPage = Number(page ); 
  const pageNumber = Math.ceil(posts.length / 9);

  useEffect(()=>{
    const start = (currentPage - 1) * 9;
    const end = start + 9;
    setPostsToShow(posts.slice(start, end))
  },[currentPage])

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="grid grid-cols-3 gap-7">
        {postsToShow.map((item) => (
          <div key={item.id} className="col-span-1">
            <Card post={item} />
          </div>
        ))}
      </div>
      <Pagination pageNumber={pageNumber} currentPage={currentPage}/>
    </div>
  );
};

export default Cards;
