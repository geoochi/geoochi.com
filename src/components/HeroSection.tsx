import images from '@/constants'

const socials = [
  {
    logo: images.LogoX,
    alt: 'X Icon',
    link: 'https://x.com/geoochi',
  },
  {
    logo: images.LogoGithub,
    alt: 'Github Icon',
    link: 'https://github.com/geoochi',
  },
]

const HeroSection: React.FC = () => {
  return (
    <section id='home' className='bg-white dark:bg-primary'>
      <div className='container relative'>
        <div className='flex items-center flex-col'>
          <div className='flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen'>
            <h1 className='hero__heading'>Geoo Chi</h1>
          </div>
        </div>
        <div className='w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]'>
          <ul className='flex flex-row justify-center items-center w-full gap-6 md:flex-col'>
            {socials.map((social, index) => (
              <li
                key={index}
                className='bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300'
              >
                <a href={social.link} target='_blank'>
                  <img className='h-14 w-14 p-4 transition-all dark:invert' src={social.logo} alt={social.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
