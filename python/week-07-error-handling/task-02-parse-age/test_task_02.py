import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "."))
if "solutions" in sys.modules:
    del sys.modules["solutions"]
from solutions import parse_age


def test_parse_age():
    assert parse_age("25") == 25
    assert parse_age("0") == 0
    assert parse_age("abc") == "Fehler: Keine gültige Zahl"
    assert parse_age("") == "Fehler: Keine gültige Zahl"
