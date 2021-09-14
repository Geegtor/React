import * as React from 'react';
// через * лучше не импортировать, можно просто default export использовать
import { NavHeader } from './components/NavHeader';
import './Main.css';

const Main: React.FC = () => (
  <section className="App">
    HELLO MOVIE SEARCHER WITH REDUX STORE!
    <NavHeader params={['Main', 'About']} />
  </section>
);

export default Main;

