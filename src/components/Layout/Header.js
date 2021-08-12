import React, { useState, useContext } from "react"

import UserContext from "./../../context/UserContext"

import { Link } from "react-router-dom"

export default function Header() {
  const [nav, setNav] = useState(false)

  const userCtx = useContext(UserContext)

  const { authStatus, signout } = userCtx

  const showNav = (event) => {
    event.preventDefault()
    setNav(!nav)
  }

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* MOBILE */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {authStatus ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard/billing"
                      className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Billing
                    </Link>
                    <button
                      className="text-white text-sm"
                      onClick={() => {
                        signout()
                      }}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Registro
                    </Link>
                    <Link
                      to="/login"
                      className="border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Iniciar sesión
                    </Link>
                  </>
                )}
              </div>
            </div>

            {authStatus ? (
              <>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative">
                    <div>
                      <button
                        onClick={(e) => {
                          showNav(e)
                        }}
                        type="button"
                        className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://scontent.fntr3-1.fna.fbcdn.net/v/t1.6435-9/118953459_10223136493538175_646585658727754247_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=1OfKVFeP344AX9wfoMK&_nc_ht=scontent.fntr3-1.fna&oh=35665c65e6a61ea7154e87e0947b3296&oe=613C5D76"
                          alt=""
                        />
                      </button>
                    </div>

                    {nav ? (
                      <>
                        <div
                          className="origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu-button"
                          tabindex="-1"
                        >
                          <a
                            href="/"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-0"
                          >
                            Your Profile
                          </a>
                          <a
                            href="/"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-1"
                          >
                            Settings
                          </a>
                          <a
                            href="/"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-2"
                          >
                            Sign out
                          </a>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-4 space-y-1">
            <a
              href="#"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="border-transparent text-white-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div> */}
      </nav>
    </>
  )
}
