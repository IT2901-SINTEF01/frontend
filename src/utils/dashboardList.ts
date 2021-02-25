import { DashboardItemSize, DashboardItemInfo } from '../dataTypes/Dashboard/DashboardTypes';

export const generateRandomList = (size: number): DashboardItemInfo[] =>
    new Array(size).fill(undefined).map(() => ({
        size: [DashboardItemSize.SMALL, DashboardItemSize.MEDIUM, DashboardItemSize.LARGE][
            Math.floor(Math.random() * 3)
        ],
        withText: false,
    }));

/**
 * Used to track the layout of a single item.
 * [i]ndex
 * [x]pos
 * [y]pos
 * [w]idth
 * [h]eight
 */
export type Layout = Record<'x' | 'y' | 'w' | 'h', number> & { i: string };

const validItemPosition = (x: number, size: DashboardItemSize) => {
    return 6 - x - size.valueOf() >= 0;
};

export const resolvePositions = (items: Array<DashboardItemInfo>): Array<Layout> =>
    items.reduce((prev, curr, i) => {
        const is = String(i);
        if (prev.length === 0) return [{ i: is, x: 0, w: curr.size.valueOf(), y: 0, h: 1 }];
        const last = prev.slice(-1)[0]; // discard every element but the last
        return [
            ...prev,
            validItemPosition(last.x + last.w, curr.size)
                ? { i: is, x: last.x + last.w, y: last.y, w: curr.size.valueOf(), h: 1 }
                : { i: is, x: 0, w: curr.size.valueOf(), y: last.y + 1, h: 1 },
        ];
    }, [] as Array<Layout>);
