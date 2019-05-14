const alternativeModes = [{
  alternatives: [{
    name: "Plane",
    co2e: 0.1597,
    mindistance: 200,
    maxdistance: 999999
  },
  {
    name: "Ferry",
    co2e: 0.129529,
    mindistance: 0,
    maxdistance: 999999
  },
  {
    name: "Train",
    co2e: 0.04424,
    mindistance: 0,
    maxdistance: 999999
  },
  {
    name: "Tram",
    co2e: 0.03967,
    mindistance: 0,
    maxdistance: 100
  },
  {
    name: "Bus",
    co2e: 0.10097,
    mindistance: 0,
    maxdistance: 999999
  },
  {
    name: "Car (average)",
    co2e: 0.17753,
    mindistance: 0,
    maxdistance: 1000
  },
  {
    name: "Motorbike (average)",
    co2e: 0.11529,
    mindistance: 0,
    maxdistance: 1000
  },
  {
    name: "Electric Car",
    co2e: 0,
    mindistance: 0,
    maxdistance: 600
  },
  {
    name: "Cycle",
    co2e: 0,
    mindistance: 0,
    maxdistance: 100
  },
  {
    name: "Walk",
    co2e: 0,
    mindistance: 0,
    maxdistance: 50
  }]
}];

module.exports = alternativeModes;
