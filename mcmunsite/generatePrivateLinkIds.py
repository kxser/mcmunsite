import random
import string


"""
Alternates between numbers and letters: The string should alternate between letters and numbers, starting with a letter at index 0.
16 characters: The string must have exactly 16 characters.
Total ASCII value divisible by 7 and 15: The sum of the ASCII values of the characters should be divisible by both 7 and 15.
No consecutive characters: No two consecutive characters should have adjacent ASCII values (e.g., no 'a' followed by 'b', or '1' followed by '2').
INSECURE AND RUDAMENTARY IMPLEMENTATION
"""
# Generate a random key that meets the given criteria
def generate_key():
    # Define the range of letters (uppercase, lowercase) and digits
    letters = string.ascii_letters  # A-Z, a-z
    digits = string.digits          # 0-9
    
    def is_valid_consecutive(key):
        """ Check if any two consecutive characters are adjacent in ASCII values """
        for i in range(1, len(key)):
            if abs(ord(key[i]) - ord(key[i-1])) == 1:
                return False
        return True
    
    def get_valid_key():
        """ Generate a key that alternates between letters and numbers and is valid """
        while True:
            key = []
            # Alternate between letters and numbers: start with letter
            for i in range(16):
                if i % 2 == 0:
                    key.append(random.choice(letters))  # Even index: letter
                else:
                    key.append(random.choice(digits))   # Odd index: number
            
            # Check for consecutive characters
            if not is_valid_consecutive(key):
                continue

            # Calculate the sum of ASCII values of the key
            ascii_sum = sum(ord(c) for c in key)

            # Check if the sum is divisible by both 7 and 15
            if ascii_sum % 7 == 0 and ascii_sum % 15 == 0:
                return ''.join(key)
    
    return get_valid_key()

def check_key(key):
    # Condition 1: Check if the key is exactly 16 characters long
    if len(key) != 16:
        return False, "Key must be exactly 16 characters long"
    
    # Define the sets for letters and digits
    letters = string.ascii_letters  # A-Z, a-z
    digits = string.digits          # 0-9
    
    # Condition 2: Check if the key alternates between letters and numbers
    for i in range(len(key)):
        if i % 2 == 0:  # Even index should be a letter
            if key[i] not in letters:
                return False, f"Character at index {i} should be a letter, but found '{key[i]}'"
        else:  # Odd index should be a digit
            if key[i] not in digits:
                return False, f"Character at index {i} should be a digit, but found '{key[i]}'"
    
    # Condition 3: Check if the sum of ASCII values is divisible by both 7 and 15
    ascii_sum = sum(ord(c) for c in key)
    if ascii_sum % 7 != 0 or ascii_sum % 15 != 0:
        return False, f"The sum of ASCII values is not divisible by both 7 and 15 (sum = {ascii_sum})"
    
    # Condition 4: Check if no two consecutive characters are adjacent in ASCII values
    for i in range(1, len(key)):
        if abs(ord(key[i]) - ord(key[i - 1])) == 1:
            return False, f"Characters at index {i-1} and {i} are consecutive in ASCII values"
    
    # If all conditions are satisfied
    return True, "Key is valid"



# Generate and print a valid key
key = generate_key()
print(f"Generated Key: {key}")
is_valid, message = check_key(key)
print(f"Key: {key}\nValid: {is_valid}\nMessage: {message}")
number_of_keys = input("Enter the number of keys you want to generate: ")
for i in range(int(number_of_keys)):
    key = generate_key()
    is_valid, message = check_key(key)
    print(f"ID: {key}\nValid: {is_valid}\nMessage: {message}")
    print("\n")
