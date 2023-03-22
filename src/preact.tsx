import { FunctionalComponent, JSX, render } from 'preact';

type DataElement = {
  dataset: DOMStringMap;
  children: DataElement[];
};

/**
 * Renders a component inside the html element that matches the given query selector
 * @param querySelector the element in which the component will be rendered
 * @param componentFactory a component returning fn that takes the dataset attribute from the html element that matches the given query selector
 *
 * @example
 * useComponent('.js-secret-links', () => <SecretLinks/>)
 * useDataComponent('.js-secret-links', (dataset) => (
 *    <SecretLinks
 *      useLimit={dataset.use_limit}
 *      expiryDate={dataset.expiry_date}/>
 * ));
 */
export const useComponent = (
  querySelector: string,
  componentFactory: (dataset: DOMStringMap | undefined) => JSX.Element
) => {
  const element = document.querySelector(querySelector);
  if (!(element instanceof HTMLElement)) return;
  element.innerHTML = '';

  render(componentFactory(element.dataset), element);
};

export const useDataComponent = (
  querySelector: string,
  componentFactory: (dataset: DOMStringMap) => JSX.Element
) => {
  const element = document.querySelector(querySelector);
  if (!(element instanceof HTMLElement)) return;
  if (!element.dataset) {
    console.error(
      `dataset missing on element ${element.tagName} ${querySelector}`
    );
    return;
  }
  element.innerHTML = '';
  render(componentFactory(element.dataset), element);
};
