import { appleStock } from '@visx/mock-data';
import { ChartEntry } from '../types/visualisation';

export const historicAppleStockPrice: ChartEntry[] = appleStock.map(({ date, close }) => ({ x: date, y: close }));
export const numericAppleStockPrice: ChartEntry[] = appleStock.map(({ close }, index) => ({ x: index, y: close }));
