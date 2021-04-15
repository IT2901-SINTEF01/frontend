import { addDays } from 'date-fns';
import { random } from 'faker';
import { CartesianChartInput } from '../types/ChartInput';

/**
 * Generate sample time entries for use in vis. editor.
 *
 * @param size Size of the returned array.
 * @param min Minimum value of time entry value.
 * @param max Maximum value of time entry value.
 */
export default function (size: number, [min, max]: [number, number] = [0, 100]): CartesianChartInput {
    const values = new Array(size).fill(null).map(() => random.number({ min, max }));
    const timeseries = Object.keys(new Array(size).fill(null)).map((i) => addDays(new Date(2020, 12, 31), Number(i)));
    return values.map((e, i) => ({ y: e, x: timeseries[i].toISOString() }));
}
