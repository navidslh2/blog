"use client";
import { posts } from "@/lib/data";
import MarkdownRenderer from "@/ui/MarkdownRenderer";
import { div } from "motion/react-client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const PostPage = () => {
  const params = useParams();
  const post = posts.find((item) => item.slug === params.title);
  return (
    <div className="p-5 pt-20 bg-white border border-gray-200 rounded-sm">
      <h1 className="font-bold text-xl pb-5 border-b-2 border-gray-200">
        {post?.title}
      </h1>
      {post && (
        <div className="pt-5 flex items-center justify-center">
          <Image src={post?.image} alt={post.title} width={850} height={600} />
        </div>
      )}
      {post &&
      <div className="pt-8">
      <MarkdownRenderer content={post?.description} />
      </div>}
    </div>
  );
};

export default PostPage;
