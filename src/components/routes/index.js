import React from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb} from "antd";


class Routes extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Link to="/"><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                    <Link to="/about"><Breadcrumb.Item>About</Breadcrumb.Item></Link>
                    <Link to="/users"><Breadcrumb.Item>Users</Breadcrumb.Item></Link>
                </Breadcrumb>
            </div>
        )
    }
}


export default Routes;
