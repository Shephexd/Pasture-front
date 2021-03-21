import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Routes from './components/routes'
import {Sidebar} from './layouts/sidebar'
import {Network} from './components/graph'

const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="4">option3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sidebar/>
                    <Content style={{ padding: '0 30px' }}>
                        <Routes/>
                        <Layout className="site-layout-background" style={{ padding: '24px 0', height: "100%"}}>
                            <Content style={{ padding: '3 12px', height: 500, width: '100%'}}>
                                Content
                                <Network/>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }}>Pasture ©2021 Created by Shephexd</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;