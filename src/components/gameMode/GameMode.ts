type ContainerComponentLabel = HTMLElement | string

export const gameMode = (
  label: ContainerComponentLabel,
  onClick: void,
  parentId?: string,
  className?: string
): HTMLElement => {
  const component: HTMLElement = document.createElement('button')!

  label = HTMLElement
    ? (component.innerHTML = `${label}`)
    : /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(`${label}`)
    ? (component.style.backgroundImage = `url(${label})`)
    : (component.innerText = `${label}`)

  component.addEventListener('click', onClick)

  const parentEl = document.getElementById(`${parentId}`)
  component.classList.add(`${className}`)

  return parentEl ? parentEl.appendChild(component) : component
}
