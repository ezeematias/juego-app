import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { RootStackParamList } from '../../App';
import { auth } from "../database/firebase";
import styles from '../styles/StyleHome';
import { Audio } from "expo-av";
import { FontAwesome } from '@expo/vector-icons';
import ActionButton from "react-native-action-button";

const audioPlayer = new Audio.Sound();

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [languageFlag, setLanguageFlag] = useState(1);
  const [objectFlag, setObjectFlag] = useState(1);

  const [languageIcon, setLanguageIcon] = useState(require("../../assets/languages/argentina.png"));
  const [categoryIcon, setCategoryIcon] = useState(require("../../assets/categories/numbers.png"));

  const [sound1, setSound1] = useState(require("../../assets/sounds/spanish/numbers/uno.mp3"));
  const [sound2, setSound2] = useState(require("../../assets/sounds/spanish/numbers/dos.mp3"));
  const [sound3, setSound3] = useState(require("../../assets/sounds/spanish/numbers/tres.mp3"));
  const [sound4, setSound4] = useState(require("../../assets/sounds/spanish/numbers/cuatro.mp3"));
  const [sound5, setSound5] = useState(require("../../assets/sounds/spanish/numbers/cinco.mp3"));
  const [sound6, setSound6] = useState(require("../../assets/sounds/spanish/numbers/seis.mp3"));
  const [sound7, setSound7] = useState(require("../../assets/sounds/spanish/numbers/siete.mp3"));
  const [sound8, setSound8] = useState(require("../../assets/sounds/spanish/numbers/ocho.mp3"));
  const [sound9, setSound9] = useState(require("../../assets/sounds/spanish/numbers/nueve.mp3"));

  const [image1, setImage1] = useState(require("../../assets/numbers/one.png"));
  const [image2, setImage2] = useState(require("../../assets/numbers/two.png"));
  const [image3, setImage3] = useState(require("../../assets/numbers/three.png"));
  const [image4, setImage4] = useState(require("../../assets/numbers/four.png"));
  const [image5, setImage5] = useState(require("../../assets/numbers/five.png"));
  const [image6, setImage6] = useState(require("../../assets/numbers/six.png"));
  const [image7, setImage7] = useState(require("../../assets/numbers/seven.png"));
  const [image8, setImage8] = useState(require("../../assets/numbers/eight.png"));
  const [image9, setImage9] = useState(require("../../assets/numbers/nine.png"));

  const setNumbersSpanish = () => {
    setImage1(require("../../assets/numbers/one.png"));
    setImage2(require("../../assets/numbers/two.png"));
    setImage3(require("../../assets/numbers/three.png"));
    setImage4(require("../../assets/numbers/four.png"));
    setImage5(require("../../assets/numbers/five.png"));
    setImage6(require("../../assets/numbers/six.png"));
    setImage7(require("../../assets/numbers/seven.png"));
    setImage8(require("../../assets/numbers/eight.png"));
    setImage9(require("../../assets/numbers/nine.png"));

    setSound1(require("../../assets/sounds/spanish/numbers/uno.mp3"));
    setSound2(require("../../assets/sounds/spanish/numbers/dos.mp3"));
    setSound3(require("../../assets/sounds/spanish/numbers/tres.mp3"));
    setSound4(require("../../assets/sounds/spanish/numbers/cuatro.mp3"));
    setSound5(require("../../assets/sounds/spanish/numbers/cinco.mp3"));
    setSound6(require("../../assets/sounds/spanish/numbers/seis.mp3"));
    setSound7(require("../../assets/sounds/spanish/numbers/siete.mp3"));
    setSound8(require("../../assets/sounds/spanish/numbers/ocho.mp3"));
    setSound9(require("../../assets/sounds/spanish/numbers/nueve.mp3"));
  };

  const setNumbersEnglish = () => {
    setImage1(require("../../assets/numbers/one.png"));
    setImage2(require("../../assets/numbers/two.png"));
    setImage3(require("../../assets/numbers/three.png"));
    setImage4(require("../../assets/numbers/four.png"));
    setImage5(require("../../assets/numbers/five.png"));
    setImage6(require("../../assets/numbers/six.png"));
    setImage7(require("../../assets/numbers/seven.png"));
    setImage8(require("../../assets/numbers/eight.png"));
    setImage9(require("../../assets/numbers/nine.png"));

    setSound1(require("../../assets/sounds/english/numbers/one.mp3"));
    setSound2(require("../../assets/sounds/english/numbers/two.mp3"));
    setSound3(require("../../assets/sounds/english/numbers/three.mp3"));
    setSound4(require("../../assets/sounds/english/numbers/four.mp3"));
    setSound5(require("../../assets/sounds/english/numbers/five.mp3"));
    setSound6(require("../../assets/sounds/english/numbers/six.mp3"));
    setSound7(require("../../assets/sounds/english/numbers/seven.mp3"));
    setSound8(require("../../assets/sounds/english/numbers/eight.mp3"));
    setSound9(require("../../assets/sounds/english/numbers/nine.mp3"));
  };

  const setNumbersPortuguese = () => {
    setImage1(require("../../assets/numbers/one.png"));
    setImage2(require("../../assets/numbers/two.png"));
    setImage3(require("../../assets/numbers/three.png"));
    setImage4(require("../../assets/numbers/four.png"));
    setImage5(require("../../assets/numbers/five.png"));
    setImage6(require("../../assets/numbers/six.png"));
    setImage7(require("../../assets/numbers/seven.png"));
    setImage8(require("../../assets/numbers/eight.png"));
    setImage9(require("../../assets/numbers/nine.png"));

    setSound1(require("../../assets/sounds/portuguese/numbers/um.mp3"));
    setSound2(require("../../assets/sounds/portuguese/numbers/dois.mp3"));
    setSound3(require("../../assets/sounds/portuguese/numbers/tres.mp3"));
    setSound4(require("../../assets/sounds/portuguese/numbers/quatro.mp3"));
    setSound5(require("../../assets/sounds/portuguese/numbers/cinco.mp3"));
    setSound6(require("../../assets/sounds/portuguese/numbers/seis.mp3"));
    setSound7(require("../../assets/sounds/portuguese/numbers/sete.mp3"));
    setSound8(require("../../assets/sounds/portuguese/numbers/oito.mp3"));
    setSound9(require("../../assets/sounds/portuguese/numbers/nove.mp3"));
  };

  const setColorsSpanish = () => {
    setImage1(require("../../assets/colors/black.png"));
    setImage2(require("../../assets/colors/blue.png"));
    setImage3(require("../../assets/colors/brown.png"));
    setImage4(require("../../assets/colors/green.png"));
    setImage5(require("../../assets/colors/orange.png"));
    setImage6(require("../../assets/colors/pink.png"));
    setImage7(require("../../assets/colors/yellow.png"));
    setImage8(require("../../assets/colors/red.png"));
    setImage9(require("../../assets/colors/white.png"));

    setSound1(require("../../assets/sounds/spanish/colors/negro.mp3"));
    setSound2(require("../../assets/sounds/spanish/colors/azul.mp3"));
    setSound3(require("../../assets/sounds/spanish/colors/marron.mp3"));
    setSound4(require("../../assets/sounds/spanish/colors/verde.mp3"));
    setSound5(require("../../assets/sounds/spanish/colors/naranja.mp3"));
    setSound6(require("../../assets/sounds/spanish/colors/rosa.mp3"));
    setSound7(require("../../assets/sounds/spanish/colors/amarillo.mp3"));
    setSound8(require("../../assets/sounds/spanish/colors/rojo.mp3"));
    setSound9(require("../../assets/sounds/spanish/colors/blanco.mp3"));
  };

  const setColorsEnglish = () => {
    setImage1(require("../../assets/colors/black.png"));
    setImage2(require("../../assets/colors/blue.png"));
    setImage3(require("../../assets/colors/brown.png"));
    setImage4(require("../../assets/colors/green.png"));
    setImage5(require("../../assets/colors/orange.png"));
    setImage6(require("../../assets/colors/pink.png"));
    setImage7(require("../../assets/colors/yellow.png"));
    setImage8(require("../../assets/colors/red.png"));
    setImage9(require("../../assets/colors/white.png"));

    setSound1(require("../../assets/sounds/english/colors/black.mp3"));
    setSound2(require("../../assets/sounds/english/colors/blue.mp3"));
    setSound3(require("../../assets/sounds/english/colors/brown.mp3"));
    setSound4(require("../../assets/sounds/english/colors/green.mp3"));
    setSound5(require("../../assets/sounds/english/colors/orange.mp3"));
    setSound6(require("../../assets/sounds/english/colors/pink.mp3"));
    setSound7(require("../../assets/sounds/english/colors/yellow.mp3"));
    setSound8(require("../../assets/sounds/english/colors/red.mp3"));
    setSound9(require("../../assets/sounds/english/colors/white.mp3"));
  };

  const setColorsPortuguese = () => {
    setImage1(require("../../assets/colors/black.png"));
    setImage2(require("../../assets/colors/blue.png"));
    setImage3(require("../../assets/colors/brown.png"));
    setImage4(require("../../assets/colors/green.png"));
    setImage5(require("../../assets/colors/orange.png"));
    setImage6(require("../../assets/colors/pink.png"));
    setImage7(require("../../assets/colors/yellow.png"));
    setImage8(require("../../assets/colors/red.png"));
    setImage9(require("../../assets/colors/white.png"));

    setSound1(require("../../assets/sounds/portuguese/colors/preto.mp3"));
    setSound2(require("../../assets/sounds/portuguese/colors/azul.mp3"));
    setSound3(require("../../assets/sounds/portuguese/colors/marrom.mp3"));
    setSound4(require("../../assets/sounds/portuguese/colors/verde.mp3"));
    setSound5(require("../../assets/sounds/portuguese/colors/laranja.mp3"));
    setSound6(require("../../assets/sounds/portuguese/colors/rosa.mp3"));
    setSound7(require("../../assets/sounds/portuguese/colors/amarelo.mp3"));
    setSound8(require("../../assets/sounds/portuguese/colors/vermelho.mp3"));
    setSound9(require("../../assets/sounds/portuguese/colors/branco.mp3"));
  };

  const setAnimalsSpanish = () => {
    setImage1(require("../../assets/animals/bird.png"));
    setImage2(require("../../assets/animals/cat.png"));
    setImage3(require("../../assets/animals/cow.png"));
    setImage4(require("../../assets/animals/dog.png"));
    setImage5(require("../../assets/animals/elephant.png"));
    setImage6(require("../../assets/animals/penguin.png"));
    setImage7(require("../../assets/animals/lion.png"));
    setImage8(require("../../assets/animals/owl.png"));
    setImage9(require("../../assets/animals/turtle.png"));

    setSound1(require("../../assets/sounds/spanish/animals/pajaro.mp3"));
    setSound2(require("../../assets/sounds/spanish/animals/gato.mp3"));
    setSound3(require("../../assets/sounds/spanish/animals/vaca.mp3"));
    setSound4(require("../../assets/sounds/spanish/animals/perro.mp3"));
    setSound5(require("../../assets/sounds/spanish/animals/elefante.mp3"));
    setSound6(require("../../assets/sounds/spanish/animals/pinguino.mp3"));
    setSound7(require("../../assets/sounds/spanish/animals/leon.mp3"));
    setSound8(require("../../assets/sounds/spanish/animals/buho.mp3"));
    setSound9(require("../../assets/sounds/spanish/animals/tortuga.mp3"));
  };

  const setAnimalsEnglish = () => {
    setImage1(require("../../assets/animals/bird.png"));
    setImage2(require("../../assets/animals/cat.png"));
    setImage3(require("../../assets/animals/cow.png"));
    setImage4(require("../../assets/animals/dog.png"));
    setImage5(require("../../assets/animals/elephant.png"));
    setImage6(require("../../assets/animals/penguin.png"));
    setImage7(require("../../assets/animals/lion.png"));
    setImage8(require("../../assets/animals/owl.png"));
    setImage9(require("../../assets/animals/turtle.png"));

    setSound1(require("../../assets/sounds/english/animals/bird.mp3"));
    setSound2(require("../../assets/sounds/english/animals/cat.mp3"));
    setSound3(require("../../assets/sounds/english/animals/cow.mp3"));
    setSound4(require("../../assets/sounds/english/animals/dog.mp3"));
    setSound5(require("../../assets/sounds/english/animals/elephant.mp3"));
    setSound6(require("../../assets/sounds/english/animals/penguin.mp3"));
    setSound7(require("../../assets/sounds/english/animals/lion.mp3"));
    setSound8(require("../../assets/sounds/english/animals/owl.mp3"));
    setSound9(require("../../assets/sounds/english/animals/turtle.mp3"));
  };

  const setAnimalsPortuguese = () => {
    setImage1(require("../../assets/animals/bird.png"));
    setImage2(require("../../assets/animals/cat.png"));
    setImage3(require("../../assets/animals/cow.png"));
    setImage4(require("../../assets/animals/dog.png"));
    setImage5(require("../../assets/animals/elephant.png"));
    setImage6(require("../../assets/animals/penguin.png"));
    setImage7(require("../../assets/animals/lion.png"));
    setImage8(require("../../assets/animals/owl.png"));
    setImage9(require("../../assets/animals/turtle.png"));
    setSound1(require("../../assets/sounds/portuguese/animals/passaro.mp3"));
    setSound2(require("../../assets/sounds/portuguese/animals/gato.mp3"));
    setSound3(require("../../assets/sounds/portuguese/animals/vaca.mp3"));
    setSound4(require("../../assets/sounds/portuguese/animals/cachorro.mp3"));
    setSound5(require("../../assets/sounds/portuguese/animals/elefante.mp3"));
    setSound6(require("../../assets/sounds/portuguese/animals/pinguim.mp3"));
    setSound7(require("../../assets/sounds/portuguese/animals/leao.mp3"));
    setSound8(require("../../assets/sounds/portuguese/animals/coruja.mp3"));
    setSound9(require("../../assets/sounds/portuguese/animals/tartaruga.mp3"));
  };

  var setItemsAtr = (language: number, object: number) => {
    setLanguageFlag(language);
    setObjectFlag(object);
    console.log(language + " " + object);

    switch (language) {
      case 1:
        setLanguageIcon(require("../../assets/languages/argentina.png"));
        switch (object) {
          case 1:
            setCategoryIcon(require("../../assets/categories/numbers.png"));
            setNumbersSpanish();
            console.log("Numbers Spanish");
            break;
          case 2:
            setCategoryIcon(require("../../assets/categories/chromatic.png"));
            setColorsSpanish();
            console.log("Colors Spanish");
            break;
          case 3:
            setCategoryIcon(require("../../assets/categories/livestock.png"));
            setAnimalsSpanish();
            console.log("Animals Spanish");
            break;
        }
        break;
      case 2:
        setLanguageIcon(require("../../assets/languages/inglaterra.png"));
        switch (object) {
          case 1:
            setCategoryIcon(require("../../assets/categories/numbers.png"));
            setNumbersEnglish();
            console.log("Numbers English");
            break;
          case 2:
            setCategoryIcon(require("../../assets/categories/chromatic.png"));
            setColorsEnglish();
            console.log("Colors English");
            break;
          case 3:
            setCategoryIcon(require("../../assets/categories/livestock.png"));
            setAnimalsEnglish();
            console.log("Animals English");
            break;
        }
        break;
      case 3:
        setLanguageIcon(require("../../assets/languages/portugal.png"));
        switch (object) {
          case 1:
            setCategoryIcon(require("../../assets/categories/numbers.png"));
            setNumbersPortuguese();
            console.log("Numbers Portuguese");
            break;
          case 2:
            setCategoryIcon(require("../../assets/categories/chromatic.png"));
            setColorsPortuguese();
            console.log("Colors Portuguese");
            break;
          case 3:
            setCategoryIcon(require("../../assets/categories/livestock.png"));
            setAnimalsPortuguese();
            console.log("Animals Portuguese");
            break;
        }
        break;
    }
  };

  async function playSound(sound: any) {
    try {
      await audioPlayer.unloadAsync()
      await audioPlayer.loadAsync(sound);
      await audioPlayer.playAsync();
    } catch (err) {
      console.warn("Couldn't Play audio", err)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handlerSingOut}>
          <FontAwesome name="power-off" size={24} color="#696b67" />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Text style={styles.textUser}>{auth?.currentUser?.displayName}</Text>
      ),
      headerBackVisible: false,
      headerBackButtonMenuEnabled: false,
      headerTitleAlign: 'left',
    });
  }, []);

  async function handlerSingOut() {
    await auth
      .signOut()
      .then(() => { navigation.navigate('Index') })
      .catch((error: any) => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >

        <View style={styles.body}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound1)}
              >
                <Image source={image1} style={styles.buttonImageIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound2)}
              >
                <Image source={image2} style={styles.buttonImageIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound3)}
              >
                <Image source={image3} style={styles.buttonImageIcon} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound4)}
              >
                <Image source={image4} style={styles.buttonImageIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound5)}
              >
                <Image source={image5} style={styles.buttonImageIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound6)}
              >
                <Image source={image6} style={styles.buttonImageIcon} />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound7)}
              >
                <Image source={image7} style={styles.buttonImageIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound8)}
              >
                <Image source={image8} style={styles.buttonImageIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonObject}
                onPress={() => playSound(sound9)}
              >
                <Image source={image9} style={styles.buttonImageIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ActionButton
          renderIcon={(active) =>
            active ? (
              <Image
                source={languageIcon}
                style={styles.buttonImageIconStyleL}
              />
            ) : (
              <Image
                source={languageIcon}
                style={styles.buttonImageIconStyleL}
              />
            )
          }
          verticalOrientation="up"
          position="left"
          bgColor="rgba(23, 52, 79, 0.8);"
          buttonColor="rgba(0,0,0,0)"
          spacing={60}
        >
          <ActionButton.Item onPress={() => setItemsAtr(1, objectFlag)}>
            <Image
              source={require("../../assets/languages/argentina.png")}
              style={styles.buttonImageIconStyleL}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(2, objectFlag)}>
            <Image
              source={require("../../assets/languages/inglaterra.png")}
              style={styles.buttonImageIconStyleL}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(3, objectFlag)}>
            <Image
              source={require("../../assets/languages/portugal.png")}
              style={styles.buttonImageIconStyleL}
            />
          </ActionButton.Item>
        </ActionButton>

        <ActionButton
          renderIcon={(active) =>
            active ? (
              <Image
                source={categoryIcon}
                style={styles.buttonImageIconStyle}
              />
            ) : (
              <Image
                source={categoryIcon}
                style={styles.buttonImageIconStyle}
              />
            )
          }
          verticalOrientation="up"
          position="right"
          bgColor="rgba(23, 52, 79, 0.8);"
          buttonColor="rgba(0,0,0,0)"
          spacing={60}
        >
          <ActionButton.Item onPress={() => setItemsAtr(languageFlag, 1)}>
            <Image
              source={require("../../assets/categories/numbers.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(languageFlag, 2)}>
            <Image
              source={require("../../assets/categories/chromatic.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>

          <ActionButton.Item onPress={() => setItemsAtr(languageFlag, 3)}>
            <Image
              source={require("../../assets/categories/livestock.png")}
              style={styles.buttonImageIconStyle}
            />
          </ActionButton.Item>
        </ActionButton>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;