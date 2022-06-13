import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import { Event } from '../../interfaces';

export const useEvents = () => {
  const [data, setData] = useState<Event[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
 
  async function getData() {
    try {
      setLoading(true);
      
      const { data, error, status } = await supabase
        .from('events')
        .select();

      if (data) {
        setData(data);
      }      
      if (error && status !== 406) {
        throw error;
      }
    } catch (error) {
      setError(error);
      console.log({ error });
    } finally {
      setLoading(false);
    }

    return { data, error, loading };
  }

  useEffect(() => {
    getData();
  }, []);

  console.log({ data, error, loading });
    
  return { data, error, loading };
};