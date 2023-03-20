def main():

    number_of_articules = int(input("How many articules do you got? "))
    amount = descount(number_of_articules)
    print(amount * number_of_articules)


def descount(articules):
    if articules <= 5:
        descount = 0.9
    elif articules > 5 and articules <= 10:
        descount = 0.85
    else:
        descount = 0.8
    return descount


main()
