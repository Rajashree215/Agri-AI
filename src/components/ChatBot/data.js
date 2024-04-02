import axios from "axios";
import { weatherapiurl } from "../../ApiUrl/WeatherApi";

const currentWeather = await axios.get(weatherapiurl);
const data = currentWeather.data.list[0];

const getCurrentTemperature = (weatherData) =>
  Math.round(weatherData.main.temp);

const getHumidityLevel = (weatherData) => Math.round(weatherData.main.humidity);

const assessHumidityLevel = (weatherData) => {
  const humidityLevel = getHumidityLevel(weatherData);
  if (humidityLevel < 30) {
    return "The humidity level of " + humidityLevel + "% is considered low.";
  } else if (humidityLevel > 70) {
    return "The humidity level of " + humidityLevel + "% is considered high.";
  } else {
    return (
      "The humidity level of " + humidityLevel + "% is relatively moderate."
    );
  }
};

const getWindSpeed = (weatherData) => Math.round(weatherData.wind.speed);

const assessWindSpeedImpact = (weatherData) => {
  const windSpeed = getWindSpeed(weatherData);
  if (windSpeed < 2) {
    return (
      "While the current wind speed of " +
      windSpeed +
      " meters per second is relatively calm, higher wind speeds can lead to crop damage and may require adjustments in harvesting techniques."
    );
  } else {
    return (
      "The current wind speed of " +
      windSpeed +
      " meters per second may impact harvesting activities. Ensure safe operation of equipment and consider adjustments in harvesting techniques."
    );
  }
};

const getCloudCoverPercentage = (weatherData) =>
  Math.round(weatherData.clouds.all);

const assessCloudCoverImpact = (weatherData) => {
  const cloudCoverPercentage = getCloudCoverPercentage(weatherData);
  if (cloudCoverPercentage < 30) {
    return "There is minimal cloud cover, which may result in direct sunlight exposure during agricultural activities.";
  } else if (cloudCoverPercentage >= 30 && cloudCoverPercentage <= 70) {
    return "Scattered clouds may provide temporary relief from direct sunlight. Ensure adequate visibility for safe harvesting operations.";
  } else {
    return "The current cloud cover may significantly reduce direct sunlight exposure during agricultural activities.";
  }
};

const canHarvest = (weatherData) => {
  const temperature = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const cloudCover = weatherData.clouds.all;

  let response = "Based on the current weather conditions:\n\n";

  // Assess temperature
  if (temperature > 30) {
    response +=
      "High temperatures may lead to heat stress for workers. Harvest during cooler parts of the day.\n";
  }

  // Assess humidity
  if (humidity > 50) {
    response +=
      "Moderate to high humidity levels may affect crop quality. Monitor moisture levels during harvesting.\n";
  }

  // Assess wind speed
  if (windSpeed > 2) {
    response +=
      "High wind speeds can lead to crop damage. Ensure safe operation of harvesting equipment.\n";
  }

  // Assess cloud cover
  if (cloudCover > 20) {
    response +=
      "Scattered clouds may provide relief from direct sunlight. Ensure adequate visibility for safe harvesting.\n";
  }

  // Default response if no specific conditions are met
  if (response === "Based on the current weather conditions:\n\n") {
    response +=
      "Weather conditions appear generally favorable for harvesting.\n";
  }

  return response;
};

export const QuestionData = [
  {
    id: 1,
    question: "What are the common pests affecting tomato plants?",
    answer:
      "Common pests affecting tomato plants include aphids, whiteflies, tomato hornworms, and spider mites.",
  },
  {
    id: 2,
    question: "How often should I water my crops?",
    answer:
      "The frequency of watering depends on various factors such as soil type, weather conditions, and crop type. Generally, crops require consistent moisture, but overwatering should be avoided as it can lead to root rot.",
  },
  {
    id: 3,
    question: "What are the essential nutrients required for plant growth?",
    answer:
      "Plants require primary nutrients such as nitrogen, phosphorus, and potassium (NPK), as well as secondary nutrients like calcium, magnesium, and sulfur. Additionally, micronutrients such as iron, manganese, zinc, and copper are also crucial for healthy plant growth.",
  },
  {
    id: 4,
    question: "How can I prevent soil erosion on my farm?",
    answer:
      "Soil erosion can be prevented through various methods such as planting cover crops, contour plowing, terracing, and mulching. These practices help to maintain soil structure and reduce runoff.",
  },
  {
    id: 5,
    question: "What are the signs of nutrient deficiency in plants?",
    answer:
      "Signs of nutrient deficiency in plants vary depending on the nutrient lacking. Common symptoms include yellowing of leaves (chlorosis), stunted growth, leaf curling, and necrosis (death of plant tissue).",
  },
  {
    id: 6,
    question: "How can I control weeds in my garden organically?",
    answer:
      "Organic weed control methods include hand-pulling weeds, mulching to suppress weed growth, using organic herbicides such as vinegar or boiling water, and employing mechanical methods like hoeing or flame weeding.",
  },
  {
    id: 7,
    question: "What are the best practices for composting?",
    answer:
      "To create high-quality compost, mix green (nitrogen-rich) and brown (carbon-rich) materials in a ratio of about 1:2, maintain proper aeration and moisture levels, and turn the compost regularly to facilitate decomposition. Avoid adding meat, dairy, or oily foods to prevent odor and pest issues.",
  },
  {
    id: 8,
    question: "How can I protect my crops from frost damage?",
    answer:
      "Frost damage can be prevented by covering sensitive plants with frost cloth or blankets, using row covers, installing heat lamps or frost-protection sprinkler systems, and planting frost-resistant varieties.",
  },
  {
    id: 9,
    question: "What are the benefits of crop rotation?",
    answer:
      "Crop rotation helps to improve soil fertility, reduce pest and disease pressure, and break pest life cycles. It also promotes balanced nutrient uptake and can increase crop yields over time.",
  },
  {
    id: 10,
    question: "How do I know when fruits and vegetables are ready to harvest?",
    answer:
      "Fruits and vegetables are ready to harvest when they reach maturity, which is indicated by factors such as color, size, texture, and taste. Additionally, you can refer to specific harvest guides for each crop.",
  },
  {
    id: 11,
    question: "Can I harvest today?",
    answer: canHarvest(data),
  },
  {
    id: 12,
    question: "Thank You",
    answer: "Glad to help you! Feel free to ask me If you have more questions.",
  },
  {
    id: 13,
    question: "What is the current temperature?",
    answer: `The current temperature in Kumbakonam is ${getCurrentTemperature(
      data
    )}°C.`,
  },
  {
    id: 14,
    question: "What is the humidity level?",
    answer: `The humidity level in Kumbakonam is ${getHumidityLevel(data)}%`,
  },
  {
    id: 15,
    question:
      " Is the current humidity level considered high or low for this region?",
    answer: assessHumidityLevel(data),
  },
  {
    id: 16,
    question: "What is the wind speed?",
    answer: `The wind speed in Kumbakonam is ${getWindSpeed(
      data
    )} meters per second.`,
  },
  {
    id: 17,
    question: "How does the wind speed affect harvesting activities?",
    answer: assessWindSpeedImpact(data),
  },
  {
    id: 18,
    question: "What is the cloud cover percentage?",
    answer: `The cloud cover percentage in Kumbakonam is ${getCloudCoverPercentage(
      data
    )}%.`,
  },
  {
    id: 19,
    question: "How might the scattered clouds impact agricultural activities?",
    answer: assessCloudCoverImpact(data),
  },
  {
    id: 20,
    question:
      "How does the current temperature compare to the average for this time of year?",
    answer:
      "Unfortunately, without historical data, we cannot provide a comparison to the average temperature for this time of year.",
  },
  {
    id: 21,
    question:
      "What are the recommended soil preparation techniques before planting crops?",
    answer:
      "The recommended soil preparation techniques may include plowing, harrowing, and adding organic matter such as compost or manure to improve soil fertility and structure.",
  },
  {
    id: 22,
    question: "What is Plowing?",
    answer:
      "Plowing is a soil preparation technique that involves turning over the top layer of soil using a plow or similar implement. This helps to break up compacted soil, bury crop residues, and incorporate organic matter into the soil. Plowing also helps to aerate the soil, improve water infiltration, and create a suitable seedbed for planting.",
  },
  {
    id: 23,
    question: "What is Harrowing?",
    answer:
      "Harrowing is the process of breaking up clods of soil and smoothing the surface of the seedbed after plowing. This is typically done using a harrow, which consists of sharp metal teeth or disks attached to a frame. Harrowing helps to create a fine, level seedbed, improve seed-to-soil contact, and control weeds by uprooting small seedlings.",
  },
  {
    id: 24,
    question:
      "How can I effectively manage weeds in my fields without using harmful chemicals?",
    answer:
      "Effective weed management techniques include manual removal, mulching, crop rotation, and cover cropping. These methods help suppress weed growth while promoting soil health and biodiversity.",
  },
  {
    id: 25,
    question:
      "How can I optimize water usage in irrigation practices to conserve water and minimize waste?",
    answer:
      "Optimize water usage by employing drip irrigation systems, scheduling irrigation based on crop needs and weather conditions, and implementing water-saving techniques such as mulching and soil moisture monitoring.",
  },
  {
    id: 26,
    question:
      "What are the key factors to consider when selecting crop varieties for my farm?",
    answer:
      "Key factors include climate suitability, soil type, pest and disease resistance, yield potential, market demand, and agronomic traits such as maturity period and nutrient requirements.",
  },
  {
    id: 27,
    question:
      "What are some natural pest control methods for protecting crops from pests and diseases?",
    answer:
      "Natural pest control methods include introducing beneficial insects, practicing crop rotation, using companion planting techniques, and applying organic pest repellents such as neem oil or garlic spray.",
  },
  {
    id: 28,
    question:
      "How can I improve soil health and fertility for better crop yields in the long term?",
    answer:
      "Improve soil health by practicing crop rotation, cover cropping, adding organic matter, minimizing tillage, and avoiding excessive use of chemical fertilizers and pesticides.",
  },
  {
    id: 29,
    question:
      "What are the best practices for post-harvest handling to minimize losses and maintain crop quality?",
    answer:
      "Best practices include proper storage facilities, handling techniques to minimize bruising and damage, temperature and humidity control, and timely processing and packaging of harvested crops.",
  },
  {
    id: 30,
    question:
      "How can I transition to sustainable farming practices to reduce environmental impact and promote biodiversity?",
    answer:
      "Transition to sustainable practices by adopting organic farming methods, integrating agroforestry and conservation agriculture techniques, reducing chemical inputs, and promoting ecosystem diversity on your farm.",
  },
  {
    id: 31,
    question:
      "What are the potential benefits of incorporating livestock into my farming operation?",
    answer:
      "Livestock integration can provide benefits such as nutrient cycling, soil fertility improvement, diversified income streams, and enhanced resilience to market fluctuations.",
  },
  {
    id: 32,
    question:
      "How can I access resources and support for implementing sustainable agriculture practices on my farm?",
    answer:
      "Explore government programs, agricultural extension services, community organizations, and online resources that offer guidance, training, grants, and technical assistance for sustainable agriculture initiatives.",
  },
  {
    id: 33,
    question:
      "How can I save water and fertilizer while improving crop yields?",
    answer:
      "Resource optimization involves maximizing the efficiency and effectiveness of inputs such as water, fertilizer, and energy to achieve optimal crop yields and minimize waste. This question explores strategies for reducing resource use through practices such as precision agriculture, soil and water conservation techniques, and nutrient management planning.",
  },
  {
    id: 34,
    question: "What are the benefits of using drones and sensors in farming?",
    answer:
      "Field monitoring technologies enable real-time data collection and analysis to monitor crop health, soil conditions, pest infestations, and other factors affecting crop growth. This question explores the advantages of using such technologies to improve decision-making, optimize inputs, detect problems early, and enhance overall farm management practices.",
  },
  {
    id: 35,
    question: "How does bad weather affect crops and what can I do about it?",
    answer:
      "Extreme weather events, such as droughts, floods, heatwaves, and storms, can have significant impacts on crop yields, soil erosion, and farm infrastructure. This question addresses the challenges posed by adverse weather conditions and explores strategies for mitigating risks, such as implementing resilient crop varieties, improving water management practices, and diversifying income sources.",
  },
  {
    id: 36,
    question: "How can I reduce water usage while maintaining crop health?",
    answer:
      "Water-saving techniques such as drip irrigation, mulching, and proper scheduling can help reduce water usage while ensuring adequate moisture for crops.",
  },
  {
    id: 37,
    question:
      "What are some ways to minimize fertilizer use while still achieving good yields?",
    answer:
      "Practices like soil testing, precision application, and incorporating organic matter can improve nutrient efficiency and reduce the need for synthetic fertilizers.",
  },
  {
    id: 38,
    question: "What can I do to minimize pesticide use on my crops?",
    answer:
      "Integrated Pest Management (IPM) techniques such as crop rotation, biological pest control, and trap cropping can help reduce reliance on chemical pesticides while effectively managing pests.",
  },
  {
    id: 39,
    question:
      "How can I optimize sunlight exposure for my plants without increasing energy costs?",
    answer:
      "Properly positioning crops and utilizing reflective materials such as white plastic mulch or row covers can help maximize sunlight absorption without the need for additional energy input.",
  },
  {
    id: 40,
    question:
      "What are some simple ways to reduce energy consumption on my farm?",
    answer:
      "Adopting energy-efficient practices such as using energy-saving equipment, optimizing machinery use, and upgrading to LED lighting can help reduce energy consumption and lower utility bills.",
  },
  {
    id: 41,
    question: "How can I tell if my crops are healthy and thriving?",
    answer:
      "Regularly inspecting your crops for signs of vibrant growth, such as lush green leaves, sturdy stems, and vigorous root systems, can indicate good health. Additionally, using tools like soil moisture meters and plant health apps can provide valuable insights into crop conditions.",
  },
  {
    id: 42,
    question: "What are some signs of pest infestation or disease in my crops?",
    answer:
      "Look out for symptoms like yellowing leaves, wilting, holes or chew marks on foliage, and abnormal growth patterns, which may indicate pest damage or disease. Implementing early detection measures such as scouting and setting up insect traps can help identify and manage pests promptly.",
  },
  {
    id: 43,
    question: "How can I monitor soil moisture levels in my fields?",
    answer:
      "Using soil moisture sensors or probes can help you track moisture levels at different depths in the soil. Additionally, observing plant wilting or performing simple soil moisture tests by hand can provide indications of soil moisture status.",
  },
  {
    id: 44,
    question:
      "What tools or technology can I use to monitor my fields more effectively?",
    answer:
      "Drones equipped with cameras, satellite imagery, and sensor-based technologies such as soil moisture probes and weather stations are valuable tools for monitoring field conditions. These tools provide real-time data on crop health, soil moisture, pest infestations, and weather patterns, enabling proactive decision-making and precision agriculture practices.",
  },
  {
    id: 45,
    question:
      "How often should I check on my fields to ensure everything is going well?",
    answer:
      "The frequency of field monitoring depends on various factors such as crop type, growth stage, weather conditions, and pest pressure. Generally, it's advisable to conduct regular field inspections at least once a week during the growing season to detect any issues early and take timely corrective actions.",
  },
  {
    id: 46,
    question: "How to manage phytophthora capsici in pumpkin?",
    answer:
      "To manage Phytophthora capsici in pumpkins, rotate crops, ensure good drainage, and consider resistant varieties. Fungicides may be applied if necessary.",
  },
  {
    id: 47,
    question: "What is the nutritiant removal for maize per ton?",
    answer:
      "On average, maize removes about 45-55 kg of nitrogen, 20-30 kg of phosphorus, and 35-45 kg of potassium per ton of grain harvested.",
  },
];
