/* ==========================================================
   SOSEEKS PYTHON ACADEMY — Course Content Data
   All 10 modules with topics, analogies, code, and quizzes
   ========================================================== */

const MODULES = [
/* ============================================================
   MODULE 1: PYTHON FUNDAMENTALS
   ============================================================ */
{
    id: 1, title: 'Python Fundamentals', icon: '🎯', color: '#6366f1',
    description: 'Master the building blocks — variables, data types, operators, strings, and I/O.',
    topics: [
    {
        id: '1.1', title: 'Variables & Data Types', emoji: '🏺',
        analogy: {
            title: 'Variables are like Labeled Jars',
            emoji: '🏺',
            desc: 'Imagine you have jars on a shelf. Each jar has a label (the variable name) and holds something inside (the value). You can swap what\'s inside anytime — that\'s dynamic typing!',
            type: 'jars',
            items: [
                { label: 'name', value: '"Soseeks"' },
                { label: 'age', value: '3' },
                { label: 'pi', value: '3.14' },
                { label: 'active', value: 'True' }
            ]
        },
        theory: `<p>In Python, a <strong>variable</strong> is a name that points to a value stored in memory. Unlike Java or C++, you don't declare a type — Python figures it out automatically. This is called <strong>dynamic typing</strong>.</p>
        <h3>Built-in Data Types</h3>
        <ul>
            <li><code>int</code> — Whole numbers: <code>42</code>, <code>-7</code></li>
            <li><code>float</code> — Decimal numbers: <code>3.14</code>, <code>-0.5</code></li>
            <li><code>str</code> — Text: <code>"hello"</code>, <code>'world'</code></li>
            <li><code>bool</code> — <code>True</code> or <code>False</code></li>
            <li><code>NoneType</code> — <code>None</code> (absence of value)</li>
        </ul>
        <p>Python uses <strong>snake_case</strong> for variable names (e.g., <code>my_variable</code>). Names must start with a letter or underscore, never a digit.</p>`,
        code: [
            {
                title: 'Creating Variables',
                code: '# No type declaration needed — Python infers it!\nname = "Soseeks"\nage = 3\nrating = 4.9\nis_awesome = True\n\nprint(name)         # Soseeks\nprint(type(age))    # <class \'int\'>\nprint(type(rating)) # <class \'float\'>',
                output: 'Soseeks\n<class \'int\'>\n<class \'float\'>'
            },
            {
                title: 'Dynamic Typing — Change Types Freely',
                code: 'x = 10          # x is an int\nprint(type(x))  # <class \'int\'>\n\nx = "hello"     # now x is a string!\nprint(type(x))  # <class \'str\'>\n\n# Type conversion\nnum_str = "42"\nnum = int(num_str)  # Convert string to int\nprint(num + 8)      # 50',
                output: '<class \'int\'>\n<class \'str\'>\n50'
            }
        ],
        takeaways: [
            'Variables are created with <code>=</code> (no type declaration needed)',
            'Python is dynamically typed — a variable can change its type anytime',
            'Use <code>type()</code> to check what data type a value is',
            'Use <code>int()</code>, <code>str()</code>, <code>float()</code> for type conversion',
            'Follow snake_case naming: <code>my_variable</code>, not <code>myVariable</code>'
        ],
        quiz: [
            { q: 'What is the output of type(3.14)?', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], answer: 1, explain: '3.14 has a decimal point, so Python stores it as a float (floating-point number). There is no "number" type in Python.' },
            { q: 'Which is a valid Python variable name?', options: ['2name', 'my-var', '_count', 'class'], answer: 2, explain: '_count is valid. Names can start with letters or underscore. 2name starts with a digit, my-var has a hyphen, and class is a reserved keyword.' },
            { q: 'What happens when you run: x = 5; x = "hello"?', options: ['TypeError', 'x becomes "hello"', 'x stays 5', 'SyntaxError'], answer: 1, explain: 'Python is dynamically typed. x simply points to the new value "hello". The old integer 5 is garbage collected.' },
            { q: 'What does int("42") + 8 return?', options: ['428', '50', '"428"', 'Error'], answer: 1, explain: 'int("42") converts the string "42" to integer 42. Then 42 + 8 = 50.' }
        ]
    },
    {
        id: '1.2', title: 'Operators', emoji: '🔧',
        analogy: {
            title: 'Operators are like Kitchen Tools',
            emoji: '🔧',
            desc: 'Just like you use different tools in a kitchen — a knife to cut (+/-), a scale to compare (>, <), a mixer to combine (and/or) — Python uses operators to perform actions on data.',
            type: 'machine',
            input: '10, 3',
            name: '+ - * /',
            output: '13, 7, 30, 3.3'
        },
        theory: `<p>Operators perform actions on values. Python has several types:</p>
        <h3>Arithmetic Operators</h3>
        <ul>
            <li><code>+</code> Add, <code>-</code> Subtract, <code>*</code> Multiply, <code>/</code> Divide (float)</li>
            <li><code>//</code> Floor division, <code>%</code> Modulo (remainder), <code>**</code> Power</li>
        </ul>
        <h3>Comparison Operators</h3>
        <ul>
            <li><code>==</code> Equal, <code>!=</code> Not equal</li>
            <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
        </ul>
        <h3>Logical Operators</h3>
        <ul>
            <li><code>and</code> — both must be True</li>
            <li><code>or</code> — at least one must be True</li>
            <li><code>not</code> — reverses True/False</li>
        </ul>`,
        code: [
            {
                title: 'Arithmetic & Comparison',
                code: '# Arithmetic\nprint(10 + 3)   # 13\nprint(10 / 3)   # 3.333...\nprint(10 // 3)  # 3 (floor division)\nprint(10 % 3)   # 1 (remainder)\nprint(2 ** 5)   # 32 (power)\n\n# Comparison — returns True/False\nprint(10 > 3)   # True\nprint(10 == 10) # True\nprint(5 != 5)   # False',
                output: '13\n3.3333333333333335\n3\n1\n32\nTrue\nTrue\nFalse'
            },
            {
                title: 'Logical Operators',
                code: 'age = 25\nhas_id = True\n\n# and — both conditions must be True\ncan_enter = age >= 18 and has_id\nprint(can_enter)  # True\n\n# or — at least one must be True\nis_weekend = False\nis_holiday = True\nday_off = is_weekend or is_holiday\nprint(day_off)    # True\n\n# not — reverses the boolean\nprint(not False)  # True',
                output: 'True\nTrue\nTrue'
            }
        ],
        takeaways: [
            '<code>/</code> always returns float, <code>//</code> returns integer (floor division)',
            '<code>%</code> gives remainder — useful for checking even/odd numbers',
            '<code>**</code> is the power operator (not ^ like some languages)',
            '<code>and</code>, <code>or</code>, <code>not</code> are spelled as words, not symbols',
            'Comparison operators return <code>True</code> or <code>False</code>'
        ],
        quiz: [
            { q: 'What is the output of 17 // 5?', options: ['3.4', '3', '4', '2'], answer: 1, explain: '// is floor division — it divides and rounds down. 17 / 5 = 3.4, floored to 3.' },
            { q: 'What does 17 % 5 return?', options: ['3', '2', '3.4', '12'], answer: 1, explain: '% is modulo (remainder). 17 ÷ 5 = 3 remainder 2. So 17 % 5 = 2.' },
            { q: 'What is True and False?', options: ['True', 'False', 'None', 'Error'], answer: 1, explain: '"and" requires both sides to be True. Since one is False, the result is False.' },
            { q: 'What is not not True?', options: ['True', 'False', 'None', 'Error'], answer: 0, explain: 'not True = False, then not False = True. Double negation returns the original value.' }
        ]
    },
    {
        id: '1.3', title: 'Strings & Methods', emoji: '📝',
        analogy: {
            title: 'Strings are like Bead Necklaces',
            emoji: '📿',
            desc: 'Think of a string as a necklace of beads. Each bead is a character with a position (index). You can pick individual beads, cut sections (slicing), or rearrange them.',
            type: 'train',
            items: ['H', 'e', 'l', 'l', 'o']
        },
        theory: `<p>A <strong>string</strong> is a sequence of characters enclosed in quotes. Each character has an index starting from 0.</p>
        <h3>Key String Concepts</h3>
        <ul>
            <li><strong>Indexing</strong> — Access a character: <code>"Hello"[0]</code> → <code>'H'</code></li>
            <li><strong>Slicing</strong> — Get a portion: <code>"Hello"[1:4]</code> → <code>'ell'</code></li>
            <li><strong>Immutable</strong> — You can't change characters in place</li>
            <li><strong>f-strings</strong> — Format strings with variables: <code>f"Hi {name}"</code></li>
        </ul>
        <h3>Common Methods</h3>
        <ul>
            <li><code>.upper()</code>, <code>.lower()</code>, <code>.title()</code></li>
            <li><code>.strip()</code>, <code>.split()</code>, <code>.join()</code></li>
            <li><code>.replace()</code>, <code>.find()</code>, <code>.count()</code></li>
        </ul>`,
        code: [
            {
                title: 'Indexing, Slicing & f-strings',
                code: 'text = "Python"\n\n# Indexing (0-based)\nprint(text[0])    # P\nprint(text[-1])   # n (last character)\n\n# Slicing [start:end]\nprint(text[0:3])  # Pyt\nprint(text[2:])   # thon\nprint(text[::-1]) # nohtyP (reverse!)\n\n# f-strings (formatted strings)\nname = "Soseeks"\nyear = 2026\nprint(f"{name} was founded. Year: {year}")',
                output: 'P\nn\nPyt\nthon\nnohtyP\nSoseeks was founded. Year: 2026'
            },
            {
                title: 'Useful String Methods',
                code: 'msg = "  Hello, World!  "\n\nprint(msg.strip())        # "Hello, World!"\nprint(msg.strip().upper()) # "HELLO, WORLD!"\nprint(msg.strip().lower()) # "hello, world!"\n\ncsv = "apple,banana,cherry"\nfruits = csv.split(",")\nprint(fruits)  # [\'apple\', \'banana\', \'cherry\']\n\njoined = " | ".join(fruits)\nprint(joined)  # apple | banana | cherry',
                output: 'Hello, World!\nHELLO, WORLD!\nhello, world!\n[\'apple\', \'banana\', \'cherry\']\napple | banana | cherry'
            }
        ],
        takeaways: [
            'Strings are indexed from 0. Use negative indices to count from the end',
            'Slicing: <code>[start:end:step]</code> — end is exclusive',
            '<code>[::-1]</code> reverses a string — popular interview question!',
            'f-strings (<code>f"..."</code>) are the modern way to format strings',
            'Strings are immutable — methods return new strings, don\'t modify originals'
        ],
        quiz: [
            { q: 'What is "Python"[1:4]?', options: ['"Pyt"', '"yth"', '"ytho"', '"ython"'], answer: 1, explain: 'Slicing is [start:end) — start is inclusive, end is exclusive. Index 1="y", 2="t", 3="h". So "yth".' },
            { q: 'What does "hello"[::-1] return?', options: ['"hello"', '"olleh"', '"ello"', 'Error'], answer: 1, explain: '[::-1] reverses the string. "hello" reversed is "olleh". This is a common interview trick!' },
            { q: 'Are Python strings mutable or immutable?', options: ['Mutable', 'Immutable', 'Depends on length', 'Depends on content'], answer: 1, explain: 'Strings are immutable — once created, individual characters cannot be changed. Methods like .upper() return NEW strings.' },
            { q: '"apple,banana".split(",") returns?', options: ['"apple banana"', '["apple", "banana"]', '("apple", "banana")', 'Error'], answer: 1, explain: '.split(",") splits the string at commas and returns a LIST of substrings.' }
        ]
    },
    {
        id: '1.4', title: 'Input & Output', emoji: '💬',
        analogy: {
            title: 'I/O is like a Conversation',
            emoji: '🗣️',
            desc: 'print() is you talking TO the user. input() is you listening FROM the user. Every conversation has a speaker and a listener!',
            type: 'machine',
            input: 'input()',
            name: 'Program',
            output: 'print()'
        },
        theory: `<p><code>print()</code> displays output to the screen. <code>input()</code> reads text from the user.</p>
        <h3>Important Notes</h3>
        <ul>
            <li><code>input()</code> ALWAYS returns a <strong>string</strong> — you must convert it for numbers</li>
            <li><code>print()</code> accepts multiple arguments separated by commas</li>
            <li>Use <code>sep</code> and <code>end</code> parameters to customize output</li>
        </ul>`,
        code: [
            {
                title: 'print() — Advanced Usage',
                code: '# Multiple values\nprint("Name:", "Soseeks", "Age:", 3)\n\n# Custom separator\nprint("2026", "03", "08", sep="-")\n\n# Custom end (no newline)\nprint("Loading", end="...")\nprint("Done!")\n\n# f-string formatting\nprice = 29999\nprint(f"Course fee: ₹{price:,}")',
                output: 'Name: Soseeks Age: 3\n2026-03-08\nLoading...Done!\nCourse fee: ₹29,999'
            },
            {
                title: 'input() — Always Returns String!',
                code: 'name = input("Your name: ")  # Returns string\nage = input("Your age: ")    # Returns string!\n\n# WRONG: age + 1 → Error (can\'t add str + int)\n# RIGHT: Convert first!\nage = int(age)\nnext_year = age + 1\nprint(f"{name} will be {next_year} next year")',
                output: 'Your name: Sanjay\nYour age: 25\nSanjay will be 26 next year'
            }
        ],
        takeaways: [
            '<code>input()</code> always returns a string — convert with <code>int()</code> or <code>float()</code>',
            '<code>print()</code> uses <code>sep=" "</code> (space) and <code>end="\\n"</code> (newline) by default',
            'Use f-strings for clean, readable output formatting',
            '<code>:,</code> inside f-strings adds thousand separators (e.g., 29,999)'
        ],
        quiz: [
            { q: 'What type does input() return?', options: ['int', 'float', 'str', 'Depends on what user types'], answer: 2, explain: 'input() ALWAYS returns a string, even if the user types a number. You must explicitly convert it.' },
            { q: 'What does print("A", "B", sep="-") output?', options: ['A B', 'A-B', 'A - B', 'AB'], answer: 1, explain: 'sep="-" replaces the default space separator with a hyphen. So "A" and "B" are joined by "-".' },
            { q: 'What happens with: x = input(); print(x + 1)?', options: ['Prints x+1', 'TypeError', 'Prints 1', 'SyntaxError'], answer: 1, explain: 'input() returns a string. You can\'t add a string + integer. You\'d need int(x) + 1.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 2: CONTROL FLOW
   ============================================================ */
{
    id: 2, title: 'Control Flow', icon: '🚦', color: '#8b5cf6',
    description: 'Learn decision making (if/else) and repetition (for/while loops).',
    topics: [
    {
        id: '2.1', title: 'if / elif / else', emoji: '🚦',
        analogy: {
            title: 'Decisions are like a Traffic Light',
            emoji: '🚦',
            desc: 'A traffic light checks conditions: If RED → stop, elif YELLOW → slow down, else (GREEN) → go! Python\'s if/elif/else works the same way — check conditions one by one.',
            type: 'traffic',
            active: 'green',
            label: 'if red → stop | elif yellow → slow | else → go!'
        },
        theory: `<p>Conditional statements let your program make decisions based on conditions.</p>
        <ul>
            <li><code>if</code> — checks first condition</li>
            <li><code>elif</code> — checks another condition (optional, can have many)</li>
            <li><code>else</code> — runs if NO conditions matched (optional)</li>
        </ul>
        <p><strong>Indentation matters!</strong> Python uses 4 spaces (or 1 tab) to define code blocks — no curly braces like other languages.</p>`,
        code: [
            {
                title: 'Basic if/elif/else',
                code: 'score = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint(f"Score: {score}, Grade: {grade}")',
                output: 'Score: 85, Grade: B'
            },
            {
                title: 'Nested Conditions & Ternary',
                code: 'age = 20\nhas_license = True\n\n# Nested if\nif age >= 18:\n    if has_license:\n        print("You can drive!")\n    else:\n        print("Get a license first")\nelse:\n    print("Too young to drive")\n\n# Ternary (one-line if)\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)',
                output: 'You can drive!\nAdult'
            }
        ],
        takeaways: [
            'Python uses indentation (4 spaces) instead of curly braces for blocks',
            '<code>elif</code> is Python\'s "else if" — checks are sequential, first match wins',
            'Ternary syntax: <code>value_if_true if condition else value_if_false</code>',
            'Use <code>and</code>/<code>or</code> to combine conditions'
        ],
        quiz: [
            { q: 'What is the output?\nx = 15\nif x > 20: print("A")\nelif x > 10: print("B")\nelif x > 5: print("C")\nelse: print("D")', code: 'x = 15\nif x > 20: print("A")\nelif x > 10: print("B")\nelif x > 5: print("C")\nelse: print("D")', options: ['A', 'B', 'C', 'B and C'], answer: 1, explain: 'elif checks are sequential. x=15 fails x>20, but passes x>10, so "B" is printed. Once a match is found, remaining elif/else are skipped.' },
            { q: 'What does this return: "Yes" if 5 > 3 else "No"?', options: ['"Yes"', '"No"', 'True', 'Error'], answer: 0, explain: '5 > 3 is True, so the ternary returns "Yes".' },
            { q: 'What happens if you forget indentation after if?', options: ['Nothing', 'IndentationError', 'Runs normally', 'SyntaxWarning'], answer: 1, explain: 'Python REQUIRES indentation to define code blocks. Missing indentation causes IndentationError.' }
        ]
    },
    {
        id: '2.2', title: 'for Loops', emoji: '🔄',
        analogy: {
            title: 'for Loop is like Reading a Book Page by Page',
            emoji: '📖',
            desc: 'When you read a book, you go through it page by page from start to finish. A for loop does the same — it goes through each item in a sequence, one at a time.',
            type: 'conveyor',
            items: ['1', '2', '3', '4', '5'],
            consumed: 3
        },
        theory: `<p>A <code>for</code> loop iterates over a sequence (list, string, range, etc.) and executes the body once for each item.</p>
        <h3>range() Function</h3>
        <ul>
            <li><code>range(5)</code> → 0, 1, 2, 3, 4</li>
            <li><code>range(2, 8)</code> → 2, 3, 4, 5, 6, 7</li>
            <li><code>range(0, 10, 2)</code> → 0, 2, 4, 6, 8 (step of 2)</li>
        </ul>
        <p><code>enumerate()</code> gives both index and value — very useful!</p>`,
        code: [
            {
                title: 'Iterating with for',
                code: '# Loop through a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")\n\n# Loop with range\nfor i in range(5):\n    print(i, end=" ")  # 0 1 2 3 4\n\nprint()  # newline\n\n# enumerate — get index + value\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")',
                output: 'I like apple\nI like banana\nI like cherry\n0 1 2 3 4\n0: apple\n1: banana\n2: cherry'
            },
            {
                title: 'break, continue, else',
                code: '# break — exit loop early\nfor num in range(10):\n    if num == 5:\n        print("Found 5! Stopping.")\n        break\n    print(num, end=" ")\n\nprint()\n\n# continue — skip current iteration\nfor num in range(6):\n    if num % 2 == 0:\n        continue  # skip even numbers\n    print(num, end=" ")  # prints only odd',
                output: '0 1 2 3 4 Found 5! Stopping.\n1 3 5'
            }
        ],
        takeaways: [
            '<code>range(n)</code> generates 0 to n-1 — end value is always excluded',
            '<code>enumerate()</code> returns (index, value) pairs — cleaner than manual counting',
            '<code>break</code> exits the loop entirely, <code>continue</code> skips to next iteration',
            'for loops work with any iterable: lists, strings, tuples, dicts, files'
        ],
        quiz: [
            { q: 'What does range(2, 6) produce?', options: ['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5', '2, 3, 4'], answer: 1, explain: 'range(start, end) goes from start to end-1. So range(2,6) gives 2, 3, 4, 5.' },
            { q: 'What does break do inside a loop?', options: ['Skips current iteration', 'Exits the loop completely', 'Pauses the loop', 'Restarts the loop'], answer: 1, explain: 'break immediately exits the entire loop. continue (not break) skips to the next iteration.' },
            { q: 'What is the output of: for i in "Hi": print(i)', options: ['Hi', 'H i', 'H\\ni', 'Error'], answer: 2, explain: 'Strings are iterable. The loop prints each character on a new line: H then i.' }
        ]
    },
    {
        id: '2.3', title: 'while Loops', emoji: '🔁',
        analogy: {
            title: 'while Loop is like Waiting for a Bus',
            emoji: '🚌',
            desc: 'You keep waiting at the bus stop WHILE the bus hasn\'t arrived. The moment it arrives (condition becomes False), you stop waiting. A while loop keeps running as long as its condition is True.',
            type: 'machine',
            input: 'condition?',
            name: 'while',
            output: 'repeat until False'
        },
        theory: `<p>A <code>while</code> loop runs as long as its condition is <code>True</code>. Be careful — if the condition never becomes False, you get an <strong>infinite loop</strong>!</p>
        <h3>When to use while vs for?</h3>
        <ul>
            <li><strong>for</strong> — when you know how many times to loop (or have a collection)</li>
            <li><strong>while</strong> — when you loop until a condition changes (unknown count)</li>
        </ul>`,
        code: [
            {
                title: 'while Loop Basics',
                code: '# Countdown\ncount = 5\nwhile count > 0:\n    print(count, end=" ")\n    count -= 1   # IMPORTANT: update condition!\nprint("Go!")\n\n# User input loop\n# password = ""\n# while password != "secret":\n#     password = input("Password: ")\n# print("Access granted!")',
                output: '5 4 3 2 1 Go!'
            },
            {
                title: 'while with break — Input Validation',
                code: '# Infinite loop with break\ntotal = 0\ncount = 0\n\nwhile True:  # runs forever until break\n    num = int(input("Enter number (0 to stop): "))\n    if num == 0:\n        break\n    total += num\n    count += 1\n\nif count > 0:\n    print(f"Average: {total / count}")',
                output: 'Enter number (0 to stop): 10\nEnter number (0 to stop): 20\nEnter number (0 to stop): 0\nAverage: 15.0'
            }
        ],
        takeaways: [
            'Always ensure the while condition eventually becomes False (avoid infinite loops!)',
            'Use <code>while True</code> + <code>break</code> for loops where exit is conditional',
            'Use <code>for</code> when iterating over collections; <code>while</code> for condition-based loops',
            'Common pattern: user input validation — keep asking until valid input received'
        ],
        quiz: [
            { q: 'What causes an infinite loop?', options: ['Using break', 'Condition never becomes False', 'Using continue', 'Looping over a list'], answer: 1, explain: 'If the while condition never becomes False, the loop runs forever. Always update the variable in the condition!' },
            { q: 'When is while loop preferred over for loop?', options: ['Always', 'When you know exact count', 'When loop count is unknown', 'Never'], answer: 2, explain: 'Use while when you don\'t know how many iterations — like waiting for user input or a condition to change.' },
            { q: 'What does while True: ... break do?', options: ['Error', 'Runs once', 'Runs forever', 'Runs until break is hit'], answer: 3, explain: 'while True creates an infinite loop. break exits it when a specific condition is met. Very common pattern!' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 3: DATA STRUCTURES
   ============================================================ */
{
    id: 3, title: 'Data Structures', icon: '📦', color: '#06b6d4',
    description: 'Lists, tuples, dictionaries, sets — and powerful comprehensions.',
    topics: [
    {
        id: '3.1', title: 'Lists', emoji: '🚂',
        analogy: {
            title: 'Lists are like a Train with Numbered Compartments',
            emoji: '🚂',
            desc: 'A train has compartments numbered 0, 1, 2, 3... You can add passengers, remove them, or swap them. Lists work the same — ordered, indexed, and mutable!',
            type: 'train',
            items: ['"apple"', '"banana"', '"cherry"', '"date"']
        },
        theory: `<p>A <strong>list</strong> is an ordered, mutable (changeable) collection. It's the most versatile data structure in Python.</p>
        <h3>Key Features</h3>
        <ul>
            <li><strong>Ordered</strong> — items maintain their insertion order</li>
            <li><strong>Indexed</strong> — access by position (0-based)</li>
            <li><strong>Mutable</strong> — can add, remove, change items</li>
            <li><strong>Allows duplicates</strong> — same value can appear multiple times</li>
        </ul>`,
        code: [
            {
                title: 'Creating & Modifying Lists',
                code: 'fruits = ["apple", "banana", "cherry"]\n\n# Access by index\nprint(fruits[0])    # apple\nprint(fruits[-1])   # cherry\n\n# Modify\nfruits[1] = "blueberry"  # replace banana\nfruits.append("date")    # add to end\nfruits.insert(1, "avocado")  # insert at index 1\n\nprint(fruits)\nprint(f"Length: {len(fruits)}")',
                output: '[\'apple\', \'avocado\', \'blueberry\', \'cherry\', \'date\']\nLength: 5'
            },
            {
                title: 'Slicing & Useful Methods',
                code: 'nums = [3, 1, 4, 1, 5, 9, 2, 6]\n\n# Slicing\nprint(nums[2:5])    # [4, 1, 5]\nprint(nums[:3])     # [3, 1, 4]\n\n# Sorting\nnums.sort()\nprint(nums)         # [1, 1, 2, 3, 4, 5, 6, 9]\n\n# List comprehension (powerful!)\nsquares = [x**2 for x in range(6)]\nprint(squares)      # [0, 1, 4, 9, 16, 25]\n\n# Filter with comprehension\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)        # [0, 2, 4, 6, 8]',
                output: '[4, 1, 5]\n[3, 1, 4]\n[1, 1, 2, 3, 4, 5, 6, 9]\n[0, 1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8]'
            }
        ],
        takeaways: [
            'Lists are created with <code>[]</code> and are mutable (can change)',
            '<code>.append()</code> adds to end, <code>.insert(i, val)</code> adds at position',
            '<code>.sort()</code> modifies in place, <code>sorted()</code> returns a new list',
            'List comprehension: <code>[expr for x in iterable if condition]</code> — very Pythonic!',
            'Interview tip: Know the difference between <code>.sort()</code> and <code>sorted()</code>'
        ],
        quiz: [
            { q: 'What does [1,2,3].append([4,5]) produce?', options: ['[1,2,3,4,5]', '[1,2,3,[4,5]]', 'Error', '[1,2,3,4,5,[]]'], answer: 1, explain: 'append adds the ENTIRE object as a single element. Use .extend([4,5]) to add individual elements.' },
            { q: 'What is [x**2 for x in range(4)]?', options: ['[1,4,9,16]', '[0,1,4,9]', '[0,2,4,6]', '[1,2,3,4]'], answer: 1, explain: 'range(4) gives 0,1,2,3. Squaring each: 0,1,4,9. So [0,1,4,9].' },
            { q: 'Difference between .sort() and sorted()?', options: ['No difference', '.sort() returns new list', '.sort() modifies in place, sorted() returns new', 'sorted() is slower'], answer: 2, explain: '.sort() modifies the original list and returns None. sorted() creates and returns a NEW sorted list, leaving original unchanged. This is a very common interview question!' }
        ]
    },
    {
        id: '3.2', title: 'Tuples', emoji: '📦',
        analogy: {
            title: 'Tuples are like Sealed Envelopes',
            emoji: '✉️',
            desc: 'Once you seal a letter in an envelope, you can read it but can\'t change what\'s inside. Tuples are the same — immutable (can\'t modify after creation).',
            type: 'envelope',
            content: '("Soseeks", 2023, True)'
        },
        theory: `<p>A <strong>tuple</strong> is like a list, but <strong>immutable</strong> — once created, you cannot add, remove, or change elements.</p>
        <h3>When to Use Tuples?</h3>
        <ul>
            <li>Data that shouldn't change (coordinates, RGB colors, database records)</li>
            <li>Dictionary keys (lists can't be keys, tuples can!)</li>
            <li>Function return values (returning multiple values)</li>
            <li>Slightly faster than lists due to immutability</li>
        </ul>`,
        code: [
            {
                title: 'Tuple Basics & Unpacking',
                code: '# Creating tuples\npoint = (10, 20)\nrgb = (255, 128, 0)\nsingleton = (42,)  # Note the comma!\n\n# Unpacking — assign tuple values to variables\nx, y = point\nprint(f"x={x}, y={y}")\n\n# Swap variables (Pythonic!)\na, b = 1, 2\na, b = b, a  # swap using tuple unpacking\nprint(f"a={a}, b={b}")\n\n# Tuple as function return\ndef get_user():\n    return "Sanjay", 25, "Bhilai"\n\nname, age, city = get_user()\nprint(f"{name} from {city}")',
                output: 'x=10, y=20\na=2, b=1\nSanjay from Bhilai'
            }
        ],
        takeaways: [
            'Tuples are created with <code>()</code> and are immutable',
            'Single-element tuple needs a trailing comma: <code>(42,)</code> not <code>(42)</code>',
            'Tuple unpacking: <code>a, b = (1, 2)</code> — clean and Pythonic',
            'Variable swap: <code>a, b = b, a</code> — no temp variable needed!',
            'Functions can return multiple values as tuples'
        ],
        quiz: [
            { q: 'What is type((42))?', options: ['tuple', 'int', 'list', 'Error'], answer: 1, explain: '(42) is just 42 in parentheses — it\'s an int! For a single-element tuple, you need a comma: (42,).' },
            { q: 'Can tuples be dictionary keys?', options: ['Yes', 'No', 'Only if they contain strings', 'Only empty tuples'], answer: 0, explain: 'Yes! Tuples are immutable (hashable), so they can be dict keys. Lists cannot because they\'re mutable.' },
            { q: 'What does a, b = b, a do?', options: ['Error', 'Nothing', 'Swaps values of a and b', 'Creates tuples'], answer: 2, explain: 'Python evaluates the right side first as a tuple (b, a), then unpacks it into a and b. Elegant swap!' }
        ]
    },
    {
        id: '3.3', title: 'Dictionaries', emoji: '📒',
        analogy: {
            title: 'Dictionaries are like Phone Contacts',
            emoji: '📱',
            desc: 'Your phone contacts app: you search by NAME (key) and get the PHONE NUMBER (value). No duplicate names! That\'s exactly how dictionaries work — key-value pairs.',
            type: 'contact',
            items: [
                { key: '"Sanjay"', value: '"8500518050"' },
                { key: '"office"', value: '"sanjay@soseeks.com"' },
                { key: '"age"', value: '25' }
            ]
        },
        theory: `<p>A <strong>dictionary</strong> stores data as <strong>key-value pairs</strong>. Keys must be unique and immutable (strings, numbers, tuples).</p>
        <h3>Key Features</h3>
        <ul>
            <li><strong>Fast lookup</strong> — O(1) average time to find a value by key</li>
            <li><strong>Mutable</strong> — add, update, delete key-value pairs</li>
            <li><strong>Keys must be unique</strong> — duplicate key overwrites the old value</li>
            <li><strong>Ordered</strong> (Python 3.7+) — maintains insertion order</li>
        </ul>`,
        code: [
            {
                title: 'CRUD Operations',
                code: 'user = {"name": "Sanjay", "age": 25, "city": "Bhilai"}\n\n# Read\nprint(user["name"])         # Sanjay\nprint(user.get("phone", "N/A"))  # N/A (safe access)\n\n# Update\nuser["age"] = 26\n\n# Create (add new key)\nuser["role"] = "Founder"\n\n# Delete\ndel user["city"]\n\nprint(user)\nprint(f"Keys: {list(user.keys())}")',
                output: 'Sanjay\nN/A\n{\'name\': \'Sanjay\', \'age\': 26, \'role\': \'Founder\'}\nKeys: [\'name\', \'age\', \'role\']'
            },
            {
                title: 'Looping & Dict Comprehension',
                code: 'prices = {"python": 29999, "java": 29999, "fullstack": 69999}\n\n# Loop through keys and values\nfor course, price in prices.items():\n    print(f"{course}: ₹{price:,}")\n\n# Dict comprehension\ndiscounted = {k: v * 0.9 for k, v in prices.items()}\nprint(discounted)',
                output: 'python: ₹29,999\njava: ₹29,999\nfullstack: ₹69,999\n{\'python\': 26999.1, \'java\': 26999.1, \'fullstack\': 62999.1}'
            }
        ],
        takeaways: [
            'Use <code>.get(key, default)</code> for safe access — avoids KeyError',
            '<code>.items()</code> returns key-value pairs, <code>.keys()</code> returns keys only',
            'Dict comprehension: <code>{k: v for k, v in iterable}</code>',
            'Interview tip: dicts have O(1) average lookup — much faster than searching a list'
        ],
        quiz: [
            { q: 'What happens if you access dict["missing_key"]?', options: ['Returns None', 'Returns ""', 'KeyError', 'Returns 0'], answer: 2, explain: 'Accessing a missing key with [] raises KeyError. Use .get("missing_key", default) for safe access.' },
            { q: 'Can a list be a dictionary key?', options: ['Yes', 'No', 'Only empty lists', 'Depends'], answer: 1, explain: 'No! Dict keys must be hashable (immutable). Lists are mutable, so they can\'t be keys. Use tuples instead.' },
            { q: 'What does .items() return?', options: ['Only keys', 'Only values', 'Key-value pairs', 'A new dict'], answer: 2, explain: '.items() returns dict_items containing (key, value) tuples. Perfect for looping!' }
        ]
    },
    {
        id: '3.4', title: 'Sets', emoji: '🎯',
        analogy: {
            title: 'Sets are like a Stamp Collection — No Duplicates!',
            emoji: '💎',
            desc: 'A stamp collector only keeps unique stamps. If you try to add a duplicate, it\'s simply ignored. Sets work the same — they automatically remove duplicates.',
            type: 'stamps',
            items: [
                { val: '🍎', dup: false }, { val: '🍌', dup: false }, { val: '🍎', dup: true },
                { val: '🍒', dup: false }, { val: '🍌', dup: true }, { val: '🍇', dup: false }
            ]
        },
        theory: `<p>A <strong>set</strong> is an unordered collection of <strong>unique</strong> elements. Duplicates are automatically removed.</p>
        <h3>Set Operations (like math!)</h3>
        <ul>
            <li><code>|</code> or <code>.union()</code> — combine all elements</li>
            <li><code>&</code> or <code>.intersection()</code> — common elements only</li>
            <li><code>-</code> or <code>.difference()</code> — elements in first but not second</li>
            <li><code>^</code> or <code>.symmetric_difference()</code> — elements in either but not both</li>
        </ul>`,
        code: [
            {
                title: 'Sets & Operations',
                code: '# Duplicates removed automatically\nnums = {3, 1, 4, 1, 5, 9, 2, 6, 5}\nprint(nums)  # {1, 2, 3, 4, 5, 6, 9}\n\n# Remove duplicates from a list\nnames = ["Sanjay", "Raj", "Sanjay", "Priya", "Raj"]\nunique = list(set(names))\nprint(unique)  # [\'Sanjay\', \'Raj\', \'Priya\']\n\n# Set operations\nA = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7, 8}\nprint(A | B)   # Union: {1,2,3,4,5,6,7,8}\nprint(A & B)   # Intersection: {4, 5}\nprint(A - B)   # Difference: {1, 2, 3}',
                output: '{1, 2, 3, 4, 5, 6, 9}\n[\'Sanjay\', \'Raj\', \'Priya\']\n{1, 2, 3, 4, 5, 6, 7, 8}\n{4, 5}\n{1, 2, 3}'
            }
        ],
        takeaways: [
            'Sets automatically remove duplicates — great for deduplication!',
            '<code>set(list)</code> is the fastest way to remove duplicates from a list',
            'Sets are unordered — you can\'t access elements by index',
            'Set operations (union, intersection, difference) are O(n) — very efficient',
            'Interview tip: "Remove duplicates from a list" → use <code>list(set(data))</code>'
        ],
        quiz: [
            { q: 'What is len({1, 2, 2, 3, 3, 3})?', options: ['6', '3', '1', 'Error'], answer: 1, explain: 'Sets remove duplicates. {1, 2, 2, 3, 3, 3} becomes {1, 2, 3}, so length is 3.' },
            { q: '{1,2,3} & {2,3,4} equals?', options: ['{1,2,3,4}', '{2,3}', '{1,4}', '{2,3,4}'], answer: 1, explain: '& is intersection — elements common to BOTH sets. 2 and 3 are in both.' },
            { q: 'Can you access set elements by index?', options: ['Yes', 'No', 'Only the first element', 'Only with .get()'], answer: 1, explain: 'Sets are unordered, so there\'s no concept of "index". Use a list if you need ordered access.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 4: FUNCTIONS
   ============================================================ */
{
    id: 4, title: 'Functions', icon: '⚙️', color: '#10b981',
    description: 'Define reusable code blocks — parameters, returns, lambda, and functional tools.',
    topics: [
    {
        id: '4.1', title: 'Defining Functions', emoji: '🏭',
        analogy: {
            title: 'Functions are like Juice Machines',
            emoji: '🧃',
            desc: 'Put fruit IN (arguments), the machine processes it, and juice comes OUT (return value). You build the machine once and use it again and again with different fruits!',
            type: 'machine',
            input: '🍊 fruit',
            name: 'blend()',
            output: '🧃 juice'
        },
        theory: `<p>A <strong>function</strong> is a reusable block of code that performs a specific task.</p>
        <h3>Why Functions?</h3>
        <ul>
            <li><strong>Reusability</strong> — write once, use many times</li>
            <li><strong>Readability</strong> — give meaningful names to code blocks</li>
            <li><strong>Modularity</strong> — break complex problems into smaller pieces</li>
        </ul>
        <h3>Parameters vs Arguments</h3>
        <ul>
            <li><strong>Parameters</strong> — variables in the function definition</li>
            <li><strong>Arguments</strong> — actual values passed when calling</li>
        </ul>`,
        code: [
            {
                title: 'Basic Functions & Default Parameters',
                code: 'def greet(name, greeting="Hello"):\n    """Greet a person with a custom message."""\n    return f"{greeting}, {name}!"\n\n# Using the function\nprint(greet("Sanjay"))           # Uses default greeting\nprint(greet("Sanjay", "Welcome")) # Custom greeting\n\n# Keyword arguments (order doesn\'t matter)\nprint(greet(greeting="Hi", name="Team"))',
                output: 'Hello, Sanjay!\nWelcome, Sanjay!\nHi, Team!'
            },
            {
                title: '*args and **kwargs',
                code: '# *args — accept any number of positional arguments\ndef add_all(*args):\n    return sum(args)\n\nprint(add_all(1, 2, 3))      # 6\nprint(add_all(10, 20, 30, 40)) # 100\n\n# **kwargs — accept any number of keyword arguments\ndef build_profile(**kwargs):\n    return kwargs\n\nprofile = build_profile(name="Sanjay", role="Founder", city="Bhilai")\nprint(profile)',
                output: '6\n100\n{\'name\': \'Sanjay\', \'role\': \'Founder\', \'city\': \'Bhilai\'}'
            }
        ],
        takeaways: [
            '<code>def</code> defines a function. <code>return</code> sends a value back to the caller',
            'Default parameters make arguments optional: <code>def f(x, y=10)</code>',
            '<code>*args</code> collects extra positional args as a tuple',
            '<code>**kwargs</code> collects extra keyword args as a dictionary',
            'Interview tip: Order matters — <code>def f(pos, *args, key=val, **kwargs)</code>'
        ],
        quiz: [
            { q: 'What does a function return if there\'s no return statement?', options: ['0', '""', 'None', 'Error'], answer: 2, explain: 'Functions without an explicit return statement return None by default.' },
            { q: 'What is *args inside a function?', options: ['A list', 'A tuple', 'A dict', 'A set'], answer: 1, explain: '*args collects extra positional arguments into a TUPLE (not a list).' },
            { q: 'What is **kwargs inside a function?', options: ['A list', 'A tuple', 'A dict', 'A set'], answer: 2, explain: '**kwargs collects extra keyword arguments into a DICTIONARY.' },
            { q: 'What is the output of: def f(a, b=5): return a+b; print(f(3))?', options: ['3', '5', '8', 'Error'], answer: 2, explain: 'b defaults to 5. So f(3) calls f(a=3, b=5), returning 3+5=8.' }
        ]
    },
    {
        id: '4.2', title: 'Lambda & map/filter/reduce', emoji: '⚡',
        analogy: {
            title: 'Lambda is a Sticky Note Function',
            emoji: '📌',
            desc: 'A regular function is a full recipe card. A lambda is a sticky note — quick, one-line, throwaway. You use it for small tasks that don\'t need a full recipe.',
            type: 'machine',
            input: 'x',
            name: 'λ: x²',
            output: 'x * x'
        },
        theory: `<p>A <strong>lambda</strong> is an anonymous (unnamed) function defined in one line. It's used for short, simple operations.</p>
        <h3>Functional Tools</h3>
        <ul>
            <li><code>map(func, iterable)</code> — apply function to every item</li>
            <li><code>filter(func, iterable)</code> — keep items where function returns True</li>
            <li><code>reduce(func, iterable)</code> — combine all items into one value</li>
        </ul>
        <p>These are powerful for data transformation without writing loops!</p>`,
        code: [
            {
                title: 'Lambda Functions',
                code: '# Regular function\ndef square(x):\n    return x ** 2\n\n# Same thing as lambda\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# Lambda with multiple params\nadd = lambda a, b: a + b\nprint(add(3, 7))  # 10\n\n# Sorting with lambda\nstudents = [("Sanjay", 85), ("Priya", 92), ("Raj", 78)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nprint(students)  # Sorted by score descending',
                output: '25\n10\n[(\'Priya\', 92), (\'Sanjay\', 85), (\'Raj\', 78)]'
            },
            {
                title: 'map, filter, reduce',
                code: '# map — apply function to all items\nnums = [1, 2, 3, 4, 5]\nsquares = list(map(lambda x: x**2, nums))\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# filter — keep items that pass condition\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)  # [2, 4]\n\n# reduce — combine all into one value\nfrom functools import reduce\ntotal = reduce(lambda a, b: a + b, nums)\nprint(total)  # 15 (1+2+3+4+5)',
                output: '[1, 4, 9, 16, 25]\n[2, 4]\n15'
            }
        ],
        takeaways: [
            'Lambda syntax: <code>lambda params: expression</code> (single expression only)',
            '<code>map()</code> transforms every item — like a conveyor belt painting machine',
            '<code>filter()</code> keeps only items that pass the test',
            '<code>reduce()</code> combines all items into a single value (needs functools import)',
            'Interview tip: List comprehensions are usually preferred over map/filter in Python'
        ],
        quiz: [
            { q: 'What is the output of: (lambda x, y: x * y)(3, 4)?', options: ['7', '12', '34', 'Error'], answer: 1, explain: 'The lambda takes x and y, returns x*y. Called with (3,4): 3*4 = 12.' },
            { q: 'list(map(str, [1,2,3])) returns?', options: ['[1,2,3]', '["1","2","3"]', '"123"', 'Error'], answer: 1, explain: 'map applies str() to each element, converting 1→"1", 2→"2", 3→"3". Wrapped in list() gives ["1","2","3"].' },
            { q: 'list(filter(lambda x: x>3, [1,2,3,4,5])) returns?', options: ['[1,2,3]', '[4,5]', '[3,4,5]', '[True,True]'], answer: 1, explain: 'filter keeps items where the lambda returns True. Only 4 and 5 are > 3.' }
        ]
    },
    {
        id: '4.3', title: 'Scope & Recursion', emoji: '🔭',
        analogy: {
            title: 'Scope is like Rooms in a House',
            emoji: '🏠',
            desc: 'Local scope is your bedroom — only you can see what\'s there. Global scope is the living room — everyone can see it. A function creates its own "room" (local scope).',
            type: 'machine',
            input: 'local',
            name: 'function scope',
            output: 'global'
        },
        theory: `<p><strong>Scope</strong> determines where a variable is accessible.</p>
        <h3>LEGB Rule (lookup order)</h3>
        <ul>
            <li><strong>L</strong>ocal — inside the current function</li>
            <li><strong>E</strong>nclosing — in the enclosing (outer) function</li>
            <li><strong>G</strong>lobal — at the module level</li>
            <li><strong>B</strong>uilt-in — Python's built-in names</li>
        </ul>
        <h3>Recursion</h3>
        <p>A function that calls itself. Must have a <strong>base case</strong> to stop, or it'll recurse forever!</p>`,
        code: [
            {
                title: 'Scope — Local vs Global',
                code: 'x = "global"  # Global scope\n\ndef outer():\n    x = "outer"  # Enclosing scope\n    \n    def inner():\n        x = "inner"  # Local scope\n        print(f"Inner: {x}")\n    \n    inner()\n    print(f"Outer: {x}")\n\nouter()\nprint(f"Global: {x}")',
                output: 'Inner: inner\nOuter: outer\nGlobal: global'
            },
            {
                title: 'Recursion — Factorial',
                code: 'def factorial(n):\n    # Base case — stops recursion\n    if n <= 1:\n        return 1\n    # Recursive case — function calls itself\n    return n * factorial(n - 1)\n\n# factorial(5) = 5 * 4 * 3 * 2 * 1 = 120\nprint(factorial(5))\nprint(factorial(10))',
                output: '120\n3628800'
            }
        ],
        takeaways: [
            'LEGB rule: Local → Enclosing → Global → Built-in (lookup order)',
            'Use <code>global</code> keyword to modify a global variable inside a function',
            'Every recursive function MUST have a base case to prevent infinite recursion',
            'Python has a recursion limit (default 1000) — use loops for very deep recursion',
            'Interview tip: "What is LEGB?" and "Write factorial recursively" are very common'
        ],
        quiz: [
            { q: 'What is LEGB in Python?', options: ['A data structure', 'Variable scope lookup order', 'A sorting algorithm', 'An error type'], answer: 1, explain: 'LEGB = Local, Enclosing, Global, Built-in — the order Python looks up variable names.' },
            { q: 'What happens if recursion has no base case?', options: ['Returns None', 'RecursionError (stack overflow)', 'Infinite loop', 'SyntaxError'], answer: 1, explain: 'Without a base case, the function calls itself forever until Python hits the recursion limit and raises RecursionError.' },
            { q: 'What is factorial(0)?', options: ['0', '1', 'Error', 'None'], answer: 1, explain: 'By mathematical definition (and our base case), factorial(0) = 1.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 5: CLOSURES & DECORATORS
   ============================================================ */
{
    id: 5, title: 'Closures & Decorators', icon: '🎁', color: '#f59e0b',
    description: 'Advanced function patterns — closures capture state, decorators wrap behavior.',
    topics: [
    {
        id: '5.1', title: 'Closures', emoji: '🎒',
        analogy: {
            title: 'Closures are like a Backpack',
            emoji: '🎒',
            desc: 'When you leave home (outer function ends), you carry a backpack with items from home (enclosed variables). The inner function "remembers" variables from its enclosing scope even after that scope is gone!',
            type: 'machine',
            input: 'outer vars',
            name: 'inner()',
            output: 'remembers!'
        },
        theory: `<p>A <strong>closure</strong> is a function that remembers values from its enclosing scope, even after that scope has finished executing.</p>
        <h3>Three Requirements for a Closure</h3>
        <ul>
            <li>A nested function (function inside a function)</li>
            <li>The inner function references variables from the outer function</li>
            <li>The outer function returns the inner function</li>
        </ul>
        <p>Closures are the foundation of <strong>decorators</strong>, <strong>callbacks</strong>, and many design patterns.</p>`,
        code: [
            {
                title: 'Simple Closure',
                code: 'def make_multiplier(factor):\n    # \'factor\' is captured by the closure\n    def multiply(number):\n        return number * factor\n    return multiply  # Return the inner function\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))   # 10 (5 * 2)\nprint(triple(5))   # 15 (5 * 3)\nprint(double(100)) # 200',
                output: '10\n15\n200'
            },
            {
                title: 'Closure as Counter (State)',
                code: 'def make_counter(start=0):\n    count = [start]  # Using list to allow mutation\n    \n    def increment():\n        count[0] += 1\n        return count[0]\n    \n    return increment\n\ncounter = make_counter()\nprint(counter())  # 1\nprint(counter())  # 2\nprint(counter())  # 3\n\n# Each counter is independent!\ncounter2 = make_counter(10)\nprint(counter2())  # 11',
                output: '1\n2\n3\n11'
            }
        ],
        takeaways: [
            'A closure = nested function + captured enclosing variables',
            'The inner function "remembers" the outer function\'s variables even after it returns',
            'Each closure instance has its own copy of captured variables',
            'Use closures for: factories, counters, callbacks, data hiding',
            'Interview tip: "What is a closure?" — a function with access to its enclosing scope variables'
        ],
        quiz: [
            { q: 'What is a closure in Python?', options: ['A class with private methods', 'A function that remembers enclosing scope variables', 'A way to close files', 'A type of loop'], answer: 1, explain: 'A closure is an inner function that captures and remembers variables from the enclosing function\'s scope, even after that function has finished executing.' },
            { q: 'What are the 3 requirements for a closure?', options: ['class, init, method', 'nested function, references outer vars, outer returns inner', 'try, except, finally', 'import, define, call'], answer: 1, explain: 'Closure needs: (1) nested function, (2) inner references outer variables, (3) outer returns the inner function.' },
            { q: 'Can a closure modify a captured integer variable?', options: ['Yes, directly', 'No, need nonlocal keyword', 'No, never', 'Only with global'], answer: 1, explain: 'Integers are immutable. To modify a captured variable, use the nonlocal keyword, or use a mutable container like a list.' }
        ]
    },
    {
        id: '5.2', title: 'Decorators', emoji: '🎁',
        analogy: {
            title: 'Decorators are like Gift Wrapping',
            emoji: '🎁',
            desc: 'You have a gift (function). A decorator wraps it with extra paper & ribbon (extra behavior) without changing the gift itself. The wrapped version has bonus features!',
            type: 'wrap',
            inner: 'greet()',
            label: '@timer wraps greet() with timing'
        },
        theory: `<p>A <strong>decorator</strong> is a function that takes another function, adds extra behavior, and returns the enhanced version — without modifying the original function.</p>
        <h3>Common Use Cases</h3>
        <ul>
            <li><strong>Logging</strong> — log every function call</li>
            <li><strong>Timing</strong> — measure execution time</li>
            <li><strong>Authentication</strong> — check user permissions</li>
            <li><strong>Caching</strong> — store results for repeated calls</li>
        </ul>
        <p>The <code>@decorator</code> syntax is syntactic sugar for: <code>func = decorator(func)</code></p>`,
        code: [
            {
                title: 'Building a Decorator',
                code: 'import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        elapsed = time.time() - start\n        print(f"{func.__name__} took {elapsed:.4f}s")\n        return result\n    return wrapper\n\n@timer  # Same as: slow_add = timer(slow_add)\ndef slow_add(a, b):\n    time.sleep(0.1)\n    return a + b\n\nresult = slow_add(3, 5)\nprint(f"Result: {result}")',
                output: 'slow_add took 0.1002s\nResult: 8'
            },
            {
                title: 'Stacking Multiple Decorators',
                code: 'def bold(func):\n    def wrapper(*args, **kwargs):\n        return f"<b>{func(*args, **kwargs)}</b>"\n    return wrapper\n\ndef italic(func):\n    def wrapper(*args, **kwargs):\n        return f"<i>{func(*args, **kwargs)}</i>"\n    return wrapper\n\n@bold      # Applied second (outer)\n@italic    # Applied first (inner)\ndef greet(name):\n    return f"Hello, {name}"\n\nprint(greet("Soseeks"))\n# Execution: bold(italic(greet))("Soseeks")',
                output: '<b><i>Hello, Soseeks</i></b>'
            }
        ],
        takeaways: [
            '<code>@decorator</code> is syntactic sugar for <code>func = decorator(func)</code>',
            'Decorator pattern: outer takes func, inner (*args, **kwargs) wraps it',
            'Multiple decorators stack bottom-up: closest to function runs first',
            'Use <code>functools.wraps</code> to preserve original function\'s name and docstring',
            'Interview tip: "Write a timer/logger decorator" is an extremely common question'
        ],
        quiz: [
            { q: 'What is @decorator equivalent to?', options: ['decorator()', 'func = decorator(func)', 'decorator.func()', 'class decorator'], answer: 1, explain: '@decorator above a function definition is syntactic sugar for func = decorator(func).' },
            { q: 'In @A @B def func(), which runs first?', options: ['A', 'B', 'Both at same time', 'Error'], answer: 1, explain: 'Decorators stack bottom-up. B wraps func first, then A wraps the result. So it\'s A(B(func)).' },
            { q: 'What should the inner wrapper function accept?', options: ['Nothing', 'Only *args', '*args and **kwargs', 'The function'], answer: 2, explain: 'Use *args, **kwargs to accept ANY arguments, making the decorator work with any function signature.' },
            { q: 'Why use functools.wraps?', options: ['For performance', 'To preserve original function metadata', 'To prevent errors', 'It\'s required'], answer: 1, explain: 'Without @wraps, the decorated function loses its __name__ and __doc__. functools.wraps preserves them.' }
        ]
    },
    {
        id: '5.3', title: 'Decorator Patterns', emoji: '🔧',
        analogy: {
            title: 'Decorator Factories — Customizable Wrapping Paper',
            emoji: '🎨',
            desc: 'Regular decorators use the same wrapping paper. A decorator factory lets you CHOOSE the paper — it takes arguments to customize the decoration.',
            type: 'wrap',
            inner: 'func()',
            label: '@repeat(3) → runs func 3 times'
        },
        theory: `<p>A <strong>decorator factory</strong> is a function that returns a decorator. It adds an extra layer, allowing you to pass arguments to customize the decorator.</p>
        <h3>Pattern: 3 Nested Functions</h3>
        <ul>
            <li><strong>Outer</strong> — takes decorator arguments</li>
            <li><strong>Middle</strong> — takes the function (the actual decorator)</li>
            <li><strong>Inner</strong> — the wrapper that runs the logic</li>
        </ul>`,
        code: [
            {
                title: 'Decorator with Arguments',
                code: 'def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)  # Run the function 3 times\ndef say_hello(name):\n    print(f"Hello, {name}!")\n\nsay_hello("Soseeks")',
                output: 'Hello, Soseeks!\nHello, Soseeks!\nHello, Soseeks!'
            },
            {
                title: 'Real-World: Auth Decorator',
                code: 'current_user = {"role": "admin"}\n\ndef require_role(role):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            if current_user.get("role") != role:\n                print(f"Access denied! Need \'{role}\' role.")\n                return None\n            return func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@require_role("admin")\ndef delete_user(user_id):\n    print(f"User {user_id} deleted!")\n\ndelete_user(42)',
                output: 'User 42 deleted!'
            }
        ],
        takeaways: [
            'Decorator factory = 3 levels: <code>factory(args) → decorator(func) → wrapper(*args)</code>',
            'Use decorator factories when you need to configure the decorator behavior',
            'Real-world uses: <code>@app.route("/path")</code> in Flask, <code>@retry(max_attempts=3)</code>',
            'Interview tip: Be able to write a decorator with arguments from scratch'
        ],
        quiz: [
            { q: 'How many nested functions does a decorator factory have?', options: ['1', '2', '3', '4'], answer: 2, explain: 'Three levels: (1) factory takes arguments, (2) decorator takes function, (3) wrapper executes logic.' },
            { q: 'What does @repeat(3) pass to the outer function?', options: ['The function', '3', 'Both', 'Nothing'], answer: 1, explain: '@repeat(3) calls repeat(3) first, which returns the actual decorator. Then that decorator wraps the function.' },
            { q: 'In Flask, @app.route("/home") is an example of?', options: ['Simple decorator', 'Decorator factory', 'Class decorator', 'Method decorator'], answer: 1, explain: 'It takes "/home" as an argument and returns a decorator — that\'s a decorator factory pattern!' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 6: ITERATORS & GENERATORS
   ============================================================ */
{
    id: 6, title: 'Iterators & Generators', icon: '🔄', color: '#ec4899',
    description: 'Lazy evaluation, yield keyword, and memory-efficient data processing.',
    topics: [
    {
        id: '6.1', title: 'Iterators', emoji: '🎰',
        analogy: {
            title: 'Iterators are like Vending Machines',
            emoji: '🎰',
            desc: 'A vending machine gives you ONE item at a time. Press the button (call next()), get one item. When empty, it says "StopIteration". That\'s exactly how iterators work!',
            type: 'conveyor',
            items: ['A', 'B', 'C', 'D', '∅'],
            consumed: 2
        },
        theory: `<p>An <strong>iterator</strong> is an object that produces values one at a time using <code>next()</code>.</p>
        <h3>Iterator Protocol</h3>
        <ul>
            <li><code>__iter__()</code> — returns the iterator object itself</li>
            <li><code>__next__()</code> — returns the next value, raises StopIteration when done</li>
        </ul>
        <p>Every <code>for</code> loop secretly uses iterators behind the scenes!</p>`,
        code: [
            {
                title: 'Using iter() and next()',
                code: 'nums = [10, 20, 30]\nit = iter(nums)  # Create an iterator\n\nprint(next(it))  # 10\nprint(next(it))  # 20\nprint(next(it))  # 30\n# next(it) would raise StopIteration\n\n# for loop does this automatically!\nfor num in [10, 20, 30]:  # Creates iter() internally\n    print(num)',
                output: '10\n20\n30\n10\n20\n30'
            },
            {
                title: 'Custom Iterator Class',
                code: 'class Countdown:\n    def __init__(self, start):\n        self.current = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\n\nfor num in Countdown(5):\n    print(num, end=" ")',
                output: '5 4 3 2 1'
            }
        ],
        takeaways: [
            '<code>iter()</code> creates an iterator, <code>next()</code> gets the next value',
            'StopIteration is raised when no more values are available',
            'for loops use the iterator protocol internally — <code>iter()</code> + <code>next()</code>',
            'Custom iterators implement <code>__iter__()</code> and <code>__next__()</code>',
            'Interview tip: "How does a for loop work internally?" → iterator protocol!'
        ],
        quiz: [
            { q: 'What does next() do on an exhausted iterator?', options: ['Returns None', 'Restarts', 'Raises StopIteration', 'Returns 0'], answer: 2, explain: 'When there are no more values, next() raises StopIteration to signal the end.' },
            { q: 'Which methods make an object iterable?', options: ['__init__ and __del__', '__iter__ and __next__', '__get__ and __set__', '__enter__ and __exit__'], answer: 1, explain: 'The iterator protocol requires __iter__() (returns self) and __next__() (returns next value).' },
            { q: 'What does a for loop use internally?', options: ['while True', 'iter() and next()', 'range()', 'map()'], answer: 1, explain: 'for x in obj: is equivalent to: it = iter(obj), then repeatedly calling next(it) until StopIteration.' }
        ]
    },
    {
        id: '6.2', title: 'Generators', emoji: '🏭',
        analogy: {
            title: 'Generators are like On-Demand Bakeries',
            emoji: '🍞',
            desc: 'A warehouse bakery bakes ALL bread at once (list). An on-demand bakery bakes ONE loaf when a customer asks (generator). Saves storage! Generator uses <code>yield</code> instead of <code>return</code>.',
            type: 'machine',
            input: 'request',
            name: 'yield',
            output: '1 item'
        },
        theory: `<p>A <strong>generator</strong> is a special function that uses <code>yield</code> instead of <code>return</code>. It produces values one at a time, pausing between each — saving memory!</p>
        <h3>Why Generators?</h3>
        <ul>
            <li><strong>Memory efficient</strong> — doesn't store all values at once</li>
            <li><strong>Lazy evaluation</strong> — computes values only when needed</li>
            <li><strong>Infinite sequences</strong> — can produce values forever</li>
        </ul>
        <p><code>yield</code> pauses the function and remembers where it left off. Next call resumes from there.</p>`,
        code: [
            {
                title: 'Generator Function with yield',
                code: 'def count_up(limit):\n    n = 1\n    while n <= limit:\n        yield n   # Pause and give value\n        n += 1    # Resume here on next call\n\n# Using the generator\nfor num in count_up(5):\n    print(num, end=" ")\n\nprint()\n\n# Generator expression (like list comprehension)\nsquares = (x**2 for x in range(6))  # () not []\nprint(list(squares))  # Convert to list to see all',
                output: '1 2 3 4 5\n[0, 1, 4, 9, 16, 25]'
            },
            {
                title: 'Memory Comparison: List vs Generator',
                code: 'import sys\n\n# List — stores ALL values in memory\nbig_list = [x**2 for x in range(1000000)]\nprint(f"List size: {sys.getsizeof(big_list):,} bytes")\n\n# Generator — stores only the formula\nbig_gen = (x**2 for x in range(1000000))\nprint(f"Generator size: {sys.getsizeof(big_gen):,} bytes")\n\n# Generator uses ~100 bytes vs ~8MB for list!',
                output: 'List size: 8,448,728 bytes\nGenerator size: 200 bytes'
            }
        ],
        takeaways: [
            '<code>yield</code> pauses the function and returns a value; next call resumes',
            'Generator functions return a generator object (an iterator)',
            'Generator expression: <code>(x for x in range(n))</code> — round brackets, not square',
            'Generators use almost no memory — perfect for large/infinite data streams',
            'Interview tip: "Difference between list and generator?" — memory + lazy evaluation'
        ],
        quiz: [
            { q: 'What does yield do?', options: ['Ends the function', 'Pauses and returns a value', 'Same as return', 'Creates a list'], answer: 1, explain: 'yield pauses the generator function and returns a value. The next call to next() resumes execution from where it paused.' },
            { q: 'Generator expression uses which brackets?', options: ['[]', '()', '{}', '<>'], answer: 1, explain: 'Generators use parentheses (). Square brackets [] create a list comprehension instead.' },
            { q: 'Why are generators memory efficient?', options: ['They compress data', 'They compute values one at a time', 'They use C internally', 'They delete old values'], answer: 1, explain: 'Generators use lazy evaluation — they compute and yield one value at a time, never storing the entire sequence in memory.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 7: OBJECT-ORIENTED PROGRAMMING
   ============================================================ */
{
    id: 7, title: 'Object-Oriented Programming', icon: '🏗️', color: '#3b82f6',
    description: 'Classes, objects, inheritance, polymorphism, magic methods, and design patterns.',
    topics: [
    {
        id: '7.1', title: 'Classes & Objects', emoji: '🏠',
        analogy: {
            title: 'Class is a Blueprint, Object is a House',
            emoji: '📐',
            desc: 'An architect draws ONE blueprint (class). From that blueprint, you can build MANY houses (objects). Each house has the same structure but different paint colors and furniture (attributes).',
            type: 'blueprint',
            className: 'House',
            objects: ['house_1', 'house_2', 'house_3']
        },
        theory: `<p>A <strong>class</strong> is a template for creating objects. An <strong>object</strong> is an instance of a class with its own data.</p>
        <h3>Key Concepts</h3>
        <ul>
            <li><code>__init__</code> — constructor, runs when object is created</li>
            <li><code>self</code> — refers to the current instance</li>
            <li><strong>Attributes</strong> — data stored in the object</li>
            <li><strong>Methods</strong> — functions that belong to the object</li>
        </ul>`,
        code: [
            {
                title: 'Creating a Class',
                code: 'class Student:\n    # Class attribute (shared by all)\n    school = "Soseeks Academy"\n    \n    def __init__(self, name, age, course):\n        # Instance attributes (unique to each)\n        self.name = name\n        self.age = age\n        self.course = course\n    \n    def introduce(self):\n        return f"Hi, I\'m {self.name}, learning {self.course}"\n\n# Create objects\ns1 = Student("Sanjay", 25, "Python")\ns2 = Student("Priya", 22, "Java")\n\nprint(s1.introduce())\nprint(s2.introduce())\nprint(f"School: {Student.school}")',
                output: "Hi, I'm Sanjay, learning Python\nHi, I'm Priya, learning Java\nSchool: Soseeks Academy"
            }
        ],
        takeaways: [
            '<code>__init__</code> is the constructor — automatically called when creating an object',
            '<code>self</code> refers to the specific instance — like "this" in Java/JS',
            'Class attributes are shared; instance attributes are unique per object',
            'Methods are functions defined inside a class — first param is always <code>self</code>'
        ],
        quiz: [
            { q: 'What is __init__ in a Python class?', options: ['Destructor', 'Constructor', 'Static method', 'Property'], answer: 1, explain: '__init__ is the constructor method — it runs automatically when you create a new object.' },
            { q: 'What does self refer to?', options: ['The class', 'The current instance', 'The parent class', 'Python itself'], answer: 1, explain: 'self refers to the specific instance of the class that called the method.' },
            { q: 'Difference between class and instance attributes?', options: ['No difference', 'Class attrs are shared, instance attrs are per-object', 'Instance attrs are shared', 'Class attrs are private'], answer: 1, explain: 'Class attributes are shared by ALL instances. Instance attributes (set in __init__) are unique to each object.' }
        ]
    },
    {
        id: '7.2', title: 'Inheritance & Polymorphism', emoji: '🧬',
        analogy: {
            title: 'Inheritance is like a Family Tree',
            emoji: '👨‍👩‍👧',
            desc: 'Children inherit traits from parents — eye color, height, skills. Similarly, a child class inherits methods and attributes from a parent class, and can add its own!',
            type: 'blueprint',
            className: 'Animal',
            objects: ['Dog()', 'Cat()']
        },
        theory: `<p><strong>Inheritance</strong> lets a class inherit methods and attributes from another class. <strong>Polymorphism</strong> means the same method name behaves differently in different classes.</p>
        <h3>Key Terms</h3>
        <ul>
            <li><strong>Parent/Base class</strong> — the class being inherited from</li>
            <li><strong>Child/Derived class</strong> — the class that inherits</li>
            <li><code>super()</code> — access the parent class's methods</li>
            <li><strong>Method overriding</strong> — child redefines a parent method</li>
        </ul>`,
        code: [
            {
                title: 'Inheritance & Method Overriding',
                code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):  # Inherits from Animal\n    def speak(self):  # Override parent method\n        return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\n# Polymorphism — same method, different behavior\nanimals = [Dog("Rex"), Cat("Luna"), Dog("Max")]\nfor animal in animals:\n    print(animal.speak())',
                output: 'Rex says Woof!\nLuna says Meow!\nMax says Woof!'
            },
            {
                title: 'super() — Calling Parent Methods',
                code: 'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\nclass Manager(Employee):\n    def __init__(self, name, salary, department):\n        super().__init__(name, salary)  # Call parent __init__\n        self.department = department\n    \n    def info(self):\n        return f"{self.name} manages {self.department} (₹{self.salary:,})"\n\nmgr = Manager("Sanjay", 100000, "Engineering")\nprint(mgr.info())',
                output: 'Sanjay manages Engineering (₹1,00,000)'
            }
        ],
        takeaways: [
            'Child class inherits ALL methods and attributes from parent',
            '<code>super()</code> calls the parent class — essential in <code>__init__</code>',
            'Polymorphism: same method name, different behavior per class',
            'Python supports multiple inheritance: <code>class C(A, B)</code>',
            'Interview tip: "Explain inheritance vs composition" — both are design choices'
        ],
        quiz: [
            { q: 'What does super().__init__() do?', options: ['Creates a new class', 'Calls parent class constructor', 'Deletes parent class', 'Returns None'], answer: 1, explain: 'super().__init__() calls the parent class\'s __init__ method, ensuring parent attributes are initialized.' },
            { q: 'What is polymorphism?', options: ['Multiple inheritance', 'Same method, different behavior per class', 'Private methods', 'Static methods'], answer: 1, explain: 'Polymorphism means "many forms" — the same method name behaves differently depending on which class calls it.' },
            { q: 'Does Python support multiple inheritance?', options: ['Yes', 'No', 'Only with interfaces', 'Only 2 parents max'], answer: 0, explain: 'Yes! Python supports multiple inheritance: class C(A, B). It uses MRO (Method Resolution Order) to resolve conflicts.' }
        ]
    },
    {
        id: '7.3', title: 'Magic Methods', emoji: '✨',
        analogy: {
            title: 'Magic Methods — Teaching Python Your Language',
            emoji: '🪄',
            desc: 'When you use + on numbers, Python knows what to do. Magic methods (__add__, __str__, etc.) teach Python how to handle YOUR objects with operators and built-in functions!',
            type: 'machine',
            input: 'obj + obj',
            name: '__add__',
            output: 'custom result'
        },
        theory: `<p><strong>Magic methods</strong> (dunder methods) are special methods surrounded by double underscores. They let you customize how objects behave with operators and built-in functions.</p>
        <h3>Common Magic Methods</h3>
        <ul>
            <li><code>__str__</code> — called by <code>print()</code> and <code>str()</code></li>
            <li><code>__repr__</code> — official string representation</li>
            <li><code>__len__</code> — called by <code>len()</code></li>
            <li><code>__add__</code> — defines behavior of <code>+</code> operator</li>
            <li><code>__eq__</code>, <code>__lt__</code> — comparison operators</li>
        </ul>`,
        code: [
            {
                title: 'Custom Magic Methods',
                code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __len__(self):\n        return int((self.x**2 + self.y**2)**0.5)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\n\nprint(v1)           # __str__\nprint(v1 + v2)      # __add__\nprint(len(v1))       # __len__\nprint(v1 == v2)      # __eq__',
                output: 'Vector(3, 4)\nVector(4, 6)\n5\nFalse'
            }
        ],
        takeaways: [
            'Magic methods are surrounded by <code>__double underscores__</code>',
            '<code>__str__</code> = human-readable, <code>__repr__</code> = developer-readable representation',
            '<code>__add__</code> lets you use <code>+</code> on custom objects',
            'Implement <code>__eq__</code> for meaningful equality checks',
            'Interview tip: Know at least __init__, __str__, __repr__, __len__, __add__, __eq__'
        ],
        quiz: [
            { q: 'When is __str__ called?', options: ['When object is created', 'When print() is used', 'When object is deleted', 'Never automatically'], answer: 1, explain: '__str__ is called by print() and str() to get a human-readable string representation of the object.' },
            { q: 'What magic method is called by the + operator?', options: ['__plus__', '__add__', '__sum__', '__concat__'], answer: 1, explain: '__add__(self, other) is called when you use + between two objects.' },
            { q: 'Difference between __str__ and __repr__?', options: ['No difference', '__str__ for users, __repr__ for developers', '__repr__ for users', '__str__ is faster'], answer: 1, explain: '__str__ returns a user-friendly string. __repr__ returns an unambiguous string for debugging (should ideally be valid Python code).' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 8: ERROR HANDLING
   ============================================================ */
{
    id: 8, title: 'Error Handling', icon: '🛡️', color: '#ef4444',
    description: 'try/except, custom exceptions, and context managers for robust code.',
    topics: [
    {
        id: '8.1', title: 'try / except / finally', emoji: '🥅',
        analogy: {
            title: 'Error Handling is like a Safety Net',
            emoji: '🤸',
            desc: 'A tightrope walker has a safety net below. If they fall (error), the net catches them (except). The show continues! Without it, one mistake = disaster.',
            type: 'net'
        },
        theory: `<p><strong>Error handling</strong> prevents your program from crashing when something unexpected happens.</p>
        <h3>Structure</h3>
        <ul>
            <li><code>try</code> — code that might cause an error</li>
            <li><code>except</code> — code that runs if an error occurs</li>
            <li><code>else</code> — runs only if NO error occurred</li>
            <li><code>finally</code> — ALWAYS runs, error or not (cleanup)</li>
        </ul>`,
        code: [
            {
                title: 'try/except Basics',
                code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print("Cannot divide by zero!")\n        return None\n    except TypeError:\n        print("Please provide numbers!")\n        return None\n    else:\n        print(f"Success: {a}/{b} = {result}")\n        return result\n    finally:\n        print("Operation complete.")\n\nsafe_divide(10, 3)\nprint("---")\nsafe_divide(10, 0)',
                output: 'Success: 10/3 = 3.3333333333333335\nOperation complete.\n---\nCannot divide by zero!\nOperation complete.'
            },
            {
                title: 'Custom Exceptions',
                code: 'class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"Need ₹{amount}, but only have ₹{balance}")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    new_balance = withdraw(1000, 1500)\nexcept InsufficientFundsError as e:\n    print(f"Error: {e}")',
                output: 'Error: Need ₹1500, but only have ₹1000'
            }
        ],
        takeaways: [
            'Always catch specific exceptions, not bare <code>except:</code>',
            '<code>else</code> runs only when no exception occurs — good for success logic',
            '<code>finally</code> always runs — use for cleanup (closing files, connections)',
            'Create custom exceptions by inheriting from <code>Exception</code>',
            'Interview tip: "What is the difference between else and finally in try/except?"'
        ],
        quiz: [
            { q: 'When does the finally block run?', options: ['Only on error', 'Only on success', 'Always', 'Never'], answer: 2, explain: 'finally ALWAYS runs, whether an exception occurred or not. Use it for cleanup code.' },
            { q: 'What is wrong with: except: (bare except)?', options: ['Nothing', 'Catches ALL exceptions including system ones', 'SyntaxError', 'Only catches TypeError'], answer: 1, explain: 'Bare except catches everything, including KeyboardInterrupt and SystemExit, which you usually don\'t want to catch.' },
            { q: 'How do you create a custom exception?', options: ['def MyError()', 'class MyError(Exception)', 'raise MyError', 'exception MyError'], answer: 1, explain: 'Custom exceptions are classes that inherit from Exception (or a subclass of it).' }
        ]
    },
    {
        id: '8.2', title: 'Context Managers', emoji: '🚪',
        analogy: {
            title: 'Context Managers — Auto-Closing Doors',
            emoji: '🚪',
            desc: 'Imagine a door that opens when you enter (setup), and automatically closes behind you when you leave (cleanup). The <code>with</code> statement does exactly this — automatic setup and cleanup!',
            type: 'machine',
            input: '__enter__',
            name: 'with',
            output: '__exit__'
        },
        theory: `<p>A <strong>context manager</strong> handles setup and cleanup automatically using the <code>with</code> statement.</p>
        <h3>How It Works</h3>
        <ul>
            <li><code>__enter__</code> — runs when entering the <code>with</code> block (setup)</li>
            <li><code>__exit__</code> — runs when leaving the block (cleanup), even if error occurs</li>
        </ul>
        <p>Most common use: <strong>file handling</strong> — automatically closes files even if an error occurs.</p>`,
        code: [
            {
                title: 'with Statement for Files',
                code: '# WITHOUT context manager (risky)\nf = open("data.txt", "w")\nf.write("Hello, World!")\nf.close()  # What if error before this line?\n\n# WITH context manager (safe!)\nwith open("data.txt", "w") as f:\n    f.write("Hello, World!")\n# File automatically closed here, even if error!\n\n# Custom context manager\nclass Timer:\n    def __enter__(self):\n        import time\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        import time\n        print(f"Elapsed: {time.time()-self.start:.4f}s")\n\nwith Timer():\n    total = sum(range(1000000))',
                output: 'Elapsed: 0.0234s'
            }
        ],
        takeaways: [
            '<code>with</code> ensures cleanup happens even if exceptions occur',
            'Files opened with <code>with</code> are automatically closed — always use this!',
            'Custom context managers need <code>__enter__</code> and <code>__exit__</code>',
            'Interview tip: "Why use \'with open()\' instead of just open()?" — automatic cleanup'
        ],
        quiz: [
            { q: 'What does "with open()" guarantee?', options: ['Faster reading', 'File is auto-closed after block', 'File is created', 'Errors are ignored'], answer: 1, explain: 'The with statement guarantees the file is closed when the block ends, even if an error occurs.' },
            { q: 'Which magic methods does a context manager need?', options: ['__init__, __del__', '__enter__, __exit__', '__get__, __set__', '__iter__, __next__'], answer: 1, explain: '__enter__ runs on entry (setup), __exit__ runs on exit (cleanup).' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 9: FILE HANDLING & MODULES
   ============================================================ */
{
    id: 9, title: 'File Handling & Modules', icon: '📁', color: '#14b8a6',
    description: 'Read/write files, work with JSON/CSV, create modules and packages.',
    topics: [
    {
        id: '9.1', title: 'File I/O', emoji: '📖',
        analogy: {
            title: 'File I/O is like Reading & Writing in a Diary',
            emoji: '📔',
            desc: 'Open the diary, read or write something, then close it. In Python: open() → read()/write() → close(). Always use "with" to auto-close!',
            type: 'diary',
            lines: 'Line 1: Hello<br>Line 2: World'
        },
        theory: `<p>Python can read and write text files, CSV, JSON, and more.</p>
        <h3>File Modes</h3>
        <ul>
            <li><code>"r"</code> — Read (default). Error if file doesn't exist.</li>
            <li><code>"w"</code> — Write. Creates file or overwrites existing.</li>
            <li><code>"a"</code> — Append. Adds to end of file.</li>
            <li><code>"r+"</code> — Read and write.</li>
        </ul>`,
        code: [
            {
                title: 'Reading & Writing Files',
                code: '# Writing to a file\nwith open("notes.txt", "w") as f:\n    f.write("Python is fun!\\n")\n    f.write("Soseeks Academy\\n")\n\n# Reading entire file\nwith open("notes.txt", "r") as f:\n    content = f.read()\n    print(content)\n\n# Reading line by line (memory efficient)\nwith open("notes.txt", "r") as f:\n    for line in f:\n        print(f">> {line.strip()}")',
                output: 'Python is fun!\nSoseeks Academy\n\n>> Python is fun!\n>> Soseeks Academy'
            },
            {
                title: 'Working with JSON',
                code: 'import json\n\n# Python dict → JSON file\ndata = {"name": "Sanjay", "courses": ["Python", "Java"], "rating": 4.9}\n\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)\n\n# JSON file → Python dict\nwith open("data.json", "r") as f:\n    loaded = json.load(f)\n\nprint(loaded["name"])\nprint(loaded["courses"])',
                output: 'Sanjay\n[\'Python\', \'Java\']'
            }
        ],
        takeaways: [
            'Always use <code>with open()</code> — guarantees file is closed properly',
            '<code>"w"</code> mode overwrites; <code>"a"</code> mode appends to existing content',
            'Read large files line by line to save memory: <code>for line in file:</code>',
            '<code>json.dump()</code> writes dict to file; <code>json.load()</code> reads file to dict',
            'Interview tip: "How do you read a large file efficiently?" → line by line with for loop'
        ],
        quiz: [
            { q: 'What mode overwrites an existing file?', options: ['"r"', '"w"', '"a"', '"r+"'], answer: 1, explain: '"w" (write) mode creates a new file or completely overwrites existing content.' },
            { q: 'What does json.load() return?', options: ['A string', 'A Python dict/list', 'A JSON object', 'A file object'], answer: 1, explain: 'json.load() reads a JSON file and converts it to a Python dictionary (or list).' },
            { q: 'Best way to read a 10GB file?', options: ['f.read()', 'f.readlines()', 'for line in f:', 'json.load(f)'], answer: 2, explain: 'for line in f: reads one line at a time, using minimal memory. read() and readlines() load everything into memory.' }
        ]
    },
    {
        id: '9.2', title: 'Modules & Packages', emoji: '📦',
        analogy: {
            title: 'Modules are like Toolboxes',
            emoji: '🧰',
            desc: 'Instead of carrying every tool in your pocket, you organize them into toolboxes (modules). When you need a hammer, you open the right toolbox (import). Keeps things organized!',
            type: 'machine',
            input: 'import math',
            name: 'module',
            output: 'math.sqrt()'
        },
        theory: `<p>A <strong>module</strong> is a .py file containing functions, classes, and variables. A <strong>package</strong> is a folder of modules with an <code>__init__.py</code> file.</p>
        <h3>Import Styles</h3>
        <ul>
            <li><code>import math</code> — import entire module</li>
            <li><code>from math import sqrt</code> — import specific function</li>
            <li><code>from math import *</code> — import all (avoid in production!)</li>
            <li><code>import math as m</code> — alias for shorter name</li>
        </ul>`,
        code: [
            {
                title: 'Using Modules',
                code: 'import math\nfrom datetime import datetime\nfrom collections import Counter\n\n# math module\nprint(math.sqrt(144))  # 12.0\nprint(math.pi)         # 3.14159...\n\n# datetime\nnow = datetime.now()\nprint(now.strftime("%Y-%m-%d %H:%M"))\n\n# Counter — count occurrences\nwords = ["python", "java", "python", "python", "java"]\nprint(Counter(words))',
                output: '12.0\n3.141592653589793\n2026-03-08 14:30\nCounter({\'python\': 3, \'java\': 2})'
            },
            {
                title: 'Creating Your Own Module',
                code: '# File: my_utils.py\ndef greet(name):\n    return f"Hello, {name}!"\n\nPI = 3.14159\n\n# File: main.py\nfrom my_utils import greet, PI\n\nprint(greet("Soseeks"))\nprint(f"PI = {PI}")\n\n# __name__ == "__main__" pattern\nif __name__ == "__main__":\n    print("This runs only when executed directly")',
                output: 'Hello, Soseeks!\nPI = 3.14159\nThis runs only when executed directly'
            }
        ],
        takeaways: [
            '<code>import module</code> vs <code>from module import func</code> — both valid, different styles',
            'Avoid <code>from module import *</code> in production — pollutes namespace',
            '<code>__name__ == "__main__"</code> checks if file is run directly vs imported',
            'Popular modules: <code>os</code>, <code>sys</code>, <code>json</code>, <code>datetime</code>, <code>collections</code>',
            'Interview tip: "What is __name__ == \'__main__\'?" — very commonly asked!'
        ],
        quiz: [
            { q: 'What is __name__ when a file is run directly?', options: ['The filename', '"__main__"', 'None', '"module"'], answer: 1, explain: 'When you run a Python file directly, __name__ is set to "__main__". When imported, it\'s set to the module name.' },
            { q: 'Why avoid "from module import *"?', options: ['It\'s slower', 'Namespace pollution', 'SyntaxError', 'Only works in Python 2'], answer: 1, explain: 'It imports all names into your namespace, which can cause naming conflicts and makes code harder to read.' },
            { q: 'What makes a folder a Python package?', options: ['Having .py files', 'Having __init__.py', 'Being in the path', 'Having setup.py'], answer: 1, explain: 'A folder needs an __init__.py file (can be empty) to be recognized as a Python package.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 10: CONCURRENCY & PARALLELISM
   ============================================================ */
{
    id: 10, title: 'Concurrency & Parallelism', icon: '⚡', color: '#f97316',
    description: 'Multithreading, multiprocessing, asyncio — make Python do more at once.',
    topics: [
    {
        id: '10.1', title: 'Multithreading', emoji: '🧵',
        analogy: {
            title: 'Multithreading — One Chef, Multiple Dishes',
            emoji: '👨‍🍳',
            desc: 'One chef (CPU) switches between multiple dishes (threads). While pasta boils, they chop vegetables. Not truly parallel — just fast switching! The GIL is like having only one stove knob.',
            type: 'chefs',
            chefs: [
                { emoji: '👨‍🍳', task: 'boiling pasta' },
                { emoji: '👨‍🍳', task: 'chopping veg' },
                { emoji: '👨‍🍳', task: 'making sauce' }
            ]
        },
        theory: `<p><strong>Multithreading</strong> runs multiple threads within a single process. Good for I/O-bound tasks (file reading, API calls, waiting for user input).</p>
        <h3>The GIL (Global Interpreter Lock)</h3>
        <ul>
            <li>Python's GIL allows only ONE thread to execute Python code at a time</li>
            <li>Threads still help for I/O-bound tasks (while one waits, another runs)</li>
            <li>For CPU-bound tasks (heavy computation), use multiprocessing instead</li>
        </ul>`,
        code: [
            {
                title: 'Threading Basics',
                code: 'import threading\nimport time\n\ndef download(name, seconds):\n    print(f"Starting {name}...")\n    time.sleep(seconds)  # Simulate I/O\n    print(f"Finished {name}!")\n\n# Sequential (slow)\nstart = time.time()\ndownload("file1", 2)\ndownload("file2", 2)\nprint(f"Sequential: {time.time()-start:.1f}s")\n\n# Threaded (fast!)\nstart = time.time()\nt1 = threading.Thread(target=download, args=("file1", 2))\nt2 = threading.Thread(target=download, args=("file2", 2))\nt1.start(); t2.start()\nt1.join(); t2.join()  # Wait for both\nprint(f"Threaded: {time.time()-start:.1f}s")',
                output: 'Starting file1...\nFinished file1!\nStarting file2...\nFinished file2!\nSequential: 4.0s\nStarting file1...\nStarting file2...\nFinished file1!\nFinished file2!\nThreaded: 2.0s'
            }
        ],
        takeaways: [
            'Threads share memory — lightweight but need synchronization',
            'GIL limits threads to one at a time for CPU-bound code',
            'Threads excel at I/O-bound tasks: file ops, network calls, DB queries',
            'Use <code>threading.Lock()</code> to prevent race conditions on shared data',
            'Interview tip: "What is the GIL and why does it matter?" — top Python question!'
        ],
        quiz: [
            { q: 'What is the GIL?', options: ['A graphics library', 'Global Interpreter Lock — limits threads', 'A garbage collector', 'A debugger'], answer: 1, explain: 'GIL (Global Interpreter Lock) ensures only one thread executes Python bytecode at a time. This limits true parallelism for CPU-bound tasks.' },
            { q: 'When are threads most useful?', options: ['CPU-heavy math', 'I/O-bound tasks', 'Single operations', 'Never'], answer: 1, explain: 'Threads excel at I/O-bound tasks where the thread spends time WAITING (network, file, DB). While one thread waits, others can run.' },
            { q: 'What does thread.join() do?', options: ['Starts the thread', 'Waits for the thread to finish', 'Kills the thread', 'Combines two threads'], answer: 1, explain: 'join() blocks the main thread until the specified thread completes. Without it, the main program might end before threads finish.' }
        ]
    },
    {
        id: '10.2', title: 'Multiprocessing', emoji: '🏭',
        analogy: {
            title: 'Multiprocessing — Multiple Chefs, Multiple Kitchens',
            emoji: '👨‍🍳👨‍🍳👨‍🍳',
            desc: 'Each chef has their OWN kitchen (process) with their own stove. True parallel cooking! No sharing the stove knob (no GIL). But kitchens are expensive to build (more memory).',
            type: 'chefs',
            chefs: [
                { emoji: '👨‍🍳', task: 'Kitchen 1' },
                { emoji: '👩‍🍳', task: 'Kitchen 2' },
                { emoji: '🧑‍🍳', task: 'Kitchen 3' }
            ]
        },
        theory: `<p><strong>Multiprocessing</strong> runs multiple processes, each with its own Python interpreter and GIL. True parallelism for CPU-bound tasks!</p>
        <h3>Threads vs Processes</h3>
        <ul>
            <li><strong>Threads</strong> — share memory, lightweight, limited by GIL (best for I/O)</li>
            <li><strong>Processes</strong> — separate memory, heavier, no GIL limit (best for CPU)</li>
        </ul>`,
        code: [
            {
                title: 'Multiprocessing for CPU-bound Tasks',
                code: 'from multiprocessing import Pool\nimport time\n\ndef compute_square(n):\n    return n * n\n\n# Sequential\nstart = time.time()\nresults = [compute_square(i) for i in range(1000000)]\nprint(f"Sequential: {time.time()-start:.3f}s")\n\n# Parallel with Pool\nstart = time.time()\nwith Pool(4) as pool:  # 4 parallel processes\n    results = pool.map(compute_square, range(1000000))\nprint(f"Parallel (4 cores): {time.time()-start:.3f}s")\n\nprint(f"First 5 results: {results[:5]}")',
                output: 'Sequential: 0.342s\nParallel (4 cores): 0.127s\nFirst 5 results: [0, 1, 4, 9, 16]'
            }
        ],
        takeaways: [
            'Multiprocessing bypasses the GIL — true parallel execution',
            'Use <code>Pool</code> for easy parallel map operations',
            'Each process has its own memory — data must be serialized to share',
            'More memory-heavy than threads — use only when you need CPU parallelism',
            'Interview tip: "When to use threads vs processes?" — I/O vs CPU bound!'
        ],
        quiz: [
            { q: 'Why does multiprocessing bypass the GIL?', options: ['It\'s written in C', 'Each process has its own GIL', 'It uses GPU', 'It doesn\'t use Python'], answer: 1, explain: 'Each process runs a separate Python interpreter with its own GIL. So multiple processes can truly run Python code in parallel.' },
            { q: 'When should you use multiprocessing over threading?', options: ['Always', 'For I/O tasks', 'For CPU-heavy computation', 'Never'], answer: 2, explain: 'Multiprocessing is for CPU-bound tasks (math, data processing). Threading is for I/O-bound tasks (network, file, DB).' },
            { q: 'What is a downside of multiprocessing?', options: ['Slower than threads', 'Uses more memory', 'Can\'t return values', 'Only works on Linux'], answer: 1, explain: 'Each process has its own memory space, so multiprocessing uses more memory than threading. Data sharing between processes is also more complex.' }
        ]
    },
    {
        id: '10.3', title: 'Asyncio', emoji: '⚡',
        analogy: {
            title: 'Asyncio — A Waiter Serving Many Tables',
            emoji: '🧑‍💼',
            desc: 'A waiter doesn\'t stand next to the kitchen waiting for food. They take orders from other tables while food cooks. When food is ready (await), they serve it. One waiter, many tables — efficiently!',
            type: 'waiter'
        },
        theory: `<p><strong>Asyncio</strong> enables concurrent code with <code>async</code>/<code>await</code>. Single-threaded but handles many I/O operations simultaneously.</p>
        <h3>Key Concepts</h3>
        <ul>
            <li><code>async def</code> — defines a coroutine (async function)</li>
            <li><code>await</code> — pauses until the operation completes</li>
            <li><code>asyncio.gather()</code> — run multiple coroutines concurrently</li>
            <li><strong>Event loop</strong> — manages and schedules coroutines</li>
        </ul>
        <h3>When to Use What?</h3>
        <ul>
            <li><strong>asyncio</strong> — many I/O tasks, single-threaded (web servers, API calls)</li>
            <li><strong>threading</strong> — I/O tasks that need real threads (legacy code)</li>
            <li><strong>multiprocessing</strong> — CPU-heavy computation</li>
        </ul>`,
        code: [
            {
                title: 'async/await Basics',
                code: 'import asyncio\n\nasync def fetch_data(name, delay):\n    print(f"Fetching {name}...")\n    await asyncio.sleep(delay)  # Non-blocking wait\n    print(f"Got {name}!")\n    return f"{name}_data"\n\nasync def main():\n    # Run concurrently with gather\n    results = await asyncio.gather(\n        fetch_data("users", 2),\n        fetch_data("posts", 1),\n        fetch_data("comments", 3)\n    )\n    print(f"All done! Results: {results}")\n\nasyncio.run(main())',
                output: 'Fetching users...\nFetching posts...\nFetching comments...\nGot posts!\nGot users!\nGot comments!\nAll done! Results: [\'users_data\', \'posts_data\', \'comments_data\']'
            }
        ],
        takeaways: [
            '<code>async def</code> creates a coroutine, <code>await</code> pauses it',
            '<code>asyncio.gather()</code> runs multiple coroutines concurrently',
            'Asyncio is single-threaded but concurrent — great for I/O',
            'Total time = longest task, not sum of all tasks',
            'Interview tip: "Explain async/await and when to use it" — modern Python essential!'
        ],
        quiz: [
            { q: 'What does await do?', options: ['Kills the coroutine', 'Pauses until result is ready', 'Creates a new thread', 'Returns immediately'], answer: 1, explain: 'await pauses the current coroutine and lets other coroutines run while waiting for the result. When ready, it resumes.' },
            { q: 'If 3 tasks take 1s, 2s, and 3s, how long does gather() take?', options: ['6 seconds', '3 seconds', '2 seconds', '1 second'], answer: 1, explain: 'gather() runs them concurrently. Total time = longest task = 3 seconds (not 1+2+3=6).' },
            { q: 'Is asyncio multi-threaded?', options: ['Yes', 'No, single-threaded', 'Depends', 'Yes, uses thread pool'], answer: 1, explain: 'Asyncio is single-threaded. It achieves concurrency through cooperative multitasking — coroutines voluntarily yield control with await.' }
        ]
    }
    ]
}

];
