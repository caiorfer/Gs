import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import { useNavigation } from '@react-navigation/native';

function Home() {
   const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  return (
    <ScrollView>
      <View style={styles.view1}>
        <Image
          resizeMode="cover"
          source={require('../assets/eco_green.png')}
          style={styles.image1}
        />
        <Text style={styles.text}>EcoCommerce</Text>
        <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.btnText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#476930",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 24,
    whiteSpace: "nowrap",
    margin: "0 auto",
    padding: "100px 0",
  },
  image1: {
    position: "relative",
    overflow: "hidden",
    alignSelf: "stretch",
    minHeight: 45,
    width: "100%",
    alignItems: "center",
    color: "#FFF",
    justifyContent: "center",
    aspectRatio: "0.80",
    height: 290
  },
  view2: {
    fontFamily: "KulimPark_700Bold",
    borderRadius: 9,
    backgroundColor: "#FFF",
    marginTop: 35,
    width: "100%",
    maxWidth: 250,
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 10px",
  },
  view3: {
    fontFamily: "KulimPark_700Bold",
    borderRadius: 9,
    backgroundColor: "#FFF",
    marginTop: 20,
    width: "100%",
    maxWidth: 250,
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 10px",
  },
  text: {
    fontFamily: "KulimPark_700Bold",
    color: "#fff",
    fontSize: 24
  },
  btnText: {
    fontFamily: "KulimPark_700Bold",
    color: "#000",
    fontSize: 16
  }
});

export default Home;