import React from "react";
import { Text, View } from "react-native";
import { ErrorCode, ErrorType, Feature } from "@/types";
import { commonStyles } from "@/Soil-Health-Analysis/UIConfig/CommonStyles";

const ErrorContainer = (e: ErrorCode) => {
  const errorType: ErrorType = e.split(":")[1] as ErrorType;
  const feature: Feature = e.split(":")[0] as Feature;

  return (
    <View style={commonStyles.card}>
      <Text style={commonStyles.cardTitle}>{errorType}</Text>
      <Text style={commonStyles.cardSubtitle}>{feature} </Text>
    </View>
  );
};

export default ErrorContainer;
