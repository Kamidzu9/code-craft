# Woche 6: Objekte

## Schlüsselkonzepte

Objekte gruppieren zusammengehörige Daten in einer Struktur.

### 1. Objekte erstellen

Ein Objekt besteht aus Schlüssel-Wert-Paaren (Properties):

```typescript
let person: { name: string; age: number } = {
  name: "Anna",
  age: 25,
};
```

Du kannst die Properties mit `punkt` abrufen:

```typescript
person.name; // "Anna"
person.age;  // 25
```

### 2. TypeScript Interface für Objekte

Für wiederkehrende Objektstrukturen definierst du ein Interface:

```typescript
interface Person {
  name: string;
  age: number;
}

function createPerson(name: string, age: number): Person {
  return { name, age }; // Kurzschreibweise für { name: name, age: age }
}
```

Die Kurzschreibweise `{ name, age }` ist identisch zu `{ name: name, age: age }`.

### 3. Property-Shorthand

Wenn der Variablenname gleich dem Property-Namen ist, kannst du kürzer schreiben:

```typescript
let name = "Anna";
let age = 25;
let person = { name, age }; // Statt { name: name, age: age }
```

### 4. Objekte als Parameter

Eine Funktion kann ein Objekt als Parameter erwarten:

```typescript
function greetPerson(person: { name: string }): string {
  return `Hello, ${person.name}!`;
}
```

Du kannst auch den Typ direkt inline angeben, ohne Interface.

### 5. Neue Objekte aus bestehenden erstellen

Erstelle ein neues Objekt mit veränderten Werten – verändere nicht das Original:

```typescript
function birthday(person: { age: number }): { age: number } {
  return { age: person.age + 1 };
}
```

Für mehrere Properties nutze den Spread-Operator `...`:

```typescript
function birthday(person: Person): Person {
  return { ...person, age: person.age + 1 };
}
```

### 6. Berechnete Properties

Du kannst auch Werte berechnen und als Property speichern:

```typescript
function createTeam(name: string, members: string[]): object {
  return {
    name: name,
    members: members,
    count: members.length, // Anzahl der Mitglieder
  };
}
```

## Häufige Fehler (Pitfalls)

- **Objekt verändern statt neu erstellen**: Ändere nie direkt das Original, sondern erstelle ein neues Objekt.
- **Property-Namen vertippen**: `person.nme` ist `undefined` (aber TypeScript warnt dich).
- **Komma vergessen**: Properties werden mit Komma getrennt, nicht mit Semikolon.
- **Interface vergessen**: TypeScript kann den Typ oft selbst ableiten, aber Interfaces helfen bei der Klarheit.

## Zusammenfassung

- Objekte gruppieren Daten: `{ key: value, key2: value2 }`
- Zugriff mit Punkt: `objekt.property`
- Property-Shorthand: `{ name, age }` statt `{ name: name, age: age }`
- Spread-Operator `...` kopiert Properties in ein neues Objekt
- Interfaces definieren wiederkehrende Objektstrukturen
