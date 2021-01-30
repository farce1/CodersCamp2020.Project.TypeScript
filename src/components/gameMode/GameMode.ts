import { handleStringScenario } from '../../utils/functions';
type ContainerComponentLabel = HTMLElement | string;

export const gameMode = (
  label: ContainerComponentLabel,
  onClick: () => void,
  className?: string,
  parentId?: string
): HTMLDivElement => {
  const component: HTMLDivElement = document.createElement('div');
  component.classList.add('game-mode_container');

  //creates overlay appearing on hover
  const overlay: HTMLDivElement = document.createElement('div');
  overlay.classList.add('game-mode_overlay');
  component.appendChild(overlay);

  //setting parametres
  typeof label === 'string' ? handleStringScenario(label, component) : component.appendChild(label);

  if (className) {
    component.classList.add(`${className}`);
  }
  const parentEl = document.getElementById(`${parentId}`)!;

  component.addEventListener('click', onClick);

  return parentEl ? parentEl.appendChild(component) : component;
};
