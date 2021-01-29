import { render } from '../../utils/domHandlers';

export const Button = (label: string, onClick: () => void, className?: string, parentId?: string): HTMLElement => {
  const button = document.createElement('div');
  button.classList.add('basic-btn');
  className && button.classList.add(className);
  button.innerText = label;
  button.addEventListener('click', onClick);
  const element = parentId && document.getElementById(parentId);
  return element ? render(button, element) : button;
};
