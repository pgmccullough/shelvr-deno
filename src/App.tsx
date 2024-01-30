import React, { useState } from 'react'
import { Header, Hero, Pallet } from './components/index.ts';
import { Board } from './types/AppTypes.ts';

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
