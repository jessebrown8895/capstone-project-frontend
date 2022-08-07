import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomerProducts = ({products}) => {
    
    console.log(products)
  return (
    <div>
        
        {products?.map(product => {
            return (
              //   <div key={product.id}>
              //     <h1>{product.name}</h1>
              //     <h1>{product.description}</h1>
              //   </div>
              <Card key={product.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary">add to cart</Button>
                </Card.Body>
              </Card>
            );
        })}
       
    </div>
  )
}

export default CustomerProducts