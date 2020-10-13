# Создание классов
class Cat:
    age = 0
    name = ''
    weight = 0.0

    def Meow(self):
        """
        Print cat characters and Meow
        """
        print('Name is: '+self.name)
        print('Age is: '+str(self.age))
        print('Weight is: '+str(self.weight))
        print('Meow!'*3)


firstCat = Cat()
firstCat.name = 'Mike'
firstCat.age = 15
firstCat.weight = 5.0

firstCat.Meow()

# Конструктор класса


class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age


firstDog = Dog('Flurry', 10)

print(firstDog.name, firstDog.age)
