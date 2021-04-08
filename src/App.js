import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import Routes from './components/routes'
import {Sidebar} from './layouts/sidebar'
import {Route, Switch} from "react-router-dom";
import { StockPage } from './pages/stocks'
import { StockNetwork } from "./pages/network";
import { Portfolio } from "./pages/portfolio";

const { Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Layout>
                    <Sidebar/>
                    <Layout style={{padding: '0 1.5vw'}}>
                        <Routes/>
                        <Content style={{height: '24vh', width: '80%'}}>
                            <Switch>
                                <Route path="/about"><About /></Route>
                                <Route path="/users"><Users /></Route>
                                <Route path="/portfolio"><Portfolio /></Route>
                                <Route path="/stocks"><StockPage/></Route>
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