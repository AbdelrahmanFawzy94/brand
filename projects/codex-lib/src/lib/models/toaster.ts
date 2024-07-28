export interface IToaster {
  message: string;
  subMessage?: string;
  severity: 'success' | 'danger' | 'info' | 'warning' | null;
}
