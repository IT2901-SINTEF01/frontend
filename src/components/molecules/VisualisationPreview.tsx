/* eslint-disable react/display-name */
import React, { useMemo, useState } from 'react';

import { Heading, InfoSignIcon, Pane } from 'evergreen-ui';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import { DashboardItemSize } from '../../types/dashboard';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';
import { WEATHER_MET_API } from '../../queries/metApi';
import AddToDashboard from './AddToDashboard';
import { VisualisationType } from '../../types/Metadata';
import ThresholdChart from '../charts/ThresholdChart';
import LineChart from '../charts/LineChart';
import { ParentSize } from '@visx/responsive';
import mockTimeEntry from '../../mockdata/mockTimeEntry';

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

        switch (visualisation.type) {
            case VisualisationType.THRESHOLD:
                return (width: number, height: number) => (
                    <ThresholdChart
                        width={width}
                        height={height}
                        data={mockTimeEntry(100, visualisation.axes.y.limit)}
                        thresholdValue={visualisation.threshold}
                        yLabel={visualisation.axes.y.name}
                    />
                );
            case VisualisationType.LINE:
                return (width: number, height: number) => (
                    <LineChart
                        width={width}
                        height={height}
                        data={mockTimeEntry(100, visualisation.axes.y.limit)}
                        yLabel={visualisation.axes.y.name}
                    />
                );
            case VisualisationType.BAR:
                return (width: number, height: number) => <LineChart width={width} height={height} data={[]} />; // TODO: replace with proper
            case VisualisationType.PIE:
                return (width: number, height: number) => <LineChart width={width} height={height} data={[]} />; // TODO: replace with proper
            default:
                return () => null;
        }
    }, [visualisation]);

    if (visualisation === undefined) {
        return null;
    }

    return (
        <>
            {size !== DashboardItemSize.LARGE && (
                //Spacer for smaller sizes
                <Pane gridColumn={`span ${4 - size}`} />
            )}
            <Pane gridColumn={`span ${size}`} display="flex" flexDirection="column">
                <Pane display="flex" flexDirection="row" marginBottom="1rem" flexWrap="wrap">
                    <Heading size={400}>
                        Forhåndsvisning
                        <InfoSignIcon color="disabled" marginLeft={12} marginTop={3} />
                    </Heading>
                    <Pane flex="1" />
                    <AddToDashboard
                        dashboardItemInfo={{
                            size,
                            name: metadata.name,
                            paragraph,
                            id: metadata.id,
                            query: WEATHER_MET_API,
                        }}
                    />
                </Pane>
                <Pane flex="1" height="100%">
                    <DashboardItem
                        title={metadata.name}
                        height="25rem"
                        width="100%"
                        titleSize={100}
                        paragraph={paragraph}
                    >
                        <ParentSize>
                            {(parent) => {
                                return child(parent.width, parent.height);
                            }}
                        </ParentSize>
                    </DashboardItem>
                </Pane>
            </Pane>
            <Pane gridColumn="span 1">
                <VisualisationParameterSelector setSize={setSize} setParagraph={setParagraph} />
            </Pane>
        </>
    );
};

export default VisualisationPreview;
