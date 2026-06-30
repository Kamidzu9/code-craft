# Woche 5: Sammlungen (Listen)

## Schlüsselkonzepte

Listen sind geordnete Sammlungen von Werten. Du kannst sie verändern, durchsuchen und neue Listen daraus erstellen.

- **Listen-Index**: Das erste Element hat Index `0`, das zweite Index `1`, usw.
- **`.append()`**: Fügt ein Element am Ende hinzu.
- **`len()`**: Gibt die Länge einer Liste zurück.
- **Listen-Slicing**: `arr[start:stop]` gibt einen Ausschnitt zurück.
- **`%` (Modulo)**: `zahl % 2 == 0` bedeutet "die Zahl ist gerade".

## Syntax

```python
# Erstes Element (oder None)
def first_element(arr):
    if len(arr) == 0:
        return None
    return arr[0]

# Neue Liste mit angehängtem Wert
def add_element(arr, val):
    neue_liste = arr[:]        # Kopie der Liste
    neue_liste.append(val)
    return neue_liste

# Jedes Element verdoppeln
def double(arr):
    ergebnis = []
    for zahl in arr:
        ergebnis.append(zahl * 2)
    return ergebnis

# Größtes Element finden (ohne max())
def find_max(arr):
    if len(arr) == 0:
        return None
    max_wert = arr[0]
    for zahl in arr:
        if zahl > max_wert:
            max_wert = zahl
    return max_wert

# Nur gerade Zahlen
def even_numbers(arr):
    ergebnis = []
    for zahl in arr:
        if zahl % 2 == 0:
            ergebnis.append(zahl)
    return ergebnis
```

## Häufige Fehler

- **IndexError**: `arr[len(arr)]` gibt es nicht! Der letzte Index ist `len(arr) - 1`.
- **Original-Liste verändern**: Wenn du die Original-Liste behalten willst, erstelle eine Kopie mit `arr[:]`.
- **`return` in der Schleife**: `return` beendet sofort die ganze Funktion.
- **Modulo (`%`) verwechseln**: `zahl % 2 == 0` ist gerade, `zahl % 2 == 1` ist ungerade.

```python
# FALSCH – überschreibt die Original-Liste
def double(arr):
    for i in range(len(arr)):
        arr[i] = arr[i] * 2
    return arr   # Die übergebene Liste wurde verändert!

# RICHTIG – erzeugt neue Liste
def double(arr):
    ergebnis = []
    for zahl in arr:
        ergebnis.append(zahl * 2)
    return ergebnis
```
