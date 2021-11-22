import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (

    <div>

    <h1 class="mb-5 text-xl font-bold text-gray-700 md:text-2xl">{slug ? 'Related Posts' : 'Recent Posts'}</h1>
    
    <div className="bg-white rounded-lg px-8 pb-6 pt-2 mb-8">
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mt-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <a href={`/post/${post.slug}`} className="text-gray-700 text-md hover:underline" key={index}>{post.title}</a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PostWidget;