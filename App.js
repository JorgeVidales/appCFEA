import * as React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import S from './style';


import Icon from 'react-native-vector-icons/Ionicons';
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';

function HomeScreen({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.cajamen}>
        <View style={styles.menu}>
          {/* <Text onPress={() => navigation.openDrawer()}>Menu</Text> */}
          {/* <ion-icon name="menu-outline"></ion-icon> */}
          <Icon style={{ color: 'white' }} size={25} name="menu-outline" onPress={() => navigation.openDrawer()} />
          {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{ fontSize: 20, color: '#fff', textDecorationLine: 'underline'}}>TU PALABRA</Text>
          <Text style={{ fontFamily: 'Yellowtail-Regular', fontSize: 20, color: '#fff'}}>mi lumbrera</Text>
        </View>
        <View style={styles.compartir}>
          {/* <Text>Compartir</Text> */}
          <Icon style={{ color: 'white' }} size={25} name="share-social-outline" />
        </View>

      </View>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={S.menuContainer}>
        <View style={S.iconoContainer}>
          <Icon size={17} name={props.iconName} />
        </View>
        <View style={S.tituloContainer}>
          <Text style={S.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

function Menu(props) {
  return (
    <View style={S.container}>
      <View style={S.bgContainer}>
        <TouchableOpacity>
          <View style={S.userContainer}>
            <Image style={S.userImagen} source={require('./logo-brainapps.png')} />
            <View style={S.camaraContainer}>
              <Image style={S.camaraIcon} source={require('./photo-camera.png')} />
            </View>
          </View>
          <View style={S.userNombre}>
            <Text style={S.userTitulo}>BrainApp</Text>
            <Text style={S.userSubTitulo}>Ver Perfil</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <DrawerMenu iconName='home' titleName='Home' navigation={()=>props.navigation.navigate('Home')}/>
      <DrawerMenu iconName='person-circle-outline' titleName='Perfil' navigation={()=>props.navigation.navigate('Perfil')}/>
      <DrawerMenu iconName='notifications-outline' titleName='Notificación' navigation={()=>props.navigation.navigate('Notificacion')}/>
      {/* <DrawerMenu iconName='user' titleName='Perfil'/> */}
    </View>
  )
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerStyle={{height: '100%', width: '60%', marginTop: 0,}} drawerContent={(props) => <Menu {...props} />}>

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 500,
    backgroundColor: 'lightgray',
    // paddingTop: 70,
  },
  cajamen: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  menu: {
    // backgroundColor: 'purple',
    padding: 15,

  },
  compartir: {
    // backgroundColor: 'white',
    padding: 15,
  },
  letra: {
    fontFamily: 'Cochin'
  }

});