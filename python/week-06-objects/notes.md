# Woche 6: Dictionaries

## Schlüsselkonzepte

Dictionaries (dict) speichern Schlüssel-Wert-Paare. Wie ein echtes Wörterbuch: Du suchst ein Wort (Schlüssel) und bekommst die Definition (Wert).

- **Schlüssel**: Meistens Strings, müssen eindeutig sein.
- **Werte**: Können beliebige Datentypen sein (Zahlen, Strings, Listen, sogar andere Dictionaries).
- **Zugriff**: `person["name"]` oder `person.get("name")`.
- **Ändern**: `person["age"] = 30` setzt den Wert für den Schlüssel `age`.

## Syntax

```python
# Ein Dictionary erstellen
def create_person(name, age):
    return {"name": name, "age": age}

# Auf Werte zugreifen
def greet_person(person):
    return f"Hallo, {person['name']}!"

# Werte ändern (neues Dictionary)
def birthday(person):
    return {"name": person["name"], "age": person["age"] + 1}

# Bedingung mit Dictionary-Wert
def is_senior(person):
    return person["age"] >= 65

# Dictionary mit verschachtelten Werten
def create_team(name, members):
    return {
        "name": name,
        "members": members,
        "count": len(members)
    }
```

## Häufige Fehler

- **KeyError**: Zugriff auf einen Schlüssel, der nicht existiert: `person["gewicht"]` → Fehler. Verwende `.get()` für sicheren Zugriff.
- **Anführungszeichen**: `person[name]` sucht nach der *Variable* `name`, nicht nach dem String `"name"`.
- **Komma vergessen**: Zwischen Schlüssel-Wert-Paaren muss ein Komma stehen.
- **Doppelpunkt statt Gleichheitszeichen**: Es heißt `"key": value`, nicht `"key" = value`.

```python
# FALSCH – KeyError bei fehlendem Schlüssel
person = {"name": "Anna"}
print(person["age"])   # Fehler!

# RICHTIG – mit .get() sicher
print(person.get("age"))        # None
print(person.get("age", 0))     # 0 (Standardwert)
```
