import pytest
from solutions import greet, is_even, filter_even, word_count, safe_divide

class TestGreet:
    def test_greet(self):
        assert greet('World') == "Hello, World!"

class TestIs_even:
    def test_is_even(self):
        assert is_even(2) == true
        assert is_even(3) == false

class TestFilter_even:
    def test_filter_even(self):
        assert filter_even([1,2,3,4]) == [2, 4]

class TestWord_count:
    def test_word_count(self):
        pass

class TestSafe_divide:
    def test_safe_divide(self):
        pass

