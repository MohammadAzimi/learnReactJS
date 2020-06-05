import React, { useEffect, useState, Component } from 'react';
import './App.css';
import { getGists } from './api/requests/sampleRequest';
import { Layout, Menu, Breadcrumb } from 'antd';
// const {  UserOutlined, LaptopOutlined, NotificationOutlined  } = icons;
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function App() {
  useEffect(() => {
    fetchInitialData()
  }, []);

  const fetchInitialData = async () => {
    const data = await getGists();
    if (data.ok) {
      setGists(data.result);
    }
  }

  const [gists, setGists] = useState(null);

  return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['25']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="25">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">

            {gists ? <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {gists.map((gist, index) => (
                <Menu.Item key={index + 1}>
                  <Link to={`/g/${gist.id}`}>
                    {gist.description || 'no description'}
                  </Link>
                </Menu.Item>))}
            </Menu> : <div>loading</div>}

          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route path={'/'} exact={true} render={() => HelloWorld} />
            <Route path={'/g/:gistId'} component={MainContent} />

          </Layout>
        </Layout>
        <Footer>
          <p>footer copy right 2020</p>
        </Footer>
      </Layout>

    </Router>
  );
}

const MainContent = ({ match }) => {
  console.log(match);
  return <Content
    className="site-layout-background"
    style={{
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
    {match.params.gistId}
  </Content>
}

const HelloWorld = 
  <Content
    className="site-layout-background"
    style={{
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
    hello world
  </Content>


export default App;