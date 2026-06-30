import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import multiply_table


def test_multiply_table():
    assert multiply_table(2) == [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    assert multiply_table(1) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert multiply_table(0) == [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    assert len(multiply_table(5)) == 10
