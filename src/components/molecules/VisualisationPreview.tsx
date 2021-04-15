/* eslint-disable react/display-name */
import React, { useMemo } from 'react';
import { Heading, InfoSignIcon, Pane, Tooltip } from 'evergreen-ui';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import { VisualisationType } from '../../types/Metadata';
import ThresholdChart from '../visualisations/ThresholdChart';
import LineChart from '../visualisations/LineChart';
import mockTimeEntry from '../../mockdata/mockTimeEntry';
import { DashboardItemSize } from '../../types/DashboardVisualisation';

type VisualisationPreviewProps = {
    metadata: MetadataEntry;
    selectedVisualisation: VisualisationType;
    size: DashboardItemSize;
    paragraph?: string;
};

const VisualisationPreview: React.FC<VisualisationPreviewProps> = ({
    metadata,
    selectedVisualisation,
    size,
    paragraph,
}) => {
    const visualisation = useMemo(() => metadata.visualisations.find((md) => md.type === selectedVisualisation), [
        metadata,
        selectedVisualisation,
    ]);

    const child = useMemo(() => {
        if (visualisation === undefined) {
            return () => null;
        }

        const timeEntryMockData = mockTimeEntry(
            100,
            selectedVisualisation === VisualisationType.THRESHOLD ? [-100, 100] : visualisation.axes.y.limit,
        );

        switch (visualisation.type) {
            case VisualisationType.THRESHOLD:
                return (
                    <ThresholdChart
                        data={timeEntryMockData}
                        thresholdValue={visualisation.threshold}
                        yLabel={visualisation.axes.y.name}
                        isPreview={true}
                        height="100%"
                        width="100%"
                    />
                );
            case VisualisationType.LINE:
                return (
                    <LineChart
                        data={timeEntryMockData}
                        yLabel={visualisation.axes.y.name}
                        strokeColor="#66CCCC"
                        isPreview={true}
                        height="100%"
                        width="100%"
                    />
                );
            case VisualisationType.BAR:
                return () => null; // TODO: replace with proper
            case VisualisationType.PIE:
                return () => null; // TODO: replace with proper
            default:
                return () => null;
        }
    }, [visualisation]);

    if (visualisation === undefined) {
        return null;
    }

    const getSizeInPercentage = () => {
        switch (size) {
            case DashboardItemSize.LARGE:
                return '100%';
            case DashboardItemSize.MEDIUM:
                return '75%';
            case DashboardItemSize.SMALL:
                return '50%';
        }
    };

    return (
        <>
            <Pane gridColumn="span 4" display="flex" flexDirection="column" width="100%">
                <Pane display="flex" flexDirection="row" marginBottom="1rem">
                    <Heading size={400}>
                        Forhåndsvisning
                        <Tooltip content="Forhåndsvisningen er kun ment som referanse. Størrelse og endelig data vil endres i dashbordet.">
                            <InfoSignIcon color="disabled" marginLeft={12} marginTop={3} verticalAlign="sub" />
                        </Tooltip>
                    </Heading>
                    <Pane flex="1" />
                </Pane>
                <Pane backgroundColor="white">
                    <DashboardItem
                        title={metadata.name}
                        height="20rem"
                        width={getSizeInPercentage()}
                        titleSize={400}
                        paragraph={paragraph}
                    >
                        {child}
                    </DashboardItem>
                </Pane>
            </Pane>
        </>
    );
};

export default VisualisationPreview;
