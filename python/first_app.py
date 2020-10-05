count = 0
while count < 5:
    print(count)
    count += 1
my_list = []
for i in range(10):
    my_list.append(i)
print(my_list)
another_list = [i for i in range(10)]
print(another_list)
fruits = ['apple', 'mango', 'nut', 'banana']
calories = ['40', '30', '60', '80']
fruit_cal = {f: c for f, c in zip(fruits, calories)}
print(fruit_cal)
even = [i for i in range(20) if i % 2 == 0]
print(even)


def foo(a):
    print(a)


foo('Hello World!')

for i in range(1, 11, 2):
    print(i)


def summator(x: int, y: int) -> int:
    return x+y


print(summator(1, 3))
