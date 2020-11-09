found = False
count = int(input())
for i in range(count):
    x = int(input())
    found = (x % 10 == 0) or found
print(found)
x = 0b10101010
y = 0o2367
z = 0xffa
t = int('ahh', 20)
print(x, y, z, t)


def summary(a, b=10):
    """
    Sum of numbers a and b
    """
    print(a+b)


summary(12, 22)
func_sum = summary
func_sum(10, 33)


def max2(x, y):
    """
    Maximun of 2 numbers x and y
    """
    if x > y:
        return x
    return y


def max3(x, y, z):
    """
    Maximum of 3 numbers x, y, and z
    """
    return max2(x, max2(y, z))


def hello_separated(name="World", separator="-"):
    """
    Print hello plus name and castom separator
    """
    print("Hello", name, sep=separator)
