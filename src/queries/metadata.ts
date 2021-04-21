import { gql } from '@apollo/client';
import { VisualisationType } from '../types/Metadata';
import { DataSourceID } from '../types/DataSource';

export const METADATA = gql`
    query {
        allMetadata {
            id
            datasourceId
            name
            description
            published
            source
            updated
            tags
            visualisations {
                type
                threshold
                axes {
                    x {
                        name
                    }
                    y {
                        name
                    }
                }
            }
        }
    }
`;

export const TAGS = gql`
    query {
        allMetadata {
            tags
        }
    }
`;

export type AllTags = {
    allMetadata: {
        tags: string[];
    }[];
};

export type MetadataEntry = {
    id: string;
    name: string;
    datasourceId: DataSourceID;
    description: string;
    published: string;
    source: string;
    updated: string;
    tags: string[];
    visualisations: {
        type: VisualisationType;
        threshold?: number;
        axes: {
            x: {
                name: string;
                limit?: [number, number];
                type: string;
            };
            y: {
                name: string;
                limit?: [number, number];
                type: string;
            };
        };
    }[];
};

export type AllMetadataResult = {
    allMetadata: MetadataEntry[];
};
