import React from 'react';
import { Card } from 'react-bootstrap';
import { product } from '../Products/Products'

type productsProps = {
    product: product
};

export default function DetailsProducts({ product }: productsProps) {
    return <div>

        <Card>
            <Card.Img variant="top" src={product.image} style={{ width: "200px" }} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{product.price}</small>
            </Card.Footer>
        </Card>

    </div>;
}
