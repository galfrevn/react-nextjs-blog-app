import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div>
      <h1 class="mb-5 text-xl font-bold text-gray-700 md:text-2xl">
        Categories
      </h1>
      <div className="bg-white rounded-lg px-8 pb-3 pt-2 mb-8">
        {categories.map((category) => (
          <div>
            <ul>
              <li class="px-1 py-4 border-white hover:border-gray-200 transition duration-300">
                <a key={category.slug} href={`/category/${category.slug}`}>
                  
                  <span className={category.slug === 'webdev' ? "rounded inline-block h-4 w-4 bg-blue-300 mr-3" : "hidden"} ></span>
                  <span className={category.slug === 'unity' ? "rounded inline-block h-4 w-4 bg-green-300 mr-3" : "hidden"} ></span>
                  <span className={category.slug === 'miscelaneous' ? "rounded inline-block h-4 w-4 bg-red-300 mr-3" : "hidden"} ></span>
                 
                  <span className={category.slug === 'webdev' ? "text-blue-300 hover:text-blue-500" : "hidden"}>{category.name}</span>
                  <span className={category.slug === 'unity' ? "text-green-300 hover:text-green-500" : "hidden"}>{category.name}</span>
                  <span className={category.slug === 'miscelaneous' ? "text-red-300 hover:text-red-500" : "hidden"}>{category.name}</span>
                </a>
              </li>
            </ul>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
