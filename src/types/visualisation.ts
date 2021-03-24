export type VisualisationProps = {
    width: number;
    height: number;
    margin?: Record<'top' | 'right' | 'bottom' | 'left', number>;
    background?: string;
};

export type TimeEntry = {
    time: string;
    value: number;
};
