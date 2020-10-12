import { Button, Divider, Skeleton, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { Wrapper, Img, ProductDetails, ButtonWrapper } from './style';
import TableComponent from './TableComponent/TableComponent';
const { Title, Text } = Typography;

const ProductDetail = () => {
  let history = useHistory();

  const redirect = ({ route }) => {
    history.push(route);
  };
  const { id } = useParams();
  const { products } = useSelector((store) => store.product);
  const { login } = useSelector((store) => store.login);

  const [loading, setLoading] = useState(true);
  const [productDetail, setproductDetail] = useState('');

  useEffect(() => {
    setproductDetail(products.find((product) => product._id === id));
    setLoading(false);
  }, [products, id]);

  return (
    <>
      {loading ? (
        <Skeleton active />
      ) : (
        <div>
          <Wrapper>
            <>
              <Img src={productDetail?.image} alt={productDetail?.name} />
            </>
            <ProductDetails>
              <Title>{productDetail.name}</Title>
              <Divider />
              <Text>{productDetail.description}</Text>
              <Divider />
              <Text>{productDetail.price}</Text>
            </ProductDetails>
            <>
              <TableComponent login={login} history={history} productDetail={productDetail} />
            </>
          </Wrapper>
          <ButtonWrapper>
            <Button onClick={() => redirect({ route: `/ShoppingsProducts` })} type='primary'>
              Regresar a todos los productos{' '}
            </Button>
          </ButtonWrapper>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
