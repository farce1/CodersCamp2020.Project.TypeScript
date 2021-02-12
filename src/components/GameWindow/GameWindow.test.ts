import gameWindow from './GameWindow';

describe('Test gameWindow', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="geo-app"></div>';
  });
  it('should show europe.svg', () => {
    gameWindow({ continent: 'Europe', gamesMode: 'choseOnMap' });
    const element: HTMLElement = document.getElementById('geo-app')!;
    expect(element.children).not.toBeNull();
    expect(element.children.length).toEqual(2);
    expect((element.children[0].innerHTML = '<div id="games-mode"><p>flagQuiz</p></div>'));
    expect(element.lastElementChild?.children[0].children.length).toEqual(48);
    expect(element.lastElementChild?.innerHTML.includes('path')).toBeTruthy();
  });

  it('should show africa.svg', () => {
    gameWindow({ continent: 'Africa', gamesMode: 'flagQuiz' });
    const element: HTMLElement = document.getElementById('geo-app')!;
    expect(element.children).not.toBeNull();
    expect(element.children.length).toEqual(2);
    expect((element.children[0].innerHTML = '<div id="games-mode"><p>flagQuiz</p></div>'));
    expect(element.lastElementChild?.children[0].children.length).toEqual(53);
    expect(element.lastElementChild?.innerHTML.includes('path')).toBeTruthy();
  });

  it('should show north-america.svg', () => {
    gameWindow({ continent: 'North America', gamesMode: 'true/false' });
    const element: HTMLElement = document.getElementById('geo-app')!;
    expect(element.children).not.toBeNull();
    expect(element.children.length).toEqual(2);
    expect((element.children[0].innerHTML = '<div id="games-mode"><p>true/false</p></div>'));
    expect(element.children[1].innerHTML);
    expect(element.lastElementChild?.children[0].children.length).toEqual(73);
    expect(element.lastElementChild?.innerHTML.includes('path')).toBeTruthy();
  });
});
