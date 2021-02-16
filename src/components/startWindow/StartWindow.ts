import { render } from '../../utils/domHandlers';

export const StartWindow = (
  label_title: string,
  button?: HTMLElement,
  parentId?: string,
  image_src?: string
): HTMLElement => {
  const window: HTMLElement = document.createElement('div');
  const title: HTMLElement = document.createElement('div');
  const span_title: HTMLElement = document.createElement('span');
  const span_image: HTMLElement = document.createElement('span');
  const img: HTMLImageElement = document.createElement('img');

  //Set window properties
  window.setAttribute('data-testid', 'start-window');
  window.setAttribute('id', 'start-window');
  window.classList.add('start-window');

  //Set title properties
  span_title.innerText = label_title;
  title.appendChild(span_image);
  title.appendChild(span_title);
  title.classList.add('title-box');
  window.appendChild(title);

  //Set image properties
  if (image_src) {
    img.src = image_src;
    img.alt = 'obraz world';
    img.classList.add('world-img');
    span_image.appendChild(img);
  }

  //Set button properties
  if (button) {
    button.classList.add('btn-box');
    window.appendChild(button);
  }

  //Export element
  const element = parentId && document.getElementById(parentId);
  return element ? render(window, element) : window;
};
