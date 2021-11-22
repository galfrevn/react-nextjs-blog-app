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
      <div className="bg-white rounded-lg p-8 mb-8">
        {categories.map((category) => (
          <div>
            <ul>
              <li class="px-1 py-4 border-white hover:border-gray-200 transition duration-300">
                <a key={category.slug} href={`/category/${category.slug}`}>
                  
                  <span class={category.slug === 'webdev' ? "rounded inline-block h-4 w-4 bg-blue-300 mr-3" : "hidden"} ></span>
                  <span class={category.slug === 'gaming' ? "rounded inline-block h-4 w-4 bg-green-300 mr-3" : "hidden"} ></span>
                  <span class={category.slug === 'react-native' ? "rounded inline-block h-4 w-4 bg-red-300 mr-3" : "hidden"} ></span>
                  {category.name}
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
