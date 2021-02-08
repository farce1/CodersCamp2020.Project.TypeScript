import gameWindow from './GameWindow';


describe('Test gameWindow', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="geo-app"></div>';
      });
    it('should show europe.svg', () => {
        gameWindow({continent: 'Europe', gamesMode: 'nic'});
        const element: HTMLElement = document.getElementById('geo-app')!;
        expect(element.children).not.toBeNull();
        expect(element.children.length).toEqual(1);
        expect(element.firstElementChild?.children[0].children.length).toEqual(48);
        expect(element.firstElementChild?.innerHTML.includes('path')).toBeTruthy();
    });

    it('should show africa.svg', () => {
        gameWindow({continent: 'Africa', gamesMode: 'nic'});
        const element: HTMLElement = document.getElementById('geo-app')!;
        expect(element.children).not.toBeNull();
        expect(element.children.length).toEqual(1);
        expect(element.firstElementChild?.children[0].children.length).toEqual(53);
        expect(element.firstElementChild?.innerHTML.includes('path')).toBeTruthy();
    });

    it('should show north-america.svg', () => {
        gameWindow({continent: 'North America', gamesMode: 'nic'});
        const element: HTMLElement = document.getElementById('geo-app')!;
        expect(element.children).not.toBeNull();
        expect(element.children.length).toEqual(1);
        expect(element.firstElementChild?.children[0].children.length).toEqual(73);
        expect(element.firstElementChild?.innerHTML.includes('path')).toBeTruthy();
    });
}
)
