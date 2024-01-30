import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header, Hero, Pallet } from './components';
import { Board } from './types/AppTypes';

function App() {
  const [ cutList, setCutList ] = useState<Array<Board>>([])

  return (
    <>
      <Header />
      <Hero setCutList={setCutList} />
      <Pallet cutList={cutList} />
    </>
  )
}

export default App
