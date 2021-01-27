/* eslint-disable */

import '@testing-library/jest-dom';
import { getByAltText, getByTestId, getByText } from '@testing-library/dom';
import { render } from '../../utils/domHandlers';
import { MainScreen } from '../../views/MainScreen';
import Title from './Title';
describe('Test title component',()=>{
    const AnimatedTitle = Title('title',"animatedTitle");
beforeAll(()=>{
   document.body.innerHTML=` <div id="geo-app"></div>
   `;
   const appComponent: HTMLElement = document.getElementById('geo-app')!;
    const mainScreen = render(MainScreen(), appComponent);
    render(AnimatedTitle,appComponent);
});
it("should render properly",()=>{

   expect(getByTestId(document.documentElement,'animatedTitle')).toBeInTheDocument()

})
it("should render every single letter in diffrent span",()=>{
   
        "title".split("").map((letter,index)=>{
            expect(AnimatedTitle.children[index].tagName).toBe("SPAN");
            expect(AnimatedTitle.children[index].textContent).toBe(letter);
            
        });
    
})
})
