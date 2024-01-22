import {View, Text, Image, TouchableOpacity} from 'react-native';
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
interface IData {}
interface IProp {
  data: IData;
}

const Plant = (props: IProp) => {
  const {name, category, price, size, water, light, fertilizer, bio, image} =
    props.data;
  const {onPress, data} = props;
  return (
    <TouchableOpacity onPress={() => onPress(data)} style={styles.container}>
      <View>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${price}</Text>
          <View style={styles.iconContainer}>
            <Image style={styles.ic_heart} source={ic_heart} />
            <Image style={styles.ic_cart} source={ic_cart} />
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '200@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '50@vs',
    paddingHorizontal: '30@s',
    backgroundColor: 'aqua',
    borderRadius: '10@ms',
  },
  image: {
    width: 200,
    height: 200,
  },
  categoryText: {
    fontSize: '14@ms',
    color: '#002140',
    fontWeight: '600',
  },
  nameText: {
    fontSize: '32@ms',
    color: '#002140',
    fontWeight: '700',
  },
  priceText: {
    fontSize: '18@ms',
    color: '#002140',
    fontWeight: '600',
  },
  imageContainer: {
    right: -20,
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
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80@s',
    marginLeft: '10@s',
    justifyContent: 'space-between',
  },
});

export default Plant;
