import React from 'react';
import { withUser } from 'hocs';
import { Header } from 'components';

import { Layout } from 'antd';

export const wrapPageElement = ({ props }) => {
  // kindof a disgusting hack https://github.com/gatsbyjs/gatsby/issues/15820
  const PageComponent = props.pageResources.component;

  const HeaderWithUser = withUser(Header);
  const ComponentWithUser = withUser(PageComponent);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderWithUser/>
      <ComponentWithUser {...props} />
    </Layout>
  );
};

