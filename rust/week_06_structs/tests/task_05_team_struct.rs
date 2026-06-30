use week_06_structs::*;

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
