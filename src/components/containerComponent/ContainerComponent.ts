import { render } from '../../utils/domHandlers';
import { handleStringScenario } from '../../utils/functions';

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

  typeof label === 'string' ? handleStringScenario(label, container) : container.appendChild(label);

  const element = parentId && document.getElementById(`${parentId}`);
  return element ? render(container, element) : container;
};
