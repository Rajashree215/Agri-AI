import { PATH } from "../constants/routerConstant";
import LandingPage from "../pages/LandingPage";
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CropInsights from '../pages/CropInsights';
import WeatherForecast from '../pages/WeatherForecast';
import FieldMonitoring from '../pages/FieldMonitoring';
import MarketTrends from '../pages/MarketTrends';
import ResourceOptimization from '../pages/ResourceOptimization';

export const RouteData=[
    {
        title:"landingpage",
        Component:LandingPage,
        route:PATH.LANDINGPAGE,
        isPublic:true,
    },
    {
        title:"login",
        Component:LogIn,
        route:PATH.LOGIN,
        isPublic:true,
    },
    {
        title:"signup",
        Component:SignUp,
        route:PATH.SIGNUP,
        isPublic:true,
    },
    {
        title:"home",
        Component:Home,
        route:PATH.HOME,
        isPublic:false,
    },
    {
        title:"cropinsights",
        Component:CropInsights,
        route:PATH.CROPINSIGHTS,
        isPublic:false,
    },
    {
        title:"weatherforecast",
        Component:WeatherForecast,
        route:PATH.WEATHERFORECAST,
        isPublic:false,
    },
    {
        title:"fieldmonitoring",
        Component:FieldMonitoring,
        route:PATH.FIELDMONITORING,
        isPublic:false,
    },
    {
        title:"markettrends",
        Component:MarketTrends,
        route:PATH.MARKETTRENDS,
        isPublic:false,
    },
    {
        title:"resourceoptimization",
        Component:ResourceOptimization,
        route:PATH.RESOURCEOPTIMIZATION,
        isPublic:false,
    },
]