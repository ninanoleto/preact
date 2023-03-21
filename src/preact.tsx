import {
  h,
  FunctionalComponent,
  render,
  Fragment,
  RenderableProps,
} from 'preact';

// I want to have a query selector and a component that has a dataset attribute, so we can use the component in our project
export const useComponent = <
  T extends { dataset?: DOMStringMap } & { [key: string]: any }
>(
  querySelector: string,
  Component: FunctionalComponent<T>,
  props: Omit<T, 'dataset'>
) => {
  const element = document.querySelector(querySelector);

  if (!(element instanceof HTMLElement)) return;

  const allprops = { dataset: element.dataset, ...props };
  render(<Component {...(props as any)} />, element);
};
