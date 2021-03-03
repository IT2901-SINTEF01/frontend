// Can be expanded with visualisation method if needed.
import { DocumentNode } from '@apollo/client';

export type DashboardItemInfo = {
    size: DashboardItemSize;
    paragraph?: string;
    query: DocumentNode;
};

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
}
