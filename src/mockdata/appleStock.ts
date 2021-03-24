import { appleStock } from '@visx/mock-data';

export const historicAppleStockPrice = appleStock.map(({ date, close }) => ({ time: date, value: close }));
