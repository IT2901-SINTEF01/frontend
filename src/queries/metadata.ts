import { gql } from '@apollo/client';
import { DataSourceID } from '../utils/dataSourceMappings';
import { VisualisationType } from '../types/Metadata';

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
