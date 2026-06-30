# Woche 1: Hallo Welt & Variablen

## Schlüsselkonzepte

In dieser Woche lernst du die absoluten Grundlagen von Python: Wie man Text ausgibt, wie man Werte in Variablen speichert und wie man einfache Funktionen schreibt.

- **Funktionen** sind wiederverwendbare Code-Blöcke. Du definierst sie mit `def` gefolgt vom Namen und runden Klammern `()`.
- **Variablen** sind Namen, die auf Werte zeigen. Du kannst dir eine Variable wie eine beschriftete Schachtel vorstellen.
- **Rückgabewerte** werden mit `return` aus einer Funktion zurückgegeben.

## Syntax

```python
# Eine Funktion definieren
def greet():
    return "Hallo!"

# Eine Variable erstellen
mein_name = "Anna"

# Zwei Zahlen addieren
ergebnis = 3 + 5          # 8

# Text und Variablen kombinieren (f-String)
alter = 25
text = f"Ich bin {alter} Jahre alt."

# Vergleiche: >= prüft "größer oder gleich"
erwachsen = 18 >= 18      # True
```

## Häufige Fehler

- **Tippfehler bei Funktionsnamen**: Python unterscheidet Groß-/Kleinschreibung. `greet()` ist nicht `Greet()`.
- **Einrückung vergessen**: Nach `def` muss der Code eingerückt sein (4 Leerzeichen).
- **`return` vergessen**: Ohne `return` gibt die Funktion `None` zurück.
- **Falsche Anführungszeichen**: Strings brauchen `"..."` oder `'...'`.
- **Komma im f-String vergessen**: `f"Alter: {alter}"` – die geschweiften Klammern sind wichtig.

```python
# FALSCH (kein return)
def greet():
    "Hello"     # Das bewirkt nichts!

# RICHTIG
def greet():
    return "Hello"
```
