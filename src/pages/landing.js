import React from 'react';

import Image from 'components/image';
import { Layout, SEO } from 'components';

import { Link } from 'gatsby';
import { Button } from 'antd';

const LandingPage = (props) => {

  return (
    <Layout>
      <SEO title="Home" />

      <Button>
      testing ant
      </Button>

      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

      <Link to="/dashboard">dashboard</Link>
    </Layout>
  );
};

export default LandingPage;
