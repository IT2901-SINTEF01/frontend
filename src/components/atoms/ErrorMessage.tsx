import { InlineAlert } from 'evergreen-ui';
import React from 'react';
import { Text, Pane } from 'evergreen-ui';

export type ErrorMessageProps = {
    size?: 300 | 400 | 500 | 600;
    message?: string;
    moreInfo?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'Error :(', moreInfo, size = 400 }) => {
    return (
        <Pane
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
        >
            <InlineAlert intent="danger" size={size}>
                {message}
            </InlineAlert>
            {moreInfo && <Text size={size}>{moreInfo}</Text>}
        </Pane>
    );
};

export default ErrorMessage;
