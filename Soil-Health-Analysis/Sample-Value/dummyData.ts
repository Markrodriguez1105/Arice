import { Sensor } from "@/types";

// Define the interface for a Sensor object
export const sensorData: Sensor[] = [
  {
    id: "1",
    name: "Sensor 1",
    status: "Device not Found",
    secondaryStatus: "Troubleshoot",
  },
  { id: "2", name: "Sensor 2", status: "Online", secondaryStatus: "In-Use" },
  { id: "3", name: "Sensor 3", status: "Online", secondaryStatus: "Available" },
  { id: "4", name: "Sensor 4", status: "Offline", secondaryStatus: "" },
];
