import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Feather } from '@expo/vector-icons'

const feedData = [
  {
    id: 1,
    name: 'Nguyen Van Luong',
    image: require('./assets/images/image1.jpg'),
    likeCount: 128,
    avatar: require('./assets/images/Luong.jpg')
  },
  {
    id: 2,
    name: 'Nguyen Van A',
    image: require('./assets/images/image2.jpg'),
    likeCount: 1228,
    avatar: require('./assets/images/Luong.jpg')
  },
  {
    id: 3,
    name: 'Nguyen Van B',
    image: require('./assets/images/image3.jpg'),
    likeCount: 1228,
    avatar: require('./assets/images/Luong.jpg')
  },
  {
    id: 4,
    name: 'Nguyen Van c',
    image: require('./assets/images/image4.jpg'),
    likeCount: 1228,
    avatar: require('./assets/images/Luong.jpg')
  },
]


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 27 }} />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={styles.imageHeader}
          resizeMode="contain"
        />
        <Feather style={styles.iconHeader} name="inbox" size={27} color="black" />
      </View>
      <ScrollView >
        {feedData.map(feed => {
          return (
            <View style={styles.itemInstagram} key={feed.id}>
              <View style={styles.personInfo}>
                <Image style={styles.avatar}
                  source={feed.avatar}
                  resizeMode="cover"
                />
                <Text style={styles.name}>Nguyen Van A</Text>
              </View>
              <View style={styles.wrapperPosterImage}>
                <Image style={styles.posterImage}
                  source={feed.image}
                />
              </View>
              <View style={styles.wrapperStatus}>
                <Feather
                  style={styles.itemStatus}
                  name="heart"
                  size={27}
                  color="black"
                  onPress={() => alert("Liked")}
                />
                <Feather
                  style={styles.itemStatus}
                  name="message-square"
                  size={27}
                  color="black"
                  onPress={() => alert("Commented")}
                />
                <Feather
                  style={styles.itemStatus}
                  name="share"
                  size={27}
                  color="black"
                  onPress={() => alert("Shared")}
                />
              </View>
              <View style={styles.liked}>
                <Feather
                  style={styles.itemStatus}
                  name="heart"
                  size={27}
                  backgroundColor="black"
                />
                <Text style={styles.likeCount}>{feed.likeCount} likes</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageHeader: {
    flex: 1,
    width: null,
    alignSelf: 'center',
    height: 44,
    marginLeft: 20
  },
  iconHeader: {
    marginRight: 20
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginLeft: 20
  },
  personInfo: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  wrapperPosterImage: {
    height: 250,
  },
  posterImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  wrapperStatus: {
    flexDirection: 'row'
  },
  itemStatus: {
    marginLeft: 10
  },
  liked: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  likeCount: {
    marginLeft: 10,
    fontSize: 15
  }
});
