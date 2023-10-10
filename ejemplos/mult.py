arr1 = [2, 4, 6, 8]

arr2 = []

for a in arr1:
    arr2.append(a*2)

print(arr2)

arr_2 = lambda x: x*2, arr1
print(arr2)