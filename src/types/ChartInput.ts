export type CartesianChartInput = Array<{
    x: number | string | Date;
    y: number;
    name?: string;
}>;

export type VisualisationProps = {
    margin?: Record<'top' | 'right' | 'bottom' | 'left', number>;
    background?: string;
    width: number;
    height: number;
};
