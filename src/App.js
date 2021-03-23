
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';

import Routes from './components/routes'
import {Sidebar} from './layouts/sidebar'
import {Route, Switch} from "react-router-dom";
import { StockNetwork } from "./modules/network";
import { Portfolio } from "./modules/portfolio";

const { Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Layout>
                    <Sidebar/>
                    <Layout>
                        <Routes/>
                        <Content style={{height: '24vh', width: '80%'}}>
                            <Switch>
                                <Route path="/about"><About /></Route>
                                <Route path="/users"><Users /></Route>
                                <Route path="/portfolio"><Portfolio /></Route>
                                <Route path="/network"><StockNetwork/></Route>
                            </Switch>
                        </Content>
                    </Layout>
                    <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }}>Pasture ©2021 Created by Shephexd</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;

function Home() {
    return (<div>Home</div>)
}

function About() {
    return (<div>About</div>)
}

function Users() {
    return (<div>Users</div>)
}