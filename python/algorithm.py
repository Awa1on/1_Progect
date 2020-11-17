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

# 3 Array's alhorithm


def array_search(A: list, N: int, x: int):
    """
    Searching some number x in array,  
    Return index i 0 < i < N-1 or -1 if not found.
    If the array has the same numbers, the function returns the first number index.
    """
    for k in range(N):
        if A[k] == x:
            return k
    return -1


def test_array_search():
    """
    Testing our function
    """
    A1 = [1, 2, 3, 4, 5]
    m = array_search(A1, 5, 6)
    if m == -1:
        print("#test1 - ok")
    else:
        print("#test1 - fail")

    A2 = [-1, -2, -3, -4, -5]
    m = array_search(A2, 5, -3)
    if m == 2:
        print("#test2 - ok")
    else:
        print("#test2 - fail")

    A3 = [8, 3, -3, 1, 3]
    m = array_search(A3, 5, 3)
    if m == 1:
        print("#test3 - ok")
    else:
        print("#test3 - fail")


def invert_array(A: list, N: int):
    """
    Invert array
    """
    for k in range(N//2):
        A[k], A[N-1-k] = A[N-1-k], A[k]


def test_invert_array():
    """
    testing array invertion
    """
    A1 = [1, 2, 3, 4, 5]
    invert_array(A1, 5)
    if A1 == [5, 4, 3, 2, 1]:
        print("#test1 - ok")
    else:
        print("#test1 - fail")

    A2 = [0, 0, 0, 0, 0, 4]
    invert_array(A2, 6)
    if A2 == [4, 0, 0, 0, 0, 0]:
        print("#test2 - ok")
    else:
        print("#test2 - fail")


# 4 Cycle shift

A = [1, 3, 5, 7, 9]
N = len(A)

# left:

tmp1 = A[0]
for i in range(N-1):
    A[i] = A[i+1]
A[N] = tmp1

# right:

tmp2 = A[N-1]
for i in range(N-2, -1, -1):
    A[i+1] = A[i]
A[0] = tmp2


# 5 The sieve of Eratosthenes

size = int(input())
array_of_sieve = [True]*size
array_of_sieve[0] = array_of_sieve[1] = False
for i in range(2, size):
    if array_of_sieve[i]:
        for n in range(2*i, size):
            array_of_sieve[n] = False
for i in range(size):
    print(i, "-", "simple" if array_of_sieve[i] else "composite")
