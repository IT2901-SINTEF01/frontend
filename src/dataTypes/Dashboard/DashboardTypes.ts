export type DashboardItemInfo = {
    size: DashboardItemSize;
    withText: boolean;
};

export enum DashboardItemSize {
    small,
    medium,
    large,
}

export type DashboardProps = {
    items: DashboardItemInfo[];
};
