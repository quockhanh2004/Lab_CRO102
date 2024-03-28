/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './src/Lab4/trackService';

TrackPlayer.registerPlaybackService(() => playbackService);
AppRegistry.registerComponent(appName, () => App);
