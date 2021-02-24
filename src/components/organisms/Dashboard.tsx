import React, { useState, useEffect } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { ParentSize } from '@visx/responsive';

import { Pane, MinimizeIcon, MaximizeIcon, IconButton } from 'evergreen-ui';

import DashboardItem from '../molecules/DashboardItem';
import { DashboardItemSize, DashboardItemInfo, DashboardProps } from '../../dataTypes/Dashboard/DashboardTypes';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

type Layout = {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
};

const Dashboard: React.FC<DashboardProps> = ({ items }) => {
    const [layout, setLayout] = useState<Layout[]>();

    const checkIfItemFits = (x: number, size: DashboardItemSize) => {
        if (size === DashboardItemSize.small && x < 5) return true;
        if (size === DashboardItemSize.medium && x < 4) return true;
        if (size === DashboardItemSize.large && x < 3) return true;
        return false;
    };

    const getItemWidth = (dashboardItemSize: DashboardItemSize) => {
        switch (dashboardItemSize) {
            case DashboardItemSize.small:
                return 2;
            case DashboardItemSize.medium:
                return 3;
            case DashboardItemSize.large:
                return 4;
            default:
                return 0;
        }
    };

    useEffect(() => {
        //Creates layout first time
        const gridLayout: Layout[] = [];
        let x = 0;
        let y = 0;
        items.forEach((item: DashboardItemInfo, index: number) => {
            if (index === 0) {
                gridLayout.push({
                    i: index.toString(),
                    x,
                    y,
                    w: getItemWidth(item.size),
                    h: 1,
                });
                x += getItemWidth(item.size);
            } else {
                if (checkIfItemFits(x, item.size)) {
                    gridLayout.push({
                        i: index.toString(),
                        x,
                        y,
                        w: getItemWidth(item.size),
                        h: 1,
                    });
                    x += getItemWidth(item.size);
                } else {
                    x = 0;
                    y++;
                    gridLayout.push({
                        i: index.toString(),
                        x,
                        y,
                        w: getItemWidth(item.size),
                        h: 1,
                    });
                    x += getItemWidth(item.size);
                }
            }
        });
        setLayout(gridLayout);
    }, [items]);

    return (
        <Pane height={'100%'} width={'80%'} marginLeft={'10%'}>
            {console.log('layout change')}
            <ParentSize debounceTime={500}>
                {({ width: visWidth }) => (
                    <ReactGridLayout
                        className="layout"
                        layout={layout}
                        cols={6}
                        rowHeight={visWidth / 6}
                        width={visWidth}
                        verticalCompact={true}
                        useCSSTransforms={true}
                        isResizable={false}
                    >
                        {layout &&
                            layout.map((item) => {
                                return (
                                    <div key={item.i}>
                                        <DashboardItem />
                                        {item.w === 4 && (
                                            <IconButton
                                                icon={MaximizeIcon}
                                                appearance="minimal"
                                                position={'absolute'}
                                                color="muted"
                                                top={5}
                                                right={5}
                                                onClick={() => {
                                                    const newLayout = layout.map((item) => ({ ...item }));
                                                    newLayout[+item.i].h = 2;
                                                    newLayout[+item.i].w = 6;
                                                    setLayout(newLayout);
                                                }}
                                            />
                                        )}
                                        {item.w === 6 && (
                                            <IconButton
                                                icon={MinimizeIcon}
                                                appearance="minimal"
                                                position={'absolute'}
                                                color="muted"
                                                top={5}
                                                right={5}
                                                onClick={() => {
                                                    const newLayout = layout.map((item) => ({ ...item }));
                                                    newLayout[+item.i].h = 1;
                                                    newLayout[+item.i].w = 4;
                                                    setLayout(newLayout);
                                                }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                    </ReactGridLayout>
                )}
            </ParentSize>
        </Pane>
    );
};

export default Dashboard;
