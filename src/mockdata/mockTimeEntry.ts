import { TimeEntry } from '../types/visualisation';
import { addDays } from 'date-fns';
import faker from 'faker';

/**
 * Generate sample time entries for use in vis. editor.
 *
 * @param size Size of the returned array.
 * @param min Minimum value of time entry value.
 * @param max Maximum value of time entry value.
 */
export default function (size: number, [min, max]: [number, number] = [0, 100]): TimeEntry[] {
    const values = new Array(size).fill(null).map(() => faker.random.number(max) + min);
    const timeseries = Object.keys(new Array(size).fill(null)).map((i) => addDays(new Date(2020, 12, 31), Number(i)));
    return values.map((e, i) => ({ value: e, time: timeseries[i].toISOString() }));
}
