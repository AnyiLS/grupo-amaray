import React from 'react'
import { Outlet } from 'react-router-dom';

interface IProduct {}

const Products: React.FC<IProduct> = (): JSX.Element => {
    return <Outlet/>;
}

export default Products
