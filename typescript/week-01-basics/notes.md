# Woche 1: Hello World & Variablen

## Schlüsselkonzepte

In dieser Woche lernst du die absoluten Grundlagen von TypeScript: Variablen, Datentypen und Funktionen.

### 1. Variablen mit `let` und `const`

In TypeScript kannst du Werte in Variablen speichern. Mit `let` erstellst du eine veränderbare Variable, mit `const` eine unveränderbare (Konstante).

```typescript
let name: string = "TypeScript";
const geburtsjahr: number = 2012;

name = "JavaScript"; // ✅ erlaubt mit let
// geburtsjahr = 2020; // ❌ Fehler! const kann nicht neu zugewiesen werden
```

### 2. Datentypen

TypeScript kennt verschiedene Grundtypen:

| Typ      | Beispiel                  | Beschreibung            |
| -------- | ------------------------- | ----------------------- |
| `string` | `"Hallo"`, `'Welt'`      | Text                    |
| `number` | `42`, `3.14`, `-5`       | Zahlen (ganz & Komma)   |
| `boolean` | `true`, `false`          | Wahrheitswerte          |

```typescript
let text: string = "Das ist ein Text";
let zahl: number = 42;
let istWahr: boolean = true;
```

### 3. Funktionen mit Rückgabetyp

Eine Funktion kann einen Wert zurückgeben. Der Rückgabetyp steht nach dem Doppelpunkt.

```typescript
function add(a: number, b: number): number {
  return a + b; // Gibt das Ergebnis zurück
}
```

Jeder Parameter und der Rückgabewert bekommen einen Typ. Das hilft, Fehler zu vermeiden!

### 4. String-Verkettung und Template Literals

Du kannst Strings mit `+` verbinden (Verkettung) oder moderner mit Template Literals (Backticks und `${}`):

```typescript
// Verkettung mit +
let begruessung: string = "Hallo, " + "Welt!";

// Template Literals (empfohlen)
let name: string = "Anna";
let alter: number = 25;
let satz: string = `Ich heiße ${name} und bin ${alter} Jahre alt.`;
```

Template Literals sind lesbarer und praktischer – du wirst sie lieben!

## Häufige Fehler (Pitfalls)

- **Vergessenes `return`**: Wenn eine Funktion einen Wert zurückgeben soll, musst du `return` schreiben.
- **Falscher Typ**: `let x: number = "Text";` gibt einen TypeScript-Fehler.
- **Semikolon**: Semikolons sind optional, aber sei konsistent.
- **Variable nicht definiert**: Verwende `let` oder `const`, sonst gibt es einen Fehler.

## Zusammenfassung

- `let` für veränderbare, `const` für unveränderbare Variablen
- Typen: `string`, `number`, `boolean`
- Funktionen: `function name(param: Typ): Rückgabetyp { return wert; }`
- Template Literals: `` `Text ${ausdruck}` ``
