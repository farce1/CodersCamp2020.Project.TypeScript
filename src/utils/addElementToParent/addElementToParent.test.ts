import { addElementToParent } from './addElementToParent';

describe('add element from parent', () => {
  const parentElement = document.createElement('div');
  parentElement.id = '1';
  document.body.appendChild(parentElement);
  const childElement = document.createElement('div');
  childElement.id = '2';
  it('should add child element to parent element', () => {
    addElementToParent('1', childElement);
    const element = document.getElementById('1');
    expect(element?.innerHTML).toEqual('<div id="2"></div>');
  });
});
