// TODO: Definiere ein Summary-Trait mit summarize()
pub trait Summary {
    fn summarize(&self) -> String;
}

// TODO: Definiere Article-Struct und implementiere Summary
pub struct Article {
    pub title: String,
    pub author: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        todo!()
    }
}

// TODO: Finde das größte Element im Slice
pub fn largest<T: PartialOrd>(_list: &[T]) -> &T {
    todo!()
}

// TODO: Definiere Person2-Struct und implementiere Display + Debug
pub struct Person2 {
    pub name: String,
    pub age: u8,
}

impl std::fmt::Display for Person2 {
    fn fmt(&self, _f: &mut std::fmt::Formatter) -> std::fmt::Result {
        todo!()
    }
}

impl std::fmt::Debug for Person2 {
    fn fmt(&self, _f: &mut std::fmt::Formatter) -> std::fmt::Result {
        todo!()
    }
}
