# double() – Array transformieren

Erstelle ein neues Array, indem du jedes Element mit 2 multiplizierst.

```typescript
function double(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
```
