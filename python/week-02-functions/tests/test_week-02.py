from solutions import *


def test_say_hello():
    assert say_hello("Anna") == "Hello, Anna!"
    assert say_hello("Python") == "Hello, Python!"


def test_rectangle_area():
    assert rectangle_area(3, 4) == 12
    assert rectangle_area(5, 5) == 25
    assert rectangle_area(0, 10) == 0


def test_is_positive():
    assert is_positive(5) is True
    assert is_positive(1) is True
    assert is_positive(0) is False
    assert is_positive(-1) is False
    assert is_positive(-100) is False


def test_max_num():
    assert max_num(3, 7) == 7
    assert max_num(10, 2) == 10
    assert max_num(5, 5) == 5
    assert max_num(-5, 1) == 1
    assert max_num(-10, -3) == -3


def test_describe_temperature():
    assert describe_temperature(35) == "hot"
    assert describe_temperature(31) == "hot"
    assert describe_temperature(25) == "warm"
    assert describe_temperature(16) == "warm"
    assert describe_temperature(15) == "cold"
    assert describe_temperature(0) == "cold"
    assert describe_temperature(-10) == "cold"
