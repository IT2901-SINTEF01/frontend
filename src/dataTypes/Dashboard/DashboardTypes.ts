export type DashboardItemInfo = {
    size: DashboardItemSize;
    withText: boolean;
};

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
}

export type DashboardProps = {
    items: DashboardItemInfo[];
};
