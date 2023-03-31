import { useDataComponent } from './preact';

type Film = {
  id: number;
  title: string;
  releasedAt: Date;
};

type Props = {
  films: Film[];
};

export const Films = ({ films }: Props) => {
  return (
    <div className='c-films'>
      <div>Total Films: {films.length} </div>

      <ul>
        {films.map(({ id, title, releasedAt }) => (
          <li key={id}>
            {title}: {releasedAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * Here we send data from the backend as JSON with URI encoding.
 * This is a possible way we can handle more complex data structure using data attributes when we want to prioritize the first paint.
 */
const filmsComponent = () => {
  useDataComponent('.js-films', (dataset) => {
    const encodedJson = dataset.json;
    if (!encodedJson) throw new Error('invalid dataset');

    const json = decodeURIComponent(encodedJson);
    const props = JSON.parse(json);

    return <Films films={props} />;
  });
};

export default filmsComponent;
