# createTeam() – Berechnete Properties

Du kannst Werte berechnen und als Property speichern, z. B. `members.length`.

```typescript
function createTeam(name: string, members: string[]): { name: string; members: string[]; count: number } {
  return {
    name,
    members,
    count: members.length,
  };
}
```
