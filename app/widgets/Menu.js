import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config/db";
import { collection, getDocs } from "firebase/firestore";

let sites = [];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
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
    borderColor: "#fff",
    borderBottomWidth: 1,
    backgroundColor: "#353535",
  },
  button: {
    width: "50%",
    height: "50%",
    backgroundColor: "#353535",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
});

const Menu = () => {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLoadSites = async () => {
    setLoading(true);
    const sitesRef = await getDocs(collection(db, "Sites"));
    const sitesList = sitesRef.docs.map((doc) => ({
      key: doc.id,
      site: doc.data().site,
    }));
    setSites(sitesList);
    setLoading(false);
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
        sites.map((site) => <Text key={site.id}>hola</Text>)
      )}
    </View>
  );
};

export default Menu;
