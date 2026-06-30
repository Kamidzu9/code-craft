import Foundation

// 1. String von a/b oder "Fehler" bei Division durch 0
func safeDivide(a: Double, b: Double) -> String {
    fatalError("TODO: Gib a/b als String zurück, oder \"Fehler\" wenn b == 0")
}

// 2. Zahl oder "Fehler" wenn keine gültige Zahl
func parseAge(input: String) -> String {
    fatalError("TODO: Versuche input in Int umzuwandeln, gib die Zahl als String oder \"Fehler\" zurück")
}

// 3. Erstes Zeichen oder nil bei leerem String
func getFirstChar(s: String) -> Character? {
    fatalError("TODO: Gib das erste Zeichen von s zurück, oder nil wenn s leer ist")
}

// 4. Länge oder 0 bei nil
func getLengthSafe(s: String?) -> Int {
    fatalError("TODO: Gib die Länge von s zurück, oder 0 wenn s nil ist")
}

// 5. Muss "@" enthalten und >= 3 Zeichen
func validateEmail(email: String) -> Bool {
    fatalError("TODO: Gib true zurück wenn email.count >= 3 UND email \"@\" enthält")
}
