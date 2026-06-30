import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import count_to


def test_count_to():
    assert count_to(5) == [1, 2, 3, 4, 5]
    assert count_to(1) == [1]
    assert count_to(0) == []
    assert count_to(3) == [1, 2, 3]
