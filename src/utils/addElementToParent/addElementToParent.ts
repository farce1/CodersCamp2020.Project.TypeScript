export const addElementToParent = (parentId: string, element: HTMLElement) => {
    const parentElement: HTMLElement | null = document.getElementById(parentId);
    if(parentElement !== null) {
        parentElement?.appendChild(element)
    }
    return
}
