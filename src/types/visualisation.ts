export type VisualisationProps = {
    width: number;
    height: number;
    margin?: Record<'top' | 'right' | 'bottom' | 'left', number>;
    background?: string;
};

export type ChartEntry = {
    x: string | number;
    y: number;
};
