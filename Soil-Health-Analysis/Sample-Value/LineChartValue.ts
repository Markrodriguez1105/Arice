export const legend = {
  labels: ["Nitrogen", "Phosphorus", "Potassium"],
  colors: ["#2568CC", "#04AA62", "#B5BF22"],
};

export const monthChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [50, 60, 55, 70, 65, 75, 80, 78, 85, 90, 88, 92],
      color: (opacity = 1) => `rgba(37, 104, 204, ${opacity})`, // #2568CC
      strokeWidth: 2,
    },
    {
      data: [80, 75, 90, 85, 95, 100, 98, 105, 110, 108, 115, 120],
      color: (opacity = 1) => `rgba(4, 170, 98, ${opacity})`, // #04AA62
      strokeWidth: 2,
    },
    {
      data: [30, 40, 35, 50, 45, 55, 60, 58, 65, 70, 68, 72],
      color: (opacity = 1) => `rgba(181, 191, 34, ${opacity})`, // #B5BF22
      strokeWidth: 2,
    },
  ],
};

export const yearChartData = {
  labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      data: [72.25, 72.25, 72.25, 72.25, 72.25, 72.25],
      color: (opacity = 1) => `rgba(37, 104, 204, ${opacity})`,
      strokeWidth: 2,
    },
    {
      data: [96.25, 96.25, 96.25, 96.25, 96.25, 96.25],
      color: (opacity = 1) => `rgba(4, 170, 98, ${opacity})`,
      strokeWidth: 2,
    },
    {
      data: [54.5, 54.5, 54.5, 54.5, 54.5, 54.5],
      color: (opacity = 1) => `rgba(181, 191, 34, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};
