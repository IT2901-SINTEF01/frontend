import React, { useState, useEffect } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { ParentSize } from '@visx/responsive';
import { AppleData as ThresholdChart, appleData } from '../../stories/ThresholdChart.stories';

import { Pane } from 'evergreen-ui';

import DashboardItem from '../molecules/DashboardItem';
import DashboardItemSmall from '../molecules/DashboardItemSmall';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export type DashboardProps = {
    items: string[];
};

type Layout = {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
};

const Dashboard: React.FC<DashboardProps> = ({ items }) => {
    const [layout, setLayout] = useState<Layout[]>();

    const checkIfItemFits = (x: number, size: string) => {
        if (size === 'small' && x < 5) return true;
        if (size === 'medium' && x < 4) return true;
        if (size === 'large' && x < 3) return true;
        return false;
    };

    const getItemWidth = (item: string) => {
        switch (item) {
            case 'small':
                return 2;
            case 'medium':
                return 3;
            case 'large':
                return 4;
            default:
                return 0;
        }
    };

    useEffect(() => {
        const gridLayout: Layout[] = [];
        let x = 0;
        let y = 0;
        items.forEach((item: string, index: number) => {
            if (index === 0) {
                gridLayout.push({ i: index.toString(), x, y, w: getItemWidth(item), h: 1 });
                x += getItemWidth(item);
            } else {
                if (checkIfItemFits(x, item)) {
                    console.log(index);
                    gridLayout.push({ i: index.toString(), x, y, w: getItemWidth(item), h: 1 });
                    x += getItemWidth(item);
                } else {
                    x = 0;
                    y++;
                    gridLayout.push({ i: index.toString(), x, y, w: getItemWidth(item), h: 1 });
                    x += getItemWidth(item);
                }
            }
        });
        setLayout(gridLayout);
        console.log(gridLayout);
    }, [items]);

    return (
        <Pane height={'100%'} width={'80%'} marginLeft={'10%'}>
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
                        isResizable={true} //change to true if you want to experiment with different sizes :)
                    >
                        {layout &&
                            layout.map((item) => {
                                return (
                                    <div key={item.i}>
                                        <DashboardItemSmall
                                            title={'test'}
                                            titleSize={100}
                                            width={'100%'}
                                            height={'100%'}
                                        >
                                            <ParentSize>
                                                {(parent) => (
                                                    <ThresholdChart
                                                        data={appleData}
                                                        width={parent.width}
                                                        height={parent.height}
                                                        thresholdValue={150}
                                                        aboveThresholdColor="green"
                                                        belowThresholdColor="red"
                                                        yLabel="Price"
                                                    />
                                                )}
                                            </ParentSize>
                                        </DashboardItemSmall>
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
