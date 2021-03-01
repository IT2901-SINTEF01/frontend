import React from 'react';
import { Card, Pane, Heading, Paragraph } from 'evergreen-ui';

export type DashboardItemProps = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
    paragraph?: string;
    textSize?: 300 | 400 | 500;
};

const DashboardItem: React.FC<DashboardItemProps> = ({
    title,
    width,
    paragraph,
    height,
    titleSize,
    textSize,
    children,
}) => {
    return (
        <Card width={width} height={height} display="flex" flexDirection="column" border="default" elevation={1}>
            <Heading size={titleSize} marginTop={25} marginLeft={25}>
                {title}
            </Heading>
            {paragraph && textSize ? (
                /* Large with text*/
                <Pane
                    width="95%"
                    height="inherit"
                    overflow="auto"
                    display="flex"
                    flexDirection="row"
                    alignSelf="center"
                    marginTop={10}
                >
                    <Paragraph width="15%" height="100%" size={textSize}>
                        {paragraph}
                    </Paragraph>
                    <Pane marginLeft={15} justifyContent="center" width="80%" height="80%">
                        {children}
                    </Pane>
                </Pane>
            ) : (
                /* Small without text */
                <Pane
                    alignSelf="center"
                    marginTop="auto"
                    marginBottom="auto"
                    justifyContent="center"
                    width="80%"
                    height="70%"
                >
                    {children}
                </Pane>
            )}
        </Card>
    );
};

export default DashboardItem;
