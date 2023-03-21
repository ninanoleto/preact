import { useComponent } from './preact';
import { useState } from 'preact/hooks';

type Props = {
  dataset?: DOMStringMap;
  url: string;
};

export const Counter = ({ dataset }: Props) => {
  console.log({ dataset });

  const [count, setCount] = useState(0);

  return (
    <div className='class' onClick={() => setCount((oldCount) => oldCount + 1)}>
      Hello {dataset?.name} - {count}
    </div>
  );
};

const counterComponent = () => {
  const url = 'ble';
  useComponent('.counter-component', Counter, { url });
};

export default counterComponent;
