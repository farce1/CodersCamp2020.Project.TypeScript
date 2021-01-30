import { render } from '../../utils/domHandlers'

export const StartWindow = (
  label_left: string,
  label_right: string,
  parentId?: string,
  button?: string
): HTMLElement => {
  const window = document.createElement('div')
  const title = document.createElement('div')
  window.setAttribute('id', 'start-window')
  window.classList.add('start-window')
  window.innerText = label_left + label_right
  const element = parentId && document.getElementById(parentId)
  return element ? render(window, element) : window
}
