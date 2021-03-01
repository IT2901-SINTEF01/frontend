//Can be expanded with visualisation method if needed.
//Hva vi må legge til. Text. Title. Visualisation method. Query. //Source.
export type DashboardItemInfo = {
    size: DashboardItemSize;
    withText: boolean;
};

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
}
