import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { usePlayTrack } from './trackService';
import { State, useProgress, } from 'react-native-track-player';
import Slider from 'react-native-slider';

const Bai3 = (props) => {

  const { position, duration } = useProgress(1);

  const {
    onTogglePlayTrack,
    onSeekTo,
    onSkipToNext,
    onSkipToPrevious,
    onSkipToTrack,
    trackArtist,
    trackTitle,
    playBackState,
    trackArtwork,
  } = usePlayTrack(songs);

  const [songName, setsongName] = useState(trackTitle);
  const [songArtist, setsongArtist] = useState(trackArtist);
  const [songArtwork, setsongArtwork] = useState(trackArtwork);


  useEffect(() => {
    setsongName(trackTitle);
    setsongArtist(trackArtist);
    setsongArtwork(trackArtwork);
  }, [trackTitle, trackArtist, trackArtwork]);

  const onSlidingComplete = async (value) => {
    onSeekTo(value);
  };

  const formatTime = (time) => {
    return String(Math.floor(time / 60)).padStart(2, '0') +
      ':' + String((time % 60).toFixed(0)).padStart(2, '0')
  }
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ padding: 10 }}>
        <View style={{ width: '100%', flexDirection: 'row', margin: 10 }}>
          <Image source={songArtwork && { uri: trackArtwork } || require('../../img/noImage.jpg')}
            style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }} />
          <View style={{ flexDirection: 'column', marginStart: 10 }}>
            <Text style={styles.songTitle}>{songName}</Text>
            <Text style={styles.songArtist}>{songArtist}</Text>
          </View>
        </View>


        <FlatList
          data={songs}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[styles.button, (trackTitle === item.title && trackArtist === item.artist && { backgroundColor: '#1ed760' })]} 
              onPress={() => onSkipToTrack(index)}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
            </TouchableOpacity>)}
        />
      </View>

      <View style={styles.controlMusic}>
        <View style={styles.control}>
          <TouchableOpacity onPress={() => onSkipToPrevious()} style={styles.button}>
            <Image source={require('../../img/icons/previous.png')} style={styles.imgButton} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onTogglePlayTrack()} style={styles.button}>
            {playBackState === State.Playing ?
              <Image source={require('../../img/icons/pause.png')} style={styles.imgButton} />
              : <Image source={require('../../img/icons/play.png')} style={styles.imgButton} />
            }
          </TouchableOpacity>


          <TouchableOpacity onPress={() => onSkipToNext()} style={styles.button}>
            <Image source={require('../../img/icons/skip.png')} style={styles.imgButton} />

          </TouchableOpacity>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onSlidingComplete={onSlidingComplete}
          step={1}
        />
        <View style={styles.timeMusic}>
          <Text>{formatTime(position)}</Text>
          <Text>{formatTime(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Bai3;

const styles = StyleSheet.create({
  controlMusic: { width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20, flexDirection: 'column', position: 'absolute', bottom: 0, start: 0 },
  imgButton: { width: 24, height: 24 },
  slider: { width: '100%', height: 20, justifyContent: 'center' },
  timeMusic: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  button: {
    padding: 10,
    backgroundColor: 40,
    borderRadius: 10,
    margin: 5,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  songArtist: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const songs = [
  {
    id: 1,
    title: 'Vì yêu cứ đâm đầu',
    artist: 'Đen, JustaTee',
    artwork:
      'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/3/a/c/03ac82cbf720ea5d24129dc5a2bb5bbe.jpg',
    url: { uri: 'https://vnso-zn-24-tf-a128-z3.zmdcdn.me/f23d71b23eab22ea6f780badfff7a05c?authen=exp=1711705578~acl=/f23d71b23eab22ea6f780badfff7a05c/*~hmac=168a5d38e0dcefecacc023639056f1ca' },
  },
  {
    id: 2,
    title: 'Cho mình em',
    artist: 'Đen, Binz',
    artwork:
      'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/9/3/c/793cb0dc6bf49c1640db7726dcab3504.jpg',
    url: { uri: 'https://vnso-zn-16-tf-a128-z3.zmdcdn.me/8419f6281271973a40e78a78e673eec0?authen=exp=1711705561~acl=/8419f6281271973a40e78a78e673eec0/*~hmac=34ca0d908ffadedcb46cbf02edcf0906' },
  },
  {
    id: 3,
    title: 'Cho tôi lang thang',
    artist: 'Đen, Ngọt',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/4/3/43e9ff1a1a86efd042cf639bd50fb9e0_1488961974.jpg',
    url: { uri: 'https://vnso-zn-24-tf-a128-z3.zmdcdn.me/2ac106c140d99721bf1d8dde14bc97ac?authen=exp=1711705559~acl=/2ac106c140d99721bf1d8dde14bc97ac/*~hmac=fda5e12f24a1977406d6fdbf302b1518' },
  },
  {
    id: 4,
    title: 'Thằng điên',
    artist: 'JustaTee, Phương Ly',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg',
    url: { uri: 'https://vnso-pt-14-tf-a128-z3.zmdcdn.me/1cbc8e45ffca32ba0a1912ed0dc08eba?authen=exp=1711705120~acl=/1cbc8e45ffca32ba0a1912ed0dc08eba/*~hmac=9acee0939d7f38fcd7c2c51826c00eed' },
  },
];