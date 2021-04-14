import React from 'react';
import { Pane } from 'evergreen-ui';

const Page: React.FC = (props) => (
    <Pane padding="1.5em" backgroundColor="#f7f8fa" minHeight="100vh">
        {props.children}
    </Pane>
);

export default Page;
