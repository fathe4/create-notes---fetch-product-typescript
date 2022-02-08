import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import DetailsProducts from '../DetailsProduct/DetailsProducts';


export type product = {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    title: string
}


export default function Products() {
    const [data, setData] = useState<product[]>()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return <div>
        <CardGroup>
            {data?.map(product => <DetailsProducts product={product}></DetailsProducts>)}
        </CardGroup>
    </div>;
}
