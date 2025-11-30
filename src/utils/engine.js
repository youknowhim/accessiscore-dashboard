// Dynamic Accessibility Scoring Engine

// Hard-coded 10 diverse properties (parks, hospitals, metro stations, buildings)
export const properties = [
  {
    id: 1,
    name: "Central Park",
    type: "park",
    images: ["property1-1", "property1-2", "property1-3"],
    dimensions: {
      physical: { score: 90, complaints: 1, sensorData: { rampAngle: 4.5, doorWidth: 120 } },
      digital: { score: 75, dataQuality: 0.82, lastUpdate: new Date("2025-01-15") },
      mobility: { score: 88, transitDistance: 100, frequency: 18 },
      emergency: { score: 82, drillsCompleted: 3, equipmentStatus: "operational" },
      reliability: { score: 85, liftFailures: 0, maintenanceScore: 0.88 },
      userExperience: { score: 92, avgRating: 4.6, feedbackCount: 78 }
    }
  },
  {
    id: 2,
    name: "City General Hospital",
    type: "hospital",
    images: ["property2-1", "property2-2", "property2-3"],
    dimensions: {
      physical: { score: 95, complaints: 0, sensorData: { rampAngle: 4.2, doorWidth: 110 } },
      digital: { score: 96, dataQuality: 0.98, lastUpdate: new Date("2025-01-18") },
      mobility: { score: 90, transitDistance: 80, frequency: 20 },
      emergency: { score: 98, drillsCompleted: 8, equipmentStatus: "operational" },
      reliability: { score: 97, liftFailures: 0, maintenanceScore: 0.98 },
      userExperience: { score: 94, avgRating: 4.7, feedbackCount: 156 }
    }
  },
  {
    id: 3,
    name: "Metro Station Alpha",
    type: "metro",
    images: ["property3-1", "property3-2", "property3-3"],
    dimensions: {
      physical: { score: 88, complaints: 2, sensorData: { rampAngle: 5.0, doorWidth: 105 } },
      digital: { score: 92, dataQuality: 0.94, lastUpdate: new Date("2025-01-17") },
      mobility: { score: 98, transitDistance: 0, frequency: 45 },
      emergency: { score: 90, drillsCompleted: 6, equipmentStatus: "operational" },
      reliability: { score: 92, liftFailures: 0, maintenanceScore: 0.93 },
      userExperience: { score: 89, avgRating: 4.4, feedbackCount: 234 }
    }
  },
  {
    id: 4,
    name: "Tech Tower Office Building",
    type: "building",
    images: ["property4-1", "property4-2", "property4-3"],
    dimensions: {
      physical: { score: 85, complaints: 2, sensorData: { rampAngle: 5.2, doorWidth: 95 } },
      digital: { score: 94, dataQuality: 0.96, lastUpdate: new Date("2025-01-16") },
      mobility: { score: 80, transitDistance: 150, frequency: 14 },
      emergency: { score: 88, drillsCompleted: 5, equipmentStatus: "operational" },
      reliability: { score: 90, liftFailures: 0, maintenanceScore: 0.92 },
      userExperience: { score: 87, avgRating: 4.3, feedbackCount: 92 }
    }
  },
  {
    id: 5,
    name: "Riverside Park",
    type: "park",
    images: ["property5-1", "property5-2", "property5-3"],
    dimensions: {
      physical: { score: 78, complaints: 4, sensorData: { rampAngle: 6.5, doorWidth: 115 } },
      digital: { score: 68, dataQuality: 0.75, lastUpdate: new Date("2025-01-08") },
      mobility: { score: 75, transitDistance: 180, frequency: 12 },
      emergency: { score: 70, drillsCompleted: 2, equipmentStatus: "operational" },
      reliability: { score: 72, liftFailures: 0, maintenanceScore: 0.78 },
      userExperience: { score: 82, avgRating: 4.1, feedbackCount: 54 }
    }
  },
  {
    id: 6,
    name: "Memorial Medical Center",
    type: "hospital",
    images: ["property6-1", "property6-2", "property6-3"],
    dimensions: {
      physical: { score: 92, complaints: 1, sensorData: { rampAngle: 4.5, doorWidth: 108 } },
      digital: { score: 93, dataQuality: 0.95, lastUpdate: new Date("2025-01-16") },
      mobility: { score: 85, transitDistance: 120, frequency: 16 },
      emergency: { score: 96, drillsCompleted: 7, equipmentStatus: "operational" },
      reliability: { score: 94, liftFailures: 0, maintenanceScore: 0.95 },
      userExperience: { score: 91, avgRating: 4.5, feedbackCount: 128 }
    }
  },
  {
    id: 7,
    name: "Metro Station Beta",
    type: "metro",
    images: ["property7-1", "property7-2", "property7-3"],
    dimensions: {
      physical: { score: 72, complaints: 6, sensorData: { rampAngle: 7.0, doorWidth: 92 } },
      digital: { score: 78, dataQuality: 0.82, lastUpdate: new Date("2025-01-10") },
      mobility: { score: 95, transitDistance: 0, frequency: 40 },
      emergency: { score: 75, drillsCompleted: 3, equipmentStatus: "needs-repair" },
      reliability: { score: 68, liftFailures: 3, maintenanceScore: 0.72 },
      userExperience: { score: 74, avgRating: 3.7, feedbackCount: 187 }
    }
  },
  {
    id: 8,
    name: "Grand Plaza Mall",
    type: "building",
    images: ["property8-1", "property8-2", "property8-3"],
    dimensions: {
      physical: { score: 88, complaints: 2, sensorData: { rampAngle: 5.0, doorWidth: 100 } },
      digital: { score: 90, dataQuality: 0.92, lastUpdate: new Date("2025-01-15") },
      mobility: { score: 82, transitDistance: 140, frequency: 15 },
      emergency: { score: 86, drillsCompleted: 4, equipmentStatus: "operational" },
      reliability: { score: 89, liftFailures: 1, maintenanceScore: 0.90 },
      userExperience: { score: 90, avgRating: 4.5, feedbackCount: 215 }
    }
  },
  {
    id: 9,
    name: "Old Town Square",
    type: "park",
    images: ["property9-1", "property9-2", "property9-3"],
    dimensions: {
      physical: { score: 65, complaints: 8, sensorData: { rampAngle: 7.8, doorWidth: 95 } },
      digital: { score: 62, dataQuality: 0.68, lastUpdate: new Date("2024-12-20") },
      mobility: { score: 70, transitDistance: 200, frequency: 10 },
      emergency: { score: 68, drillsCompleted: 2, equipmentStatus: "needs-repair" },
      reliability: { score: 64, liftFailures: 0, maintenanceScore: 0.70 },
      userExperience: { score: 72, avgRating: 3.6, feedbackCount: 43 }
    }
  },
  {
    id: 10,
    name: "Business Hub Tower",
    type: "building",
    images: ["property10-1", "property10-2", "property10-3"],
    dimensions: {
      physical: { score: 90, complaints: 1, sensorData: { rampAngle: 4.8, doorWidth: 98 } },
      digital: { score: 95, dataQuality: 0.97, lastUpdate: new Date("2025-01-17") },
      mobility: { score: 85, transitDistance: 110, frequency: 17 },
      emergency: { score: 92, drillsCompleted: 6, equipmentStatus: "operational" },
      reliability: { score: 93, liftFailures: 0, maintenanceScore: 0.94 },
      userExperience: { score: 88, avgRating: 4.4, feedbackCount: 104 }
    }
  }
];

// Base weights for the 6 dimensions (adjusted by property type)
const getBaseWeights = (propertyType) => {
  switch (propertyType) {
    case "hospital":
      // Hospitals prioritize emergency preparedness and reliability
      return {
        physical: 0.20,
        digital: 0.12,
        mobility: 0.10,
        emergency: 0.28,
        reliability: 0.22,
        userExperience: 0.08
      };
    case "metro":
      // Metro stations prioritize mobility and reliability
      return {
        physical: 0.18,
        digital: 0.15,
        mobility: 0.30,
        emergency: 0.18,
        reliability: 0.12,
        userExperience: 0.07
      };
    case "park":
      // Parks prioritize physical accessibility and user experience
      return {
        physical: 0.28,
        digital: 0.08,
        mobility: 0.18,
        emergency: 0.15,
        reliability: 0.15,
        userExperience: 0.16
      };
    case "building":
    default:
      // Buildings have balanced weights
      return {
        physical: 0.20,
        digital: 0.15,
        mobility: 0.15,
        emergency: 0.20,
        reliability: 0.20,
        userExperience: 0.10
      };
  }
};

// Calculate time decay for complaints
const getTimeDecayFactor = (lastUpdate) => {
  const daysSinceUpdate = (new Date() - lastUpdate) / (1000 * 60 * 60 * 24);
  if (daysSinceUpdate > 30) return 0.8; // Old data penalty
  if (daysSinceUpdate > 14) return 0.9;
  return 1.0;
};

// Calculate dimension score with adjustments
const calculateDimensionScore = (dimension, dimensionData) => {
  let score = dimensionData.score;
  
  // Apply complaint penalty
  if (dimensionData.complaints) {
    const complaintPenalty = Math.min(dimensionData.complaints * 2, 15);
    score -= complaintPenalty;
  }
  
  // Apply reliability penalty for lift failures
  if (dimension === "reliability" && dimensionData.liftFailures > 0) {
    score -= dimensionData.liftFailures * 5;
  }
  
  // Apply time decay for digital dimension
  if (dimension === "digital" && dimensionData.lastUpdate) {
    const decayFactor = getTimeDecayFactor(dimensionData.lastUpdate);
    score *= decayFactor;
  }
  
  // Apply equipment status penalty for emergency
  if (dimension === "emergency" && dimensionData.equipmentStatus === "needs-repair") {
    score -= 10;
  }
  
  return Math.max(0, Math.min(100, score));
};

// Calculate overall score and badge
export const calculateScore = (property) => {
  const dimensions = property.dimensions;
  const propertyType = property.type || "building";
  
  // Calculate adjusted dimension scores
  const adjustedScores = {
    physical: calculateDimensionScore("physical", dimensions.physical),
    digital: calculateDimensionScore("digital", dimensions.digital),
    mobility: calculateDimensionScore("mobility", dimensions.mobility),
    emergency: calculateDimensionScore("emergency", dimensions.emergency),
    reliability: calculateDimensionScore("reliability", dimensions.reliability),
    userExperience: calculateDimensionScore("userExperience", dimensions.userExperience)
  };
  
  // Get base weights according to property type
  let weights = getBaseWeights(propertyType);
  
  // Apply adaptive weights (boost reliability if lift failures)
  if (dimensions.reliability.liftFailures > 2) {
    const reliabilityBoost = 0.10;
    weights.reliability = Math.min(weights.reliability + reliabilityBoost, 0.35);
    // Reduce other weights proportionally
    const reductionFactor = (1 - weights.reliability) / (1 - weights.reliability + reliabilityBoost);
    Object.keys(weights).forEach(key => {
      if (key !== "reliability") {
        weights[key] *= reductionFactor;
      }
    });
  }
  
  // Type-specific adjustments
  if (propertyType === "hospital" && dimensions.emergency.equipmentStatus === "needs-repair") {
    // Extra penalty for hospitals with faulty emergency equipment
    adjustedScores.emergency -= 5;
  }
  
  if (propertyType === "metro" && dimensions.reliability.liftFailures > 1) {
    // Metro stations heavily penalized for lift failures (accessibility critical)
    adjustedScores.reliability -= 10;
  }
  
  // Calculate weighted overall score
  const overallScore = Math.round(
    adjustedScores.physical * weights.physical +
    adjustedScores.digital * weights.digital +
    adjustedScores.mobility * weights.mobility +
    adjustedScores.emergency * weights.emergency +
    adjustedScores.reliability * weights.reliability +
    adjustedScores.userExperience * weights.userExperience
  );
  
  // Determine badge
  let badge = "🟫 Bronze";
  if (overallScore >= 90) badge = "💎 Diamond";
  else if (overallScore >= 80) badge = "🥇 Gold";
  else if (overallScore >= 70) badge = "🥈 Silver";
  
  // Return details for modal
  const details = {
    dimensions: [
      {
        name: "Physical Accessibility",
        score: adjustedScores.physical,
        weight: weights.physical,
        dataFrom: "IoT sensors (ramp angle, door width), complaint system",
        calculation: `Base score ${dimensions.physical.score} - (${dimensions.physical.complaints} complaints × 2) = ${adjustedScores.physical}`,
        rawData: dimensions.physical
      },
      {
        name: "Digital & Informational Accessibility",
        score: adjustedScores.digital,
        weight: weights.digital,
        dataFrom: "Website analytics, mobile app usage, data quality metrics",
        calculation: `Base score ${dimensions.digital.score} × time-decay factor (${getTimeDecayFactor(dimensions.digital.lastUpdate).toFixed(2)}) = ${adjustedScores.digital.toFixed(1)}`,
        rawData: dimensions.digital
      },
      {
        name: "Mobility & Public Transport Access",
        score: adjustedScores.mobility,
        weight: weights.mobility,
        dataFrom: "Transit API, distance measurements, frequency data",
        calculation: `Score based on ${dimensions.mobility.transitDistance}m distance and ${dimensions.mobility.frequency} services/hour`,
        rawData: dimensions.mobility
      },
      {
        name: "Emergency Preparedness",
        score: adjustedScores.emergency,
        weight: weights.emergency,
        dataFrom: "Drill records, equipment inspection logs",
        calculation: `Base score ${dimensions.emergency.score}${dimensions.emergency.equipmentStatus === "needs-repair" ? " - 10 (equipment needs repair)" : ""} = ${adjustedScores.emergency}`,
        rawData: dimensions.emergency
      },
      {
        name: "Operational Reliability (Real-Time)",
        score: adjustedScores.reliability,
        weight: weights.reliability,
        dataFrom: "IoT sensors, maintenance logs, real-time monitoring",
        calculation: `Base score ${dimensions.reliability.score} - (${dimensions.reliability.liftFailures} lift failures × 5) = ${adjustedScores.reliability}`,
        rawData: dimensions.reliability
      },
      {
        name: "User Experience & Feedback",
        score: adjustedScores.userExperience,
        weight: weights.userExperience,
        dataFrom: "User surveys, ratings, feedback forms (${dimensions.userExperience.feedbackCount} responses)",
        calculation: `Average rating ${dimensions.userExperience.avgRating}/5 → normalized score = ${adjustedScores.userExperience}`,
        rawData: dimensions.userExperience
      }
    ],
    overallScore,
    badge,
    weights
  };
  
  return { overall: overallScore, badge, details };
};

// Get all properties with scores
export const getAllProperties = () => {
  return properties.map(property => ({
    ...property,
    ...calculateScore(property)
  }));
};
