import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items = [
  {
    title: 'What is React?',
    content: 'React is a Front End JavaScript library'
  },
  {
    title: 'Why use React?',
    content: 'It\'s a library that make rendering contents on the web much faster,easier and elegant '
  },
  {
    title: 'How do you use React?',
    content: 'By creating reusable components'
  }
]
export default () => {
  return (
  <div>
    {/* <Accordion it ems={items}/> */}
    <Search />
  </div>)
}; 