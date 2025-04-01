import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import images from '@/constants'

const logos = [
  { image: images.LogoHtml, title: 'HTML5' },
  { image: images.LogoCss, title: 'CSS3' },
  { image: images.LogoJavascript, title: 'JavaScript' },
  { image: images.LogoReact, title: 'React' },
  { image: images.LogoTailwind, title: 'Tailwind' },
  { image: images.LogoPython, title: 'Python' },
  { image: images.LogoOpencv, title: 'OpenCV' },
  { image: images.LogoFfmpeg, title: 'FFmpeg' },
]

const TabSection: React.FC = () => {
  return (
    <>
      <Tabs defaultIndex={0}>
        <div>
          <TabList className='bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row'>
            <Tab className='text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none'>
              Know me more
            </Tab>
            <Tab className='text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl'>
              Technical Skills
            </Tab>
          </TabList>
        </div>
        <TabPanel className='flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all'>
          <div className='w-full text-primary md:w-1/2 dark:text-white'>
            <h2 className='text-2xl font-semibold mb-2'>Full Stack Developer | Python & DeepLearning Developer</h2>
            <p className='text-base font-normal text-neutral-700 dark:text-neutral-300'>
              Full Stack freelance, love to code some webpage or python algorithm demos
            </p>
            <br />
          </div>

          <div className='w-full relative md:w-1/2 md:h-[450px]'>
            <img
              src={images.ImageGeooChi}
              className='h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg'
              alt='Image Felix'
              width={664}
              height={450}
            />
          </div>
        </TabPanel>
        <TabPanel className='flex gap-20 items-center flex-col md:flex-row-reverse transition-all'>
          <div className='w-full text-center text-white max-w-3xl mx-auto md:h-[450px]'>
            <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8'>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400'
                >
                  <img
                    className='h-14 object-contain dark:filter dark:invert'
                    src={logo.image}
                    alt={logo.title}
                    loading='lazy'
                    width={56}
                    height={56}
                  />
                  <h6 className='text-xl font-semibold text-primary dark:text-white'>{logo.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default TabSection
