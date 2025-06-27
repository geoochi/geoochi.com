import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import images from '@/constants'
import useTheme from '@/hooks/use-theme'

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='fixed top-0 w-full z-[100] bg-white dark:bg-primary'>
      <div className='container'>
        <div className='flex justify-between items-center px-0 py-4 gap-4 sm:px-6 lg:py-8 lg:gap-10'>
          <a href='#home'>
            <img className='h-12 w-auto' src={theme === 'dark' ? images.LogoDark : images.LogoLight} alt='brand icon' height={12} width={245} />
          </a>
          <div className='flex items-center gap-8'>
            <a href='https://geoochi.github.io/blog' target='_blank' className='text-2xl transition-opacity dark:text-white'>
              Blog
            </a>
            <a href='https://geoochi.github.io/gallery' target='_blank' className='text-2xl transition-opacity dark:text-white'>
              Gallery
            </a>
            <div className='text-primary dark:text-white' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? (
                <MoonIcon className='h-6 w-6 cursor-pointer opacity-100' />
              ) : (
                <SunIcon className='h-6 w-6 cursor-pointer opacity-100' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
