// Dynamic Accessibility Scoring Engine

// Hard-coded 10 properties with sample data
export const properties = [
  {
    id: 1,
    name: "Property 1",
    images: ["property1-1", "property1-2", "property1-3"],
    dimensions: {
      physical: { score: 85, complaints: 2, sensorData: { rampAngle: 5.2, doorWidth: 95 } },
      digital: { score: 92, dataQuality: 0.95, lastUpdate: new Date("2025-01-15") },
      mobility: { score: 78, transitDistance: 150, frequency: 12 },
      emergency: { score: 88, drillsCompleted: 4, equipmentStatus: "operational" },
      reliability: { score: 90, liftFailures: 0, maintenanceScore: 0.92 },
      userExperience: { score: 87, avgRating: 4.3, feedbackCount: 45 }
    }
  },
  {
    id: 2,
    name: "Property 2",
    images: ["property2-1", "property2-2", "property2-3"],
    dimensions: {
      physical: { score: 75, complaints: 5, sensorData: { rampAngle: 6.8, doorWidth: 88 } },
      digital: { score: 85, dataQuality: 0.88, lastUpdate: new Date("2025-01-10") },
      mobility: { score: 82, transitDistance: 120, frequency: 15 },
      emergency: { score: 80, drillsCompleted: 3, equipmentStatus: "operational" },
      reliability: { score: 72, liftFailures: 2, maintenanceScore: 0.78 },
      userExperience: { score: 76, avgRating: 3.8, feedbackCount: 38 }
    }
  },
  {
    id: 3,
    name: "Property 3",
    images: ["property3-1", "property3-2", "property3-3"],
    dimensions: {
      physical: { score: 95, complaints: 0, sensorData: { rampAngle: 4.5, doorWidth: 100 } },
      digital: { score: 98, dataQuality: 0.98, lastUpdate: new Date("2025-01-18") },
      mobility: { score: 90, transitDistance: 80, frequency: 20 },
      emergency: { score: 95, drillsCompleted: 6, equipmentStatus: "operational" },
      reliability: { score: 96, liftFailures: 0, maintenanceScore: 0.98 },
      userExperience: { score: 94, avgRating: 4.7, feedbackCount: 67 }
    }
  },
  {
    id: 4,
    name: "Property 4",
    images: ["property4-1", "property4-2", "property4-3"],
    dimensions: {
      physical: { score: 68, complaints: 8, sensorData: { rampAngle: 7.5, doorWidth: 85 } },
      digital: { score: 70, dataQuality: 0.75, lastUpdate: new Date("2024-12-20") },
      mobility: { score: 65, transitDistance: 200, frequency: 8 },
      emergency: { score: 72, drillsCompleted: 2, equipmentStatus: "needs-repair" },
      reliability: { score: 65, liftFailures: 4, maintenanceScore: 0.68 },
      userExperience: { score: 70, avgRating: 3.5, feedbackCount: 28 }
    }
  },
  {
    id: 5,
    name: "Property 5",
    images: ["property5-1", "property5-2", "property5-3"],
    dimensions: {
      physical: { score: 88, complaints: 1, sensorData: { rampAngle: 5.0, doorWidth: 96 } },
      digital: { score: 90, dataQuality: 0.92, lastUpdate: new Date("2025-01-16") },
      mobility: { score: 85, transitDistance: 100, frequency: 18 },
      emergency: { score: 86, drillsCompleted: 5, equipmentStatus: "operational" },
      reliability: { score: 91, liftFailures: 0, maintenanceScore: 0.90 },
      userExperience: { score: 89, avgRating: 4.4, feedbackCount: 52 }
    }
  },
  {
    id: 6,
    name: "Property 6",
    images: ["property6-1", "property6-2", "property6-3"],
    dimensions: {
      physical: { score: 80, complaints: 3, sensorData: { rampAngle: 6.0, doorWidth: 92 } },
      digital: { score: 82, dataQuality: 0.85, lastUpdate: new Date("2025-01-12") },
      mobility: { score: 78, transitDistance: 140, frequency: 14 },
      emergency: { score: 83, drillsCompleted: 4, equipmentStatus: "operational" },
      reliability: { score: 84, liftFailures: 1, maintenanceScore: 0.85 },
      userExperience: { score: 81, avgRating: 4.0, feedbackCount: 41 }
    }
  },
  {
    id: 7,
    name: "Property 7",
    images: ["property7-1", "property7-2", "property7-3"],
    dimensions: {
      physical: { score: 72, complaints: 6, sensorData: { rampAngle: 7.0, doorWidth: 87 } },
      digital: { score: 75, dataQuality: 0.80, lastUpdate: new Date("2025-01-05") },
      mobility: { score: 70, transitDistance: 180, frequency: 10 },
      emergency: { score: 74, drillsCompleted: 3, equipmentStatus: "operational" },
      reliability: { score: 70, liftFailures: 3, maintenanceScore: 0.72 },
      userExperience: { score: 73, avgRating: 3.6, feedbackCount: 32 }
    }
  },
  {
    id: 8,
    name: "Property 8",
    images: ["property8-1", "property8-2", "property8-3"],
    dimensions: {
      physical: { score: 92, complaints: 1, sensorData: { rampAngle: 4.8, doorWidth: 98 } },
      digital: { score: 94, dataQuality: 0.96, lastUpdate: new Date("2025-01-17") },
      mobility: { score: 88, transitDistance: 90, frequency: 19 },
      emergency: { score: 90, drillsCompleted: 5, equipmentStatus: "operational" },
      reliability: { score: 93, liftFailures: 0, maintenanceScore: 0.94 },
      userExperience: { score: 91, avgRating: 4.5, feedbackCount: 58 }
    }
  },
  {
    id: 9,
    name: "Property 9",
    images: ["property9-1", "property9-2", "property9-3"],
    dimensions: {
      physical: { score: 65, complaints: 10, sensorData: { rampAngle: 8.0, doorWidth: 82 } },
      digital: { score: 68, dataQuality: 0.72, lastUpdate: new Date("2024-12-15") },
      mobility: { score: 62, transitDistance: 220, frequency: 7 },
      emergency: { score: 70, drillsCompleted: 2, equipmentStatus: "needs-repair" },
      reliability: { score: 60, liftFailures: 5, maintenanceScore: 0.65 },
      userExperience: { score: 67, avgRating: 3.3, feedbackCount: 25 }
    }
  },
  {
    id: 10,
    name: "Property 10",
    images: ["property10-1", "property10-2", "property10-3"],
    dimensions: {
      physical: { score: 83, complaints: 2, sensorData: { rampAngle: 5.5, doorWidth: 94 } },
      digital: { score: 86, dataQuality: 0.89, lastUpdate: new Date("2025-01-14") },
      mobility: { score: 80, transitDistance: 130, frequency: 16 },
      emergency: { score: 85, drillsCompleted: 4, equipmentStatus: "operational" },
      reliability: { score: 87, liftFailures: 1, maintenanceScore: 0.88 },
      userExperience: { score: 84, avgRating: 4.2, feedbackCount: 48 }
    }
  }
];

// Base weights for the 6 dimensions
const baseWeights = {
  physical: 0.20,
  digital: 0.15,
  mobility: 0.15,
  emergency: 0.20,
  reliability: 0.20,
  userExperience: 0.10
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
  
  // Calculate adjusted dimension scores
  const adjustedScores = {
    physical: calculateDimensionScore("physical", dimensions.physical),
    digital: calculateDimensionScore("digital", dimensions.digital),
    mobility: calculateDimensionScore("mobility", dimensions.mobility),
    emergency: calculateDimensionScore("emergency", dimensions.emergency),
    reliability: calculateDimensionScore("reliability", dimensions.reliability),
    userExperience: calculateDimensionScore("userExperience", dimensions.userExperience)
  };
  
  // Apply adaptive weights (boost reliability if lift failures)
  let weights = { ...baseWeights };
  if (dimensions.reliability.liftFailures > 2) {
    weights.reliability = 0.30;
    weights.physical = 0.15;
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
