import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import getSitesService from "../services/getSites";

let sites = [];
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    flexDirection: "column",
  },
  highLightRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderBottomWidth: 1,
    backgroundColor: "#353535",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  button: {
    backgroundColor: "#fc0",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    color: "#000",
    width: "100%",
  },
  rowButton: {
    padding: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
  add: {
    marginTop: "auto",
    backgroundColor: "#fc0",
    alignSelf: "flex-end",
    width: "100%",
    padding: 20,
  },
});

const Menu = () => {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLoadSites = async () => {
    setLoading(true);
    const sites = await getSitesService();
    if (sites) {
      setSites(sites);
    }
    setLoading(false);
  };

  const handleNavigation = (screen, data = {}) => {
    console.log("data: ", data);
    navigation.navigate(screen, { ...data });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowButton}
          onPress={() => handleNavigation("Site", item)}
        >
          <Text>{item.site}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    handleLoadSites();
  }, []);

  if (loading) {
    <View style={styles.container}>
      <Text>Cargando...</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <>
          <View style={styles.menu}>
            <FlatList
              data={sites}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
          </View>
          <View style={styles.add}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleNavigation("New");
              }}
            >
              <Text style={styles.textButton}>New site</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Menu;
