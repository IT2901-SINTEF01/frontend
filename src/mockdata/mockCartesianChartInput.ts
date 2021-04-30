import { addDays } from 'date-fns';
import { random } from 'faker';
import { CartesianChartInput } from '../types/ChartInput';
import { VisualisationType } from '../types/Metadata';

/**
 * Generate sample time entries for use in vis. editor.
 *
 * @param arrayLength How long is each array
 * @param numberOfArrays How many arrays
 * @param visualisationType What type of visualisation
 */
export default function (
    arrayLength: number,
    visualisationType: VisualisationType,
    numberOfArrays = 1,
): CartesianChartInput[] {
    const [min, max] = visualisationType === VisualisationType.THRESHOLD ? [-20, 20] : [0, 100];

    const generateCartesianChartInput = (): [number[], Date[]] => {
        const values = new Array(arrayLength).fill(null).map(() => random.number({ min, max }));

        // Object.keys of an array returns the indices
        const timeseries = Object.keys(values).map((i) => addDays(new Date(2020, 12, 31), Number(i)));

        return [values, timeseries];
    };

    return new Array(numberOfArrays).fill(null).map(() => {
        const [values, timeseries] = generateCartesianChartInput();
        return values.map((e, i) => ({ y: e, x: timeseries[i].toISOString() }));
    });
}
