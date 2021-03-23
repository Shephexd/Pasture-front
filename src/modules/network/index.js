import React from 'react';
import { Layout } from 'antd';

import {Network} from '../../components/graph'

const { Content } = Layout;


function StockNetwork() {
    return (
            <Content style={{ padding: '3 12px', height: 800, width: '100%'}}>
                <Network/>
            </Content>
    )
}

export {StockNetwork};
