import React, { useState } from 'react';
import { Heading, InfoSignIcon, Pane } from 'evergreen-ui';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import { DashboardItemSize } from '../../types/dashboard';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';
import { WEATHER_MET_API } from '../../queries/metApi';
import AddToDashboard from './AddToDashboard';

type VisualisationPreviewProps = {
    metadata: MetadataEntry;
};

const VisualisationPreview: React.FC<VisualisationPreviewProps> = ({ metadata }) => {
    const [paragraph, setParagraph] = useState<string>();
    const [size, setSize] = useState<DashboardItemSize>(DashboardItemSize.LARGE);

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
                <Pane flex="1">
                    <DashboardItem
                        title={metadata.name}
                        height="100%"
                        width="100%"
                        titleSize={100}
                        paragraph={paragraph}
                    />
                </Pane>
            </Pane>
            <Pane gridColumn="span 1">
                <VisualisationParameterSelector setSize={setSize} setParagraph={setParagraph} />
            </Pane>
        </>
    );
};

export default VisualisationPreview;
