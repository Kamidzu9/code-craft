import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import rectangle_area


def test_rectangle_area():
    assert rectangle_area(3, 4) == 12
    assert rectangle_area(5, 5) == 25
    assert rectangle_area(0, 10) == 0
