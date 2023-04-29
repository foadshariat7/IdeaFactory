import React from 'react'
import { Breadcrumb, Layout, Menu, theme, Card } from 'antd';
const { Header, Content, Footer } = Layout;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectRow from './components/ProjectRow';
import UserRelatedProjects from './components/UserRelatedProjects';
import Skill from './components/Skill';
import Experience from './components/Experience';
import BasicInformation from './components/BasicInformation';

const UserProfile = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      return (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(15).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
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
              <Breadcrumb.Item>User Profile</Breadcrumb.Item>
            </Breadcrumb>
            <BasicInformation></BasicInformation>
            <Experience></Experience>
            <Skill></Skill>
            <UserRelatedProjects></UserRelatedProjects>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      )
}

export default UserProfile;

