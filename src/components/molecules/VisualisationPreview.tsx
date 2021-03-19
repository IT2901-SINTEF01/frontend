import React, { useState } from 'react';
import { Pane } from 'evergreen-ui';
import DataInfoBox from '../atoms/DatasetInfoBox';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import { DashboardItemSize } from '../../types/dashboard';
import VisualisationParameterSelector from '../atoms/VisualisationParameterSelector';
import AddToDashboard from '../atoms/AddToDashboard';
import { WEATHER_MET_API } from '../../queries/metApi';

type VisualisationPrevewProps = {
    metadata: MetadataEntry;
};

const VisualisationPrevew: React.FC<VisualisationPrevewProps> = ({ metadata }) => {
    const [paragraph, setParagraph] = useState<string | undefined>();
    const [size, setSize] = useState<DashboardItemSize>(DashboardItemSize.LARGE);

    return (
        <Pane
            width="100%"
            height="20rem"
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
            columnGap="1rem"
            gridAutoRows="18rem"
            rowGap="1rem"
        >
            <Pane gridColumn="span 1">
                <DataInfoBox title={metadata.name} description={metadata.description} tags={metadata.tags} />
            </Pane>
            {size !== DashboardItemSize.LARGE && (
                //Spacer for smaller sizes
                <Pane gridColumn={`span ${4 - size}`} />
            )}
            <Pane gridColumn={`span ${size}`}>
                <Pane display="flex" flexDirection="row-reverse">
                    <AddToDashboard
                        size={size}
                        title={metadata.name}
                        paragraph={paragraph}
                        id={metadata.id}
                        query={WEATHER_MET_API}
                    />
                </Pane>
                <DashboardItem
                    title={metadata.name}
                    height="100%"
                    width="100%"
                    titleSize={100}
                    paragraph={paragraph}
                ></DashboardItem>
            </Pane>
            <Pane gridColumn="span 1">
                <VisualisationParameterSelector setSize={setSize} setParagraph={setParagraph} />
            </Pane>
        </Pane>
    );
};

export default VisualisationPrevew;
