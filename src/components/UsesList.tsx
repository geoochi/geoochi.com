import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const usesData = [
  {
    section: 'Hardware',
    items: [
      {
        name: 'Keyboard - Acer OKW131',
        link: 'https://sg.world.taobao.com/item/772946102439.htm',
      },
      {
        name: 'Laptop - Macbook Pro M1',
        link: 'https://www.apple.com/ph/shop/buy-mac/macbook-pro/',
      },
      {
        name: 'Mouse - Logitech Pebble',
        link: 'https://www.amazon.sg/Logitech-Wireless-Bluetooth-Receiver-Chromebook/dp/B07WV6TR8X',
      },
      {
        name: 'Monitor - HKC 4K 27"',
        link: 'https://www.gizmochina.com/2023/12/10/hkc-s2716u-monitor-launched/',
      },
    ],
  },
  {
    section: 'Editor',
    items: [
      {
        name: 'Cursor',
        link: 'https://cursor.com',
      },
      {
        name: 'Font - Cascadia',
        link: 'https://github.com/microsoft/cascadia-code',
      },
    ],
  },
  {
    section: 'Terminal',
    items: [
      {
        name: 'fwalch',
        link: 'https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/fwalch.zsh-theme',
      },
      { name: 'Oh My zsh', link: 'https://ohmyz.sh/' },
      { name: 'Iterm2', link: 'https://iterm2.com/' },
    ],
  },
  {
    section: 'Other Software',
    items: [
      { name: 'X', link: 'https://x.com/' },
      { name: 'Discord', link: 'https://discord.com/' },
      { name: 'Figma', link: 'https://www.figma.com/' },
    ],
  },
]

const UsesList = () => {
  return (
    <div className='container relative'>
      <div className='flex flex-col items-start'>
        {usesData.map((section, index) => (
          <div key={index} className='mb-6'>
            <h2 className='text-2xl font-bold text-primary mb-4 dark:text-white'>
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className='list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300'
                >
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    {item.name}
                    {item.link && (
                      <span className='ml-1 inline-flex align-middle'>
                        <ArrowTopRightOnSquareIcon className='h-5 w-5' />
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsesList
