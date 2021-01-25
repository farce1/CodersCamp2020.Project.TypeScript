type ContainerComponentLabel = string | HTMLElement;

export const ContainerComponent = (
  label: ContainerComponentLabel,
  parentId?: string,
  className?: string
): HTMLDivElement => {
  const container = document.createElement('div');
  className && container.classList.add(className);
  parentId && container.setAttribute('id', parentId);
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
  return container;
};
