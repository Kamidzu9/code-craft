# Notizen - Woche 4: Schleifen

## for-Schleife

Mit `for` kann man über einen Bereich iterieren:

```rust
for i in 1..=5 {
    println!("{}", i);  // 1, 2, 3, 4, 5
}
```

`1..5` ist (1 bis 4, 5 exklusive). `1..=5` ist (1 bis 5, inklusive).

## Vektoren (Vec)

Ein `Vec` ist eine dynamische Liste:

```rust
let mut zahlen = Vec::new();     // leerer Vektor
zahlen.push(1);                  // Element hinzufügen
zahlen.push(2);

let v = vec![1, 2, 3];           // mit vec!-Makro
```

## for über einen Bereich - Zahlen sammeln

```rust
fn count_to(n: i32) -> Vec<i32> {
    let mut ergebnis = Vec::new();
    for i in 1..=n {
        ergebnis.push(i);
    }
    ergebnis
}
```

## for rückwärts

`.rev()` macht einen Bereich rückwärts:

```rust
fn countdown(n: i32) -> Vec<i32> {
    let mut ergebnis = Vec::new();
    for i in (1..=n).rev() {
        ergebnis.push(i);
    }
    ergebnis
}
```

## for über ein Array/Slice

```rust
fn contains(arr: &[i32], val: i32) -> bool {
    for &x in arr {
        if x == val {
            return true;
        }
    }
    false
}
```

`&[i32]` ist ein Slice - eine Ansicht auf einen Teil eines Arrays.

## Akkumulieren (Summe bilden)

```rust
fn sum_to(n: i32) -> i32 {
    let mut summe = 0;
    for i in 1..=n {
        summe += i;  // summe = summe + i
    }
    summe
}
```
