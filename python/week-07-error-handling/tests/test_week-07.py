from solutions import *


def test_safe_divide():
    assert safe_divide(10, 2) == 5.0
    assert safe_divide(3, 2) == 1.5
    assert safe_divide(10, 0) == "Fehler: Division durch Null"
    assert safe_divide(0, 5) == 0.0


def test_parse_age():
    assert parse_age("25") == 25
    assert parse_age("0") == 0
    assert parse_age("abc") == "Fehler: Keine gültige Zahl"
    assert parse_age("") == "Fehler: Keine gültige Zahl"


def test_get_first_char():
    assert get_first_char("Hallo") == "H"
    assert get_first_char("A") == "A"
    assert get_first_char("") is None


def test_get_length_safe():
    assert get_length_safe("Hallo") == 5
    assert get_length_safe("") == 0
    assert get_length_safe(None) == 0


def test_validate_email():
    assert validate_email("a@b") is True
    assert validate_email("test@example.com") is True
    assert validate_email("ab") is False   # zu kurz
    assert validate_email("testexample.com") is False  # kein @
    assert validate_email("") is False
