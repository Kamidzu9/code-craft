# Woche 3: Bedingungen (if/elif/else)

## Schlüsselkonzepte

Bedingungen lassen dein Programm Entscheidungen treffen. Mit `if`, `elif` und `else` kannst du verschiedene Code-Pfade steuern.

- **`if`** prüft eine Bedingung. Ist sie `True`, wird der eingerückte Block ausgeführt.
- **`elif`** (else if) prüft eine weitere Bedingung, wenn die vorherige `False` war.
- **`else`** wird ausgeführt, wenn keine der vorherigen Bedingungen zutrifft.
- **Vergleichsoperatoren**: `==` (gleich), `!=` (ungleich), `<`, `>`, `<=`, `>=`
- **Logische Operatoren**: `and` (und), `or` (oder), `not` (nicht)

## Syntax

```python
# Einfaches if
def can_vote(age):
    if age >= 18:
        return True
    else:
        return False

# Mehrere Bedingungen mit elif
def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Zwei Bedingungen mit and
def login(username, password):
    if username == "admin" and password == "secret":
        return True
    else:
        return False

# Absolute Zahl ohne abs()
def absolute(n):
    if n < 0:
        return -n
    else:
        return n
```

## Häufige Fehler

- **`=` statt `==`**: `=` ist Zuweisung, `==` ist Vergleich. `if name = "admin"` ist falsch!
- **Doppelpunkt vergessen**: Nach `if`, `elif`, `else` muss ein `:` kommen.
- **Einrückung**: Der Code unter `if` muss eingerückt sein.
- **Groß-/Kleinschreibung bei Strings**: `"Admin" != "admin"`.
- **Reihenfolge bei elif**: Die Bedingungen werden von oben nach unten geprüft. Die erste zutreffende gewinnt.

```python
# FALSCH – Reihenfolge! Topf wird nie erreicht
def grade(score):
    if score >= 60:
        return "D"     # Trifft schon bei 95 zu!
    elif score >= 90:
        return "A"     # Wird nie ausgeführt

# RICHTIG – strengste Bedingung zuerst
def grade(score):
    if score >= 90:
        return "A"
    elif score >= 60:
        return "D"
```
