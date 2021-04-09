import React from 'react';
import { Card, Heading, Pane, Text } from 'evergreen-ui';
import DatasetInfoBox from '../atoms/DatasetInfoBox';
import { ParentSize } from '@visx/responsive';
import ThresholdChart from '../charts/ThresholdChart';
import LineChart from '../charts/LineChart';
import mockTimeEntry from '../../mockdata/mockTimeEntry';
import { VisualisationType } from '../../types/Metadata';
import { friendlyNameForVisualisationType } from '../../utils/visualisationLabels';

export type DataResultItemProps = {
    visualisationType: VisualisationType;
    title: string;
    description: string;
    tags: string[];
};

const DataResultItem: React.FC<DataResultItemProps> = ({ title, description, tags, visualisationType }) => {
    const timeEntryMockData = mockTimeEntry(100);

    return (
        <Card
            width="100%"
            height="20rem"
            elevation={1}
            display="flex"
            padding="1rem"
            role="button"
            aria-pressed="false"
            aria-label={`Gå til visualiseringsvelger for ${title}.`}
        >
            <Pane flex="1" marginRight="2rem">
                <DatasetInfoBox title={title} description={description} tags={tags} />
            </Pane>
            <Pane flex="2">
                <Heading marginBottom="1rem">
                    Forslag til visualisering: {friendlyNameForVisualisationType(visualisationType)}
                </Heading>
                <ParentSize>
                    {(parent) => {
                        const height = parent.height - 40;
                        switch (visualisationType) {
                            case VisualisationType.LINE:
                                return (
                                    <LineChart
                                        width={parent.width}
                                        height={height > 0 ? height : parent.height}
                                        data={timeEntryMockData}
                                        strokeColor="#66CCCC"
                                        colorBottom="#E0EEEE"
                                    />
                                );
                            case VisualisationType.THRESHOLD:
                                return (
                                    <ThresholdChart
                                        width={parent.width}
                                        height={height > 0 ? height : parent.height}
                                        data={timeEntryMockData}
                                    />
                                );
                            default:
                                return <Text>{visualisationType}</Text>;
                        }
                    }}
                </ParentSize>
            </Pane>
        </Card>
    );
};

export default DataResultItem;
