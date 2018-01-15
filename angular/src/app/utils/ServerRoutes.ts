export class Routes {
  static MODULE_CREATE: String = 'module/create';
  static MODULE_GET_ID: String = 'module/id/';
  static MODULE_GET_ALL: String = 'module/all';
  static MODULE_UPDATE: String = 'module/update';
  static MODULE_RATE: String = 'module/rate';
  static MODULE_APPROVE: String = 'module/approve';
  static MODULE_DISAPPROVE: String = 'module/disapprove';
  static MODULE_DELETE: String = 'module/delete/';
  static SCENE_CREATE: String = 'scene/create';
  static SCENE_GET_ID: String = 'scene/id/';
  static SCENE_GET_MID: String = 'scene/all/';
  static SCENE_UPDATE: String = 'scene/update';
  static SCENE_DELETE: String = 'scene/delete/';
  static OBJECT_CREATE: String = 'object/create';
  static OBJECT_GET_ID: String = 'object/id/';
  static OBJECT_GET_SID: String = 'object/all/';
  static OBJECT_UPDATE: String = 'object/update';
  static OBJECT_DELETE: String = 'object/delete/';
}

export class Server {
  private static address: String = '';
  private static port: String = '';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
