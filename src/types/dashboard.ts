// Can be expanded with visualisation method if needed.
import { DocumentNode } from '@apollo/client';
import { DataSourceName } from '../utils/dataSourceMappings';

/**
 * Represents an entry in the dashboard organism.
 * Used to derive GraphQL query and how it should be rendered in terms of size and extra information.
 */
export type DashboardItemInfo = {
    size: DashboardItemSize;
    paragraph?: string;
    query: DocumentNode;
    id: string; // Based on the ID from the metadata
    name: DataSourceName; // Used for mapping DashboardItem to mapping function and GraphQL query (DocumentNode)
};

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
}
