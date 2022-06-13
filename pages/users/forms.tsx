import { Input, NextUIProvider } from '@nextui-org/react';
import Layout from '../../components/Layout';

const Forms = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <NextUIProvider>
        <Input label="Name" placeholder="Event Name" />
      </NextUIProvider>
    </Layout>
  );
};

export default Forms;