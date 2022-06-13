import React from 'react';
import Link from 'next/link';

import { Event, User } from '../interfaces';

type Props = {
  data: Event
}

const ListItem = ({ data }: Props) => {
  console.log({ data });
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        {data.id}: {data.name}, {data.price}
        {data?.pictures?.map((picture) => (
          <p>
            {picture}
          </p>
        ))}
      </a>
    </Link>
  );
};

export default ListItem;
