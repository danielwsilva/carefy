import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: RFValue(4),
    paddingLeft: RFValue(10),
    backgroundColor: theme.colors.white
  },
  wrapper: {
    flex: 1, 
    marginLeft: RFValue(10)
  }
});
