<template>
    <nav
      class="flex w-full flex-nowrap items-center justify-between !bg-[#fff] !bg-opacity-50 backdrop-blur-md text-neutral-500 lg:flex-wrap lg:justify-ceneter min-h-[60px] 2xl:h-[96px] lg:h-[76px] relative z-[999] border border-t-0 border-l-0 border-r-0 border-b-[#e8e6f9]"
      data-te-navbar-ref
    >
      <div
        class="flex w-full flex-wrap lg:items-center lg:text-center lg:justify-center items-center justify-between mx-auto px-6 lg:px-0 relative"
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="-ml mb- rtl:mr- lg:ml-[30px] lg:rtl:mr-[20px] lg:hidden w-[100px] h-[27.27px]"
        >
          <!-- <MainLogo /> -->
        </div>
        <!-- Hamburger button for mobile view -->
        <button
          class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- Hamburger icon -->
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7 6.63647L20 6.63648"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12.6365H20"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 18.6365L20 18.6365"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
  
        <!-- Collapsible navbar container -->
        <div
          class="!visible hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:!items-center lg:!justify-center lg:basis-auto ml- rtl:mr-3"
          id="navbarSupportedContent3"
          data-te-collapse-item
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            class="lg:mr-[30px] rtl:mt-[-12px] ltr:mt-[px] mb- rtl:mr- lg:ml-[30px] lg:rtl:mr-[20px] hidden lg:block w-[100px] h-[27.27px]"
          >
            <!-- <MainLogo class="" /> -->
          </div>
          <!-- Left links -->
          <div
            class="list-style-none ltr:mr- flex flex-col justify-center items-center pl-0 lg:mt-1 lg:flex-row gap-6 2xl:gap-[48px] lg:pb-[0] md:pb-[20px] sm:pb-[20px] pb-[20px]"
            data-te-navbar-nav-ref
          >
            <!-- Home link -->
            <div
              class="cursor-pointer pl- lg:my-0 lg:pl- lg:pr-1 transform transition duration-500 hover:scale-110"
              data-te-nav-item-ref
            >rent
            </div>
            <div
              class="cursor-pointer pl- lg:my-0 lg:pl- lg:pr-1 transform transition duration-500 hover:scale-110"
              data-te-nav-item-ref
            >
              buy
            </div>
            <div
              class="pl- lg:my-0 lg:pl- lg:pr-1 transform transition duration-500 hover:scale-110"
              data-te-nav-item-ref
            >
              <a
                class="p-nav hover:text-[#3E1F9A]"
                aria-current="page"
                href="#"
                data-te-nav-link-ref
                >Sell
              </a>
            </div>
            <div
              class="pl- lg:my-0 lg:pl- lg:pr-1 transform transition duration-500 hover:scale-110"
              data-te-nav-item-ref
            >
              <a
                class="p-nav hover:text-[#3E1F9A]"
                aria-current="page"
                href="#"
                data-te-nav-link-ref
                >consultacy
              </a>
            </div>
            <!-- Features link -->
            <div
              class="relative ml- pr-1 transform transition duration-500 hover:scale-110"
              data-te-dropdown-ref
            >
              <a
                class="flex items-center hover:text-[#3E1F9A] transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none p-nav"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                Property
                
              </a>
              
            </div>
            
            <div
              class="relative ml- pr-1 transform transition duration-500 hover:scale-110"
              data-te-dropdown-ref
            >
              <a
                class="flex hover:text-[#3E1F9A] items-center transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none p-nav"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
               Finder
              </a>
            </div>
            <div
              class="relative ml- pr- transform transition duration-500 hover:scale-110"
              data-te-dropdown-ref
            >
              <a
                class="flex hover:text-[#3E1F9A] items-center transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none p-nav"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                Premier
                
              </a>
              
            </div>
           
  
            <div
              class="rounded-[8px] flex items-center justify-center"
              data-te-nav-link-ref
            >
              <!-- <a class="p-nav"><LanguageSwitcher /></a> -->
            </div>
  
            <div
              class="mb-4 pl- lg:mb-0 lg:pl-0 lg:pr-1"
              data-te-nav-item-ref
            >
            <router-link
                to="/login"
                class="p-nav border-[2px] border-[#F0EFFB] rounded-lg hover:bg-primary-color text-primary-color hover:border-primary-color hover:text-[#3E1F9A] hover:bg-slate-100 ltr:py-3 rtl:py-2 px-6 py-3 transition-colors duration-300"
                data-te-nav-link-ref
              >
                Log in
              </router-link>
            </div>
            <div
              class="pl-2 lg:mb-0 lg:pl-0 lg:pr-1 cursor-pointer"
              data-te-nav-item-ref
            >
             
              <router-link
                to="/register"
                class="p-nav border-[2px] border-[#F0EFFB] rounded-lg hover:bg-primary-color text-primary-color hover:border-primary-color hover:text-[#3E1F9A] hover:bg-slate-100 ltr:py-3 rtl:py-2 px-6 py-3 transition-colors duration-300"
                data-te-nav-link-ref
              >
                Sign up
              </router-link>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  </template>
  <script setup>
  import { computed, onMounted, watch, ref } from "vue";

  import { useRouter, useRoute } from "vue-router";
  const router = useRouter();
  const route = useRoute();
  
  </script>
  