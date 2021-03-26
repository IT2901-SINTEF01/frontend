import { VisualisationType } from '../types/Metadata';

export function friendlyNameForVisualisationType(type: VisualisationType): string {
    return {
        [VisualisationType.LINE]: 'Linjegraf',
        [VisualisationType.BAR]: 'Bargraf',
        [VisualisationType.PIE]: 'Paigraf',
        [VisualisationType.THRESHOLD]: 'Grensegraf',
    }[type];
}
