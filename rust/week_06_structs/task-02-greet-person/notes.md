# Notizen - Aufgabe 2: greet_person

Auf Struct-Felder zugreifen:

```rust
fn greet_person(person: &Person) -> String {
    format!("Hello, {}!", person.name)
}
```

`&Person` ist eine Referenz (leiht, nimmt keinen Besitz). `person.name` greift auf das Feld `name` des Structs zu.
