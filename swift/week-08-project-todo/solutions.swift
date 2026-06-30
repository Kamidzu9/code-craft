import Foundation

// 1. Dictionary mit id (Zufallszahl), text, done: false
func createTodo(text: String) -> [String: Any] {
    fatalError("TODO: Erstelle ein Dictionary mit \"id\" (Zufallszahl), \"text\" (text) und \"done\" (false)")
}

// 2. Todo hinzufügen
func addTodo(todos: [[String: Any]], text: String) -> [[String: Any]] {
    fatalError("TODO: Füge ein neues Todo (mit createTodo) zu todos hinzu und gib die neue Liste zurück")
}

// 3. Nur text-Felder zurückgeben
func listTodos(todos: [[String: Any]]) -> [String] {
    fatalError("TODO: Gehe alle Todos durch und gib ein Array mit allen \"text\"-Werten zurück")
}

// 4. done = true für das Todo mit der gegebenen id
func markDone(todos: [[String: Any]], id: Int) -> [[String: Any]] {
    fatalError("TODO: Finde das Todo mit der passenden id und setze \"done\" auf true")
}

// 5. Todo mit der gegebenen id entfernen
func removeTodo(todos: [[String: Any]], id: Int) -> [[String: Any]] {
    fatalError("TODO: Entferne das Todo mit der passenden id aus der Liste")
}
