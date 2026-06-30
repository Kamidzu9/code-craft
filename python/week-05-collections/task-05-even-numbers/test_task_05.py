import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import even_numbers


def test_even_numbers():
    assert even_numbers([1, 2, 3, 4, 5, 6]) == [2, 4, 6]
    assert even_numbers([1, 3, 5]) == []
    assert even_numbers([2, 4, 6]) == [2, 4, 6]
    assert even_numbers([]) == []
