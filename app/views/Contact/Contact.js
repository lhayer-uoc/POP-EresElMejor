import React from "react";
import Container from "widgets/shared/Container/Container";
import { View, Text } from "react-native";

import { contactStyles } from "./ContactStyles";

const Contact = () => {
  return (
    <Container>
      <View style={contactStyles.screenContainer}>
        <Text></Text>
      </View>
    </Container>
  );
};

export default Contact;
