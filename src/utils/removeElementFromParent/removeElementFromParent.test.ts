
import {
    removeElementFromParent
} from './removeElementFromParent';


describe('remove element from parent', () => {
    const parentElement = document.createElement('div');
    parentElement.id = '1';
    const childElement = document.createElement('div');
    childElement.id = '2';

    parentElement.appendChild(childElement);
    document.body.appendChild(parentElement)
    it('should remove child element from parent element', () => {
        removeElementFromParent('1', '2');
        const element = document.getElementById('1');
        expect(element?.innerHTML).toEqual('');
    });

}
)
