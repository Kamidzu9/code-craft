# Arrays kopieren und erweitern

```swift
func addElement(arr: [Int], val: Int) -> [Int] {
    var newArr = arr
    newArr.append(val)
    return newArr
}
```
