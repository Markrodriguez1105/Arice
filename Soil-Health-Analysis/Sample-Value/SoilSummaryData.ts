import axios from "axios";
import { Nutrient } from "@/types";

const username = process.env.AXIOS_BACKEND_USERNAME || "admin";
const password = process.env.AXIOS_BACKEND_PASSWORD || "admin";
console.log(username, password);

export const SoilSummaryResponse = async () => {
  try {
    //10.0.2.2 is the localhost address for Android emulator
    const response = await axios.get<Nutrient[]>(
      "http://10.0.2.2:8080/api/soil-summary",
      {
        auth: {
          //basic auth for spring jpa
          username: username,
          password: password,
        },
      }
    );
    //setting the data to the state
    const data = response.data.map((item) => ({
      id: item.id,
      nitrogen: item.nitrogen.value,
      nitrogenStatus: item.nitrogen.status,
      phosphorus: item.phosphorus.value,
      phosphorusStatus: item.phosphorus.status,
      potassium: item.potassium.value,
      potassiumStatus: item.potassium.status,
      ph: item.ph.value,
      phStatus: item.ph.status,
      datetime: item.datetime,
    }));
    return data;
  } catch (error) {
    console.error("Unable to fetch data", error);
    return [];
  }
};
