const usesData = [
  {
    section: 'Hardware',
    items: [
      { name: 'Keyboard - Acer OKW131' },
      { name: 'Laptop - Macbook Pro M1' },
      { name: 'Mouse - Logitech Pebble' },
      { name: 'Monitor - HKC 4K 27"' },
    ],
  },
  {
    section: 'Editor',
    items: [{ name: 'Cursor' }, { name: 'Font - Cascadia' }],
  },
  {
    section: 'Terminal',
    items: [{ name: 'fwalch' }, { name: 'Oh My zsh' }, { name: 'Iterm2' }],
  },
  {
    section: 'Other Software',
    items: [{ name: 'X' }, { name: 'Discord' }, { name: 'Figma' }],
  },
]

const UsesList = () => {
  return (
    <div className='container relative flex justify-center'>
      <div className='flex flex-col items-start justify-center lg:flex-row lg:justify-between lg:w-full'>
        {usesData.map((section, index) => (
          <div key={index} className='m-6'>
            <h2 className='text-2xl font-bold text-primary mb-4 dark:text-white'>
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className='list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300'
                >
                  {item.name}
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
