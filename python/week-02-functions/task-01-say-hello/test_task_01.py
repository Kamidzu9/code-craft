import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import say_hello


def test_say_hello():
    assert say_hello("Anna") == "Hello, Anna!"
    assert say_hello("Python") == "Hello, Python!"
