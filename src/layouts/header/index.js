import {Layout, Menu} from "antd";
import React from "react";

const { Header } = Layout;


function SearchHeader() {
    return (
        <Header className="header" >

            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="4">option3</Menu.Item>
            </Menu>
            </Header>
    )
}

export {SearchHeader};