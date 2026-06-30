import Foundation

// 1. Person struct mit name: String, age: Int
struct Person {
    fatalError("TODO: Definiere Person mit name (String) und age (Int) sowie einem init")
}

// 2. "Hello, {name}!"
func greetPerson(person: Person) -> String {
    fatalError("TODO: Gib \"Hello, \\(person.name)!\" zurück")
}

// 3. age += 1
func birthday(person: inout Person) {
    fatalError("TODO: Erhöhe person.age um 1")
}

// 4. age >= 65
func isSenior(person: Person) -> Bool {
    fatalError("TODO: Gib true zurück wenn person.age >= 65")
}

// 5. Team struct mit name, members: [String], count: Int
struct Team {
    fatalError("TODO: Definiere Team mit name (String), members ([String]) und count (Int) + init, der count = members.count setzt")
}
