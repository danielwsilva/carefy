import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.white
  },
  header: {
    backgroundColor: theme.colors.primary, 
    flexDirection: 'row', 
    height: RFValue(150),
    paddingHorizontal: RFValue(18),
    alignItems: 'center'
  },
  image: {
    width: RFValue(45), 
    height: RFValue(45), 
    borderRadius: RFValue(22), 
    borderWidth: 2, 
    borderColor: theme.colors.white,
    marginRight: RFValue(10)
  },
  containerCount: {
    alignItems: 'center',
    marginBottom: RFValue(20)
  },
  wrapperCount: {
    width: '90%', 
    height: RFValue(38), 
    borderRadius: 10, 
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(-20),
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    elevation: 4
  },
  separator: {
    width: RFValue(292),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
    alignSelf: 'flex-end'
  },
  gradientButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: RFValue(30),
    marginBottom: RFValue(30),
    borderRadius: RFValue(22),
    backgroundColor: theme.colors.success
  },
  button: {
    width: RFValue(45), 
    height: RFValue(45),
    borderRadius: RFValue(22),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
