from solutions import *


def test_count_to():
    assert count_to(5) == [1, 2, 3, 4, 5]
    assert count_to(1) == [1]
    assert count_to(0) == []
    assert count_to(3) == [1, 2, 3]


def test_sum_to():
    assert sum_to(5) == 15
    assert sum_to(1) == 1
    assert sum_to(0) == 0
    assert sum_to(10) == 55


def test_countdown():
    assert countdown(5) == [5, 4, 3, 2, 1]
    assert countdown(1) == [1]
    assert countdown(0) == []


def test_contains():
    assert contains([1, 2, 3], 2) is True
    assert contains([1, 2, 3], 5) is False
    assert contains([], 1) is False
    assert contains(["a", "b"], "a") is True


def test_multiply_table():
    assert multiply_table(2) == [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    assert multiply_table(1) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert multiply_table(0) == [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    assert len(multiply_table(5)) == 10
