/**
 * code from : https://github.com/narendrashetty/travel-RN/blob/master/src/ImageGrid.js
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import chunk from 'lodash.chunk';

const destinations = [
  {
    id: 0,
    name: 'ICELAND',
    src: require('../assets/images/iceland.jpg'),
    title: 'A ICELAND full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 1,
    name: 'CANADA',
    src: require('../assets/images/canada.jpg'),
    title: 'A CANADA full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 2,
    name: 'COLOMBIA',
    src: require('../assets/images/colombia.jpg'),
    title: 'A COLOMBIA full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 3,
    name: 'INDIA',
    src: require('../assets/images/india.png'),
    title: 'A INDIA full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 4,
    name: 'FINLAND',
    src: require('../assets/images/finland.jpg'),
    title: 'A FINLAND full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 5,
    name: 'NETHERLANDS',
    src: require('../assets/images/amsterdam.jpg'),
    title: 'A AMSTERDAM full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 6,
    name: 'ENGLAND',
    src: require('../assets/images/london.jpg'),
    title: 'A LONDON full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  },
  {
    id: 7,
    name: 'SPAIN',
    src: require('../assets/images/barcelona.jpg'),
    title: 'A BARCELONA full of legends',
    subtitle:
      'Iceland, a sparsely populated island with the North Atlantic all around it and flowing magma bubbling through its crust, is wild and remote all around it and flowing magma bubbling...'
  }
];

const { width: windowWidth } = Dimensions.get('window');
const margin = 20;
const colCount = 2;

const photoWidth = (windowWidth - margin * colCount * 2) / colCount;

const photoRows = chunk(destinations, colCount);

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class HomeScreen extends Component {
  renderRow(photos) {
    return (
      <View style={styles.row}>
        {photos.map(this.renderCell.bind(this))}
      </View>
    );
  }

  renderCell(photo) {
    const onPhotoPressed = photo =>
      this.props.navigator.push({
        screen: 'meetfbabapp.DetailScreen', // unique ID registered with Navigation.registerScreen
        title: photo.name, // navigation bar title of the pushed screen (optional)
        passProps: { photo } // Object that will be passed as props to the pushed screen (optional)
      });
    return (
      <TouchableOpacity
        onPress={() => onPhotoPressed(photo)}
        key={photo.name}
        testID={photo.name}
      >
        <View style={styles.imageContainer}>
          <View>
            <Image source={photo.src} style={styles.image} />
          </View>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              margin: 'auto'
            }}
          >
            <Text style={styles.imageTitle} fontSize={16}>
              {photo.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container} testID="homescreen">
        <StatusBar barStyle="dark-content" />
        <ListView
          dataSource={ds.cloneWithRows(photoRows)}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageContainer: {
    position: 'relative',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: photoWidth,
    height: photoWidth,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageTitle: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: '#3a3a3a',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 0
  }
});
