example1 = "the-stealth-warrior"

def to_camel_case(phrases):
    camel_output = ""
    array_of_phrases = phrases.split("-")
    first_word = array_of_phrases[0]
    for word in array_of_phrases[1:]:
        camel_output += word.capitalize()
    return first_word+camel_output

print(to_camel_case(example1))