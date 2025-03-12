"""
Alternates between numbers and letters: The string should alternate between letters and numbers, starting with a letter at index 0.
16 characters: The string must have exactly 16 characters.
Total ASCII value divisible by 7 and 15: The sum of the ASCII values of the characters should be divisible by both 7 and 15.
No consecutive characters: No two consecutive characters should have adjacent ASCII values (e.g., no 'a' followed by 'b', or '1' followed by '2').
INSECURE AND RUDAMENTARY IMPLEMENTATION - Only used becuase the data is not sensitive
"""

import random
import string

def generate_key():
    def is_valid_consecutive(key):
        for i in range(1, len(key)):
            if abs(ord(key[i]) - ord(key[i-1])) == 1:
                return False
        return True
    
    def get_valid_key():
        while True:
            key = []
            for i in range(16):
                if i % 2 == 0:
                    key.append(random.choice(string.ascii_letters))
                else:
                    key.append(random.choice(string.digits))
            if not is_valid_consecutive(key):
                continue
            ascii_sum = sum(ord(c) for c in key)
            if ascii_sum % 7 == 0 and ascii_sum % 15 == 0:
                return ''.join(key)
    
    return get_valid_key()

def check_key(key):
    if len(key) != 16:
        return False, "Key must be exactly 16 characters long"
    for i in range(len(key)):
        if i % 2 == 0:
            if key[i] not in string.ascii_letters:
                return False, f"Character at index {i} should be a letter, but found '{key[i]}'"
        else:
            if key[i] not in string.digits:
                return False, f"Character at index {i} should be a digit, but found '{key[i]}'"
    ascii_sum = sum(ord(c) for c in key)
    if ascii_sum % 7 != 0 or ascii_sum % 15 != 0:
        return False, f"The sum of ASCII values is not divisible by both 7 and 15 (sum = {ascii_sum})"
    for i in range(1, len(key)):
        if abs(ord(key[i]) - ord(key[i - 1])) == 1:
            return False, f"Characters at index {i-1} and {i} are consecutive in ASCII values"
    return True, "Key is valid"

key = generate_key()
print(f"Generated Key: {key}")
is_valid, message = check_key(key)
print(f"Key: {key}\nValid: {is_valid}\nMessage: {message}")
number_of_keys = input("Enter the number of keys you want to generate: ")
for i in range(int(number_of_keys)):
    key = generate_key()
    is_valid, message = check_key(key)
    if is_valid:
        print(f"https://mcmun.com.tr/schedule?show=1&pl=1&id={key}")