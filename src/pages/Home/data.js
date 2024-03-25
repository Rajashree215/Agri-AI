import { PATH } from "../../constants/routerConstant";
import cropinsights from "../../assets/bgimgs/categorybuttons/cropinsights.png";
import weatherforecast from "../../assets/bgimgs/categorybuttons/weatherforecast.png";
import fieldmonitoring from "../../assets/bgimgs/categorybuttons/fieldmonitoring.png";
import resourceoptimization from "../../assets/bgimgs/categorybuttons/resourceoptimization.png";
import markettrends from "../../assets/bgimgs/categorybuttons/markettrends.png";

export const pagedata = [
  {
    icon: cropinsights,
    path: PATH.CROPINSIGHTS,
  },
  {
    icon: weatherforecast,
    path: PATH.WEATHERFORECAST,
  },
  {
    icon: fieldmonitoring,
    path: PATH.FIELDMONITORING,
  },
  {
    icon: resourceoptimization,
    path: PATH.RESOURCEOPTIMIZATION,
  },
  {
    icon: markettrends,
    path: PATH.MARKETTRENDS,
  },
];
