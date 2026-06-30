# Woche 4: Schleifen (Loops)

## Schlüsselkonzepte

Schleifen wiederholen Code-Blöcke. In Python gibt es zwei Hauptarten: `for`-Schleifen (über eine Sammlung) und `while`-Schleifen (solange eine Bedingung gilt).

- **`for`-Schleife**: Iteriert über eine Liste oder einen Bereich (`range()`).
- **`range(start, stop, step)`**: Erzeugt Zahlen. `range(5)` → `0,1,2,3,4`. `range(1,6)` → `1,2,3,4,5`.
- **`while`-Schleife**: Läuft, solange eine Bedingung `True` ist.
- **`in`-Operator**: Prüft, ob ein Wert in einer Liste enthalten ist.

## Syntax

```python
# for-Schleife mit range
def count_to(n):
    ergebnis = []
    for i in range(1, n + 1):
        ergebnis.append(i)
    return ergebnis

# Summe berechnen
def sum_to(n):
    total = 0
    for i in range(1, n + 1):
        total += i      # Kurz für total = total + i
    return total

# Rückwärts zählen
def countdown(n):
    ergebnis = []
    for i in range(n, 0, -1):   # -1 = rückwärts
        ergebnis.append(i)
    return ergebnis

# while-Schleife
def countdown(n):
    ergebnis = []
    while n > 0:
        ergebnis.append(n)
        n -= 1          # n um 1 verringern
    return ergebnis

# Enthalten-Sein prüfen
def contains(arr, val):
    for element in arr:
        if element == val:
            return True
    return False
```

## Häufige Fehler

- **Range-Grenzen**: `range(n)` geht von `0` bis `n-1`, nicht bis `n`.
- **Unendliche Schleife**: Bei `while` nie vergessen, die Bedingungsvariable zu ändern.
- **Einrückung**: Der Körper der Schleife muss eingerückt sein.
- **`append` vergessen**: `ergebnis = ergebnis + i` funktioniert nicht – du brauchst `.append(i)`.

```python
# FALSCH – unendliche Schleife
n = 5
while n > 0:
    print(n)        # n wird nie kleiner!

# RICHTIG
while n > 0:
    print(n)
    n -= 1          # n verringern
```
