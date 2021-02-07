import * as fs from 'fs';

const gameWindow = (gamesOption: {continent: string, gamesMode: string}) => {
    const parentDiv: HTMLElement = document.createElement('div');
    parentDiv.className = 'continent';
    switch (gamesOption.continent) {
        case 'Europe':
            parentDiv.innerText = fs.readFileSync('static/assets/europe.svg', 'utf-8');
            break;
        case 'Africa':
            parentDiv.innerText = fs.readFileSync('static/assets/africa.svg', 'utf-8');
            break;
        case 'North America':
            parentDiv.innerText = fs.readFileSync('static/assets/north-america.svg', 'utf-8');
            break
        default:
            parentDiv.innerText = '';
            break;
    }
    const appComponent: HTMLElement = document.getElementById('geo-app')!
    console.log(appComponent);
    appComponent.appendChild(parentDiv);
}


export default gameWindow;
