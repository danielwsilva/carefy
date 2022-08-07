import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: RFValue(24),
    backgroundColor: theme.colors.white
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: RFValue(48),
    marginBottom: RFValue(28)
  },
  containerButton: {
    flex: 1, 
    justifyContent: 'flex-end', 
    marginBottom: RFValue(30)
  },
  button: {
    width: '100%', 
    height: RFValue(54), 
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
  }
});
