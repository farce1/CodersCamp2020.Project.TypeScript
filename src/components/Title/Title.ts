const Title = (label: string, id: string, className = 'title'): HTMLDivElement => {
  const AnimatedTitle: HTMLDivElement = document.createElement('div');
  AnimatedTitle.id = id;
  AnimatedTitle.setAttribute('data-testid', id);
  label.split('').map((letter: string, index: number) => {
    const span: HTMLSpanElement = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${100 * (label.length - index)}ms`;
    span.style.animationName = `${id}Animation`;
    AnimatedTitle.appendChild(span);
    AnimatedTitle.addEventListener('click', () => {
      window.location.href = '/';
    });
  });

  AnimatedTitle.className = className;

  return AnimatedTitle;
};
export default Title;
