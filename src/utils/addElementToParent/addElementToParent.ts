export const addElementToParent = (parentId: string, element: HTMLElement) => {
    const parentElement: HTMLElement | null = document.getElementById(parentId);
    parentElement !== null && parentElement?.appendChild(element)
}
