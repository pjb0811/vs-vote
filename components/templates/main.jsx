import React from 'react';
import Head from 'next/head';
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Head)`
  position: 'fixed';
  z-index: 1;
  width: '100%';
`;

const mainTemplate = Page => {
  class MainWrapper extends React.Component {
    static async getInitialProps(ctx) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : null)
      };
    }

    render() {
      return (
        <Layout>
          <Head>
            <title>main</title>
          </Head>
          <StyledHeader>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </StyledHeader>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Page {...this.props} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      );
    }
  }

  return MainWrapper;
};

export default mainTemplate;
