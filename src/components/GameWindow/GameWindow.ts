import * as fs from 'fs';
import { addElementToParent } from '../../utils/addElementToParent/addElementToParent';

const gameWindow = (gamesOption: {continent: string, gamesMode: string}) => {
    const parentDiv: HTMLElement = document.createElement('div');
    parentDiv.className = 'continent';
    switch (gamesOption.continent) {
        case 'Europe':
            parentDiv.innerHTML = fs.readFileSync('src/assets/svg/europe.svg', 'utf-8');
            break;
        case 'Africa':
            parentDiv.innerHTML = fs.readFileSync('src/assets/svg/africa.svg', 'utf-8');
            break;
        case 'North America':
            parentDiv.innerHTML = fs.readFileSync('src/assets/svg/north-america.svg', 'utf-8');
            break
        default:
            parentDiv.innerHTML = '';
            break;
    }
    addElementToParent('geo-app', parentDiv)
}


export default gameWindow;
