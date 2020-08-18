import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import { Container, Wrapper } from './styled';
import { Typography, Skeleton } from 'antd';
import { products } from '../../ExampleData/Product';
import { allProducts } from '../../Api/ProductsApi';
import { getProductAction } from '../../Redux/Actions/getProductAction';
import Notification from '../global/Notification';
const { Title } = Typography;

const ShoppingsProducts = () => {
  const [dataProducts, setdataProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const product = async () => {
      setloading(true);
      const res = await allProducts();
      if (!res.error) {
        setdataProducts(res.data);
        await dispatch(getProductAction(res.data));
        setloading(false);
      } else {
        Notification({
          type: 'success',
          message: res.error,
        });
        setloading(false);
      }
    };
    product();
  }, [dispatch]);
  return (
    <Container>
      <Title type='secondary'> Productos </Title>
      {loading ? (
        <Skeleton active />
      ) : dataProducts.length ? (
        <Wrapper>
          {dataProducts.map((product, i) => (
            <div key={i}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </Wrapper>
      ) : (
        <Title type='secondary'> No hay productos disponibles </Title>
      )}
    </Container>
  );
};

export default ShoppingsProducts;
