import {Text, SafeAreaView, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {IRootState} from '../redux/reducers/rootReducer';
import Plant from '../components/Plant';
import axios from 'axios';
import {PRODUCT_URL} from '../constants/url';
import Product from '../components/Product';

const HomeScreen = () => {
  const values = useSelector((state: IRootState) => state.exampleReducer);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [toProduct, setToProduct] = useState<boolean>(false);

  useEffect(() => {
    axios.get(PRODUCT_URL).then(res => {
      setProducts(res.data);
    });
  }, []);

  const onPress = data => {
    setCurrentProduct(data);
    setToProduct(!toProduct);
  };

  const backHandler = () => {
    setToProduct(false);
  };

  const renderItem = data => {
    return <Plant data={data.item} onPress={onPress} />;
  };
  return (
    <SafeAreaView>
      {!toProduct ? (
        <FlatList data={products} renderItem={renderItem} />
      ) : (
        <Product backHandler={backHandler} data={currentProduct} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
