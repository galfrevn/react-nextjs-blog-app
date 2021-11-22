import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <>
          <h1 class="mb-5 text-xl font-bold text-gray-700 md:text-2xl">
            {comments.length} Comments
          </h1>

          {comments.map((comment, index) => (
            <div className="bg-white rounded px-8 py-4 mb-3">
              <div key={index}>
                <p>
                  <span className="font-semibold">{comment.name}</span> on{" "}
                  {moment(comment.createdAt).format("MMM DD, YYYY")}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">
                  {parse(comment.comment)}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Comments;
