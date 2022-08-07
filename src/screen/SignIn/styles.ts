import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logo: {
    width: RFValue(180), 
    height: RFValue(69), 
    marginBottom: RFValue(12)
  },
  footer: {
    width: '100%', 
    height: RFValue(140), 
    backgroundColor: theme.colors.white, 
    justifyContent: 'flex-end',
    borderTopEndRadius: 40, 
    borderTopLeftRadius: 40,
    paddingHorizontal: RFValue(20)
  },
  button: {
    height: RFValue(54),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    elevation: 8
  }
});
