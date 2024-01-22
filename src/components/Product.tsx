import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';

import ic_heart from '@images/ic_heart.png';
import ic_cart from '@images/ic_cart.png';

//  "id": 1,
//         "name": "Pepperomia",
//         "category": "Air Purifier",
//         "price": 400,
//         "size": "4\" h",
//         "water": "250ml",
//         "light": "30-40%",
//         "fertilizer": "250gm",
//         "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
//         "image": "https://i.imgur.com/4ucOXpZ.png"

const Product = ({data, backHandler}) => {
  const {name, category, price, size, water, light, fertilizer, bio, image} =
    data;
  console.log(data);
  return (
    <View>
      <TouchableOpacity onPress={backHandler}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${price}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.priceContainer}>
          <Text>Price</Text>
          <Text style={styles.priceText}>${price}</Text>
        </View>
        <View>
          <Text>Size</Text>
          <Text style={styles.heightText}>{size}</Text>
        </View>
        <View style={styles.iconContainer}></View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
  },
  image: {
    width: 200,
    height: 300,
  },
  categoryText: {
    fontSize: '14@ms',
    color: '#002140',
    fontWeight: '600',
  },
  nameText: {
    fontSize: '38@ms',
    color: '#002140',
    fontWeight: '700',
  },
  priceText: {
    fontSize: '18@ms',
    color: '#002140',
    fontWeight: '600',
  },
  heightText: {
    fontSize: '16@ms',
    color: '#002140',
    fontWeight: '600',
  },
  imageContainer: {
    bottom: '-80@s',
    right: 0,
    position: 'absolute',
  },
  ic_heart: {
    width: '20@ms',
    height: '20@vs',
  },
  ic_cart: {
    height: '50@vs',
  },
  priceContainer: {
    marginVertical: '10@vs',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80@s',
    marginLeft: '10@s',
    justifyContent: 'space-between',
  },
});

export default Product;
