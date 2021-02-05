export const render = (component: HTMLElement, parent: HTMLElement): HTMLElement => {
  parent.appendChild(component);
  return component;
};
