import random
import sys

user_options = ["rock", "paper", "scissors"]

try:
    user_choice = sys.argv[1]
    if user_choice in user_options:
        computer_choice = random.choice(["rock", "paper", "scissors"])
        print(computer_choice)
        if user_choice == computer_choice:
            print("Even")
        elif user_choice == "rock" and computer_choice == "paper":
            print("Computer win")
        elif user_choice == "rock" and computer_choice == "scissors":                
            print("You win")
        elif user_choice == "paper" and computer_choice == "rock":
            print("You win")
        elif user_choice == "paper" and computer_choice == "scissors":                
            print("Computer win")
        elif user_choice == "scissors" and computer_choice == "rock":
            print("Computer win")
        elif user_choice == "scissors" and computer_choice == "paper":
            print("You win")
    else:
        print("Invalid value")
except IndexError:
    print("Invalid format")


