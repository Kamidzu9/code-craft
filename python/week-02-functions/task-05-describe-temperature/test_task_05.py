import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import describe_temperature


def test_describe_temperature():
    assert describe_temperature(35) == "hot"
    assert describe_temperature(31) == "hot"
    assert describe_temperature(25) == "warm"
    assert describe_temperature(16) == "warm"
    assert describe_temperature(15) == "cold"
    assert describe_temperature(0) == "cold"
    assert describe_temperature(-10) == "cold"
