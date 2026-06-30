# Notizen - Woche 8: Mini Todo-Projekt

## TodoItem-Struct

```rust
struct TodoItem {
    id: u32,
    text: String,
    done: bool,
}
```

## Todo hinzufügen

```rust
fn add_todo(todos: &mut Vec<TodoItem>, text: &str) {
    let id = todos.len() as u32 + 1;
    todos.push(TodoItem {
        id,
        text: String::from(text),
        done: false,
    });
}
```

`&mut Vec<TodoItem>`: mutable Referenz, damit wir den Vektor verändern können.

## Todos auflisten

```rust
fn list_todos(todos: &[TodoItem]) -> Vec<&str> {
    let mut texte = Vec::new();
    for item in todos {
        texte.push(item.text.as_str());
    }
    texte
}
```

`as_str()` wandelt `String` in `&str` um.

## Todo als erledigt markieren

```rust
fn mark_done(todos: &mut [TodoItem], id: u32) {
    for item in todos.iter_mut() {
        if item.id == id {
            item.done = true;
        }
    }
}
```

`iter_mut()` gibt einen Iterator über mutable Referenzen auf jedes Element.

## Todo entfernen

```rust
fn remove_todo(todos: &mut Vec<TodoItem>, id: u32) {
    todos.retain(|item| item.id != id);
}
```

`retain()` behält nur Elemente, die der Bedingung entsprechen. Eleganter mit einer Schleife:

```rust
let mut pos = None;
for (i, item) in todos.iter().enumerate() {
    if item.id == id {
        pos = Some(i);
    }
}
if let Some(i) = pos {
    todos.remove(i);
}
```

## Zusammenspiel

Mit diesen Funktionen kann man ein komplettes Todo-Programm schreiben:

```rust
let mut todos = Vec::new();
add_todo(&mut todos, "Rust lernen");
add_todo(&mut todos, "Übungen machen");
mark_done(&mut todos, 1);
let texte = list_todos(&todos);
```
