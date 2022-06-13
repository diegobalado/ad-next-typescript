import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Event, User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';
import { supabase } from '../../services/supabase';
import { useEvents } from '../../components/hooks/useEvents';
 
type Props = {
  data: Event[];
  error?: string;
}

const WithStaticProps = ({ data, error }: Props) => {
  // const { data, error, loading } = useEvents();
  console.log({ data, error });

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
          Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={data} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  
  const { data, error } = await supabase
    .from('events')
    .select();

  if (error) {
    console.log(error);
  }
  return { props: { data, error } };
};

export default WithStaticProps;
