
import LottieView from "lottie-react-native";
import React from "react";

export function Loading() {
return <LottieView
source={require('../../lotties/loading.json')}
style={{ width: "100%", height: "100%"}}
autoPlay
loop
/>

}