import React from 'react';
import { Spinner, Pane } from 'evergreen-ui';

export type LoadingProps = {
    size?: number;
};

const Loading: React.FC<LoadingProps> = ({ size = 12 }) => {
    return (
        <Pane width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Spinner size={size} />
        </Pane>
    );
};

export default Loading;
