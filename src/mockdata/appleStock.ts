import { appleStock } from '@visx/mock-data';

export const data = appleStock.map(({ date, close }) => ({ time: date, value: close }));
