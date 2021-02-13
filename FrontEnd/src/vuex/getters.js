export default {
  getAuthToken(state) {
    return state.authToken;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
  getCurrentLatlng(state) {
    return state.currentLatlng;
  },
  getCurrentAddress(state) {
    return state.currentAddress;
  },
  getTotalTime(state) {
    return state.totalTime;
  },
  getMinutes(state) {
    return state.minutes;
  },
  getSeconds(state) {
    return state.seconds;
  },
};
