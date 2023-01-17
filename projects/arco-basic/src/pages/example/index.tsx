import React, { useState } from 'react';
import { Typography, Card, Divider } from '@arco-design/web-react';

import { CustomButton } from 'react-arco-components';

const Example: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const testIcon = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Card style={{ height: '80vh' }}>
      <Typography.Title heading={6}>
        This is a very basic and simple page
      </Typography.Title>
      <Typography.Text>You can add content here :)</Typography.Text>
      <Divider
        style={{
          borderBottomWidth: 2,
          borderBottomStyle: 'dotted',
        }}
      />
      <CustomButton
        type="primary"
        size={'large'}
        customloading={loading ? 1 : 0}
        text={'Hello, CustomButton'}
        onClick={testIcon}
      />
    </Card>
  );
};

export default Example;
