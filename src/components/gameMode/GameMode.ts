import { handleStringScenario } from '../../utils/functions';
type ContainerComponentLabel = HTMLElement | string;

export const gameMode = (
  label: ContainerComponentLabel,
  onClick: () => void,
  className?: string,
  parentId?: string
): HTMLDivElement => {
  const component: HTMLDivElement = document.createElement('div')!;
  component.classList.add('mode-tile');

  typeof label === 'string' ? handleStringScenario(label, component) : component.appendChild(label);

  if (className) {
    component.classList.add(`${className}`);
  }
  component.innerHTML = `<div class = 'hide'>test</div>`;
  const parentEl = document.getElementById(`${parentId}`)!;

  component.addEventListener('click', onClick);

  return parentEl ? parentEl.appendChild(component) : component;
};
