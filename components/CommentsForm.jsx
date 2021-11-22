import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";
import toast, { Toaster } from "react-hot-toast";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    } else {
      const toastId = toast.loading("Uploading");
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        toast.success("Message uploaded!", {
          id: toastId,
        });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <>
      <h1 class="mb-5 text-xl font-bold text-gray-700 md:text-2xl">
        Leave a reply
      </h1>

      <div className="bg-white rounded-lg md:p-8 p-3 pb-12 mb-8">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            value={formData.comment}
            onChange={onInputChange}
            className="p-4 outline-none w-full rounded h-40 bg-gray-100 text-gray-700"
            name="comment"
            placeholder="Comment"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value={formData.name}
            onChange={onInputChange}
            className="py-2 px-4 outline-none w-full rounded bg-gray-100 text-gray-700"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={onInputChange}
            className="py-2 px-4 outline-none w-full rounded bg-gray-100 text-gray-700"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 my-2">
          <div>
            <input
              checked={formData.storeData}
              onChange={onInputChange}
              type="checkbox"
              id="storeData"
              name="storeData"
              value="true"
            />
            <label className="text-gray-500 text-sm cursor-pointer" htmlFor="storeData">
              {" "}
              Save my name, email in this browser for the next time I comment.
            </label>
          </div>
        </div>
        {error && (
          <p className="text-xs text-red-500">All fields are mandatory</p>
        )}
        <div className="mt-8">
          <button
            type="button"
            onClick={handlePostSubmission}
            className="transition duration-300 ease hover:bg-indigo-300 inline-block bg-blue-300 text-lg font-medium rounded text-white px-8 py-3 cursor-pointer"
          >
            Post Comment
          </button>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default CommentsForm;
