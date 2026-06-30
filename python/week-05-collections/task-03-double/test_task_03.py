import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import double


def test_double():
    assert double([1, 2, 3]) == [2, 4, 6]
    assert double([0]) == [0]
    assert double([]) == []
    assert double([-1, 5]) == [-2, 10]
