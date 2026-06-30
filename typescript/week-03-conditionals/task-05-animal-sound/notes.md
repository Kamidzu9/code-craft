# animalSound() – switch/case

`switch` ist praktisch für viele feste Werte. `default` fängt alles andere ab.

```typescript
function animalSound(animal: string): string {
  switch (animal) {
    case "dog": return "woof";
    case "cat": return "meow";
    default: return "unknown";
  }
}
```
