credit_card_number = input("Credit card number: ")


def maskify(credit_card_number):
    mask_number = "#"*(len(credit_card_number)-4) + credit_card_number[-4:]
    return mask_number

print(maskify(credit_card_number))
