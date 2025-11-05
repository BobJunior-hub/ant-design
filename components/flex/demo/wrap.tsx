import React from 'react';
import { Button, Flex } from 'antd';

const Demo: React.FC = () => (
  <Flex wrap gap="small">
    {Array.from({ length: 12 }, (_, i) => (
      <Button key={i} type="primary">
        Button
      </Button>
    ))}
  </Flex>
);

export default Demo;
