from solutions import *


def test_create_person():
    p = create_person("Anna", 25)
    assert p == {"name": "Anna", "age": 25}
    assert p["name"] == "Anna"
    assert p["age"] == 25


def test_greet_person():
    p = {"name": "Bob", "age": 30}
    assert greet_person(p) == "Hello, Bob!"
    assert greet_person({"name": "Python"}) == "Hello, Python!"


def test_birthday():
    p = {"name": "Anna", "age": 25}
    result = birthday(p)
    assert result["age"] == 26
    assert result["name"] == "Anna"
    # Original sollte unverändert sein
    assert p["age"] == 25


def test_is_senior():
    assert is_senior({"name": "Opa", "age": 70}) is True
    assert is_senior({"name": "Oma", "age": 65}) is True
    assert is_senior({"name": "Kind", "age": 10}) is False
    assert is_senior({"name": "Erw", "age": 30}) is False


def test_create_team():
    team = create_team("Rot", ["Anna", "Bob"])
    assert team["name"] == "Rot"
    assert team["members"] == ["Anna", "Bob"]
    assert team["count"] == 2
    team2 = create_team("Blau", [])
    assert team2["count"] == 0
