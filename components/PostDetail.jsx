import React from "react";

import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div class="mb-4 w-full rounded mx-auto relative">
        <div className="absolute rounded bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-full" />
        <div class="mb-3 ml-2 absolute left-0 bottom-0 w-full h-full z-10"></div>
        <img src={post.featuredImage.url} />
        <div class="p-4 absolute bottom-0 left-0 z-20">

          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            {post.title}
          </h2>
          <div class="flex mt-3">
            <img
              src={post.author.photo.url}
              class="h-8 w-8 rounded-full mr-2 object-cover"
            />
            <div>
              <p class="font-semibold text-gray-200 text-sm">
                {post.author.name}
              </p>
              <p class="font-semibold text-gray-400 text-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 mb-8">
        <div className="flex items-center mb-8 w-full"></div>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </>
  );
};

export default PostDetail;
