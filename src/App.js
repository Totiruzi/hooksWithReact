import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Front End JavaScript library',
  },
  {
    title: 'Why use React?',
    content:
      "It's a library that make rendering contents on the web much faster,easier and elegant ",
  },
  {
    title: 'How do you use React?',
    content: 'By creating reusable components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A shade of Blue',
    value: 'blue',
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button> */}
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
    </div>
  );
};
