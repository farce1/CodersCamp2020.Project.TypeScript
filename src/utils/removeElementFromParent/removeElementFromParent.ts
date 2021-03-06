export const removeElementFromParent = (parentId: string, elementId: string) => {
  const parentElement: HTMLElement | null = document.getElementById(parentId);
  if (parentElement !== null) {
    const childElement: HTMLElement | null = document.getElementById(elementId);
    childElement !== null && parentElement.removeChild(childElement);
  }
};
