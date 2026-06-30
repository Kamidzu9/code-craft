# Start of the Journey

## Learning Plan

Each language has its own week sequence. Study at your own pace — jump between languages as you like.

### TypeScript

| Week | Topic |
|------|-------|
| 01 | Basics (variables, types, functions) |
| 02 | Type Systems (union, intersection, literal) |
| 03 | Advanced Types (mapped, conditional, template literal) |
| 04 | Generics |
| 05 | Async, Modules, Decorators |
| 06 | Project – E-Commerce Types |
| 07 | Project – API with Express |
| 08 | Project – Fullstack App |

### Python

| Week | Topic |
|------|-------|
| 01 | Basics (syntax, data types, control flow) |
| 02 | Data Structures (list, dict, set, tuple) |
| 03 | OOP (classes, inheritance, magic methods) |
| 04 | Modules, Packages, Virtual Envs |
| 05 | Advanced (decorators, generators, async) |
| 06 | Project – CLI Tool |
| 07 | Project – Web scraper / API |
| 08 | Project – Data analysis |

### Rust

| Week | Topic |
|------|-------|
| 01 | Basics (syntax, variables, control flow) |
| 02 | Ownership, Borrowing, References |
| 03 | Structs, Enums, Pattern Matching |
| 04 | Traits, Generics |
| 05 | Lifetimes, Error Handling |
| 06 | Concurrency (threads, async) |
| 07 | Unsafe, Macros |
| 08 | Project – System Tool |

### Swift

| Week | Topic |
|------|-------|
| 01 | Basics (syntax, optionals, collections) |
| 02 | OOP, Protocols, Extensions |
| 03 | Functions, Closures, Enums |
| 04 | Error Handling, Concurrency (async/await) |
| 05 | SwiftUI Basics |
| 06 | Project – iOS App |
| 07 | Project – SwiftUI + API |
| 08 | Project – Advanced Swift |

*Note: Swift is not installed on this machine. Install Xcode or Swift on macOS/Linux to begin.*

## Structure

```
typescript/     week-01 to week-08
python/         week-01 to week-08
rust/           week-01 to week-08
swift/          week-01 to week-08
```

Each `week-NN` folder holds:

| File | Purpose |
|------|---------|
| `tasks.md` | Exercises to solve |
| `notes.md` | Your personal notes |
| `solutions.ts/py/rs/swift` | Your code (create it) |
| `*.test.ts` / `tests/` | Automated tests |

## Running Tests

### TypeScript
```
cd typescript
npm test
```

### Python
```
cd python
pytest
```

### Rust
```
cd rust
cargo test --workspace
```

### Swift
Not yet set up (requires macOS/Xcode).
