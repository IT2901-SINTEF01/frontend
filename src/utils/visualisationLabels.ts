import { VisualisationType } from '../types/Metadata';

export function friendlyNameForVisualisationType(type: VisualisationType): string {
    return {
        [VisualisationType.LINE]: 'Linjediagram',
        [VisualisationType.BAR]: 'Søylediagram',
        [VisualisationType.PIE]: 'Sektordiagram',
        [VisualisationType.THRESHOLD]: 'Linjediagram med grenseverdi',
    }[type];
}
