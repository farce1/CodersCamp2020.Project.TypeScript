/* eslint-disable */

import '@testing-library/jest-dom'
import { getByTestId } from '@testing-library/dom'
import { render } from '../../utils/domHandlers'
import { MainScreen } from '../../views/MainScreen/MainScreen'
import Title from './Title'
describe('Test title component', () => {
  const AnimatedTitle: HTMLDivElement = Title('titleText', 'animatedTitle')
  beforeAll(() => {
    document.body.innerHTML = ` <div id="geo-app"></div>
   `
    const appComponent: HTMLElement = document.getElementById('geo-app')!
    const mainScreen: HTMLElement = render(MainScreen(), appComponent)
    render(AnimatedTitle, mainScreen)
  })
  it('should render properly', () => {
    expect(
      getByTestId(document.documentElement, 'animatedTitle')
    ).toBeInTheDocument()
  })
  it('should render every single letter in diffrent span', () => {
    'titleText'.split('').map((letter, index) => {
      expect(AnimatedTitle.children[index].tagName).toBe('SPAN')
      expect(AnimatedTitle.children[index].textContent).toBe(letter)
    })
  })
  it("should have default class 'title' and custom id ", () => {
    expect(AnimatedTitle.className).toBe('title')
    expect(AnimatedTitle.id).toBe('animatedTitle')
  })
  it('should have custom class and custom id', () => {
    const AnimatedTitleCustomClass = Title('titleText', 'id1', 'titleClass')
    expect(AnimatedTitleCustomClass.className).toBe('titleClass')
    expect(AnimatedTitleCustomClass.id).toBe('id1')
  })
})
