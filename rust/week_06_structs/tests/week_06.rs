use week_06_structs::*;

#[test]
fn test_person_new() {
    let p = Person::new("Alice", 30);
    assert_eq!(p.name, "Alice");
    assert_eq!(p.age, 30);
}

#[test]
fn test_greet_person() {
    let p = Person::new("Bob", 25);
    assert_eq!(greet_person(&p), "Hello, Bob!");
}

#[test]
fn test_birthday() {
    let mut p = Person::new("Charlie", 17);
    birthday(&mut p);
    assert_eq!(p.age, 18);
    birthday(&mut p);
    assert_eq!(p.age, 19);
}

#[test]
fn test_is_senior() {
    let p1 = Person::new("Senior", 65);
    assert!(is_senior(&p1));
    let p2 = Person::new("Junior", 64);
    assert!(!is_senior(&p2));
    let p3 = Person::new("Very Old", 100);
    assert!(is_senior(&p3));
}

#[test]
fn test_team_new() {
    let members = vec![
        String::from("Alice"),
        String::from("Bob"),
        String::from("Charlie"),
    ];
    let team = Team::new("Rustaceans", members);
    assert_eq!(team.name, "Rustaceans");
    assert_eq!(team.count, 3);
    assert_eq!(team.members[0], "Alice");
}
