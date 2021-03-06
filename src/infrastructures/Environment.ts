/**
 * Environment
 *
 * @author keita-nishimoto
 * @since 2017-07-02
 */
export default class Environment {

  /**
   * ローカル環境かどうかを判定する
   *
   * @returns {boolean}
   */
  public static isLocal(): boolean {

    if (process.env.IS_OFFLINE != null) {
      return true;
    }

    if (process.env.IS_LOCAL != null) {
      return true;
    }

    return false;
  }
}
