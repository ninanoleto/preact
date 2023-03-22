import { useDataComponent } from './preact';
import { useState } from 'preact/hooks';

type Props = {
  name: string;
  age: number;
};

export const Counter = ({ name, age }: Props) => {
  const [count, setCount] = useState(age);

  return (
    <div className='class'>
      Hello {name} you are {count} years old
      <br />
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        age person
      </button>
    </div>
  );
};

const counterComponents = () => {
  useDataComponent('.counter-component1', (dataset) => (
    <Counter name={dataset.name!} age={Number(dataset.age!)} />
  ));

  useDataComponent('.counter-component2', (dataset) => {
    const encodedJson = dataset.json;
    if (!encodedJson) throw new Error('invalid dataset');

    const json = decodeURI(encodedJson);
    const props = JSON.parse(json);
    return <Counter name={props.name} age={props.age} />;
  });
};

export default counterComponents;
