# Woche 8: Mini Projekt - Todo Liste

## Schlüsselkonzepte

In dieser Woche setzt du alles Gelernte zusammen: Objekte, Arrays, Funktionen und Fehlerbehandlung baust du eine einfache Todo-Liste.

### 1. Projektstruktur verstehen

Eine Todo-Liste verwaltet Aufgaben (Todos). Jedes Todo hat:
- `id`: eine eindeutige Nummer
- `text`: die Beschreibung der Aufgabe
- `done`: ob die Aufgabe erledigt ist

```typescript
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
```

### 2. Todos erstellen

Eine ID muss eindeutig sein. Du kannst einen Zähler außerhalb der Funktion führen oder die ID dynamisch vergeben. Für diese Aufgabe beginnst du bei 1 und zählst hoch:

```typescript
let nextId: number = 1;

export function createTodo(text: string): Todo {
  const todo: Todo = {
    id: nextId,
    text: text,
    done: false,
  };
  nextId++;
  return todo;
}
```

### 3. Todos zu einer Liste hinzufügen

Verwende den Spread-Operator, um ein neues Array zu erstellen:

```typescript
function addTodo(todos: Todo[], text: string): Todo[] {
  const newTodo: Todo = createTodo(text);
  return [...todos, newTodo];
}
```

### 4. Nur die Texte anzeigen

Manchmal willst du nur bestimmte Informationen aus einer Liste:

```typescript
function listTodos(todos: Todo[]): string[] {
  let texts: string[] = [];
  for (let i = 0; i < todos.length; i++) {
    texts.push(todos[i].text);
  }
  return texts;
}
```

### 5. Ein Todo als erledigt markieren

Suche das Todo mit der richtigen ID und ändere `done` auf `true`:

```typescript
function markDone(todos: Todo[], id: number): Todo[] {
  let result: Todo[] = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      // Dieses Todo als erledigt markieren
      result.push({ ...todos[i], done: true });
    } else {
      result.push(todos[i]);
    }
  }
  return result;
}
```

### 6. Ein Todo löschen

Erstelle ein neues Array ohne das Todo mit der gegebenen ID:

```typescript
function removeTodo(todos: Todo[], id: number): Todo[] {
  let result: Todo[] = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      result.push(todos[i]);
    }
  }
  return result;
}
```

## Häufige Fehler (Pitfalls)

- **ID-Vergabe**: Wenn du immer bei 1 anfängst, haben alle Todos die ID 1. Verwende einen Zähler.
- **Original verändern**: Gib immer ein NEUES Array zurück. Ändere nie das Original!
- **Alle Todos durchsuchen**: Vergiss nicht, auch die unveränderten Todos ins neue Array zu übernehmen.
- **Object vs Todo**: Verwende das Interface `Todo` statt `object`, um Typsicherheit zu haben.

## Zusammenfassung

- Daten modellieren: Definiere ein Interface `Todo` mit `id`, `text`, `done`
- Unveränderlichkeit: Erstelle neue Objekte/Arrays statt bestehende zu ändern
- ID-Vergabe: Ein Zähler `nextId` stellt eindeutige IDs sicher
- Spread `...` kopiert Objekte und Arrays
- Eine `for`-Schleife durchläuft alle Todos, um das richtige zu finden
