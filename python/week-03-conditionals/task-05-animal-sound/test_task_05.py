import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import animal_sound


def test_animal_sound():
    assert animal_sound("dog") == "woof"
    assert animal_sound("cat") == "meow"
    assert animal_sound("cow") == "unknown"
    assert animal_sound("") == "unknown"
