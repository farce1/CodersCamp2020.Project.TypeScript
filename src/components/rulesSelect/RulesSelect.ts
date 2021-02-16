import { Button } from '../button/Button';
import { ContainerComponent } from '../containerComponent/ContainerComponent';

const RulesSelect = (handleRulesChange: any) => {
  const rulesSelect: HTMLDivElement = document.createElement('div');

  rulesSelect.className = 'rules-select';
  rulesSelect.appendChild(Button('', () => handleRulesChange('Prawda/Fałsz'), 'left-arrow-button'));
  rulesSelect.appendChild(ContainerComponent('Wybierz tryb'));
  rulesSelect.appendChild(Button('', () => handleRulesChange('Wskaż na mapie'), 'righ-arrow-button'));
  return rulesSelect;
};
export default RulesSelect;
