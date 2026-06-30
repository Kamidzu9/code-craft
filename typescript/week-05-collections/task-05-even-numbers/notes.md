# evenNumbers() – Gerade Zahlen filtern

Mit `% 2 === 0` prüfst du, ob eine Zahl gerade ist (durch 2 teilbar).

```typescript
function evenNumbers(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
```
