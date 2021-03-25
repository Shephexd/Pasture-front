import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Link,
  useRouteMatch, useParams
} from 'react-router-dom';
import {Breadcrumb} from "antd";


class Routes extends React.Component {
    render() {
        return (
    <Router>
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Link to="/"><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
            <Link to="/about"><Breadcrumb.Item>About</Breadcrumb.Item></Link>
            <Link to="/users"><Breadcrumb.Item>Users</Breadcrumb.Item></Link>
        </Breadcrumb>
      <div>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
        )
    }
}


function Home({match}) {
  return <h2>{`${match}`} Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default Routes;
