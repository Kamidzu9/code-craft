// === Woche 7: Fehlerbehandlung ===

/**
 * Gibt a / b zurück, oder "Fehler: Division durch Null" wenn b === 0.
 */
export function safeDivide(a: number, b: number): number | string {
  // TODO: Prüfe ob b === 0 ist und gib den Fehler-String zurück
}

/**
 * Wandelt einen String in eine Zahl um. Bei Fehler: "Fehler: Keine gültige Zahl".
 */
export function parseAge(input: string): number | string {
  // TODO: Verwende Number() und isNaN() für die Umwandlung
}

/**
 * Gibt das erste Zeichen zurück, oder null bei leerem String.
 */
export function getFirstChar(s: string): string | null {
  // TODO: Prüfe ob der String leer ist
}

/**
 * Gibt die Länge des Strings zurück, oder 0 bei null/undefined.
 */
export function getLengthSafe(s: string | null | undefined): number {
  // TODO: Prüfe auf null/undefined und gib die Länge oder 0 zurück
}

/**
 * Validiert eine E-Mail: muss "@" enthalten und mindestens 3 Zeichen lang sein.
 */
export function validateEmail(email: string): boolean {
  // TODO: Prüfe Länge und ob "@" enthalten ist
}
