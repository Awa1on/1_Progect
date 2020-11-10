import turtle as tr
from turtle import goto
import math


n = 17
tr.shape('turtle')
for i in range(3, n + 1):

    tr.penup
    tr.goto(0 - (360 / i) / (2 * math.sin(360 / (2*i))), 0)
    tr.pendown
    for n in range(i):
        tr.forward(50 + 10 * i)
        tr.left(360/i)

    tr.penup
    tr.home
    tr.pendown
