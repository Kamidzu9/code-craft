export function describeTemperature(temp: number): string {
  // TODO: Gib "hot", "warm" oder "cold" zurück
  if ( temp > 30 )
  {
    return "hot";
  }
  else if ( temp > 15 )
  {
    return "warm";
  }
  else
  {
    return "cold"
  }
}
