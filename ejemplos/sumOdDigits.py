num1 = 493193

def digital_root(n):
    num1_to_str = str(n)
    num1_as_array = []
    for character in num1_to_str:
        num1_as_array.append(int(character))
    sum = 0
    for s in num1_as_array:
        sum += s
    if sum > 9:
        return digital_root(sum)
    return sum


print(digital_root(num1))