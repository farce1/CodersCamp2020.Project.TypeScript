export const handleStringScenario = (label: string, container: HTMLDivElement): HTMLDivElement => {
  const isImage = /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(`${label}`);
  if (isImage) {
    container.style.background = `url("${label}") no-repeat`;
  } else {
    container.innerText = label;
  }
  return container;
};
