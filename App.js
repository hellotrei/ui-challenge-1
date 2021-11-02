import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import avatar from "./assets/man.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerContentLeft}>
          <MaterialIcons name="segment" size={24} color="black" />
        </View>
        <View style={styles.headerContentRight}>
          <Image style={styles.tinyLogo} source={avatar} />
        </View>
      </View>
      <View style={styles.greetingWrapper}>
        <Text style={styles.txtTitleLight}>Hello,</Text>
        <Text style={styles.txtTitleNight}>Benjamin</Text>
      </View>
      <View style={styles.menuTitleWrapper}>
        <Text style={styles.txtTitleWrapper}>Weekly Stats</Text>
      </View>
      <View style={styles.dashboardWrapper}>
        <View style={styles.dashboardLeft}>
          <View style={styles.iconWrapper}>
            <Text style={styles.txtIcon}>🔥</Text>
          </View>
          <Text style={styles.txtDayNight}>2,154</Text>
          <Text style={styles.txtButtonGrey}>kcal burnt</Text>
        </View>
        <View style={styles.dashboardRightWrapper}>
          <View style={styles.dashboardRightTop}>
            <View style={styles.iconWrapper}>
              <Text style={styles.txtIcon}>⏳</Text>
            </View>
            <View style={styles.dashboardRightPadding}>
              <Text style={styles.txtDayNight}>16h</Text>
              <Text style={styles.txtButtonGrey}>total time</Text>
            </View>
          </View>
          <View style={styles.dashboardRightBottom}>
            <View style={styles.iconWrapper}>
              <Text style={styles.txtIcon}>💪🏻</Text>
            </View>
            <View style={styles.dashboardRightPadding}>
              <Text style={styles.txtDayNight}>107</Text>
              <Text style={styles.txtButtonGrey}>exercise</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dashboard2Wrapper}>
        <View style={styles.dashboard2Left}>
          <Text style={styles.txtDayLight}>Most active</Text>
          <Text style={styles.txtDayNight}>Thursday</Text>
        </View>
        <View style={styles.dashboard2Right}>
          <View style={styles.indicatorWrapper}>
            <View style={styles.indicatorContent1}></View>
            <Text style={styles.txtDayInactive}>mo</Text>
          </View>
          <View style={styles.indicatorWrapper}>
            <View style={styles.indicatorContent2}></View>
            <Text style={styles.txtDayInactive}>tu</Text>
          </View>
          <View style={styles.indicatorWrapper}>
            <View style={styles.indicatorContent3}></View>
            <Text style={styles.txtDayInactive}>we</Text>
          </View>
          <View style={styles.indicatorWrapper}>
            <View style={styles.indicatorContent4}></View>
            <Text style={styles.txtDayActive}>th</Text>
          </View>
          <View style={styles.indicatorWrapper}>
            <View style={styles.indicatorContent5}></View>
            <Text style={styles.txtDayInactive}>fr</Text>
          </View>
        </View>
      </View>
      <View style={styles.dashboard3Wrapper}>
        <Text style={styles.txtTitleWhite}>Try celebrity</Text>
        <Text style={styles.txtTitleWhite}>training programs!</Text>
        <View style={styles.dashboard3Content}>
          <View style={styles.dashboard3Left}>
            <Text style={styles.txtButtonLight}>Skip</Text>
          </View>
          <View style={styles.dashboard3Right}>
            <Text style={styles.txtButtonNight}>Let's try</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerWrapper: {
    marginTop: 10,
    width: "90%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContentLeft: {
    width: 60,
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6d6d6",
  },
  headerContentRight: {
    width: 60,
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#383838",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  greetingWrapper: {
    width: "90%",
    height: 125,
    justifyContent: "center",
  },
  txtTitleWhite: {
    fontSize: 25,
    fontWeight: "600",
    color: "#f2f2f2",
  },
  txtButtonLight: {
    fontSize: 20,
    fontWeight: "600",
    color: "#f2f2f2",
  },
  txtButtonGrey: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666666",
  },
  txtButtonNight: {
    fontSize: 20,
    fontWeight: "600",
    color: "#383838",
  },
  txtDayLight: {
    fontSize: 20,
    fontWeight: "600",
    color: "#d6d6d6",
  },
  txtDayNight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#383838",
  },
  txtTitleLight: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#d6d6d6",
  },
  txtTitleNight: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#383838",
  },
  menuTitleWrapper: {
    width: "90%",
    height: 50,
    justifyContent: "center",
  },
  txtTitleWrapper: {
    fontSize: 20,
    fontWeight: "500",
    color: "#383838",
  },
  dashboardWrapper: {
    width: "90%",
    height: 200,
    flexDirection: "row",
  },
  dashboardLeft: {
    width: "40%",
    height: "100%",
    borderRadius: 25,
    backgroundColor: "#adddff",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardRightWrapper: {
    width: "60%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  dashboardRightPadding: {
    padding: 10,
  },
  dashboardRightTop: {
    width: "90%",
    height: "45%",
    borderRadius: 25,
    backgroundColor: "#d1ffad",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboardRightBottom: {
    width: "90%",
    height: "45%",
    borderRadius: 25,
    backgroundColor: "#d6d6d6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard2Wrapper: {
    width: "90%",
    height: 100,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#d6d6d6",
    marginTop: 20,
    flexDirection: "row",
  },
  dashboard2Left: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard2Right: {
    width: "60%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  dashboard3Wrapper: {
    width: "90%",
    height: 200,
    borderRadius: 25,
    backgroundColor: "#202020",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard3Content: {
    width: "90%",
    height: 75,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashboard3Left: {
    width: "40%",
    height: "100%",
    borderRadius: 25,
    backgroundColor: "#454545",
    justifyContent: "center",
    alignItems: "center",
  },
  dashboard3Right: {
    width: "50%",
    height: "100%",
    borderRadius: 25,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  txtIcon: {
    fontSize: 25,
  },
  indicatorWrapper: {
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingBottom: 5,
    alignItems: "center",
  },
  indicatorContent1: {
    width: 25,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#d6d6d6",
  },
  indicatorContent2: {
    width: 25,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#d6d6d6",
  },
  indicatorContent3: {
    width: 25,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#d6d6d6",
  },
  indicatorContent4: {
    width: 25,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#adddff",
  },
  indicatorContent5: {
    width: 25,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#d6d6d6",
  },
  txtDayInactive: {
    fontSize: 14,
    color: "#d6d6d6",
  },
  txtDayActive: {
    fontSize: 14,
    color: "#202020",
  },
});
