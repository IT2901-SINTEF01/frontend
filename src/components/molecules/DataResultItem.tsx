import React from 'react';
import { Card, Pane } from 'evergreen-ui';
import DatasetInfoBox from '../atoms/DatasetInfoBox';
import mockTimeEntry from '../../mockdata/mockTimeEntry';
import { VisualisationType } from '../../types/Metadata';
import PlotlyLineChart from '../charts/PlotlyLineChart';

export type DataResultItemProps = {
    visualisationType: VisualisationType;
    title: string;
    description: string;
    tags: string[];
    yLabel: string;
    xLabel: string;
};

const DataResultItem: React.FC<DataResultItemProps> = ({
    title,
    description,
    tags,
    visualisationType,
    xLabel,
    yLabel,
}) => {
    let valueRange: [number, number];
    switch (visualisationType) {
        case VisualisationType.THRESHOLD:
            valueRange = [-30, 30];
            break;
        case VisualisationType.BAR:
        case VisualisationType.PIE:
        case VisualisationType.LINE:
        default:
            valueRange = [0, 50];
            break;
    }
    const timeEntryMockData = mockTimeEntry(100, valueRange);

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
                <PlotlyLineChart title={title} lineColor={`lightblue`} data={timeEntryMockData} isPreview={true} />
            </Pane>
        </Card>
    );
};

export default DataResultItem;
