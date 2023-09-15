import React from "react";
import { NavLink } from "react-router-dom";
function Sidebar() {
    return (
        <aside id="sidebar" class="fixed hidden h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
            <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div class="flex-1 px-3 bg-white divide-y space-y-1">
                        <ul class="space-y-2 pb-2">
                            <li>
                                <NavLink className={({ isActive}) =>
                                    isActive ? "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 bg-gray-200 hover:bg-gray-300 duration-300 group" : "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                } exact to="/admin/dashboard">
                                    <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span class="ml-3 font-[AwanZaman] font-semibold text-xl text-[#6B7280]">Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive}) =>
                                    isActive ?  "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 bg-gray-200 hover:bg-gray-300 duration-300 group" : "text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                                } to="/admin/products" class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                                    <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="ml-3 whitespace-nowrap font-[AwanZaman] font-semibold text-xl text-[#6B7280]">Products</span>
                                </NavLink>
                            </li>


                        </ul>
                        <div class="space-y-2 pt-2">
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
export default Sidebar;