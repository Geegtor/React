
import * as React from 'react';
import { NavHeader } from './components/NavHeader';
import "./Main.css"

const Main: React.FC = () => {
  return (
    <section className='App'>
      HELLO MOVIE SEARCHER WITH REDUX STORE!
      <NavHeader params={["Main", "About"]} />
    </section>
  )
}

export default Main;