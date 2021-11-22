import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div class="mb-9">
      <div class="max-w-4xl px-8 py-7 mx-auto bg-white rounded-lg">
        <div class="flex items-center justify-between">
          <span class="font-light text-gray-600">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          <a href={`/post/${post.slug}`} class="px-2 py-1 font-semi text-gray-100 bg-blue-300 rounded" >
            {post.categories[0].slug}
          </a>
        </div>
        <div class="mt-2">
          <a href={`/post/${post.slug}`} class="text-2xl font-bold text-gray-700 hover:underline">
            {post.title}
          </a>
          <p class="mt-2 text-gray-600">
            {post.excerpt}
          </p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <a href={`/post/${post.slug}`} class="text-blue-500 hover:underline">
            Read more
          </a>
          <div>
            <a href="#" class="flex items-center">
              <img
                src={post.author.photo.url}
                alt="avatar"
                class="hidden object-cover w-7 h-7 mx-3 rounded-full sm:block"
              />
              <h1 class="font-semi text-gray-700 hover:underline">{post.author.name}</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
