import React from 'react';
import { Input, QRCode, Space } from 'antd';

const App: React.FC = () => {
  const [cardNumber, setCardNumber] = React.useState('');

  return (
    <Space direction="vertical" align="center">
      <QRCode value={cardNumber || 'No card number'} />
      <Input
        placeholder="Enter card number (e.g. 8600 1234 5678 9999)"
        maxLength={25}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
    </Space>
  );
};

export default App;
