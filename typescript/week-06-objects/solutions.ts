// === Woche 6: Objekte ===

interface Person {
  name: string;
  age: number;
}

interface Team {
  name: string;
  members: string[];
  count: number;
}

/**
 * Erstellt ein Person-Objekt mit name und age.
 */
export function createPerson(name: string, age: number): Person {
  // TODO: Gib ein Objekt { name, age } zurück
}

/**
 * Gibt "Hello, {name}!" basierend auf dem person-Objekt zurück.
 */
export function greetPerson(person: { name: string }): string {
  // TODO: Gib "Hello, " + person.name + "!" zurück
}

/**
 * Erhöht das Alter der Person um 1 und gibt ein neues Objekt zurück.
 */
export function birthday(person: { age: number }): { age: number } {
  // TODO: Gib ein neues Objekt mit age + 1 zurück
}

/**
 * Gibt true zurück, wenn die Person 65 oder älter ist.
 */
export function isSenior(person: { age: number }): boolean {
  // TODO: Gib true zurück wenn age >= 65
}

/**
 * Erstellt ein Team-Objekt mit name, members und count.
 */
export function createTeam(name: string, members: string[]): Team {
  // TODO: Gib { name, members, count: members.length } zurück
}
