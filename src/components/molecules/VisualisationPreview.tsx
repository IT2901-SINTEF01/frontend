/* eslint-disable react/display-name */
import React, { useMemo, useState } from 'react';
import { Heading, InfoSignIcon, Pane, Tooltip } from 'evergreen-ui';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';
import AddToDashboard from './AddToDashboard';
import { VisualisationType } from '../../types/Metadata';
import ThresholdChart from '../visualisations/ThresholdChart';
import { ParentSize } from '@visx/responsive';
import LineChart from '../visualisations/LineChart';
import mockTimeEntry from '../../mockdata/mockTimeEntry';
import { DashboardItemSize } from '../../types/DashboardVisualisation';

type VisualisationPreviewProps = {
    metadata: MetadataEntry;
    selectedVisualisation: VisualisationType;
};

const VisualisationPreview: React.FC<VisualisationPreviewProps> = ({ metadata, selectedVisualisation }) => {
    const [paragraph, setParagraph] = useState<string>();
    const [size, setSize] = useState<DashboardItemSize>(DashboardItemSize.LARGE);

    const visualisation = useMemo(() => metadata.visualisations.find((md) => md.type === selectedVisualisation), [
        metadata,
        selectedVisualisation,
    ]);

    const child = useMemo(() => {
        if (visualisation === undefined) {
            return () => null;
        }

        const timeEntryMockData = mockTimeEntry(100, visualisation.axes.y.limit);

        switch (visualisation.type) {
            case VisualisationType.THRESHOLD:
                return (width: number, height: number) => (
                    <ThresholdChart
                        width={width}
                        height={height}
                        data={timeEntryMockData}
                        thresholdValue={visualisation.threshold}
                        yLabel={visualisation.axes.y.name}
                    />
                );
            case VisualisationType.LINE:
                return (width: number, height: number) => (
                    <LineChart
                        width={width}
                        height={height}
                        data={timeEntryMockData}
                        yLabel={visualisation.axes.y.name}
                        strokeColor="#66CCCC"
                        colorBottom="#E0EEEE"
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
                            <InfoSignIcon color="disabled" marginLeft={12} marginTop={3} />
                        </Tooltip>
                    </Heading>
                    <Pane flex="1" />
                    <AddToDashboard />
                </Pane>
                <Pane flex="1" height="100%">
                    <DashboardItem
                        title={metadata.name}
                        height="20rem"
                        width={getSizeInPercentage()}
                        titleSize={100}
                        paragraph={paragraph}
                    >
                        <ParentSize debounceTime={400}>
                            {(parent) => {
                                return child(parent.width, parent.height);
                            }}
                        </ParentSize>
                    </DashboardItem>
                </Pane>
            </Pane>
            <Pane gridColumn="span 1">
                <VisualisationParameterSelector
                    size={size}
                    setSize={setSize}
                    paragraph={paragraph}
                    setParagraph={setParagraph}
                />
            </Pane>
        </>
    );
};

export default VisualisationPreview;
