# Notizen - Aufgabe 5: Team-Struct

Ein Struct mit Vektor:

```rust
struct Team {
    name: String,
    members: Vec<String>,
    count: usize,
}

impl Team {
    fn new(name: &str, members: Vec<String>) -> Team {
        let count = members.len();
        Team {
            name: String::from(name),
            members,
            count,
        }
    }
}
```

`members.len()` gibt die Länge des Vektors zurück. `usize` ist der Typ für Größenangaben. Die Kurzschreibweise `members` statt `members: members` wird verwendet, wenn Parameter und Feld gleich heißen.
