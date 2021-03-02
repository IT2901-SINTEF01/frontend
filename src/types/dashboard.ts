//Can be expanded with visualisation method if needed.
//Hva vi må legge til. Text. Title. Visualisation method. Query. //Source.
import { DocumentNode } from '@apollo/client';

export type DashboardItemInfo = {
    size: DashboardItemSize;
    withText: boolean;
    query: DocumentNode;
};

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
}
