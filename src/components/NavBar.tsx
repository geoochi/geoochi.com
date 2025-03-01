import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import images from '@/constants/image'
import useDarkMode from '@/hooks/useDarkMode'

const NavBar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)

  const [addBlur, setAddBlur] = useState(false)

  const addBlurScroll = () => {
    if (window.scrollY >= 100) {
      setAddBlur(true)
    } else {
      setAddBlur(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', addBlurScroll)
    return () => {
      window.removeEventListener('scroll', addBlurScroll)
    }
  }, [])

  return (
    <div
      className={` ${
        addBlur && 'drop-shadow-lg backdrop-blur-md'
      } fixed top-0 w-full z-[100] transition-all duration-300`}
    >
      <div className='container'>
        <div className='flex justify-between items-center px-0 py-4 gap-4 sm:px-6 lg:py-8 lg:gap-10'>
          <a href='#home'>
            <img
              className='h-12 w-auto'
              src={darkTheme ? images.LogoDark : images.LogoLight}
              alt='brand icon'
              height={12}
              width={245}
            />
          </a>
          <div className='flex items-center gap-8'>
            <a
              href='https://geoochi.github.io/blog'
              className='text-2xl transition-opacity dark:text-white'
            >
              Blog
            </a>
            <div
              className='text-primary transition-opacity dark:text-white'
              onClick={handleMode}
            >
              {darkTheme ? (
                <SunIcon className='h-6 w-6 cursor-pointer opacity-100' />
              ) : (
                <MoonIcon className='h-6 w-6 cursor-pointer opacity-100' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
