// Can be expanded with visualisation method if needed.
import { DocumentNode } from '@apollo/client';
import { DataSourceID } from '../utils/dataSourceMappings';
import { VisualisationType } from './Metadata';

/**
 * Represents an entry in the dashboard organism.
 * Used to derive GraphQL query and how it should be rendered in terms of size and extra information.
 */
export type DashboardItemInfo = {
    size: DashboardItemSize;
    paragraph?: string;
    query: DocumentNode;
    id: string; // Based on the ID from the metadata
    datasourceId: DataSourceID; // Used for mapping DashboardItem to mapping function and GraphQL query (DocumentNode)
    name: string;
    visualisationType: VisualisationType;
};

export enum DashboardItemSize {
    SMALL = 2,
    MEDIUM = 3,
    LARGE = 4,
}
