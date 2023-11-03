strings = "This website is for losers LOL!"
vowels = ["a", "e", "i", "o", "u"]

strings_without_vowels = ""
for character in strings:
    if character in vowels:
        strings_without_vowels = strings_without_vowels
    else:
        strings_without_vowels += character

print(strings_without_vowels)