import React, { useState } from 'react';
import { Heading, InfoSignIcon, Pane } from 'evergreen-ui';
import DataInfoBox from '../atoms/DatasetInfoBox';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import { DashboardItemSize } from '../../types/dashboard';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';
import { WEATHER_MET_API } from '../../queries/metApi';
import AddToDashboard from './AddToDashboard';

type VisualisationPrevewProps = {
    metadata: MetadataEntry;
};

const VisualisationPrevew: React.FC<VisualisationPrevewProps> = ({ metadata }) => {
    const [paragraph, setParagraph] = useState<string>();
    const [size, setSize] = useState<DashboardItemSize>(DashboardItemSize.LARGE);

    return (
        <Pane
            width="100%"
            height="25rem"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
            columnGap="1rem"
            rowGap="1rem"
            padding="2rem"
        >
            <Pane gridColumn="span 1">
                <DataInfoBox title={metadata.name} description={metadata.description} tags={metadata.tags} />
            </Pane>
            {size !== DashboardItemSize.LARGE && (
                //Spacer for smaller sizes
                <Pane gridColumn={`span ${4 - size}`} />
            )}
            <Pane gridColumn={`span ${size}`} display="flex" flexDirection="column">
                <Pane display="flex" flexDirection="row" marginBottom="1rem">
                    <Heading size={400} paddingTop="3px">
                        Forhåndsvisning
                    </Heading>
                    <InfoSignIcon color="disabled" marginLeft={12} marginTop={3} />
                    <Pane flex="1" />
                    <AddToDashboard
                        dashboardItemInfo={{
                            size,
                            title: metadata.name,
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
        </Pane>
    );
};

export default VisualisationPrevew;
