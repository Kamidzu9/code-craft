# Woche 5: Arrays & Collections

## Schlüsselkonzepte

Diese Woche lernst du Arrays und ihre Methoden genauer kennen.

### 1. Auf Array-Elemente zugreifen

Der erste Index ist 0, der zweite ist 1, usw.:

```typescript
let arr: number[] = [10, 20, 30];
arr[0]; // 10  (erstes Element)
arr[1]; // 20  (zweites Element)
arr[2]; // 30  (drittes Element)
```

Prüfe immer, ob das Array leer ist:

```typescript
function firstElement(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  }
  return arr[0];
}
```

### 2. Arrays kombinieren (Spread Operator `...`)

Der Spread-Operator `...` erstellt eine Kopie eines Arrays oder fügt Elemente hinzu:

```typescript
function addElement(arr: number[], val: number): number[] {
  return [...arr, val]; // Neues Array mit val am Ende
}
// addElement([1, 2], 3) → [1, 2, 3]
```

### 3. Neues Array mit `push()` in einer Schleife

Wenn du jedes Element verändern willst, erstelle ein neues Array:

```typescript
function double(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
// double([1, 2, 3]) → [2, 4, 6]
```

### 4. Das größte Element finden

Starte mit dem ersten Element und vergleiche:

```typescript
function findMax(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  }
  let max: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

### 5. Gerade Zahlen filtern

Mit dem Modulo-Operator `%` prüfst du, ob eine Zahl gerade ist:

```typescript
function evenNumbers(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]); // Nur gerade Zahlen behalten
    }
  }
  return result;
}
// evenNumbers([1, 2, 3, 4]) → [2, 4]
```

`x % 2 === 0` bedeutet "x ist durch 2 teilbar" (gerade).

## Häufige Fehler (Pitfalls)

- **Index außerhalb des Bereichs**: `arr[arr.length]` ist `undefined`. Der letzte Index ist `arr.length - 1`.
- **Null nicht beachten**: Wenn ein Array leer sein kann, musst du `null` zurückgeben.
- **Original verändern**: Erstelle ein neues Array statt das Original zu ändern.
- **`null` vs `undefined`**: Die Aufgaben sagen `null` – verwende `null`.

## Zusammenfassung

- `arr[0]` für das erste Element, `arr[arr.length - 1]` für das letzte
- Spread `[...arr, wert]` erstellt ein neues Array mit zusätzlichem Element
- `% 2 === 0` prüft auf gerade Zahl
- Prüfe `arr.length === 0` bevor du auf Elemente zugreifst
- Verwende `for`-Schleifen, um Arrays zu durchlaufen und zu verarbeiten
