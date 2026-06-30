import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import grade


def test_grade():
    assert grade(95) == "A"
    assert grade(90) == "A"
    assert grade(85) == "B"
    assert grade(80) == "B"
    assert grade(75) == "C"
    assert grade(70) == "C"
    assert grade(65) == "D"
    assert grade(60) == "D"
    assert grade(59) == "F"
    assert grade(0) == "F"
