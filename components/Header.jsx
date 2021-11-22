import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  }, []);

  return (
    <div className="mb-8">
      <nav class="relative w-full  md:px-10 px-4 py-4 flex justify-between items-right bg-white">
        <div class="flex flex-column align-center justify-center">
          <a class="text-xl text-gray-700 font-bold" href="/#">
            VN
          </a>
          <a class="text-xl text-blue-300 font-bold hover:underline" href="/#">
            Blog
          </a>
        </div>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-end text-blue-600 p-3">
            <svg
              class="block h-4 w-4 "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden justify-center -translate-y-1.5 lg:flex lg:items-end ">
          <li>
            <a class="text-sm text-gray-400 hover:text-gray-500" href="/#">
              Posts
            </a>
          </li>
          <li class="text-gray-300 mb-1 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a class="text-sm text-gray-400 hover:text-gray-500 ml-2" href="posts/galfre-valentin">
              ¿Quien soy?
            </a>
          </li>
        </ul>
      </nav>
      <div class="rounded navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            
            <a class="mr-auto text-xl font-bold text-blue-300 leading-none" href="/#">
              VNBlog
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a
                  class="navbar-backdrop block p-4 text-sm font-semibold bg-blue-50 text-blue-600 rounded"
                  href="/#"
                >
                  Posts
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="navbar-backdrop block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="posts/galfre-valentin"
                >
                  ¿Quien soy?
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="navbar-backdrop block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="https://instagram.com/galfre.v"
                >
                  Instagram
                </a>
              </li>
              <li class="mb-2">
                <p
                  class="block p-4 text-sm font-semibold bg-blue-50 text-blue-600 rounded"
                  
                >
                  Categorias
                </p>
              </li>

              {categories.map((category) => 
              
                <li class="mb-1">
                  <a
                    class="navbar-backdrop block p-4 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href={`/category/${category.slug}`}
                  >
                  {category.name}
                  </a>
                </li>
              
              )}
                
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6"> </div>
            <p class="my-4 text-xs text-start text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
