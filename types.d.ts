export interface FetchedSummaryItem {
  id: number;
  nitrogen: number;
  nitrogenStatus: string;
  phosphorus: number;
  phosphorusStatus: string;
  potassium: number;
  potassiumStatus: string;
  ph: number;
  phStatus: string;
  datetime: string;
}

export interface SummaryItemData {
  id: string;
  label: string;
  value: number;
  unit: string;
  status: string;
}

export interface Nutrient {
  id: number;
  nitrogen: { status: string; value: number };
  phosphorus: { status: string; value: number };
  potassium: { status: string; value: number };
  ph: { status: string; value: number };
  datetime: string;
}

export interface Sensor {
  id: string;
  name: string;
  status: "Online" | "Offline" | "Device not Found";
  secondaryStatus: "In-Use" | "Available" | "Troubleshoot" | "";
}

export type ChecklistStatusKey =
  | "turnOnSensor"
  | "checkConnectivity"
  | "checkDistance"
  | "reconnect";

export type Feature = "SoilSummary" | "SensorManagement" | "SoilAnalysisChart";

export type ErrorType =
  | "NetworkError"
  | "DataError"
  | "UnknownError"
  | "NoDataError"
  | "SensorError"
  | "PermissionError";

export type ErrorCode = `${Feature}:${ErrorType}`;
