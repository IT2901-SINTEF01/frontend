import { gql } from '@apollo/client';

//Waiting for backend to merge.
export const METADATA = gql`
    query {
        allMetadata {
            id
            name
            description
            published
            source
            updated
            tags
            visualisations {
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
    description: string;
    published: string;
    source: string;
    updated: string;
    tags: string[];
    visualisations: [
        {
            type: string;
            axes: {
                x: {
                    name: string;
                };
                y: {
                    name: string;
                };
            };
        },
    ];
};

export type Metadata = {
    allMetadata: MetadataEntry[];
};
