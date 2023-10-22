items = [1, 3, 2, 3]

count = {}

for i in items:
    if i in count:
        count[i] += 1
    else:
        count[i] = 1

print(count)