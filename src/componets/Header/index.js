import { User, useAuth0 } from '@auth0/auth0-react'
import React from 'react'

import { Link } from 'react-router-dom'
const navigations = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Products',
    path: '/products'
  },
  {
    id: 3,
    name: 'About',
    path: '/about'
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact'
  },
]
const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
         
          <span className="ml-3 text-xl font-bold font-serif text-blue-600 ">SnazzyMart</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link key={navigation.id} to={navigation.path} className='mr-5 hover-text-gray-900'>{navigation.name}</Link>
              )

            })
          }
        </nav>
        {
          isAuthenticated && (
            <div className="flex items-center ju">
              <img className='w-10 h-10 rounded-full mr-4 ' src={user.picture} alt={user.name} />
              <h2 className="text-lg font-semibold mr-2">{user.name}</h2>
            </div>
          )
        }
        {
          isAuthenticated ?
            (
              <button className="inline-flex items-center bg-blue-600  border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-700 rounded text-base  mr-4 md:mt-0" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) :
            (
              <button className="inline-flex items-center bg-blue-600  border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-700 rounded text-base  mr-4 md:mt-0"onClick={() => loginWithRedirect()}>Log In</button>
            )
        }


        <Link to={'/cart'} className="inline-flex items-center bg-blue-600  border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-700 rounded text-base  mt-4 md:mt-0">Go to cart
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>)
}

export default Header
