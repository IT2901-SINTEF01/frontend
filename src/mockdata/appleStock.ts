import { appleStock } from '@visx/mock-data';
import { CartesianChartInput } from '../types/ChartInput';

export const historicAppleStockPrice: CartesianChartInput = appleStock.map(({ date, close }) => ({
    x: date,
    y: close,
}));

export const numericAppleStockPrice: CartesianChartInput = appleStock.map(({ close }, index) => ({
    x: index,
    y: close,
}));
