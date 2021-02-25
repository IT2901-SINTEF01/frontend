import React, { useMemo } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { ParentSize } from '@visx/responsive';

import { Pane } from 'evergreen-ui';

import DashboardItem from '../molecules/DashboardItem';
import { DashboardProps } from '../../dataTypes/Dashboard/DashboardTypes';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { resolvePositions } from '../../utils/dashboardList';

const Dashboard: React.FC<DashboardProps> = ({ items }) => {
    const layout = useMemo(() => resolvePositions(items), [items]);

    return (
        <Pane height="100%" width="80%" marginLeft="10%">
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
                        {layout.map((item) => {
                            return (
                                <div key={item.i}>
                                    <DashboardItem />
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
