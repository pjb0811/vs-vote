import React from 'react';
import Head from 'next/head';
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
`;

const StyledMenu = styled(Menu)`
  line-height: 64px;
`;

const StyledContent = styled(Content)`
  padding: 0 50px;
  margin-top: 64px;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const mainTemplate = Page => {
  return class MainWrapper extends React.Component {
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
            <StyledMenu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
            >
              <StyledMenu.Item key="1">Home</StyledMenu.Item>
              <StyledMenu.Item key="2">List</StyledMenu.Item>
              <StyledMenu.Item key="3">Test</StyledMenu.Item>
            </StyledMenu>
          </StyledHeader>
          <StyledContent>
            <StyledBreadcrumb>
              <StyledBreadcrumb.Item>Home</StyledBreadcrumb.Item>
              <StyledBreadcrumb.Item>List</StyledBreadcrumb.Item>
              <StyledBreadcrumb.Item>App</StyledBreadcrumb.Item>
            </StyledBreadcrumb>
            <Page {...this.props} />
          </StyledContent>
          <StyledFooter>Ant Design ©2018 Created by Ant UED</StyledFooter>
        </Layout>
      );
    }
  };
};

export default mainTemplate;
