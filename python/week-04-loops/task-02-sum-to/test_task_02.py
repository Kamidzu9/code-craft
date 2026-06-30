import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import sum_to


def test_sum_to():
    assert sum_to(5) == 15
    assert sum_to(1) == 1
    assert sum_to(0) == 0
    assert sum_to(10) == 55
