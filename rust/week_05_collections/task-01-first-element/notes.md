# Notizen - Aufgabe 1: first_element

`Option<T>` kann `Some(T)` oder `None` sein:

```rust
fn first_element(arr: &[i32]) -> Option<i32> {
    if arr.is_empty() {
        None
    } else {
        Some(arr[0])
    }
}
```

`Option` vermeidet `null`-Probleme. Der Typ sagt explizit, dass es keinen Wert geben kann.
