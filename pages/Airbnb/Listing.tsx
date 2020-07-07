import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { Feather as Icon } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { Description } from "./components";
import { Listing as ListingModel } from "./components/Listing";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    width,
    height: width
  },
  thumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16
  }
});
function Listing(){
  const { goBack, getParam } = useNavigation();
  const listing: ListingModel = getParam("listing");
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1
        }}
      >
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={listing.picture}
          />
          <SafeAreaView style={styles.thumbnailOverlay}>
            <Icon.Button
              name="x"
              underlayColor="transparent"
              onPress={() => goBack()}
            />
          </SafeAreaView>
        </View>
        <Description />
      </View>
    </View>
  );
};

export default Listing;
