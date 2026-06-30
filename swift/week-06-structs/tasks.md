# Woche 6: Structs – Aufgaben

1. Definiere ein `Person`-Struct mit `name: String`, `age: Int` und einem Initialisierer `init(name: String, age: Int)`.
2. Schreibe `greetPerson(person: Person) -> String`, das "Hello, {name}!" zurückgibt.
3. Schreibe `birthday(person: inout Person)`, das `age` um 1 erhöht (`person.age += 1`).
4. Schreibe `isSenior(person: Person) -> Bool`, das `true` zurückgibt, wenn `age >= 65`.
5. Definiere ein `Team`-Struct mit `name: String`, `members: [String]`, `count: Int` und einem Initialisierer.
