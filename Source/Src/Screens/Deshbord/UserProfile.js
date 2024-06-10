import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { COLORS, CommonStyles, Font } from '../../Theme/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import CustomTextinput from '../../Component/CommonTextInput/CustomTextinput';
import EventPayment from '../Events/EventPayment';
import EventList from '../Events/EventList';
import { DataContext } from '../../../../DataContext';
import RNFetchBlob from 'rn-fetch-blob';
// import Permissions from 'react-native-permissions';
import { Platform, Alert } from 'react-native';
const UserProfile = () => {

  const downloadFile = async () => {
    try {
      const { config, fs } = RNFetchBlob;
      let DownloadDir = fs.dirs.DownloadDir; // this is the Downloads directory path
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true, // use native download manager
          notification: true,
          path: `${DownloadDir}/Agenda.pdf`, // set the path where the downloaded file will be stored
          description: 'Downloading file.',
        },
      };
      config(options)
        .fetch('GET', 'http://samples.leanpub.com/thereactnativebook-sample.pdf')
        .then((res) => {
          Alert.alert('File Downloaded', 'The file has been downloaded successfully.');
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Download Error', 'An error occurred while downloading the file.');
        });
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Download Error', 'An error occurred while downloading the file.');
    }
  };
  
  
  
  const [pickedImage, setPickedImage] = useState(null);
  const [selectedTab, setSelectedTab] = useState(1);
  const { selectedId, getBgColor } = useContext(DataContext);
  const bgColor = getBgColor()

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPickedImage(image);
    }).catch(error => {
      console.log('Image picker error: ', error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicContainer}>
          <TouchableOpacity style={styles.profilePicker} onPress={imagePicker}>
            {pickedImage ? (
              <Image source={{ uri: pickedImage.path }} style={styles.pickedImage} />
            ) : (
              <Image source={require('../../../Assets/Images/userimage.jpg')} style={styles.pickedImage} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Rahil Khan</Text>
        <Text style={styles.text}>Founder Technoxian</Text>
      </View>
      <View style={styles.infoBox}>
        <TouchableOpacity style={[styles.innerBox, { backgroundColor: bgColor, shadowColor: bgColor }]}>
          <Text style={styles.innerHeading}>0</Text>
          <Text style={styles.innerText}>Follower</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.innerBox, { backgroundColor: bgColor, shadowColor: bgColor }]}>
          <Text style={styles.innerHeading}>1</Text>
          <Text style={styles.innerText}>My Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.innerBox, { backgroundColor: bgColor, shadowColor: bgColor }]}>
          <Text style={styles.innerHeading}>30</Text>
          <Text style={styles.innerText}>My Follower</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.heading, { marginTop: 10 }]}>Activities</Text>
      <View style={styles.bigBox}>
        <TouchableOpacity style={[styles.smallBox, { backgroundColor: bgColor }]}>
          <View style={styles.smallImageBox}>
            <Image source={require('../../../Assets/Images/location.png')} style={styles.smallImage} />
          </View>
          <View>
            <Text style={[styles.text, { color: COLORS.white, left: 20 }]}>location</Text>
            <Text style={[styles.text, { color: COLORS.white, left: 20 }]}>Cape Town</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallBox, { backgroundColor: bgColor }]}>
          <View style={styles.smallImageBox}>
            <Image source={require('../../../Assets/Images/Time.png')} style={styles.smallImage} />
          </View>
          <View>
            <Text style={[styles.text, { color: COLORS.white, left: 20 }]}>local Time</Text>
            <Text style={[styles.text, { color: COLORS.white, left: 20 }]}>12 : 40 PM</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallBox, { backgroundColor: bgColor }]}
        onPress={downloadFile}>
          <View style={styles.smallImageBox}>
            <Image source={require('../../../Assets/Images/calendar.png')} style={styles.smallImage} />
          </View>
          <View>
            <Text style={[styles.text, { color: COLORS.white, left: 20 }]}>Agenda</Text>
            <Text style={[styles.text, { color: COLORS.white, left: 20 }]}>AgriNext Conference</Text>
          </View>
          <Image source={require('../../../Assets/Images/downloads.png')} style={styles.downloadIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  profileContainer: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  profilePicContainer: {
    borderRadius: 100,
    // borderColor: bgColor,
    borderWidth: 5,
    padding: 5,
  },
  profilePicker: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickedImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  heading: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '800',
    fontFamily: Font.bold,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
    fontFamily: Font.regular,
  },
  infoBox: {
    height: 100,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    gap: 10,
  },
  innerBox: {
    width: '31.4%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.65,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerHeading: {
    fontWeight: '800',
    fontSize: 30,
    color: COLORS.white,
  },
  innerText: {
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.white,
  },
  bigBox: {
    height: 160,
    width: '100%',
  },
  smallBox: {
    height: 70,
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  smallImageBox: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallImage: {
    height: 30,
    width: 30,
  },
  downloadIcon: {
    height: 30, 
    width:30,
    left:120,
    tintColor:COLORS.white
  }

});
