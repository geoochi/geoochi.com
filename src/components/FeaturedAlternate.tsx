import assets from '@/constants'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

type Demo = {
  heading: string
  githubLink?: string
  description?: string
  websiteLink?: string
  image?: string
  video?: string
  html?: boolean
  javascript?: boolean
  css?: boolean
  react?: boolean
  next?: boolean
  tailwind?: boolean
  python?: boolean
  opencv?: boolean
  ffmpeg?: boolean
  go?: boolean
}

const demos: Demo[] = [
  {
    video: assets.VideoTrackfly,
    heading: 'Track Fly Animation',
    description: 'An track fly animation built by python & js',
    githubLink: 'https://github.com/geoochi/track-fly',
    websiteLink: 'https://track-fly.geoochi.com',
    html: true,
    javascript: true,
    css: true,
  },
  {
    video: assets.VideoCollisions,
    heading: 'Collisions Render',
    description: 'colliding blocks that compute pi (opencv version)',
    githubLink: 'https://github.com/geoochi/collisions',
    python: true,
    opencv: true,
    ffmpeg: true,
  },
  {
    video: assets.VideoDquery,
    heading: 'Domain Duery',
    description: 'a fast site to query date and snapshot numbers of a domain',
    websiteLink: 'https://dquery.site',
    html: true,
    javascript: true,
    css: true,
    go: true,
  },
  {
    video: assets.VideoUltraQR,
    heading: 'Ultrafast Qrcode',
    description: 'a tool to encode a text or decode a qrcode image online, ultrafast',
    websiteLink: 'https://ultraqr.codes',
    githubLink: 'https://github.com/geoochi/ultraqr.codes',
    html: true,
    javascript: true,
    css: true,
  },
]

const LogoCard: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md dark:bg-primary-400 dark:hover:bg-primary-300'>
      <img className='h-8 object-contain dark:filter dark:invert' src={src} alt='logo' width={32} height={32} />
    </div>
  )
}

const CardGrid: React.FC = () => {
  return (
    <>
      <div className='flex flex-col gap-20 lg:mt-32 md:gap-40 lg:gap-60'>
        {demos.map((demo, index) => (
          <div
            key={index}
            className='featured-alt flex even:flex-col-reverse odd:flex-col-reverse gap-10 items-start relative md:gap-20 md:even:flex-row md:odd:flex-row-reverse'
          >
            <span className='featured-no absolute text-[10rem] text-primary-300 -top-32 opacity-20 hidden 2xl:block'>
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
            <div className={`w-full z-10 md:w-1/2 flex flex-col items-center ${index % 2 === 1 ? 'md:items-end' : 'md:items-start'}`}>
              <h3 className='text-primary text-4xl font-semibold mb-4 dark:text-white'>{demo.heading}</h3>
              <p className='text-primary-400 text-base dark:text-neutral-300'>{demo.description}</p>
              <div className='flex flex-wrap items-center gap-4 py-4'>
                {demo.html && <LogoCard src={assets.LogoHtml} />}
                {demo.css && <LogoCard src={assets.LogoCss} />}
                {demo.javascript && <LogoCard src={assets.LogoJavascript} />}
                {demo.react && <LogoCard src={assets.LogoReact} />}
                {demo.tailwind && <LogoCard src={assets.LogoTailwind} />}
                {demo.python && <LogoCard src={assets.LogoPython} />}
                {demo.opencv && <LogoCard src={assets.LogoOpencv} />}
                {demo.ffmpeg && <LogoCard src={assets.LogoFfmpeg} />}
                {demo.go && <LogoCard src={assets.LogoGo} />}
              </div>
              <div className='flex flex-row justify-center gap-4 py-4'>
                {demo.githubLink && (
                  <a
                    className='relative inline-block text-sm font-medium text-secondary dark:text-secondary-50 active:text-secondary group focus:outline-none focus:ring'
                    href={demo.githubLink}
                    target='_blank'
                  >
                    <span className='absolute inset-0 border border-current'></span>
                    <span className='flex flex-row gap-3 items-center px-4 py-3 transition-transform bg-white dark:bg-primary border border-current group-hover:-translate-x-1 group-hover:-translate-y-1'>
                      <svg
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 text-secondary dark:text-secondary-50 fill-current'
                      >
                        <path
                          d='M10.2397 0.517241C4.86796 0.517241 0.51709 4.86811 0.51709 10.2399C0.51709 14.5421 3.30019 18.1759 7.16493 19.4642C7.65106 19.5493 7.83336 19.2576 7.83336 19.0024C7.83336 18.7714 7.8212 18.0058 7.8212 17.1915C5.3784 17.6412 4.74643 16.596 4.55197 16.0491C4.4426 15.7696 3.96862 14.9067 3.55541 14.6758C3.21512 14.4935 2.72898 14.0438 3.54325 14.0317C4.30891 14.0195 4.85581 14.7366 5.03811 15.0282C5.91314 16.4988 7.31077 16.0856 7.86982 15.8304C7.95489 15.1984 8.21011 14.773 8.48963 14.53C6.32635 14.2869 4.06584 13.4483 4.06584 9.72942C4.06584 8.67208 4.4426 7.79705 5.06241 7.11647C4.96519 6.8734 4.62489 5.87683 5.15964 4.53997C5.15964 4.53997 5.97391 4.28475 7.83336 5.53654C8.61117 5.31778 9.43759 5.2084 10.264 5.2084C11.0904 5.2084 11.9169 5.31778 12.6947 5.53654C14.5541 4.2726 15.3684 4.53997 15.3684 4.53997C15.9031 5.87683 15.5628 6.8734 15.4656 7.11647C16.0854 7.79705 16.4622 8.65993 16.4622 9.72942C16.4622 13.4605 14.1895 14.2869 12.0262 14.53C12.3787 14.8338 12.6825 15.4171 12.6825 16.3286C12.6825 17.629 12.6704 18.6742 12.6704 19.0024C12.6704 19.2576 12.8527 19.5614 13.3388 19.4642C15.2689 18.8125 16.946 17.5721 18.1342 15.9173C19.3224 14.2626 19.9617 12.277 19.9623 10.2399C19.9623 4.86811 15.6114 0.517241 10.2397 0.517241Z'
                          fill='current'
                        />
                      </svg>
                      Github
                    </span>
                  </a>
                )}
                {demo.websiteLink && (
                  <a
                    className='relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring'
                    href={demo.websiteLink}
                    target='_blank'
                  >
                    <span className='absolute inset-0 border border-secondary group-active:border-secondary'></span>
                    <span className='flex items-center gap-3 px-4 py-3 transition-transform bg-secondary border border-secondary active:border-secondary active:bg-secondary group-hover:-translate-x-1 group-hover:-translate-y-1'>
                      <GlobeAltIcon className='w-6 h-6' />
                      Website
                    </span>
                  </a>
                )}
              </div>
            </div>
            <div className='w-full z-10 relative md:w-1/2'>
              {demo.video ? (
                <video className='w-full rounded-lg filter shadow-lg object-contain h-auto' src={demo.video} autoPlay muted loop />
              ) : (
                <img className='w-full rounded-lg filter shadow-lg object-contain h-auto' src={demo.image} alt={demo.heading} />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardGrid
