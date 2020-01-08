import React from 'react';
import { Router } from '@reach/router';

import Image from 'components/image';
import { Layout, SEO } from 'components';

import { Link } from 'gatsby';
import { Button } from 'antd';


const View = (props) => {
  console.log(props);

  return (
    <Layout>
      <SEO title="Home" />

      <Button>
      viewviewviewviewviewviewviewview
      </Button>

      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

    </Layout>
  );
};

export default View;
