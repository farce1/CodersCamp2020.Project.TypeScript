import { render } from '../../utils/domHandlers';

type ContainerComponentLabel = string | HTMLElement;
type ContainerComponent = HTMLDivElement | HTMLElement;

export const ContainerComponent = (
  label: ContainerComponentLabel,
  className?: string,
  parentId?: string
): ContainerComponent => {
  const container = document.createElement('div');
  className && container.classList.add(className);
  container.setAttribute('id', 'container-component');
  container.setAttribute('data-testid', 'container-component');
  if (typeof label === 'string') {
    const isImage = /.jpg/.test(label);
    if (isImage) {
      container.style.background = `url("${label}") no-repeat`;
    } else {
      container.innerText = label;
    }
  } else {
    container.appendChild(label);
  }

  const element = parentId && document.getElementById(`${parentId}`);
  return element ? render(container, element) : container;
};
