import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import ProductsList from './ProductsList';

export interface ProductsProps extends RouteComponentProps {}

const Products = ({ match }: ProductsProps) => {

  console.log('URL', match.url);

  return (
    <Switch>
      <Route path={`${match.url}/listagem`} component={ProductsList} />
    </Switch>
  )
}

export default Products;
