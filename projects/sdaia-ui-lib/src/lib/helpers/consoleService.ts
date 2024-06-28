// for debugging
export class ConsoleService {
  constructor() {}

  static info(...message: any) {
    console.log(
      '%c%s',
      'background: #007f84; color: #bbb; font-size:14px',
      message
    );
  }

  static warning(...message: any) {
    console.log(
      '%c%s',
      'background:#845a00; color:#bbb; font-size:14px',
      message
    );
  }

  static danger(...message: any) {
    console.log(
      '%c%s',
      'background:#920000; color:#bbb; font-size:14px',
      message
    );
  }

  static success(...message: any) {
    console.log(
      '%c%s',
      'background:#028400; color:#bbb; font-size:14px',
      message
    );
  }
}
