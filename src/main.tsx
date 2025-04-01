import { LocationProvider, Route, hydrate, prerender as ssr } from 'preact-iso'

import Home from '@/pages/index'

export const App: React.FC = () => {
  return (
    <LocationProvider>
      <Route path='/' component={Home} />
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('root'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
