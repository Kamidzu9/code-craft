# Notizen - Woche 6: Structs

## Structs definieren

Ein Struct bündelt mehrere Werte unter einem Namen:

```rust
struct Person {
    name: String,
    age: u8,
}
```

## Ein Struct erstellen

```rust
let person = Person {
    name: String::from("Alice"),
    age: 30,
};
```

## Auf Felder zugreifen

```rust
println!("{}", person.name);  // Alice
println!("{}", person.age);   // 30
```

## Methoden mit impl

```rust
impl Person {
    fn new(name: &str, age: u8) -> Person {
        Person {
            name: String::from(name),
            age,
        }
    }
}
```

`new` ist eine Konvention (kein Schlüsselwort) - eine statische Methode, die ein neues Struct erstellt.

## self, &self, &mut self

```rust
impl Person {
    // nimmt eine Referenz (lesend)
    fn name(&self) -> &str {
        &self.name
    }

    // nimmt eine mutable Referenz (ändernd)
    fn birthday(&mut self) {
        self.age += 1;
    }
}
```

- `self` - nimmt Besitz (selten)
- `&self` - leiht nur (lesend)
- `&mut self` - leiht ändernd

## Team mit Vektor

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

`members.len()` gibt die Anzahl der Elemente im Vektor zurück.
