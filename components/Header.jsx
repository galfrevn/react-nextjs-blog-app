import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mb-8 ">
      <div class="px-2 py-4 bg-white w-screen">
        <div class="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <div>
              <a href="/#" class="text-xl font-bold text-gray-800 md:text-2xl">
                VNBlog
              </a>
            </div>
            <div>
              <button
                type="button"
                class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex-col hidden md:flex md:flex-row md:-mx-4">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span class="my-1 cursor-pointer text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
