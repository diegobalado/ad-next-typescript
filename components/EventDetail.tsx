import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@nextui-org/react/button';
import Text from '@nextui-org/react/text';
import { Event } from '../interfaces'

type Props = {
  item: Event
}

const EventDetail = ({ item }: Props) => (
  <>
    <Text h1>{item?.title}</Text>
    <p>{item?.price}</p>
    <Button>Click me</Button>
    {item?.ads?.map((ad) => (
      <div key={ad.name}>
        <p>{ad.name}</p>
        <Image src={`https://acciondigitalfoto.com/assets/images/ads/${ad.name}`} width='200' height='200' />
      </div>
    ))}
    {item?.pictures?.map((pic, index) => {
      if (index > 25) return null
      return (<Image 
          src={`https://acciondigitalfoto.com/assets/images/eventos/${item?.id}/thumbs/${pic}.jpg`}
          width='100'
          height='100'
          key={pic}
        />
      )
    }
    )}
  </>
)

export default EventDetail
