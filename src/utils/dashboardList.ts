import { DashboardItemSize, DashboardItemInfo } from '../types/dashboard';

export const generateRandomList = (size: number): DashboardItemInfo[] =>
    new Array(size).fill(undefined).map(() => ({
        size: [DashboardItemSize.SMALL, DashboardItemSize.MEDIUM, DashboardItemSize.LARGE][
            Math.floor(Math.random() * 3)
        ],
        withText: false,
    }));