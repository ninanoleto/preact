import { useComponent } from './preact';
import { useState } from 'preact/hooks';

// This is the simplest kind of stateful component you can have in react: a simple counter that increases everytime you click on a button
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  return (
    <div className='c-counter'>
      The count is: {count}
      <br />
      <button onClick={increaseCount}>age person</button>
    </div>
  );
};

// This is a setup function that calls a helper made specifically for this project.
// It's pupose is to set up the React component to render on a specific html element on the page
const counterComponent = () => {
  useComponent('.js-counter', () => <Counter />);
};

export default counterComponent;
