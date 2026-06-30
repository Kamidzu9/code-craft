import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import create_name


def test_create_name():
    result = create_name()
    assert result == "Python"
    assert isinstance(result, str)
