/* eslint-disable react/display-name */
import React, { useMemo } from 'react';
import { Heading, InfoSignIcon, Pane, Tooltip, Text } from 'evergreen-ui';
import { MetadataEntry } from '../../queries/metadata';
import DashboardItem from './DashboardItem';
import { VisualisationType } from '../../types/Metadata';
import MockedVisualisation from './MockedVisualisation';
import { DashboardItemSize } from '../../types/VisualisationOption';

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

                <DashboardItem
                    title={metadata.name}
                    height="20rem"
                    width={getSizeInPercentage()}
                    titleSize={400}
                    paragraph={paragraph}
                >
                    {visualisation ? (
                        <MockedVisualisation visualisationType={visualisation.type} height="100%" width="100%" />
                    ) : (
                        <Text>Finner ikke visualisering</Text>
                    )}
                </DashboardItem>
            </Pane>
        </>
    );
};

export default VisualisationPreview;
