# Woche 2: Funktionen

## Schlüsselkonzepte

Funktionen sind die Bausteine jedes Python-Programms. Sie nehmen Eingaben entgegen (Parameter), verarbeiten sie und geben ein Ergebnis zurück.

- **Parameter** sind die Eingabewerte einer Funktion, die in den runden Klammern stehen.
- **Rückgabewert** ist das Ergebnis, das die Funktion mit `return` an den Aufrufer zurückgibt.
- **Bedingungen** (`if`/`elif`/`else`) erlauben es, verschiedene Code-Zweige auszuführen.

## Syntax

```python
# Funktion mit einem Parameter
def say_hello(name):
    return f"Hallo, {name}!"

# Funktion mit mehreren Parametern
def rectangle_area(width, height):
    return width * height

# Funktion mit Bedingung
def is_positive(num):
    if num > 0:
        return True
    else:
        return False

# Mehrere Bedingungen (if / elif / else)
def describe_temperature(temp):
    if temp > 30:
        return "hot"
    elif temp > 15:
        return "warm"
    else:
        return "cold"
```

## Häufige Fehler

- **`if`-Bedingung ohne Doppelpunkt**: Nach `if` muss ein `:` kommen.
- **`elif` falsch geschrieben**: Es heißt `elif`, nicht `elseif` oder `elsif`.
- **Falsche Parameter-Reihenfolge**: `rectangle_area(height, width)` liefert das gleiche Ergebnis, aber die Reihenfolge ist Teil der Funktionsdefinition.
- **Rückgabe vergessen bei if/else**: Jeder Zweig sollte ein `return` haben, sonst gibt es `None` zurück.

```python
# FALSCH – kein return im else-Zweig
def is_positive(num):
    if num > 0:
        return True
    # Fehlt: else: return False

# RICHTIG
def is_positive(num):
    return num > 0   # Kurzform!
```
