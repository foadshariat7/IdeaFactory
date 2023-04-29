import { Breadcrumb, Layout, Menu, theme, Input, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import ProjectRow from './components/ProjectRow';
import { Pagination } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const MainPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
  
      <Header>
        <div className="logo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items= {new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
        <Search placeholder='Search' allowClear onSearch={onSearch} style={{ width: 200 }}/>
        <NavLink to={"/userProfile"}>
          <Button type="primary" icon={<DownloadOutlined />} size={20}>
            Profile
          </Button>
        </NavLink>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Project
          <ProjectRow></ProjectRow>
          <ProjectRow></ProjectRow>
          <ProjectRow></ProjectRow>
          <ProjectRow></ProjectRow>
          <ProjectRow></ProjectRow>
          <ProjectRow></ProjectRow>
          <Pagination 
            style={{
              textAlign: 'center',
           }}
          defaultCurrent={6} total={500} />;
        </div>

      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

const onSearch = value => alert(value);

export default MainPage;

