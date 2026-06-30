from solutions import *


def test_can_vote():
    assert can_vote(18) is True
    assert can_vote(30) is True
    assert can_vote(17) is False
    assert can_vote(0) is False


def test_grade():
    assert grade(95) == "A"
    assert grade(90) == "A"
    assert grade(85) == "B"
    assert grade(80) == "B"
    assert grade(75) == "C"
    assert grade(70) == "C"
    assert grade(65) == "D"
    assert grade(60) == "D"
    assert grade(59) == "F"
    assert grade(0) == "F"


def test_login():
    assert login("admin", "secret") is True
    assert login("admin", "wrong") is False
    assert login("user", "secret") is False
    assert login("", "") is False


def test_absolute():
    assert absolute(5) == 5
    assert absolute(0) == 0
    assert absolute(-3) == 3
    assert absolute(-100) == 100


def test_animal_sound():
    assert animal_sound("dog") == "woof"
    assert animal_sound("cat") == "meow"
    assert animal_sound("cow") == "unknown"
    assert animal_sound("") == "unknown"
