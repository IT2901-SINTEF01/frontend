import React, { useMemo } from 'react';
import { VisualisationType } from '../../types/Metadata';
import LineChart from '../visualisations/LineChart';
import ThresholdChart from '../visualisations/ThresholdChart';
import BarChart from '../visualisations/BarChart';
import { Text } from 'evergreen-ui';
import mockCartesianChartInput from '../../mockdata/mockCartesianChartInput';

type MockedVisualisationProps = {
    visualisationType: VisualisationType;
    height: string | number;
    width: string | number;
};

const MockedVisualisation: React.FC<MockedVisualisationProps> = ({ visualisationType, height, width }) => {
    const data = useMemo(() => mockCartesianChartInput(20, visualisationType), [visualisationType]);

    switch (visualisationType) {
        case VisualisationType.LINE:
            return <LineChart data={data} strokeColor="#66CCCC" isPreview={true} height={height} width={width} />;
        case VisualisationType.THRESHOLD:
            return <ThresholdChart data={data} strokeColor="#66CCCC" isPreview={true} height={height} width={width} />;
        case VisualisationType.BAR:
            return <BarChart data={data} height={height} width={width} isPreview={true} barNames={['Verdi']} />;
        default:
            return <Text>{visualisationType}</Text>;
    }
};

export default MockedVisualisation;
