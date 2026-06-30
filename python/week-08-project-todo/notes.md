# Woche 8: Mini Projekt – Todo-Liste

## Schlüsselkonzepte

Diese Woche kombinierst du alles Gelernte: Funktionen, Listen, Dictionaries, Bedingungen und Schleifen. Du baust eine kleine Todo-Listen-Verwaltung.

- **Globale Zähler**: Mit einer Variable außerhalb der Funktion kannst du hochzählen, um eindeutige IDs zu vergeben.
- **Listen von Dictionaries**: Jedes Todo ist ein Dictionary, alle Todos sind in einer Liste.
- **Neue Liste vs. verändern**: Wir arbeiten mit neuen Listen (funktionaler Stil), damit die Original-Daten nicht verloren gehen.
- **Liste kopieren**: `arr.copy()` oder `arr[:]` erstellt eine Kopie.

## Syntax

```python
# Zähler für eindeutige IDs
nächste_id = 1

def create_todo(text):
    global nächste_id
    todo = {"id": nächste_id, "text": text, "done": False}
    nächste_id += 1
    return todo

# Todo hinzufügen (neue Liste)
def add_todo(todos, text):
    neues_todo = create_todo(text)
    return todos + [neues_todo]   # oder: todos.copy() + [neues_todo]

# Nur Texte auslesen
def list_todos(todos):
    return [todo["text"] for todo in todos]
    # Oder mit Schleife:
    # ergebnis = []
    # for todo in todos:
    #     ergebnis.append(todo["text"])
    # return ergebnis

# Todo als erledigt markieren
def mark_done(todos, id):
    neue_liste = []
    for todo in todos:
        if todo["id"] == id:
            todo = {"id": id, "text": todo["text"], "done": True}
        neue_liste.append(todo)
    return neue_liste

# Todo entfernen
def remove_todo(todos, id):
    neue_liste = []
    for todo in todos:
        if todo["id"] != id:
            neue_liste.append(todo)
    return neue_liste
```

## Häufige Fehler

- **`global` vergessen**: Wenn du eine Variable außerhalb der Funktion ändern willst, brauchst du `global`.
- **ID-Vergabe**: Jedes Todo braucht eine eindeutige ID. Ein Zähler, der bei jedem Aufruf hochzählt, ist der einfachste Weg.
- **Referenz vs. Kopie**: `neue_liste = todos` erstellt keine Kopie! Beide Namen zeigen auf die gleiche Liste.
- **`==` vs `is`** bei Listen: Verwende `==` zum Vergleichen von Werten.

```python
# FALSCH – keine Kopie, verändert Original
def mark_done(todos, id):
    for todo in todos:
        if todo["id"] == id:
            todo["done"] = True   # Verändert das Original!
    return todos

# RICHTIG – baut neue Liste
def mark_done(todos, id):
    neue_liste = []
    for todo in todos:
        if todo["id"] == id:
            neue_liste.append({"id": id, "text": todo["text"], "done": True})
        else:
            neue_liste.append(todo)
    return neue_liste
```
