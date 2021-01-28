export const Button = (label:string): HTMLDivElement => {
  const button = document.createElement('div');
  button.innerText = label;
  return button;
};
