export interface ErrorPayload {
  type?: string;
  status: number;
  detail?: string;
  title?: string;
  instance?: string;
  properties?: Record<string, unknown>;
}
