# login() – Logische Operatoren (&&)

Mit `&&` (UND) prüfst du, ob beide Bedingungen wahr sind.

```typescript
function login(username: string, password: string): boolean {
  return username === "admin" && password === "secret";
}
```

`===` vergleicht zwei Werte strikt (inkl. Typ).
