# Woche 7: Fehlerbehandlung (try/except)

## Schlüsselkonzepte

Fehler passieren – besonders bei Benutzereingaben. Mit `try`/`except` kannst du Fehler abfangen und dein Programm trotzdem weiterlaufen lassen.

- **`try`**: Hier steht der Code, der fehlschlagen könnte.
- **`except`**: Hier steht, was passieren soll, wenn ein Fehler auftritt.
- **Exception-Typen**: `ZeroDivisionError` (Division durch 0), `ValueError` (falscher Wert), `TypeError` (falscher Typ).
- **`if`-Prüfung**: Manchmal ist es besser, vorher zu prüfen, statt `try` zu verwenden.

## Syntax

```python
# try/except für Division durch Null
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Fehler: Division durch Null"

# try/except für Zahl-Umwandlung
def parse_age(input_str):
    try:
        return int(input_str)
    except ValueError:
        return "Fehler: Keine gültige Zahl"

# if-Prüfung statt try
def get_first_char(s):
    if len(s) == 0:
        return None
    return s[0]

# None-Prüfung
def get_length_safe(s):
    if s is None:
        return 0
    return len(s)

# Mehrere Bedingungen prüfen
def validate_email(email):
    if len(email) < 3:
        return False
    if "@" not in email:
        return False
    return True
```

## Häufige Fehler

- **Zu allgemeiner except**: `except:` ohne Typ fängt *alle* Fehler, auch Tippfehler. Besser: `except ValueError:`.
- **try zu groß**: Packe nur den fehleranfälligen Code in `try`, nicht die ganze Funktion.
- **Fehler ignorieren**: `except: pass` ist gefährlich – du merkst nicht, wenn etwas schiefgeht.
- **`is None` vs `== None`: Verwende `is None` (oder `is not None`) für den Vergleich mit `None`.

```python
# FALSCH – zu allgemein
def parse_age(input_str):
    try:
        return int(input_str)
    except:          # Fängt auch Tippfehler!
        return "Fehler"

# RICHTIG – nur ValueError abfangen
def parse_age(input_str):
    try:
        return int(input_str)
    except ValueError:
        return "Fehler: Keine gültige Zahl"
```
