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
