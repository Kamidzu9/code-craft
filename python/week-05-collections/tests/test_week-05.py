from solutions import *


def test_first_element():
    assert first_element([1, 2, 3]) == 1
    assert first_element(["a"]) == "a"
    assert first_element([]) is None


def test_add_element():
    assert add_element([1, 2], 3) == [1, 2, 3]
    assert add_element([], 1) == [1]
    assert add_element(["a"], "b") == ["a", "b"]
    # Original sollte unverändert sein
    original = [1, 2]
    add_element(original, 3)
    assert original == [1, 2]


def test_double():
    assert double([1, 2, 3]) == [2, 4, 6]
    assert double([0]) == [0]
    assert double([]) == []
    assert double([-1, 5]) == [-2, 10]


def test_find_max():
    assert find_max([1, 5, 3]) == 5
    assert find_max([-10, -3, -7]) == -3
    assert find_max([100]) == 100
    assert find_max([]) is None


def test_even_numbers():
    assert even_numbers([1, 2, 3, 4, 5, 6]) == [2, 4, 6]
    assert even_numbers([1, 3, 5]) == []
    assert even_numbers([2, 4, 6]) == [2, 4, 6]
    assert even_numbers([]) == []
