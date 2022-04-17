import React from "react";
import { View } from "react-native";
import CircleProgressBar from "app/widgets/shared/CircleProgressBar/CircleProgressBar";
import HeadingTextBlock from "app/widgets/shared/HeadingTextBlock/HeadingTextBlock";
import { challengeDetailStyles } from "./ChallengeDetailStyles";

import Container from "widgets/shared/Container/Container";

const ChallengeDetail = (props) => {
  const { item } = props.route.params;
  return (
    <Container>
      <View style={challengeDetailStyles.container}>
        <CircleProgressBar
          style={challengeDetailStyles.circleProgressBar}
          percentage={item?.percentage}
        />
        <HeadingTextBlock
          style={challengeDetailStyles.challengeInfo}
          heading1={item?.title}
          heading2={item?.description}
        />
      </View>
    </Container>
  );
};

export default ChallengeDetail;
