import gameWindow from './GameWindow';


describe('invoke gameWindow', () => {
    it('should show europe.svg', () => {
        gameWindow({continent: 'Europe', gamesMode: 'nic'});
        // console.log('to bedzie div');
        const appComponent: HTMLElement = document.getElementById('geo-app')!
        console.log(appComponent);
        // const element: HTMLElement | null = document.querySelector('.continent');
        // console.log(element)
        // console.log(element?.innerText)
        // expect(element).not.toBeNull;
        // expect(element?.innerText).not.toBeNull;
    });


}
)
