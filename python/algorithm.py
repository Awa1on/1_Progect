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


number = int(input())
print(is_simple_number(number))
print(number)
