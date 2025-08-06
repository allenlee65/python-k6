import subprocess

# Command to run k6 with a script file `ws_test.js`
# Adjust the path to your k6 script and options as needed
k6_command = ['k6', 'run', 'ws_test.js']

try:
    # Run the k6 command and capture stdout and stderr
    result = subprocess.run(k6_command, capture_output=True, text=True, check=True)
    
    # Print the standard output from running k6 (test results, logs)
    print("K6 Test Output:")
    print(result.stdout)
    
    # Print any errors to stderr
    if result.stderr:
        print("Errors:")
        print(result.stderr)

except subprocess.CalledProcessError as e:
    print("An error occurred while running k6:")
    print(e)
