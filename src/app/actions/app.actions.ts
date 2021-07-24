export class AppActions {
  static SET_RES = '[Config] SET_RES';
  static GET_OPERATION = '[Config] GET_OPERATION';
  static setRes = payload => ({
    type: AppActions.SET_RES,
    payload
  });
  static getOperation = payload => ({
    type: AppActions.GET_OPERATION,
    payload
  });
}
