# createName() – Variablen in TypeScript

Mit `let` oder `const` legst du Variablen an. Der Typ wird nach dem Doppelpunkt angegeben.

```typescript
function createName(): string {
  let name: string = "TypeScript";
  return name;
}
```

`let` erlaubt spätere Änderungen, `const` nicht. Verwende `let` wenn der Wert sich ändern kann.
