# Notizen - Aufgabe 2: add_element

Aus einem Slice einen neuen Vektor erstellen:

```rust
fn add_element(arr: &[i32], val: i32) -> Vec<i32> {
    let mut neu = arr.to_vec();
    neu.push(val);
    neu
}
```

`to_vec()` kopiert den Slice in einen neuen Vektor. `push()` fügt ein Element am Ende an.
