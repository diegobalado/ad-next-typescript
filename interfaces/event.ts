type Ad = {
    name: string
    href: string
}

export type Event = {
    id: string,
    title: string,
    pictures: string[],
    ads: Ad[],
    price: string,
    promo?: string,
    search?: string,
    ph?: string,
}