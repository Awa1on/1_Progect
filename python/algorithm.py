# 1.Brute Forсe


def is_simple_number(x: int):
    """ To define that, the number is simple or not.
        x - integer and positive
    """
    devider = 2
    while devider < x:
        if x % devider == 0:
            return False
        devider += 1
    return True  # End of if is implicitly


# 2. Factorize number


def fuctorize_number(x: int):
    """
    Factorizing number on simple devider
    x - integer and positive
    Create an array of simple number.
    """
    divider = 2
    array_of_divider = []
    while x > 1:
        if x % divider == 0:
            array_of_divider.append(divider)
            x //= divider
        else:
            divider += 1
    print(array_of_divider)


number = int(input())
fuctorize_number(number)
print(number)
