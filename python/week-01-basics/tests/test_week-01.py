from solutions import *


def test_greet():
    assert greet() == "Hello, World!"


def test_create_name():
    result = create_name()
    assert result == "Python"
    assert isinstance(result, str)


def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
    assert add(100, 200) == 300


def test_is_adult():
    assert is_adult(18) is True
    assert is_adult(25) is True
    assert is_adult(99) is True
    assert is_adult(17) is False
    assert is_adult(0) is False


def test_introduce():
    result = introduce("Anna", 25)
    assert result == "Hi, I'm Anna and I'm 25 years old!"
    assert "Anna" in result
    assert "25" in result
