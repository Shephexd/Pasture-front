import React from "react";
import { Layout, Menu } from 'antd';
import {
    HomeOutlined, StockOutlined,
    RadarChartOutlined, DotChartOutlined, DeploymentUnitOutlined,
    FilterOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Route, Switch, Link,
    useRouteMatch, useParams
} from 'react-router-dom';
import {Network} from "../../components/graph";
const { SubMenu } = Menu;
const { Sider } = Layout;


class Sidebar extends Sider {
    state = {
        collapsed: false
    };

    render() {
        return (
            <Sider
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to="/">
                            <HomeOutlined/>
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/stocks">
                            <StockOutlined/>
                            <span>stocks</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/portfolio">
                            <RadarChartOutlined />
                            <span>portfolio</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><DotChartOutlined/><span>Sectors</span></span>}
                    >

                        <Menu.Item key="4-2">
                            <Link to="/sectors/equity">Equity</Link>
                        </Menu.Item>
                        <Menu.Item key="4-1">
                            <Link to="/sectors/bond">Bond</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><FilterOutlined /><span>Screener</span></span>}
                    >
                        <Menu.Item key="6">
                            <Link to="/screener/time-series">time series</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/screener/corr">correlation</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <DeploymentUnitOutlined />
                        <span>
                                <Link to="/network">Stock Network</Link>
                            </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

function Home({match}) {
    return <h2>{`${match}`} Home</h2>;
}

export {Sidebar}