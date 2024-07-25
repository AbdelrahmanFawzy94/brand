export interface IToaster {
  message: string;
  severity: 'success' | 'danger' | 'info' | 'warning' | null;
}
