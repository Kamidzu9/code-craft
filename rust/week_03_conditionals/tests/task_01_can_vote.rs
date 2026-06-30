use week_03_conditionals::*;

#[test]
fn test_can_vote() {
    assert!(can_vote(18));
    assert!(can_vote(99));
    assert!(!can_vote(17));
    assert!(!can_vote(0));
}
