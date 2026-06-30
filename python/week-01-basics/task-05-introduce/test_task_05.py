import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import introduce


def test_introduce():
    result = introduce("Anna", 25)
    assert result == "Hi, I'm Anna and I'm 25 years old!"
    assert "Anna" in result
    assert "25" in result
