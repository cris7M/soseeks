/* ==========================================================
   SOSEEKS ACADEMY — Core Python Course Content
   10 modules · 33 topics · 90+ code examples · 130+ quizzes
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
            <li><code>complex</code> — Complex numbers: <code>3+4j</code></li>
        </ul>
        <h3>Variable Naming Rules</h3>
        <ul>
            <li>Must start with a letter or underscore (<code>_</code>)</li>
            <li>Can contain letters, digits, and underscores</li>
            <li>Case-sensitive: <code>Name</code> and <code>name</code> are different</li>
            <li>Use <strong>snake_case</strong>: <code>my_variable</code> (not camelCase)</li>
            <li>Cannot be a reserved keyword (<code>if</code>, <code>class</code>, <code>return</code>, etc.)</li>
        </ul>`,
        code: [
            {
                title: 'Creating Variables & Checking Types',
                code: 'name = "Soseeks"\nage = 3\nrating = 4.9\nis_awesome = True\nnothing = None\n\nprint(name)           # Soseeks\nprint(type(age))      # <class \'int\'>\nprint(type(rating))   # <class \'float\'>\nprint(type(nothing))  # <class \'NoneType\'>\n\n# Check type with isinstance()\nprint(isinstance(age, int))     # True\nprint(isinstance(name, str))    # True\nprint(isinstance(age, (int, float)))  # True (either)',
                output: 'Soseeks\n<class \'int\'>\n<class \'float\'>\n<class \'NoneType\'>\nTrue\nTrue\nTrue'
            },
            {
                title: 'Dynamic Typing & Type Conversion',
                code: 'x = 10          # x is an int\nprint(type(x))  # <class \'int\'>\n\nx = "hello"     # now x is a string!\nprint(type(x))  # <class \'str\'>\n\n# Type conversion (casting)\nnum_str = "42"\nnum = int(num_str)      # str -> int\nprint(num + 8)          # 50\n\npi = float("3.14")      # str -> float\nprint(pi)               # 3.14\n\nprint(str(100) + " runs") # int -> str\nprint(bool(0))           # False (0 is falsy)\nprint(bool("hello"))     # True (non-empty str is truthy)',
                output: '<class \'int\'>\n<class \'str\'>\n50\n3.14\n100 runs\nFalse\nTrue'
            },
            {
                title: 'Identity, Equality & Memory',
                code: '# == checks VALUE equality\n# is checks IDENTITY (same object in memory)\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a == b)   # True  (same value)\nprint(a is b)   # False (different objects)\nprint(a is c)   # True  (same object)\n\n# id() shows memory address\nprint(id(a) == id(c))  # True\nprint(id(a) == id(b))  # False\n\n# Small integer caching (-5 to 256)\nx = 256\ny = 256\nprint(x is y)  # True (cached)\n\nx = 257\ny = 257\nprint(x is y)  # False (not cached)',
                output: 'True\nFalse\nTrue\nTrue\nFalse\nTrue\nFalse'
            }
        ],
        takeaways: [
            'Variables are created with <code>=</code> — no type declaration needed',
            'Python is dynamically typed — a variable can change its type anytime',
            'Use <code>type()</code> to check type, <code>isinstance()</code> for type checking in code',
            '<code>==</code> checks value equality, <code>is</code> checks identity (same object)',
            '<code>int()</code>, <code>str()</code>, <code>float()</code>, <code>bool()</code> for type conversion',
            'Falsy values: <code>0</code>, <code>""</code>, <code>None</code>, <code>[]</code>, <code>{}</code>, <code>False</code>'
        ],
        quiz: [
            { q: 'What is the output of type(3.14)?', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], answer: 1, explain: '3.14 has a decimal point, so Python stores it as a float. There is no "number" type in Python.' },
            { q: 'Which is a valid Python variable name?', options: ['2name', 'my-var', '_count', 'class'], answer: 2, explain: '_count is valid. 2name starts with a digit, my-var has a hyphen, and class is a reserved keyword.' },
            { q: 'What does bool("") return?', options: ['True', 'False', 'None', 'Error'], answer: 1, explain: 'An empty string is falsy in Python. bool("") returns False. Any non-empty string is truthy.' },
            { q: 'What is the difference between == and is?', options: ['No difference', '== checks value, is checks identity', '== is faster', 'is checks value, == checks identity'], answer: 1, explain: '== checks if two objects have the same VALUE. "is" checks if they are the SAME OBJECT in memory.' },
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
        </ul>
        <h3>Assignment Operators</h3>
        <ul>
            <li><code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>//=</code>, <code>%=</code>, <code>**=</code></li>
        </ul>
        <h3>Membership & Identity</h3>
        <ul>
            <li><code>in</code> — checks if value exists in a sequence</li>
            <li><code>is</code> — checks if two variables refer to the same object</li>
        </ul>`,
        code: [
            {
                title: 'Arithmetic & Comparison',
                code: '# Arithmetic\nprint(10 + 3)   # 13\nprint(10 - 3)   # 7\nprint(10 * 3)   # 30\nprint(10 / 3)   # 3.333... (always float)\nprint(10 // 3)  # 3 (floor division)\nprint(10 % 3)   # 1 (remainder)\nprint(2 ** 10)  # 1024 (power)\n\n# Comparison — returns True/False\nprint(10 > 3)    # True\nprint(10 == 10)  # True\nprint(5 != 5)    # False\nprint(3 <= 3)    # True',
                output: '13\n7\n30\n3.3333333333333335\n3\n1\n1024\nTrue\nTrue\nFalse\nTrue'
            },
            {
                title: 'Logical & Assignment Operators',
                code: 'age = 25\nhas_id = True\n\n# and — both must be True\ncan_enter = age >= 18 and has_id\nprint(can_enter)  # True\n\n# or — at least one must be True\nis_weekend = False\nis_holiday = True\nday_off = is_weekend or is_holiday\nprint(day_off)    # True\n\n# not — reverses the boolean\nprint(not False)  # True\n\n# Assignment operators\nx = 10\nx += 5   # x = x + 5 = 15\nx *= 2   # x = x * 2 = 30\nx //= 4  # x = x // 4 = 7\nprint(x)',
                output: 'True\nTrue\nTrue\n7'
            },
            {
                title: 'Membership, Identity & Chaining',
                code: '# Membership: in / not in\nfruits = ["apple", "banana", "cherry"]\nprint("banana" in fruits)      # True\nprint("grape" not in fruits)    # True\nprint("Py" in "Python")        # True\n\n# Chained comparisons (unique to Python!)\nx = 15\nprint(10 < x < 20)    # True (10 < 15 AND 15 < 20)\nprint(1 < 2 < 3 < 4)  # True\n\n# Operator precedence\n# ** > * / // % > + - > comparisons > not > and > or\nresult = 2 + 3 * 4 ** 2\nprint(result)  # 2 + 3 * 16 = 2 + 48 = 50',
                output: 'True\nTrue\nTrue\nTrue\nTrue\n50'
            }
        ],
        takeaways: [
            '<code>/</code> always returns float, <code>//</code> returns integer (floor division)',
            '<code>%</code> gives remainder — useful for checking even/odd: <code>n % 2 == 0</code>',
            '<code>**</code> is the power operator (not ^ like some languages)',
            'Python supports chained comparisons: <code>1 < x < 10</code>',
            '<code>in</code> checks membership in sequences (lists, strings, dicts)',
            'Precedence: <code>**</code> > <code>* / // %</code> > <code>+ -</code> > comparisons > <code>not</code> > <code>and</code> > <code>or</code>'
        ],
        quiz: [
            { q: 'What is the output of 17 // 5?', options: ['3.4', '3', '4', '2'], answer: 1, explain: '// is floor division — it divides and rounds down. 17 / 5 = 3.4, floored to 3.' },
            { q: 'What does 17 % 5 return?', options: ['3', '2', '3.4', '12'], answer: 1, explain: '% is modulo (remainder). 17 divided by 5 = 3 remainder 2.' },
            { q: 'What is True and False?', options: ['True', 'False', 'None', 'Error'], answer: 1, explain: '"and" requires BOTH sides to be True. Since one is False, the result is False.' },
            { q: 'What is "hello" in "hello world"?', options: ['True', 'False', '"hello"', 'Error'], answer: 0, explain: 'The "in" operator checks if a substring exists in a string. "hello" is found in "hello world".' },
            { q: 'What is 2 + 3 * 4?', options: ['20', '14', '24', '12'], answer: 1, explain: 'Multiplication has higher precedence than addition. 3 * 4 = 12, then 2 + 12 = 14.' }
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
            <li><strong>Negative Indexing</strong> — From the end: <code>"Hello"[-1]</code> → <code>'o'</code></li>
            <li><strong>Slicing</strong> — Get a portion: <code>"Hello"[1:4]</code> → <code>'ell'</code></li>
            <li><strong>Immutable</strong> — You can't change characters in place</li>
        </ul>
        <h3>String Formatting Methods</h3>
        <ul>
            <li><code>f"Hi {name}"</code> — f-strings (Python 3.6+, recommended)</li>
            <li><code>"Hi {}".format(name)</code> — .format() method</li>
            <li><code>"Hi %s" % name</code> — % formatting (old style)</li>
        </ul>
        <h3>Common Methods</h3>
        <ul>
            <li><code>.upper()</code>, <code>.lower()</code>, <code>.title()</code>, <code>.capitalize()</code></li>
            <li><code>.strip()</code>, <code>.lstrip()</code>, <code>.rstrip()</code></li>
            <li><code>.split()</code>, <code>.join()</code>, <code>.replace()</code></li>
            <li><code>.find()</code>, <code>.count()</code>, <code>.startswith()</code>, <code>.endswith()</code></li>
        </ul>`,
        code: [
            {
                title: 'Indexing, Slicing & Immutability',
                code: 'text = "Python"\n\n# Indexing (0-based)\nprint(text[0])    # P\nprint(text[-1])   # n (last character)\nprint(text[-2])   # o (second last)\n\n# Slicing [start:end:step]\nprint(text[0:3])  # Pyt\nprint(text[2:])   # thon\nprint(text[::-1]) # nohtyP (reverse!)\nprint(text[::2])  # Pto (every 2nd char)\n\n# Strings are immutable\n# text[0] = "J"  # TypeError!\n# Instead, create a new string:\nnew_text = "J" + text[1:]\nprint(new_text)   # Jython',
                output: 'P\nn\no\nPyt\nthon\nnohtyP\nPto\nJython'
            },
            {
                title: 'String Methods',
                code: 'msg = "  Hello, World!  "\n\n# Whitespace removal\nprint(msg.strip())          # "Hello, World!"\nprint(msg.strip().upper())  # "HELLO, WORLD!"\nprint(msg.strip().lower())  # "hello, world!"\nprint("hello world".title()) # "Hello World"\n\n# Splitting and joining\ncsv = "apple,banana,cherry"\nfruits = csv.split(",")\nprint(fruits)  # [\'apple\', \'banana\', \'cherry\']\n\njoined = " | ".join(fruits)\nprint(joined)  # apple | banana | cherry\n\n# Searching\nprint("Python".find("th"))      # 2\nprint("banana".count("a"))      # 3\nprint("hello.py".endswith(".py")) # True\n\n# Replacing\nprint("Hello World".replace("World", "Python"))',
                output: 'Hello, World!\nHELLO, WORLD!\nhello, world!\nHello World\n[\'apple\', \'banana\', \'cherry\']\napple | banana | cherry\n2\n3\nTrue\nHello Python'
            },
            {
                title: 'String Formatting (f-strings, .format, %)',
                code: 'name = "Sanjay"\nage = 25\nprice = 29999.5\n\n# f-strings (best — Python 3.6+)\nprint(f"Name: {name}, Age: {age}")\nprint(f"Price: ₹{price:,.2f}")  # comma + 2 decimals\n\nword = "Python"\nprint(f"{word:>15}")   # right-align in 15 chars\nprint(f"{word:<15}!")  # left-align\nprint(f"{word:^15}")   # center-align\n\n# .format() method\nprint("Hello, {}! You are {}.".format(name, age))\n\n# Multiline strings\nquery = """\nSELECT *\nFROM users\nWHERE age > 18\n"""\nprint(query.strip())\n\n# Raw strings (ignore escape sequences)\npath = r"C:\\Users\\Sanjay\\Documents"\nprint(path)',
                output: 'Name: Sanjay, Age: 25\nPrice: ₹29,999.50\n         Python\nPython         !\n     Python    \nHello, Sanjay! You are 25.\nSELECT *\nFROM users\nWHERE age > 18\nC:\\Users\\Sanjay\\Documents'
            }
        ],
        takeaways: [
            'Strings are indexed from 0. Use negative indices to count from the end',
            'Slicing: <code>[start:end:step]</code> — end is exclusive',
            '<code>[::-1]</code> reverses a string — very popular interview question!',
            'f-strings are the modern, recommended way to format strings',
            'Strings are immutable — methods return new strings, don\'t modify originals',
            '<code>r"..."</code> raw strings ignore escape sequences — useful for file paths and regex'
        ],
        quiz: [
            { q: 'What is "Python"[1:4]?', options: ['"Pyt"', '"yth"', '"ytho"', '"ython"'], answer: 1, explain: 'Slicing [start:end) — start inclusive, end exclusive. Index 1="y", 2="t", 3="h". Result: "yth".' },
            { q: 'What does "hello"[::-1] return?', options: ['"hello"', '"olleh"', '"ello"', 'Error'], answer: 1, explain: '[::-1] reverses the string. "hello" reversed is "olleh".' },
            { q: 'Are Python strings mutable or immutable?', options: ['Mutable', 'Immutable', 'Depends on length', 'Depends on content'], answer: 1, explain: 'Strings are immutable — once created, individual characters cannot be changed.' },
            { q: '"apple,banana".split(",") returns?', options: ['"apple banana"', '["apple", "banana"]', '("apple", "banana")', 'Error'], answer: 1, explain: '.split(",") splits the string at commas and returns a LIST of substrings.' },
            { q: 'What does "banana".count("a") return?', options: ['1', '2', '3', '0'], answer: 2, explain: '.count("a") counts how many times "a" appears in "banana". It appears 3 times.' }
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
        <h3>print() Parameters</h3>
        <ul>
            <li><code>sep</code> — separator between values (default: space)</li>
            <li><code>end</code> — what to print at the end (default: newline)</li>
            <li><code>file</code> — where to write (default: screen)</li>
        </ul>
        <h3>Important Notes</h3>
        <ul>
            <li><code>input()</code> ALWAYS returns a <strong>string</strong> — you must convert for numbers</li>
            <li>Use <code>int(input())</code> or <code>float(input())</code> for numeric input</li>
        </ul>`,
        code: [
            {
                title: 'print() — Advanced Usage',
                code: '# Multiple values\nprint("Name:", "Soseeks", "Age:", 3)\n\n# Custom separator\nprint("2026", "03", "08", sep="-")\n\n# Custom end (no newline)\nprint("Loading", end="...")\nprint("Done!")\n\n# f-string formatting\nprice = 29999\nprint(f"Course fee: ₹{price:,}")\n\n# Print to a file\nwith open("log.txt", "w") as f:\n    print("Log entry", file=f)\n\n# Debugging with f-string =\nx = 42\nprint(f"{x = }")  # Python 3.8+',
                output: 'Name: Soseeks Age: 3\n2026-03-08\nLoading...Done!\nCourse fee: ₹29,999\nx = 42'
            },
            {
                title: 'input() & Type Conversion',
                code: 'name = input("Your name: ")  # Always returns string\nage = input("Your age: ")    # Also returns string!\n\n# WRONG: age + 1 → TypeError (str + int)\n# RIGHT: Convert first!\nage = int(age)\nnext_year = age + 1\nprint(f"{name} will be {next_year} next year")\n\n# Safe input with error handling\ntry:\n    num = int(input("Enter a number: "))\n    print(f"Double: {num * 2}")\nexcept ValueError:\n    print("That\'s not a valid number!")\n\n# Multiple inputs in one line\na, b = input("Enter two numbers (space-separated): ").split()\nprint(f"Sum: {int(a) + int(b)}")',
                output: 'Your name: Sanjay\nYour age: 25\nSanjay will be 26 next year\nEnter a number: 7\nDouble: 14\nEnter two numbers (space-separated): 3 5\nSum: 8'
            }
        ],
        takeaways: [
            '<code>input()</code> always returns a string — convert with <code>int()</code> or <code>float()</code>',
            '<code>print()</code> uses <code>sep=" "</code> and <code>end="\\n"</code> by default',
            'Use f-strings for clean formatting: <code>f"{value:,}"</code> for thousands separator',
            '<code>f"{x = }"</code> (Python 3.8+) prints both variable name and value — great for debugging',
            'Use <code>.split()</code> to take multiple inputs in one line'
        ],
        quiz: [
            { q: 'What type does input() return?', options: ['int', 'float', 'str', 'Depends on what user types'], answer: 2, explain: 'input() ALWAYS returns a string, even if the user types a number.' },
            { q: 'What does print("A", "B", sep="-") output?', options: ['A B', 'A-B', 'A - B', 'AB'], answer: 1, explain: 'sep="-" replaces the default space separator with a hyphen.' },
            { q: 'What happens with: x = input(); print(x + 1)?', options: ['Prints x+1', 'TypeError', 'Prints 1', 'SyntaxError'], answer: 1, explain: 'input() returns a string. You can\'t add a string + integer. You need int(x) + 1.' },
            { q: 'How to take two space-separated inputs?', options: ['input(), input()', 'input().split()', 'input(2)', 'multi_input()'], answer: 1, explain: 'input().split() splits the input string by spaces into a list. Then unpack: a, b = input().split()' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 2: CONTROL FLOW
   ============================================================ */
{
    id: 2, title: 'Control Flow', icon: '🚦', color: '#8b5cf6',
    description: 'Learn decision making (if/else), repetition (for/while), and pattern matching.',
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
        <p><strong>Indentation matters!</strong> Python uses 4 spaces to define code blocks — no curly braces like other languages.</p>
        <h3>Truthy & Falsy Values</h3>
        <p>These are <strong>Falsy</strong> (treated as False): <code>0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>None</code>, <code>False</code>. Everything else is <strong>Truthy</strong>.</p>`,
        code: [
            {
                title: 'Basic if/elif/else',
                code: 'score = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"Score: {score}, Grade: {grade}")\n\n# Truthy/Falsy check\nname = ""\nif name:\n    print(f"Hello, {name}")\nelse:\n    print("Name is empty!")',
                output: 'Score: 85, Grade: B\nName is empty!'
            },
            {
                title: 'Nested Conditions & Ternary',
                code: 'age = 20\nhas_license = True\n\n# Nested if\nif age >= 18:\n    if has_license:\n        print("You can drive!")\n    else:\n        print("Get a license first")\nelse:\n    print("Too young to drive")\n\n# Ternary (one-line if) — very Pythonic!\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)\n\n# Ternary with function call\ndef check_even(n):\n    return "Even" if n % 2 == 0 else "Odd"\n\nprint(check_even(7))   # Odd\nprint(check_even(10))  # Even',
                output: 'You can drive!\nAdult\nOdd\nEven'
            },
            {
                title: 'Complex Conditions & match/case',
                code: '# Combining conditions\nage = 25\nincome = 50000\ncredit_score = 750\n\nif age >= 21 and income >= 30000 and credit_score >= 700:\n    print("Loan approved!")\nelse:\n    print("Loan denied")\n\n# Short-circuit evaluation\nx = None\nif x is not None and x > 10:\n    print("x is big")\nelse:\n    print("x is None or small")\n\n# match/case (Python 3.10+)\ncommand = "start"\nmatch command:\n    case "start":\n        print("Starting...")\n    case "stop":\n        print("Stopping...")\n    case _:\n        print("Unknown command")',
                output: 'Loan approved!\nx is None or small\nStarting...'
            }
        ],
        takeaways: [
            'Python uses indentation (4 spaces) instead of curly braces for blocks',
            '<code>elif</code> checks are sequential — first match wins, rest are skipped',
            'Ternary syntax: <code>value_if_true if condition else value_if_false</code>',
            'Short-circuit: <code>and</code> stops at first False, <code>or</code> stops at first True',
            '<code>match/case</code> (Python 3.10+) is Python\'s pattern matching (like switch)',
            'Empty values are Falsy: <code>if my_list:</code> checks if list is non-empty'
        ],
        quiz: [
            { q: 'What is the output?\nx = 15\nif x > 20: print("A")\nelif x > 10: print("B")\nelif x > 5: print("C")', code: 'x = 15\nif x > 20: print("A")\nelif x > 10: print("B")\nelif x > 5: print("C")', options: ['A', 'B', 'C', 'B and C'], answer: 1, explain: 'elif checks are sequential. x=15 fails x>20, but passes x>10, so "B" is printed. Once matched, remaining are skipped.' },
            { q: 'What does "Yes" if 5 > 3 else "No" return?', options: ['"Yes"', '"No"', 'True', 'Error'], answer: 0, explain: '5 > 3 is True, so the ternary returns "Yes".' },
            { q: 'What is bool([])?', options: ['True', 'False', 'None', 'Error'], answer: 1, explain: 'An empty list is falsy. bool([]) returns False. A non-empty list is truthy.' },
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
            <li><code>range(10, 0, -1)</code> → 10, 9, 8, ..., 1 (countdown)</li>
        </ul>
        <h3>Useful Built-ins for Loops</h3>
        <ul>
            <li><code>enumerate()</code> — index + value</li>
            <li><code>zip()</code> — iterate multiple sequences together</li>
            <li><code>reversed()</code> — iterate in reverse</li>
        </ul>`,
        code: [
            {
                title: 'Iterating with for, range, enumerate',
                code: '# Loop through a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")\n\n# Loop with range\nfor i in range(5):\n    print(i, end=" ")  # 0 1 2 3 4\nprint()\n\n# enumerate — get index + value\nfor i, fruit in enumerate(fruits, start=1):\n    print(f"{i}. {fruit}")',
                output: 'I like apple\nI like banana\nI like cherry\n0 1 2 3 4 \n1. apple\n2. banana\n3. cherry'
            },
            {
                title: 'zip, break, continue',
                code: '# zip — iterate two lists together\nnames = ["Sanjay", "Priya", "Raj"]\nscores = [85, 92, 78]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n\n# break — exit loop early\nfor num in range(10):\n    if num == 5:\n        print("\\nFound 5! Stopping.")\n        break\n    print(num, end=" ")\n\n# continue — skip current iteration\nprint("\\nOdd numbers:")\nfor num in range(10):\n    if num % 2 == 0:\n        continue\n    print(num, end=" ")',
                output: 'Sanjay: 85\nPriya: 92\nRaj: 78\n0 1 2 3 4 \nFound 5! Stopping.\nOdd numbers:\n1 3 5 7 9'
            },
            {
                title: 'Nested Loops & for-else',
                code: '# Nested loops — multiplication table\nfor i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i}x{j}={i*j}", end="\\t")\n    print()  # newline after each row\n\n# for-else — else runs if loop completes without break\nnumbers = [2, 4, 6, 8]\nfor n in numbers:\n    if n % 2 != 0:\n        print(f"Found odd: {n}")\n        break\nelse:\n    print("All numbers are even!")\n\n# Pattern: Search with for-else\ndef find_user(users, target):\n    for user in users:\n        if user == target:\n            return f"Found {user}"\n    return "User not found"\n\nprint(find_user(["Sanjay", "Priya"], "Priya"))',
                output: '1x1=1\t1x2=2\t1x3=3\t\n2x1=2\t2x2=4\t2x3=6\t\n3x1=3\t3x2=6\t3x3=9\t\nAll numbers are even!\nFound Priya'
            }
        ],
        takeaways: [
            '<code>range(n)</code> generates 0 to n-1 — end value is always excluded',
            '<code>enumerate()</code> returns (index, value) pairs — cleaner than manual counting',
            '<code>zip()</code> pairs items from multiple sequences together',
            '<code>break</code> exits the loop, <code>continue</code> skips to next iteration',
            '<code>for-else</code>: the else block runs only if loop completes without <code>break</code>',
            'Nested loops multiply iterations: outer(3) × inner(3) = 9 total iterations'
        ],
        quiz: [
            { q: 'What does range(2, 6) produce?', options: ['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5', '2, 3, 4'], answer: 1, explain: 'range(start, end) goes from start to end-1. So range(2,6) gives 2, 3, 4, 5.' },
            { q: 'What does break do inside a loop?', options: ['Skips current iteration', 'Exits the loop completely', 'Pauses the loop', 'Restarts the loop'], answer: 1, explain: 'break immediately exits the entire loop. continue skips to the next iteration.' },
            { q: 'When does the else block in for-else run?', options: ['Always', 'When break is used', 'When loop completes normally', 'Never'], answer: 2, explain: 'The else block runs only when the for loop completes all iterations without hitting a break.' },
            { q: 'What does zip([1,2], [3,4]) produce?', options: ['[1,2,3,4]', '[(1,3), (2,4)]', '[[1,3], [2,4]]', '{1:3, 2:4}'], answer: 1, explain: 'zip pairs elements at the same index: (1,3), (2,4). Returns an iterator of tuples.' }
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
        </ul>
        <h3>Common Patterns</h3>
        <ul>
            <li>Countdown / count up</li>
            <li>User input validation (keep asking until valid)</li>
            <li><code>while True</code> + <code>break</code> — loop until explicit exit</li>
        </ul>`,
        code: [
            {
                title: 'while Loop Basics & Patterns',
                code: '# Countdown\ncount = 5\nwhile count > 0:\n    print(count, end=" ")\n    count -= 1\nprint("Go!")\n\n# Guess the number game\nimport random\ntarget = random.randint(1, 10)\nattempts = 0\n\nwhile True:\n    guess = int(input("Guess (1-10): "))\n    attempts += 1\n    if guess == target:\n        print(f"Correct! Took {attempts} tries")\n        break\n    elif guess < target:\n        print("Higher!")\n    else:\n        print("Lower!")',
                output: '5 4 3 2 1 Go!\nGuess (1-10): 5\nHigher!\nGuess (1-10): 8\nLower!\nGuess (1-10): 7\nCorrect! Took 3 tries'
            },
            {
                title: 'Input Validation & while-else',
                code: '# Input validation pattern\nwhile True:\n    age = input("Enter your age: ")\n    if age.isdigit() and 1 <= int(age) <= 120:\n        age = int(age)\n        print(f"Age: {age}")\n        break\n    print("Invalid! Enter a number between 1-120.")\n\n# while-else (else runs when condition becomes False)\nretries = 3\nwhile retries > 0:\n    password = input("Password: ")\n    if password == "secret":\n        print("Access granted!")\n        break\n    retries -= 1\n    print(f"{retries} retries left")\nelse:\n    print("Account locked!")',
                output: 'Enter your age: abc\nInvalid! Enter a number between 1-120.\nEnter your age: 25\nAge: 25\nPassword: wrong\n2 retries left\nPassword: wrong\n1 retries left\nPassword: secret\nAccess granted!'
            }
        ],
        takeaways: [
            'Always ensure the while condition eventually becomes False',
            'Use <code>while True</code> + <code>break</code> for loops with conditional exit',
            '<code>while-else</code>: else runs when condition becomes False (not on break)',
            'Use <code>for</code> for collections, <code>while</code> for condition-based loops',
            'Common pattern: input validation — keep asking until valid input received'
        ],
        quiz: [
            { q: 'What causes an infinite loop?', options: ['Using break', 'Condition never becomes False', 'Using continue', 'Looping over a list'], answer: 1, explain: 'If the while condition never becomes False, the loop runs forever.' },
            { q: 'When is while loop preferred over for?', options: ['Always', 'When you know exact count', 'When loop count is unknown', 'Never'], answer: 2, explain: 'Use while when you don\'t know how many iterations — like waiting for user input.' },
            { q: 'What does while True: ... break do?', options: ['Error', 'Runs once', 'Runs forever', 'Runs until break is hit'], answer: 3, explain: 'while True creates an infinite loop. break exits it when a condition is met.' },
            { q: 'In while-else, when does else run?', options: ['Always', 'When break is hit', 'When condition becomes False', 'Never'], answer: 2, explain: 'The else block runs when the while condition becomes False naturally. If break exits the loop, else is skipped.' }
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
        id: '3.1', title: 'Lists & Comprehensions', emoji: '🚂',
        analogy: {
            title: 'Lists are like a Train with Numbered Compartments',
            emoji: '🚂',
            desc: 'A train has compartments numbered 0, 1, 2, 3... You can add passengers, remove them, or swap them. Lists work the same — ordered, indexed, and mutable!',
            type: 'train',
            items: ['"apple"', '"banana"', '"cherry"', '"date"']
        },
        theory: `<p>A <strong>list</strong> is an ordered, mutable collection. It's the most versatile data structure in Python.</p>
        <h3>Key Features</h3>
        <ul>
            <li><strong>Ordered</strong> — items maintain their insertion order</li>
            <li><strong>Indexed</strong> — access by position (0-based)</li>
            <li><strong>Mutable</strong> — can add, remove, change items</li>
            <li><strong>Allows duplicates</strong></li>
            <li><strong>Can hold mixed types</strong> — <code>[1, "hello", True, 3.14]</code></li>
        </ul>
        <h3>Common Methods</h3>
        <ul>
            <li><code>.append()</code>, <code>.extend()</code>, <code>.insert()</code> — adding</li>
            <li><code>.remove()</code>, <code>.pop()</code>, <code>.clear()</code> — removing</li>
            <li><code>.sort()</code>, <code>.reverse()</code>, <code>.copy()</code> — operations</li>
            <li><code>.index()</code>, <code>.count()</code> — searching</li>
        </ul>`,
        code: [
            {
                title: 'Creating, Modifying & Slicing Lists',
                code: 'fruits = ["apple", "banana", "cherry"]\n\n# Access & modify\nprint(fruits[0])      # apple\nprint(fruits[-1])     # cherry\nfruits[1] = "blueberry"\n\n# Adding items\nfruits.append("date")         # add to end\nfruits.insert(1, "avocado")   # insert at index 1\nfruits.extend(["elderberry"])  # add multiple\nprint(fruits)\n\n# Removing items\nfruits.remove("cherry")    # remove by value\npopped = fruits.pop()      # remove last\nprint(f"Popped: {popped}")\nprint(f"Length: {len(fruits)}")',
                output: '[\'apple\', \'avocado\', \'blueberry\', \'date\', \'elderberry\']\nPopped: elderberry\nLength: 4'
            },
            {
                title: 'Sorting, Copying & Useful Functions',
                code: 'nums = [3, 1, 4, 1, 5, 9, 2, 6]\n\n# sort() modifies in place, returns None\nnums.sort()\nprint(nums)  # [1, 1, 2, 3, 4, 5, 6, 9]\n\n# sorted() returns a NEW list (original unchanged)\noriginal = [3, 1, 2]\nresult = sorted(original, reverse=True)\nprint(f"Original: {original}")  # [3, 1, 2]\nprint(f"Sorted:   {result}")    # [3, 2, 1]\n\n# Shallow copy vs reference\na = [1, 2, 3]\nb = a         # b points to SAME list\nc = a.copy()  # c is a NEW copy\na.append(4)\nprint(f"b: {b}")  # [1,2,3,4] — affected!\nprint(f"c: {c}")  # [1,2,3]   — independent\n\n# Useful functions\nprint(f"Sum: {sum(nums)}, Min: {min(nums)}, Max: {max(nums)}")',
                output: '[1, 1, 2, 3, 4, 5, 6, 9]\nOriginal: [3, 1, 2]\nSorted:   [3, 2, 1]\nb: [1, 2, 3, 4]\nc: [1, 2, 3]\nSum: 31, Min: 1, Max: 9'
            },
            {
                title: 'List Comprehensions — The Pythonic Way',
                code: '# Basic comprehension\nsquares = [x**2 for x in range(6)]\nprint(squares)  # [0, 1, 4, 9, 16, 25]\n\n# With condition (filter)\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8]\n\n# Transform + filter\nnames = ["sanjay", "priya", "raj", "ankit"]\nlong_names = [n.title() for n in names if len(n) > 3]\nprint(long_names)  # [\'Sanjay\', \'Priya\', \'Ankit\']\n\n# Nested comprehension — flatten a matrix\nmatrix = [[1, 2], [3, 4], [5, 6]]\nflat = [num for row in matrix for num in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6]\n\n# if-else in comprehension\nlabels = ["even" if x % 2 == 0 else "odd" for x in range(5)]\nprint(labels)  # [\'even\', \'odd\', \'even\', \'odd\', \'even\']',
                output: '[0, 1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8]\n[\'Sanjay\', \'Priya\', \'Ankit\']\n[1, 2, 3, 4, 5, 6]\n[\'even\', \'odd\', \'even\', \'odd\', \'even\']'
            }
        ],
        takeaways: [
            '<code>.append()</code> adds ONE item; <code>.extend()</code> adds MULTIPLE items from an iterable',
            '<code>.sort()</code> modifies in place (returns None); <code>sorted()</code> returns a new list',
            'Assignment (<code>b = a</code>) creates a reference, not a copy! Use <code>.copy()</code>',
            'List comprehension: <code>[expr for x in iterable if condition]</code> — very Pythonic!',
            'Nested comprehension reads left-to-right: outer loop first, inner loop second',
            'Interview tip: <code>.append([4,5])</code> adds one element (a list); <code>.extend([4,5])</code> adds two elements'
        ],
        quiz: [
            { q: 'What does [1,2,3].append([4,5]) produce?', options: ['[1,2,3,4,5]', '[1,2,3,[4,5]]', 'Error', '[5,4,3,2,1]'], answer: 1, explain: 'append() adds the ENTIRE object as one element. Use .extend([4,5]) to add individual elements.' },
            { q: 'What is [x**2 for x in range(4)]?', options: ['[1,4,9,16]', '[0,1,4,9]', '[0,2,4,6]', '[1,2,3,4]'], answer: 1, explain: 'range(4) gives 0,1,2,3. Squaring each: 0,1,4,9.' },
            { q: 'Difference between .sort() and sorted()?', options: ['No difference', '.sort() returns new list', '.sort() modifies in place', 'sorted() is slower'], answer: 2, explain: '.sort() modifies the original list and returns None. sorted() returns a NEW sorted list.' },
            { q: 'What does b = a do for lists?', options: ['Creates a copy', 'Creates a reference to same list', 'Creates empty list', 'Error'], answer: 1, explain: 'b = a makes b point to the SAME list. Changes to a affect b. Use .copy() for an independent copy.' },
            { q: 'What is [x for x in range(6) if x % 2 == 0]?', options: ['[1,3,5]', '[0,2,4]', '[2,4,6]', '[0,1,2]'], answer: 1, explain: 'range(6) is 0-5. Filter keeps only where x%2==0: 0, 2, 4.' }
        ]
    },
    {
        id: '3.2', title: 'Tuples & Named Tuples', emoji: '📦',
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
            <li>Slightly faster and more memory-efficient than lists</li>
        </ul>
        <h3>Named Tuples</h3>
        <p><code>namedtuple</code> lets you access elements by name instead of index — more readable!</p>`,
        code: [
            {
                title: 'Tuple Basics & Unpacking',
                code: '# Creating tuples\npoint = (10, 20)\nrgb = (255, 128, 0)\nsingleton = (42,)  # Note the comma for single element!\n\n# Unpacking\nx, y = point\nprint(f"x={x}, y={y}")\n\n# Swap variables (Pythonic!)\na, b = 1, 2\na, b = b, a\nprint(f"a={a}, b={b}")\n\n# Extended unpacking with *\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(f"first={first}, middle={middle}, last={last}")\n\n# Tuple as function return\ndef get_user():\n    return "Sanjay", 25, "Bhilai"\n\nname, age, city = get_user()\nprint(f"{name} from {city}")',
                output: 'x=10, y=20\na=2, b=1\nfirst=1, middle=[2, 3, 4], last=5\nSanjay from Bhilai'
            },
            {
                title: 'Named Tuples & Tuple Methods',
                code: 'from collections import namedtuple\n\n# Define a named tuple type\nStudent = namedtuple("Student", ["name", "age", "grade"])\n\n# Create instances\ns1 = Student("Sanjay", 25, "A")\ns2 = Student("Priya", 22, "A+")\n\n# Access by name (readable!) or index\nprint(s1.name)     # Sanjay\nprint(s1[0])       # Sanjay (still works)\nprint(s2.grade)    # A+\n\n# Tuple methods\nnums = (1, 2, 3, 2, 1, 2)\nprint(f"Count of 2: {nums.count(2)}")  # 3\nprint(f"Index of 3: {nums.index(3)}")  # 2\n\n# Convert between list and tuple\nmy_list = [1, 2, 3]\nmy_tuple = tuple(my_list)\nback_to_list = list(my_tuple)\nprint(type(my_tuple))  # <class \'tuple\'>',
                output: 'Sanjay\nSanjay\nA+\nCount of 2: 3\nIndex of 3: 2\n<class \'tuple\'>'
            }
        ],
        takeaways: [
            'Tuples are created with <code>()</code> and are immutable',
            'Single-element tuple needs trailing comma: <code>(42,)</code> not <code>(42)</code>',
            'Tuple unpacking: <code>a, b, c = (1, 2, 3)</code> — clean and Pythonic',
            'Use <code>*</code> for extended unpacking: <code>first, *rest = [1,2,3,4]</code>',
            '<code>namedtuple</code> gives readable access: <code>student.name</code> instead of <code>student[0]</code>',
            'Variable swap: <code>a, b = b, a</code> — no temp variable needed!'
        ],
        quiz: [
            { q: 'What is type((42))?', options: ['tuple', 'int', 'list', 'Error'], answer: 1, explain: '(42) is just parentheses around an int. For a tuple, add a comma: (42,).' },
            { q: 'Can tuples be dictionary keys?', options: ['Yes', 'No', 'Only empty tuples', 'Depends'], answer: 0, explain: 'Yes! Tuples are immutable (hashable), so they can be dict keys. Lists cannot.' },
            { q: 'What does a, b = b, a do?', options: ['Error', 'Nothing', 'Swaps values', 'Creates tuples'], answer: 2, explain: 'Python evaluates the right side as a tuple (b, a), then unpacks into a and b.' },
            { q: 'What does first, *rest = [1,2,3,4] give rest?', options: ['[2,3,4]', '(2,3,4)', '[1]', 'Error'], answer: 0, explain: '*rest collects the remaining elements as a LIST: [2, 3, 4].' }
        ]
    },
    {
        id: '3.3', title: 'Dictionaries', emoji: '📒',
        analogy: {
            title: 'Dictionaries are like Phone Contacts',
            emoji: '📱',
            desc: 'Your phone contacts app: search by NAME (key) and get the PHONE NUMBER (value). No duplicate names! That\'s exactly how dictionaries work — key-value pairs.',
            type: 'contact',
            items: [
                { key: '"Sanjay"', value: '"8500518050"' },
                { key: '"office"', value: '"sanjay@soseeks.com"' },
                { key: '"age"', value: '25' }
            ]
        },
        theory: `<p>A <strong>dictionary</strong> stores data as <strong>key-value pairs</strong>. Keys must be unique and immutable.</p>
        <h3>Key Features</h3>
        <ul>
            <li><strong>Fast lookup</strong> — O(1) average time</li>
            <li><strong>Mutable</strong> — add, update, delete pairs</li>
            <li><strong>Keys must be unique and hashable</strong> (strings, numbers, tuples)</li>
            <li><strong>Ordered</strong> (Python 3.7+) — maintains insertion order</li>
        </ul>
        <h3>Useful Methods</h3>
        <ul>
            <li><code>.get(key, default)</code> — safe access</li>
            <li><code>.keys()</code>, <code>.values()</code>, <code>.items()</code></li>
            <li><code>.update()</code>, <code>.pop()</code>, <code>.setdefault()</code></li>
        </ul>`,
        code: [
            {
                title: 'CRUD Operations & Safe Access',
                code: 'user = {"name": "Sanjay", "age": 25, "city": "Bhilai"}\n\n# Read\nprint(user["name"])                    # Sanjay\nprint(user.get("phone", "N/A"))        # N/A (safe)\n\n# Update\nuser["age"] = 26\nuser.update({"role": "Founder", "age": 27})  # bulk update\n\n# Create (add new key)\nuser["email"] = "sanjay@soseeks.com"\n\n# Delete\ndel user["city"]\nphone = user.pop("phone", "No phone")  # safe delete\n\nprint(user)\nprint(f"Keys: {list(user.keys())}")\nprint(f"Values: {list(user.values())}")',
                output: '{\'name\': \'Sanjay\', \'age\': 27, \'role\': \'Founder\', \'email\': \'sanjay@soseeks.com\'}\nKeys: [\'name\', \'age\', \'role\', \'email\']\nValues: [\'Sanjay\', 27, \'Founder\', \'sanjay@soseeks.com\']'
            },
            {
                title: 'Looping, Comprehension & Nesting',
                code: 'prices = {"python": 29999, "java": 29999, "fullstack": 69999}\n\n# Loop through keys and values\nfor course, price in prices.items():\n    print(f"{course}: ₹{price:,}")\n\n# Dict comprehension\ndiscounted = {k: int(v * 0.9) for k, v in prices.items()}\nprint(f"Discounted: {discounted}")\n\n# Nested dictionaries\nstudents = {\n    "s1": {"name": "Raj", "score": 85},\n    "s2": {"name": "Priya", "score": 92}\n}\nprint(students["s2"]["name"])  # Priya\n\n# setdefault — set if key missing\ncounts = {}\nfor char in "banana":\n    counts.setdefault(char, 0)\n    counts[char] += 1\nprint(counts)',
                output: 'python: ₹29,999\njava: ₹29,999\nfullstack: ₹69,999\nDiscounted: {\'python\': 26999, \'java\': 26999, \'fullstack\': 62999}\nPriya\n{\'b\': 1, \'a\': 3, \'n\': 2}'
            },
            {
                title: 'defaultdict, Counter & Real-World Patterns',
                code: 'from collections import defaultdict, Counter\n\n# defaultdict — auto-creates missing keys\nword_groups = defaultdict(list)\nwords = ["apple", "banana", "avocado", "blueberry", "cherry"]\nfor w in words:\n    word_groups[w[0]].append(w)  # group by first letter\nprint(dict(word_groups))\n\n# Counter — count occurrences\ntext = "python is great and python is fun"\nword_counts = Counter(text.split())\nprint(word_counts)\nprint(word_counts.most_common(2))\n\n# Merging dictionaries (Python 3.9+)\ndefaults = {"theme": "dark", "font": 14}\nuser_prefs = {"font": 16, "lang": "en"}\nfinal = defaults | user_prefs  # user_prefs overrides\nprint(final)',
                output: '{\'a\': [\'apple\', \'avocado\'], \'b\': [\'banana\', \'blueberry\'], \'c\': [\'cherry\']}\nCounter({\'python\': 2, \'is\': 2, \'great\': 1, \'and\': 1, \'fun\': 1})\n[(\'python\', 2), (\'is\', 2)]\n{\'theme\': \'dark\', \'font\': 16, \'lang\': \'en\'}'
            }
        ],
        takeaways: [
            '<code>.get(key, default)</code> avoids KeyError — always use for uncertain keys',
            '<code>.items()</code> returns key-value pairs, perfect for looping',
            'Dict comprehension: <code>{k: v for k, v in iterable}</code>',
            '<code>defaultdict(list)</code> auto-creates empty lists for missing keys',
            '<code>Counter</code> counts occurrences — great for frequency analysis',
            'Merge dicts: <code>d1 | d2</code> (Python 3.9+) or <code>{**d1, **d2}</code>'
        ],
        quiz: [
            { q: 'What happens with dict["missing_key"]?', options: ['Returns None', 'Returns ""', 'KeyError', 'Returns 0'], answer: 2, explain: 'Accessing a missing key with [] raises KeyError. Use .get("key", default) instead.' },
            { q: 'Can a list be a dictionary key?', options: ['Yes', 'No', 'Only empty lists', 'Depends'], answer: 1, explain: 'No! Dict keys must be hashable (immutable). Lists are mutable. Use tuples instead.' },
            { q: 'What does Counter("banana") return?', options: ['6', "Counter({'a': 3, 'n': 2, 'b': 1})", '["b","a","n"]', 'Error'], answer: 1, explain: 'Counter counts each character: a appears 3 times, n twice, b once.' },
            { q: 'How to safely get a value with a default?', options: ['dict["key"]', 'dict.get("key", default)', 'dict.find("key")', 'dict.default("key")'], answer: 1, explain: '.get("key", default) returns the default value if the key does not exist, avoiding KeyError.' }
        ]
    },
    {
        id: '3.4', title: 'Sets & Frozensets', emoji: '🎯',
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
        theory: `<p>A <strong>set</strong> is an unordered collection of <strong>unique</strong> elements.</p>
        <h3>Set Operations (like math!)</h3>
        <ul>
            <li><code>|</code> or <code>.union()</code> — all elements from both</li>
            <li><code>&</code> or <code>.intersection()</code> — common elements only</li>
            <li><code>-</code> or <code>.difference()</code> — in first but not second</li>
            <li><code>^</code> or <code>.symmetric_difference()</code> — in either but not both</li>
        </ul>
        <h3>Frozensets</h3>
        <p><code>frozenset</code> is an immutable set — can be used as dictionary keys or added to other sets.</p>`,
        code: [
            {
                title: 'Sets, Deduplication & Operations',
                code: '# Create sets\nnums = {3, 1, 4, 1, 5, 9, 2, 6, 5}\nprint(nums)  # Duplicates removed!\n\n# Remove duplicates from a list\nnames = ["Sanjay", "Raj", "Sanjay", "Priya", "Raj"]\nunique = list(set(names))\nprint(f"Unique: {unique}")\n\n# Set operations\nA = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7, 8}\nprint(f"Union: {A | B}")\nprint(f"Intersection: {A & B}")\nprint(f"Difference: {A - B}")\nprint(f"Symmetric diff: {A ^ B}")\n\n# Subset/superset check\nprint({1, 2}.issubset({1, 2, 3}))    # True\nprint({1, 2, 3}.issuperset({1, 2}))  # True',
                output: '{1, 2, 3, 4, 5, 6, 9}\nUnique: [\'Sanjay\', \'Raj\', \'Priya\']\nUnion: {1, 2, 3, 4, 5, 6, 7, 8}\nIntersection: {4, 5}\nDifference: {1, 2, 3}\nSymmetric diff: {1, 2, 3, 6, 7, 8}\nTrue\nTrue'
            },
            {
                title: 'Set Comprehension, Methods & Frozenset',
                code: '# Set comprehension\nsquares = {x**2 for x in range(-3, 4)}\nprint(squares)  # {0, 1, 4, 9}\n\n# Adding/removing\ncolors = {"red", "green"}\ncolors.add("blue")\ncolors.discard("green")   # safe remove (no error)\n# colors.remove("pink")  # KeyError if not found!\nprint(colors)\n\n# frozenset — immutable set\nfs = frozenset([1, 2, 3])\n# fs.add(4)  # AttributeError!\n\n# frozenset as dict key\ncache = {frozenset({1, 2}): "result_a"}\nprint(cache[frozenset({2, 1})])  # "result_a"\n\n# Practical: Find common skills\ndev1 = {"Python", "JS", "SQL"}\ndev2 = {"Python", "Java", "SQL"}\ncommon = dev1 & dev2\nprint(f"Common skills: {common}")',
                output: '{0, 1, 4, 9}\n{\'red\', \'blue\'}\nresult_a\nCommon skills: {\'Python\', \'SQL\'}'
            }
        ],
        takeaways: [
            'Sets automatically remove duplicates — <code>list(set(data))</code> deduplicates a list',
            'Sets are unordered — no indexing, no slicing',
            'Set operations are O(n) — very efficient for membership and comparisons',
            '<code>.discard()</code> is safe (no error if missing); <code>.remove()</code> raises KeyError',
            '<code>frozenset</code> is an immutable set — can be a dict key or inside another set',
            'Interview tip: "Remove duplicates from a list" → <code>list(set(data))</code>'
        ],
        quiz: [
            { q: 'What is len({1, 2, 2, 3, 3, 3})?', options: ['6', '3', '1', 'Error'], answer: 1, explain: 'Sets remove duplicates. {1, 2, 2, 3, 3, 3} becomes {1, 2, 3}, so length is 3.' },
            { q: '{1,2,3} & {2,3,4} equals?', options: ['{1,2,3,4}', '{2,3}', '{1,4}', '{2,3,4}'], answer: 1, explain: '& is intersection — elements common to BOTH sets. 2 and 3 are in both.' },
            { q: 'Can you access set elements by index?', options: ['Yes', 'No', 'Only first', 'Only with .get()'], answer: 1, explain: 'Sets are unordered — no index access. Use a list if you need ordering.' },
            { q: 'What is the difference between .remove() and .discard()?', options: ['No difference', '.remove() raises KeyError if missing', '.discard() raises KeyError', '.remove() returns the item'], answer: 1, explain: '.remove() raises KeyError if the element is not found. .discard() silently does nothing.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 4: FUNCTIONS
   ============================================================ */
{
    id: 4, title: 'Functions', icon: '⚙️', color: '#10b981',
    description: 'Define reusable code blocks — parameters, returns, lambda, scope, and recursion.',
    topics: [
    {
        id: '4.1', title: 'Defining Functions', emoji: '🏭',
        analogy: {
            title: 'Functions are like Juice Machines',
            emoji: '🧃',
            desc: 'Put fruit IN (arguments), the machine processes it, and juice comes OUT (return value). Build the machine once, use it again and again with different fruits!',
            type: 'machine',
            input: '🍊 fruit',
            name: 'blend()',
            output: '🧃 juice'
        },
        theory: `<p>A <strong>function</strong> is a reusable block of code that performs a specific task.</p>
        <h3>Why Functions?</h3>
        <ul>
            <li><strong>Reusability</strong> — write once, use many times</li>
            <li><strong>Readability</strong> — meaningful names for code blocks</li>
            <li><strong>Modularity</strong> — break complex problems into pieces</li>
            <li><strong>Testability</strong> — easier to test small functions</li>
        </ul>
        <h3>Parameter Types</h3>
        <ul>
            <li><strong>Positional</strong> — <code>def f(a, b)</code></li>
            <li><strong>Default</strong> — <code>def f(a, b=10)</code></li>
            <li><strong>*args</strong> — variable positional args</li>
            <li><strong>**kwargs</strong> — variable keyword args</li>
            <li><strong>Keyword-only</strong> — <code>def f(*, key)</code></li>
        </ul>`,
        code: [
            {
                title: 'Basic Functions, Defaults & Docstrings',
                code: 'def greet(name, greeting="Hello"):\n    """Greet a person with a custom message.\n\n    Args:\n        name: Person\'s name\n        greeting: Custom greeting (default: Hello)\n    Returns:\n        Formatted greeting string\n    """\n    return f"{greeting}, {name}!"\n\nprint(greet("Sanjay"))\nprint(greet("Sanjay", "Welcome"))\nprint(greet(greeting="Hi", name="Team"))\n\n# Access docstring\nprint(greet.__doc__[:40] + "...")',
                output: 'Hello, Sanjay!\nWelcome, Sanjay!\nHi, Team!\nGreet a person with a custom message.\n...'
            },
            {
                title: '*args, **kwargs & Parameter Order',
                code: '# *args — variable positional arguments (tuple)\ndef add_all(*args):\n    print(f"Type: {type(args)}")  # tuple\n    return sum(args)\n\nprint(add_all(1, 2, 3))       # 6\nprint(add_all(10, 20, 30, 40)) # 100\n\n# **kwargs — variable keyword arguments (dict)\ndef build_profile(**kwargs):\n    return kwargs\n\nprofile = build_profile(name="Sanjay", role="Founder")\nprint(profile)\n\n# Combined: positional, *args, keyword, **kwargs\ndef example(a, b, *args, key="default", **kwargs):\n    print(f"a={a}, b={b}")\n    print(f"args={args}")\n    print(f"key={key}")\n    print(f"kwargs={kwargs}")\n\nexample(1, 2, 3, 4, key="custom", x=10)',
                output: 'Type: <class \'tuple\'>\n6\n100\n{\'name\': \'Sanjay\', \'role\': \'Founder\'}\na=1, b=2\nargs=(3, 4)\nkey=custom\nkwargs={\'x\': 10}'
            },
            {
                title: 'Multiple Returns & Type Hints',
                code: '# Multiple return values (as tuple)\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nsmallest, largest = min_max([3, 1, 4, 1, 5, 9])\nprint(f"Min: {smallest}, Max: {largest}")\n\n# Early return pattern\ndef divide(a, b):\n    if b == 0:\n        return None  # early exit\n    return a / b\n\nresult = divide(10, 3)\nprint(f"10/3 = {result:.2f}")\nprint(f"10/0 = {divide(10, 0)}")\n\n# Type hints (documentation, not enforced)\ndef calculate_area(length: float, width: float) -> float:\n    return length * width\n\narea = calculate_area(5.0, 3.0)\nprint(f"Area: {area}")',
                output: 'Min: 1, Max: 9\n10/3 = 3.33\n10/0 = None\nArea: 15.0'
            }
        ],
        takeaways: [
            '<code>def</code> defines a function. <code>return</code> sends a value back to the caller',
            'Without <code>return</code>, a function returns <code>None</code> by default',
            '<code>*args</code> collects extra positional args as a tuple',
            '<code>**kwargs</code> collects extra keyword args as a dictionary',
            'Parameter order: <code>positional, *args, keyword=default, **kwargs</code>',
            'Type hints are documentation: <code>def f(x: int) -> str:</code> — not enforced at runtime'
        ],
        quiz: [
            { q: 'What does a function return without a return statement?', options: ['0', '""', 'None', 'Error'], answer: 2, explain: 'Functions without an explicit return statement return None by default.' },
            { q: 'What is *args inside a function?', options: ['A list', 'A tuple', 'A dict', 'A set'], answer: 1, explain: '*args collects extra positional arguments into a TUPLE.' },
            { q: 'What is **kwargs inside a function?', options: ['A list', 'A tuple', 'A dict', 'A set'], answer: 2, explain: '**kwargs collects extra keyword arguments into a DICTIONARY.' },
            { q: 'Are type hints enforced at runtime?', options: ['Yes', 'No', 'Only in Python 3.10+', 'Only with strict mode'], answer: 1, explain: 'Type hints are documentation only. Python does not enforce them at runtime. Use mypy for static checking.' }
        ]
    },
    {
        id: '4.2', title: 'Lambda, map, filter, reduce', emoji: '⚡',
        analogy: {
            title: 'Lambda is a Sticky Note Function',
            emoji: '📌',
            desc: 'A regular function is a full recipe card. A lambda is a sticky note — quick, one-line, throwaway. You use it for small tasks that don\'t need a full recipe.',
            type: 'machine',
            input: 'x',
            name: 'λ: x²',
            output: 'x * x'
        },
        theory: `<p>A <strong>lambda</strong> is an anonymous function defined in one line.</p>
        <h3>Functional Tools</h3>
        <ul>
            <li><code>map(func, iterable)</code> — apply function to every item</li>
            <li><code>filter(func, iterable)</code> — keep items where function returns True</li>
            <li><code>reduce(func, iterable)</code> — combine all items into one value</li>
        </ul>
        <p>These are powerful for data transformation without writing loops. But don't overuse lambda — if it's complex, use a regular function.</p>`,
        code: [
            {
                title: 'Lambda Functions & Sorting',
                code: '# Lambda syntax: lambda arguments: expression\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\nadd = lambda a, b: a + b\nprint(add(3, 7))  # 10\n\n# Sorting with lambda (very common!)\nstudents = [("Sanjay", 85), ("Priya", 92), ("Raj", 78)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nprint(students)\n\n# Sort dicts by value\nscores = {"Sanjay": 85, "Priya": 92, "Raj": 78}\nsorted_scores = dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))\nprint(sorted_scores)',
                output: '25\n10\n[(\'Priya\', 92), (\'Sanjay\', 85), (\'Raj\', 78)]\n{\'Priya\': 92, \'Sanjay\': 85, \'Raj\': 78}'
            },
            {
                title: 'map(), filter() & reduce()',
                code: '# map — apply function to each item\nnums = [1, 2, 3, 4, 5]\nsquares = list(map(lambda x: x**2, nums))\nprint(f"Squares: {squares}")\n\n# filter — keep items matching condition\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(f"Evens: {evens}")\n\n# reduce — accumulate into single value\nfrom functools import reduce\ntotal = reduce(lambda a, b: a + b, nums)\nprint(f"Sum: {total}")\n\n# map with multiple iterables\nnames = ["sanjay", "priya"]\nages = [25, 22]\nresult = list(map(lambda n, a: f"{n.title()} ({a})", names, ages))\nprint(result)\n\n# Prefer comprehensions for readability:\nprint([x**2 for x in nums])           # same as map\nprint([x for x in nums if x % 2 == 0]) # same as filter',
                output: 'Squares: [1, 4, 9, 16, 25]\nEvens: [2, 4]\nSum: 15\n[\'Sanjay (25)\', \'Priya (22)\']\n[1, 4, 9, 16, 25]\n[2, 4]'
            }
        ],
        takeaways: [
            'Lambda syntax: <code>lambda args: expression</code> — returns result automatically',
            '<code>map()</code> transforms each item, <code>filter()</code> keeps matching items',
            '<code>reduce()</code> combines all items into one value (needs <code>from functools import reduce</code>)',
            'Lambda is great for <code>sort(key=lambda x: ...)</code>',
            'List comprehensions are usually more readable than map/filter',
            'Interview tip: Know when to use lambda vs regular function vs comprehension'
        ],
        quiz: [
            { q: 'What is the output of (lambda x: x*2)(5)?', options: ['10', '25', '55', 'Error'], answer: 0, explain: 'The lambda takes x and returns x*2. Calling it with 5 gives 10.' },
            { q: 'list(filter(lambda x: x>3, [1,2,3,4,5])) returns?', options: ['[1,2,3]', '[4,5]', '[True,True]', '[3,4,5]'], answer: 1, explain: 'filter keeps items where the function returns True. 4>3 and 5>3 are True.' },
            { q: 'Where does reduce() come from?', options: ['Built-in', 'functools', 'itertools', 'operator'], answer: 1, explain: 'In Python 3, reduce was moved to functools: from functools import reduce.' },
            { q: 'Which is more Pythonic for [x**2 for x in nums]?', options: ['map(lambda x: x**2, nums)', 'The comprehension', 'Both equally', 'Neither'], answer: 1, explain: 'List comprehensions are considered more Pythonic and readable than map+lambda.' }
        ]
    },
    {
        id: '4.3', title: 'Scope, LEGB & Recursion', emoji: '🔭',
        analogy: {
            title: 'Scope is like Rooms in a House',
            emoji: '🏠',
            desc: 'Variables inside a function are like items in a room — visible only inside that room (local scope). Variables outside are in the hallway (global scope) — visible everywhere.',
            type: 'machine',
            input: 'local',
            name: 'LEGB',
            output: 'global'
        },
        theory: `<p>Python follows the <strong>LEGB rule</strong> when looking up variable names:</p>
        <ul>
            <li><strong>L</strong> — Local: inside the current function</li>
            <li><strong>E</strong> — Enclosing: inside any enclosing function (closures)</li>
            <li><strong>G</strong> — Global: at the module level</li>
            <li><strong>B</strong> — Built-in: Python's built-in names (print, len, etc.)</li>
        </ul>
        <h3>Recursion</h3>
        <p>A function calling itself. Every recursive function needs a <strong>base case</strong> (stopping condition) to avoid infinite recursion.</p>`,
        code: [
            {
                title: 'Scope — Local, Global, nonlocal',
                code: 'x = "global"\n\ndef outer():\n    x = "enclosing"\n\n    def inner():\n        x = "local"\n        print(f"Inner: {x}")\n\n    inner()\n    print(f"Outer: {x}")\n\nouter()\nprint(f"Global: {x}")\n\n# Modifying global variable\ncounter = 0\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nincrement()\nprint(f"Counter: {counter}")\n\n# nonlocal — modify enclosing variable\ndef make_counter():\n    count = 0\n    def inc():\n        nonlocal count\n        count += 1\n        return count\n    return inc\n\nc = make_counter()\nprint(c(), c(), c())',
                output: 'Inner: local\nOuter: enclosing\nGlobal: global\nCounter: 2\n1 2 3'
            },
            {
                title: 'Recursion — Factorial & Fibonacci',
                code: '# Factorial: n! = n * (n-1) * ... * 1\ndef factorial(n):\n    if n <= 1:       # Base case\n        return 1\n    return n * factorial(n - 1)  # Recursive case\n\nprint(f"5! = {factorial(5)}")  # 120\n\n# Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nprint(f"fib(7) = {fib(7)}")  # 13\n\n# Recursive sum of a list\ndef recursive_sum(lst):\n    if not lst:\n        return 0\n    return lst[0] + recursive_sum(lst[1:])\n\nprint(f"Sum: {recursive_sum([1, 2, 3, 4, 5])}")',
                output: '5! = 120\nfib(7) = 13\nSum: 15'
            },
            {
                title: 'Memoization — Optimizing Recursion',
                code: 'import time\nfrom functools import lru_cache\n\n# Without memoization — very slow for large n\ndef fib_slow(n):\n    if n <= 1:\n        return n\n    return fib_slow(n-1) + fib_slow(n-2)\n\n# With memoization — fast!\n@lru_cache(maxsize=None)\ndef fib_fast(n):\n    if n <= 1:\n        return n\n    return fib_fast(n-1) + fib_fast(n-2)\n\n# Compare speed\nstart = time.time()\nprint(f"fib(30) = {fib_slow(30)}")\nprint(f"Slow: {time.time()-start:.3f}s")\n\nstart = time.time()\nprint(f"fib(30) = {fib_fast(30)}")\nprint(f"Fast: {time.time()-start:.6f}s")\n\n# Manual memoization with dict\ndef fib_memo(n, cache={}):\n    if n in cache:\n        return cache[n]\n    if n <= 1:\n        return n\n    cache[n] = fib_memo(n-1) + fib_memo(n-2)\n    return cache[n]\n\nprint(f"fib(50) = {fib_memo(50)}")',
                output: 'fib(30) = 832040\nSlow: 0.250s\nfib(30) = 832040\nFast: 0.000001s\nfib(50) = 12586269025'
            }
        ],
        takeaways: [
            'LEGB rule: Local → Enclosing → Global → Built-in',
            'Use <code>global</code> to modify a global variable inside a function',
            'Use <code>nonlocal</code> to modify an enclosing function\'s variable',
            'Every recursion needs a base case to prevent infinite recursion',
            '<code>@lru_cache</code> from functools caches results — makes recursion fast!',
            'Interview tip: Fibonacci with/without memoization — very commonly asked'
        ],
        quiz: [
            { q: 'What is the LEGB rule?', options: ['A sorting algorithm', 'Variable lookup order: Local→Enclosing→Global→Built-in', 'A data structure', 'A design pattern'], answer: 1, explain: 'LEGB defines how Python searches for variable names: Local first, then Enclosing, Global, Built-in.' },
            { q: 'What happens without a base case in recursion?', options: ['Returns 0', 'RecursionError', 'Returns None', 'Runs once'], answer: 1, explain: 'Without a base case, the function calls itself infinitely until Python hits its recursion limit (default ~1000).' },
            { q: 'What does @lru_cache do?', options: ['Makes function slower', 'Caches return values', 'Deletes the function', 'Adds logging'], answer: 1, explain: 'lru_cache memoizes (caches) function results. Same inputs return cached output instantly.' },
            { q: 'What keyword modifies a global variable inside a function?', options: ['local', 'nonlocal', 'global', 'extern'], answer: 2, explain: 'The "global" keyword tells Python to use the module-level variable instead of creating a new local one.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 5: CLOSURES & DECORATORS
   ============================================================ */
{
    id: 5, title: 'Closures & Decorators', icon: '🎁', color: '#f59e0b',
    description: 'Master closures, decorators, and real-world decorator patterns.',
    topics: [
    {
        id: '5.1', title: 'Closures', emoji: '🎒',
        analogy: {
            title: 'Closures are like a Backpack',
            emoji: '🎒',
            desc: 'When you leave a classroom (outer function), you carry your backpack (enclosed variables) with you. Even outside the classroom, you still have access to what\'s in your backpack!',
            type: 'machine',
            input: 'outer vars',
            name: 'closure',
            output: 'remembers vars'
        },
        theory: `<p>A <strong>closure</strong> is a function that remembers values from its enclosing scope even after the outer function has finished.</p>
        <h3>Three Requirements for a Closure</h3>
        <ul>
            <li>A nested (inner) function</li>
            <li>The inner function references a variable from the outer function</li>
            <li>The outer function returns the inner function</li>
        </ul>
        <p>Closures are the foundation of decorators and many design patterns.</p>`,
        code: [
            {
                title: 'Basic Closure & State',
                code: '# Simple closure\ndef make_greeting(greeting):\n    def greet(name):\n        return f"{greeting}, {name}!"\n    return greet\n\nsay_hello = make_greeting("Hello")\nsay_namaste = make_greeting("Namaste")\n\nprint(say_hello("Sanjay"))    # Hello, Sanjay!\nprint(say_namaste("Priya"))   # Namaste, Priya!\n\n# Closure as a counter (maintains state)\ndef make_counter(start=0):\n    count = [start]  # using list for mutability\n    def increment():\n        count[0] += 1\n        return count[0]\n    return increment\n\nc = make_counter()\nprint(c(), c(), c())  # 1, 2, 3',
                output: 'Hello, Sanjay!\nNamaste, Priya!\n1 2 3'
            },
            {
                title: 'Practical Closures — Multiplier & Logger',
                code: '# Multiplier factory\ndef make_multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\nprint(double(5))   # 10\nprint(triple(5))   # 15\n\n# Logger closure\ndef make_logger(prefix):\n    logs = []\n    def log(message):\n        entry = f"[{prefix}] {message}"\n        logs.append(entry)\n        print(entry)\n    def get_logs():\n        return logs\n    return log, get_logs\n\nlog, get_logs = make_logger("APP")\nlog("Started")\nlog("Processing data")\nprint(f"Total logs: {len(get_logs())}")',
                output: '10\n15\n[APP] Started\n[APP] Processing data\nTotal logs: 2'
            }
        ],
        takeaways: [
            'A closure is a function + its enclosing environment',
            'The inner function "remembers" variables from the outer function',
            'Use closures for function factories: <code>make_multiplier(2)</code> returns a doubler',
            'Closures can maintain state without using classes or global variables',
            'Interview tip: "What is a closure?" — function that captures enclosing scope variables'
        ],
        quiz: [
            { q: 'What is a closure?', options: ['A class', 'A function that remembers enclosing scope', 'A module', 'A loop'], answer: 1, explain: 'A closure is a function that captures and remembers variables from its enclosing scope.' },
            { q: 'What are the 3 requirements for a closure?', options: ['Class, method, attribute', 'Nested func, references outer var, outer returns inner', 'Import, define, call', 'Init, process, return'], answer: 1, explain: 'A closure needs: 1) nested function, 2) inner references outer variable, 3) outer returns inner.' },
            { q: 'Why use a list [count] instead of plain count in closure state?', options: ['Lists are faster', 'Lists are mutable, ints are immutable', 'No reason', 'Lists use less memory'], answer: 1, explain: 'You can\'t reassign an immutable variable from enclosing scope without nonlocal. A list is mutable, so we modify its contents.' },
            { q: 'What does make_multiplier(3)(5) return?', options: ['3', '5', '15', '8'], answer: 2, explain: 'make_multiplier(3) returns a function that multiplies by 3. Calling it with 5: 3 * 5 = 15.' }
        ]
    },
    {
        id: '5.2', title: 'Decorators', emoji: '🎁',
        analogy: {
            title: 'Decorators are like Gift Wrapping',
            emoji: '🎁',
            desc: 'You have a gift (function). A decorator wraps it in beautiful paper (extra functionality) without changing what\'s inside. The gift is the same — just fancier on the outside!',
            type: 'wrap',
            inner: 'function',
            outer: 'decorator'
        },
        theory: `<p>A <strong>decorator</strong> is a function that takes another function and extends its behavior without modifying it.</p>
        <h3>How It Works</h3>
        <ol>
            <li>Decorator receives a function as argument</li>
            <li>Defines a wrapper function that adds behavior</li>
            <li>Returns the wrapper function</li>
        </ol>
        <p>The <code>@decorator</code> syntax is shorthand for <code>func = decorator(func)</code></p>`,
        code: [
            {
                title: 'Building a Decorator Step by Step',
                code: 'import functools\n\n# Step 1: A decorator is a function that wraps another\ndef timer(func):\n    @functools.wraps(func)  # preserves original name/docstring\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        elapsed = time.time() - start\n        print(f"{func.__name__} took {elapsed:.4f}s")\n        return result\n    return wrapper\n\n# Step 2: Apply with @\n@timer\ndef slow_function():\n    """A slow function."""\n    import time\n    time.sleep(0.1)\n    return "done"\n\nresult = slow_function()\nprint(f"Result: {result}")\nprint(f"Name: {slow_function.__name__}")',
                output: 'slow_function took 0.1005s\nResult: done\nName: slow_function'
            },
            {
                title: 'Common Decorators — Logger & Retry',
                code: 'import functools\n\n# Logger decorator\ndef logger(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}({args}, {kwargs})")\n        result = func(*args, **kwargs)\n        print(f"  -> returned {result}")\n        return result\n    return wrapper\n\n@logger\ndef add(a, b):\n    return a + b\n\nadd(3, 5)\n\n# Retry decorator\ndef retry(max_attempts=3):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f"  Attempt {attempt} failed: {e}")\n            print(f"  All {max_attempts} attempts failed!")\n        return wrapper\n    return decorator\n\n@retry(max_attempts=3)\ndef risky():\n    import random\n    if random.random() < 0.7:\n        raise ValueError("Bad luck!")\n    return "Success!"\n\nresult = risky()',
                output: 'Calling add((3, 5), {})\n  -> returned 8\n  Attempt 1 failed: Bad luck!\n  Attempt 2 failed: Bad luck!\n  All 3 attempts failed!'
            },
            {
                title: 'Stacking Multiple Decorators',
                code: 'import functools\n\ndef bold(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        return f"<b>{func(*args, **kwargs)}</b>"\n    return wrapper\n\ndef italic(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        return f"<i>{func(*args, **kwargs)}</i>"\n    return wrapper\n\n# Stacking: decorators apply bottom-up\n@bold\n@italic\ndef greet(name):\n    return f"Hello, {name}"\n\n# bold(italic(greet))("Sanjay")\nprint(greet("Sanjay"))\n\n# Without @ syntax (equivalent)\ndef greet2(name):\n    return f"Hello, {name}"\n\ngreet2 = bold(italic(greet2))\nprint(greet2("Priya"))',
                output: '<b><i>Hello, Sanjay</i></b>\n<b><i>Hello, Priya</i></b>'
            }
        ],
        takeaways: [
            '<code>@decorator</code> is shorthand for <code>func = decorator(func)</code>',
            'Always use <code>@functools.wraps(func)</code> to preserve the original function\'s metadata',
            'Use <code>*args, **kwargs</code> in wrapper to accept any arguments',
            'Stacking: decorators apply bottom-up — <code>@bold @italic</code> → bold(italic(func))',
            'Common uses: logging, timing, authentication, caching, retry logic'
        ],
        quiz: [
            { q: '@decorator is shorthand for what?', options: ['func.decorate()', 'func = decorator(func)', 'decorator.apply(func)', 'func += decorator'], answer: 1, explain: '@decorator above a function definition is equivalent to func = decorator(func).' },
            { q: 'Why use @functools.wraps(func)?', options: ['Makes it faster', 'Preserves original function metadata', 'Required by Python', 'Adds error handling'], answer: 1, explain: 'Without wraps, the wrapper replaces the original function\'s __name__ and __doc__.' },
            { q: 'With @bold then @italic, what executes first?', options: ['bold', 'italic', 'Both simultaneously', 'Neither'], answer: 1, explain: 'Decorators apply bottom-up. @italic wraps the function first, then @bold wraps that result.' },
            { q: 'What must a decorator return?', options: ['None', 'A string', 'A function (the wrapper)', 'The original function unchanged'], answer: 2, explain: 'A decorator takes a function and returns a new function (the wrapper) that adds behavior.' }
        ]
    },
    {
        id: '5.3', title: 'Decorator Patterns', emoji: '🔧',
        analogy: {
            title: 'Decorator Factories — Customizable Wrapping Paper',
            emoji: '🎀',
            desc: 'A decorator factory lets you choose the wrapping paper color before wrapping. It\'s a function that returns a decorator, which returns a wrapper — three levels!',
            type: 'machine',
            input: 'config',
            name: 'factory',
            output: 'decorator'
        },
        theory: `<p>Advanced decorator patterns give you more control and flexibility.</p>
        <h3>Key Patterns</h3>
        <ul>
            <li><strong>Decorator with arguments</strong> — a factory that produces decorators</li>
            <li><strong>Class-based decorators</strong> — use __call__ for stateful decorating</li>
            <li><strong>Built-in decorators</strong> — <code>@property</code>, <code>@staticmethod</code>, <code>@classmethod</code></li>
        </ul>`,
        code: [
            {
                title: 'Decorator with Arguments (Factory)',
                code: 'import functools\n\n# Factory: takes config, returns decorator\ndef repeat(times):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(times=3)\ndef greet(name):\n    print(f"Hello, {name}!")\n    return name\n\ngreet("Sanjay")\n\n# Access control decorator\ndef require_role(role):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(user, *args, **kwargs):\n            if user.get("role") != role:\n                print(f"Access denied! Need {role} role.")\n                return None\n            return func(user, *args, **kwargs)\n        return wrapper\n    return decorator\n\n@require_role("admin")\ndef delete_user(user, target):\n    print(f"{user[\'name\']} deleted {target}")\n\ndelete_user({"name": "Sanjay", "role": "admin"}, "test_user")\ndelete_user({"name": "Guest", "role": "viewer"}, "test_user")',
                output: 'Hello, Sanjay!\nHello, Sanjay!\nHello, Sanjay!\nSanjay deleted test_user\nAccess denied! Need admin role.'
            },
            {
                title: 'Class-based Decorator & Built-in Decorators',
                code: '# Class-based decorator (stateful)\nclass CallCounter:\n    def __init__(self, func):\n        self.func = func\n        self.count = 0\n\n    def __call__(self, *args, **kwargs):\n        self.count += 1\n        print(f"Call #{self.count}")\n        return self.func(*args, **kwargs)\n\n@CallCounter\ndef say_hi(name):\n    return f"Hi {name}!"\n\nprint(say_hi("Sanjay"))\nprint(say_hi("Priya"))\nprint(f"Total calls: {say_hi.count}")\n\n# Built-in: @property (covered in OOP module)\n# Built-in: @staticmethod, @classmethod (covered in OOP module)\n# Built-in: @functools.lru_cache (covered in Functions module)',
                output: 'Call #1\nHi Sanjay!\nCall #2\nHi Priya!\nTotal calls: 2'
            }
        ],
        takeaways: [
            'Decorator factory: function → returns decorator → returns wrapper (3 levels)',
            'Syntax: <code>@factory(args)</code> — parentheses mean it\'s a factory',
            'Class decorators use <code>__call__</code> — great for maintaining state',
            'Common patterns: access control, rate limiting, caching, validation',
            'Interview tip: Explain the 3-level nesting of decorator factories'
        ],
        quiz: [
            { q: 'How many levels of nesting does a decorator factory have?', options: ['1', '2', '3', '4'], answer: 2, explain: 'Factory function → decorator function → wrapper function. Three nested functions.' },
            { q: 'What method makes a class callable?', options: ['__init__', '__call__', '__str__', '__new__'], answer: 1, explain: '__call__ lets an instance be used like a function: obj().' },
            { q: '@repeat(3) def f(): ... — what is repeat?', options: ['A decorator', 'A factory that returns a decorator', 'A wrapper', 'A function'], answer: 1, explain: 'repeat(3) is called first, and it RETURNS a decorator. That decorator then wraps f.' },
            { q: 'When to use class-based vs function-based decorators?', options: ['Always class', 'Always function', 'Class for state, function for simple', 'No difference'], answer: 2, explain: 'Class decorators are better when you need to maintain state (like counters). Function decorators are simpler for stateless behavior.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 6: ITERATORS & GENERATORS
   ============================================================ */
{
    id: 6, title: 'Iterators & Generators', icon: '🔄', color: '#ec4899',
    description: 'Iterators, generators, yield, generator expressions, and itertools.',
    topics: [
    {
        id: '6.1', title: 'Iterators', emoji: '🎰',
        analogy: {
            title: 'Iterators are like Vending Machines',
            emoji: '🎰',
            desc: 'Press the button (call next()), get one item. Press again, get the next. When empty, it tells you "StopIteration!" — no going back, no peeking ahead.',
            type: 'machine',
            input: 'next()',
            name: 'iterator',
            output: 'one item'
        },
        theory: `<p>An <strong>iterator</strong> is an object that produces one value at a time using <code>next()</code>.</p>
        <h3>Iterator Protocol</h3>
        <ul>
            <li><code>__iter__()</code> — returns the iterator object itself</li>
            <li><code>__next__()</code> — returns the next value, raises <code>StopIteration</code> when done</li>
        </ul>
        <p>Every iterable (list, string, dict) can produce an iterator via <code>iter()</code>.</p>`,
        code: [
            {
                title: 'Using iter() and next()',
                code: '# Any iterable can become an iterator\nnums = [10, 20, 30]\nit = iter(nums)\n\nprint(next(it))  # 10\nprint(next(it))  # 20\nprint(next(it))  # 30\n# next(it) would raise StopIteration\n\n# for loops use iterators internally!\n# This is what for does behind the scenes:\ncolors = ["red", "green", "blue"]\nit = iter(colors)\nwhile True:\n    try:\n        color = next(it)\n        print(color)\n    except StopIteration:\n        break',
                output: '10\n20\n30\nred\ngreen\nblue'
            },
            {
                title: 'Custom Iterator Class',
                code: '# Custom iterator: count down\nclass Countdown:\n    def __init__(self, start):\n        self.current = start\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\n\n# Use in a for loop\nfor num in Countdown(5):\n    print(num, end=" ")\nprint()\n\n# Convert to list\nprint(list(Countdown(3)))',
                output: '5 4 3 2 1 \n[3, 2, 1]'
            }
        ],
        takeaways: [
            '<code>iter()</code> gets an iterator from any iterable',
            '<code>next()</code> gets the next value, raises <code>StopIteration</code> when exhausted',
            'for loops internally use <code>iter()</code> and <code>next()</code>',
            'Custom iterators implement <code>__iter__()</code> and <code>__next__()</code>',
            'Iterators are one-pass — once exhausted, you need a new one'
        ],
        quiz: [
            { q: 'What does next() do on an exhausted iterator?', options: ['Returns None', 'Returns 0', 'Raises StopIteration', 'Restarts'], answer: 2, explain: 'When there are no more items, next() raises StopIteration.' },
            { q: 'Which methods define the iterator protocol?', options: ['__init__ and __del__', '__iter__ and __next__', '__get__ and __set__', '__enter__ and __exit__'], answer: 1, explain: 'The iterator protocol requires __iter__ (returns self) and __next__ (returns next value).' },
            { q: 'Can you go backward in an iterator?', options: ['Yes', 'No', 'Only with rewind()', 'Depends on type'], answer: 1, explain: 'Iterators are forward-only. Once an item is consumed, you cannot go back.' },
            { q: 'What does iter([1,2,3]) return?', options: ['[1,2,3]', 'A list_iterator object', '1', 'None'], answer: 1, explain: 'iter() returns an iterator object that produces items one at a time with next().' }
        ]
    },
    {
        id: '6.2', title: 'Generators', emoji: '🏭',
        analogy: {
            title: 'Generators are like On-Demand Bakeries',
            emoji: '🍞',
            desc: 'Instead of baking all 1000 loaves at once (list), the bakery bakes one loaf at a time when you ask for it (yield). Saves a TON of oven space (memory)!',
            type: 'conveyor',
            items: ['yield 1', 'yield 2', 'yield 3'],
            consumed: 1
        },
        theory: `<p>A <strong>generator</strong> is a function that uses <code>yield</code> instead of <code>return</code>. It produces values lazily — one at a time, only when needed.</p>
        <h3>Why Generators?</h3>
        <ul>
            <li><strong>Memory efficient</strong> — don't store all values in memory</li>
            <li><strong>Lazy evaluation</strong> — compute values on demand</li>
            <li><strong>Can represent infinite sequences</strong></li>
        </ul>
        <h3>Generator Expressions</h3>
        <p>Like list comprehensions but with <code>()</code> instead of <code>[]</code>: <code>(x**2 for x in range(10))</code></p>`,
        code: [
            {
                title: 'Generator Function with yield',
                code: 'def count_up(start, end):\n    current = start\n    while current <= end:\n        yield current\n        current += 1\n\n# Use in a for loop\nfor num in count_up(1, 5):\n    print(num, end=" ")\nprint()\n\n# Convert to list\nprint(list(count_up(10, 15)))\n\n# Infinite generator!\ndef fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Take first 10 fibonacci numbers\nfib = fibonacci()\nfirst_10 = [next(fib) for _ in range(10)]\nprint(f"Fibonacci: {first_10}")',
                output: '1 2 3 4 5 \n[10, 11, 12, 13, 14, 15]\nFibonacci: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]'
            },
            {
                title: 'Generator Expressions & Memory Comparison',
                code: 'import sys\n\n# List comprehension — all in memory at once\nlist_comp = [x**2 for x in range(10000)]\nprint(f"List size: {sys.getsizeof(list_comp):,} bytes")\n\n# Generator expression — lazy, one at a time\ngen_exp = (x**2 for x in range(10000))\nprint(f"Generator size: {sys.getsizeof(gen_exp)} bytes")\n\n# Use generator expression with functions\nnums = range(1, 11)\ntotal = sum(x**2 for x in nums)  # no extra [] needed!\nprint(f"Sum of squares: {total}")\n\n# Chaining generators (pipeline)\ndef evens(nums):\n    for n in nums:\n        if n % 2 == 0:\n            yield n\n\ndef squares(nums):\n    for n in nums:\n        yield n ** 2\n\npipeline = squares(evens(range(10)))\nprint(list(pipeline))',
                output: 'List size: 87,616 bytes\nGenerator size: 200 bytes\nSum of squares: 385\n[0, 4, 16, 36, 64]'
            },
            {
                title: 'yield from & Practical Patterns',
                code: '# yield from — delegate to sub-generator\ndef flatten(nested):\n    for item in nested:\n        if isinstance(item, list):\n            yield from flatten(item)  # recursive!\n        else:\n            yield item\n\nnested = [1, [2, 3], [4, [5, 6]], 7]\nprint(list(flatten(nested)))\n\n# File reader generator (memory efficient)\ndef read_large_file(filepath):\n    with open(filepath) as f:\n        for line in f:\n            yield line.strip()\n\n# Batch processing generator\ndef batches(data, size):\n    for i in range(0, len(data), size):\n        yield data[i:i+size]\n\nitems = list(range(10))\nfor batch in batches(items, 3):\n    print(f"Batch: {batch}")',
                output: '[1, 2, 3, 4, 5, 6, 7]\nBatch: [0, 1, 2]\nBatch: [3, 4, 5]\nBatch: [6, 7, 8]\nBatch: [9]'
            }
        ],
        takeaways: [
            '<code>yield</code> pauses the function and sends a value; <code>next()</code> resumes it',
            'Generators are memory efficient — they compute values on demand',
            'Generator expression: <code>(x for x in range(n))</code> — lazy version of list comprehension',
            '<code>yield from</code> delegates to another generator — great for flattening',
            'Generators can represent infinite sequences (Fibonacci, primes, etc.)',
            'Interview tip: "List vs generator?" — memory trade-off, lazy vs eager evaluation'
        ],
        quiz: [
            { q: 'What keyword makes a function a generator?', options: ['return', 'yield', 'generate', 'async'], answer: 1, explain: 'yield makes a function a generator. It pauses execution and produces a value.' },
            { q: 'Generator expression vs list comprehension syntax?', options: ['Same', '() vs []', '{} vs []', '<> vs []'], answer: 1, explain: 'Generator: (x for x in ...) with parentheses. List: [x for x in ...] with brackets.' },
            { q: 'Why are generators memory efficient?', options: ['They compress data', 'They compute values one at a time', 'They use C code', 'They delete old values'], answer: 1, explain: 'Generators compute and yield one value at a time, never holding the full sequence in memory.' },
            { q: 'What does yield from do?', options: ['Yields all items from another iterable', 'Returns from the function', 'Imports a module', 'Creates a new generator'], answer: 0, explain: 'yield from delegates to a sub-generator, yielding each of its values one at a time.' }
        ]
    },
    {
        id: '6.3', title: 'itertools Module', emoji: '🔧',
        analogy: {
            title: 'itertools — A Swiss Army Knife for Iterators',
            emoji: '🔧',
            desc: 'itertools gives you ready-made tools for common iteration patterns — counting infinitely, chaining sequences, grouping data, and creating combinations. No need to build from scratch!',
            type: 'machine',
            input: 'iterables',
            name: 'itertools',
            output: 'transformed'
        },
        theory: `<p><code>itertools</code> is a standard library module providing fast, memory-efficient tools for iteration.</p>
        <h3>Key Functions</h3>
        <ul>
            <li><strong>Infinite:</strong> <code>count()</code>, <code>cycle()</code>, <code>repeat()</code></li>
            <li><strong>Terminating:</strong> <code>chain()</code>, <code>islice()</code>, <code>groupby()</code></li>
            <li><strong>Combinatoric:</strong> <code>product()</code>, <code>permutations()</code>, <code>combinations()</code></li>
        </ul>`,
        code: [
            {
                title: 'chain, islice, cycle & count',
                code: 'from itertools import chain, islice, cycle, count\n\n# chain — combine multiple iterables\na = [1, 2, 3]\nb = [4, 5, 6]\nprint(list(chain(a, b)))  # [1, 2, 3, 4, 5, 6]\n\n# islice — slice an iterator\nfib = (x for x in [0,1,1,2,3,5,8,13,21,34])\nprint(list(islice(fib, 3, 7)))  # [2, 3, 5, 8]\n\n# cycle — repeat infinitely\ncolors = cycle(["red", "green", "blue"])\nfirst_7 = [next(colors) for _ in range(7)]\nprint(first_7)\n\n# count — infinite counter\nfor i in islice(count(10, 5), 5):  # start=10, step=5\n    print(i, end=" ")\nprint()',
                output: '[1, 2, 3, 4, 5, 6]\n[2, 3, 5, 8]\n[\'red\', \'green\', \'blue\', \'red\', \'green\', \'blue\', \'red\']\n10 15 20 25 30'
            },
            {
                title: 'groupby, product, permutations, combinations',
                code: 'from itertools import groupby, product, permutations, combinations\n\n# groupby — group consecutive items (must be sorted!)\ndata = sorted(["apple", "banana", "avocado", "cherry", "blueberry"],\n              key=lambda x: x[0])\nfor key, group in groupby(data, key=lambda x: x[0]):\n    print(f"{key}: {list(group)}")\n\n# product — cartesian product\ncolors = ["red", "blue"]\nsizes = ["S", "M"]\nprint(list(product(colors, sizes)))\n\n# permutations — all orderings\nprint(list(permutations("AB", 2)))\n\n# combinations — all selections (order doesn\'t matter)\nprint(list(combinations([1,2,3,4], 2)))',
                output: 'a: [\'apple\', \'avocado\']\nb: [\'banana\', \'blueberry\']\nc: [\'cherry\']\n[(\'red\', \'S\'), (\'red\', \'M\'), (\'blue\', \'S\'), (\'blue\', \'M\')]\n[(\'A\', \'B\'), (\'B\', \'A\')]\n[(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)]'
            }
        ],
        takeaways: [
            '<code>chain()</code> combines multiple iterables into one seamless stream',
            '<code>islice()</code> slices an iterator without converting to a list',
            '<code>cycle()</code> repeats an iterable infinitely — use with <code>islice</code> or break',
            '<code>groupby()</code> requires sorted data to group correctly',
            '<code>combinations</code> vs <code>permutations</code>: order matters in permutations, not in combinations',
            'All itertools functions return iterators — memory efficient'
        ],
        quiz: [
            { q: 'What does chain([1,2], [3,4]) produce?', options: ['[[1,2],[3,4]]', '[1,2,3,4]', '[(1,3),(2,4)]', 'Error'], answer: 1, explain: 'chain combines multiple iterables into one flat sequence.' },
            { q: 'How many permutations of "ABC" taken 2 at a time?', options: ['3', '6', '9', '2'], answer: 1, explain: 'permutations("ABC", 2): AB, AC, BA, BC, CA, CB = 6. Order matters.' },
            { q: 'How many combinations of [1,2,3] taken 2 at a time?', options: ['6', '3', '9', '2'], answer: 1, explain: 'combinations([1,2,3], 2): (1,2), (1,3), (2,3) = 3. Order does not matter.' },
            { q: 'What must you do before groupby()?', options: ['Filter data', 'Sort data by the grouping key', 'Convert to list', 'Nothing'], answer: 1, explain: 'groupby only groups CONSECUTIVE items. Data must be sorted by the grouping key first.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 7: OBJECT-ORIENTED PROGRAMMING
   ============================================================ */
{
    id: 7, title: 'Object-Oriented Programming', icon: '🏗️', color: '#3b82f6',
    description: 'Classes, objects, inheritance, magic methods, property, classmethod, and dataclass.',
    topics: [
    {
        id: '7.1', title: 'Classes & Objects', emoji: '🏠',
        analogy: {
            title: 'Class is a Blueprint, Object is a House',
            emoji: '🏠',
            desc: 'A class is like an architect\'s blueprint. You can build many houses (objects) from the same blueprint, each with its own paint color and furniture (attributes).',
            type: 'blueprint',
            input: 'class House',
            output: 'house1, house2'
        },
        theory: `<p>A <strong>class</strong> is a template for creating objects. An <strong>object</strong> is an instance of a class with its own data.</p>
        <h3>Key Concepts</h3>
        <ul>
            <li><code>__init__</code> — constructor, called when object is created</li>
            <li><code>self</code> — reference to the current instance</li>
            <li><strong>Attributes</strong> — data stored in the object</li>
            <li><strong>Methods</strong> — functions defined inside the class</li>
        </ul>`,
        code: [
            {
                title: 'Creating a Class with __init__',
                code: 'class Student:\n    # Class attribute (shared by all instances)\n    school = "Soseeks Academy"\n\n    def __init__(self, name, age, grade):\n        # Instance attributes (unique per object)\n        self.name = name\n        self.age = age\n        self.grade = grade\n\n    def introduce(self):\n        return f"I\'m {self.name}, age {self.age}, grade {self.grade}"\n\n    def is_passing(self):\n        return self.grade >= 60\n\n# Create objects\ns1 = Student("Sanjay", 25, 85)\ns2 = Student("Priya", 22, 92)\n\nprint(s1.introduce())\nprint(f"Passing: {s1.is_passing()}")\nprint(f"School: {s1.school}")  # class attribute\nprint(f"School: {Student.school}")  # also via class',
                output: "I'm Sanjay, age 25, grade 85\nPassing: True\nSchool: Soseeks Academy\nSchool: Soseeks Academy"
            },
            {
                title: 'Instance vs Class Attributes & Methods',
                code: 'class BankAccount:\n    interest_rate = 0.05  # Class attribute\n\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n        self.transactions = []\n\n    def deposit(self, amount):\n        self.balance += amount\n        self.transactions.append(f"+{amount}")\n        return self\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds!")\n            return self\n        self.balance -= amount\n        self.transactions.append(f"-{amount}")\n        return self\n\n    def summary(self):\n        print(f"{self.owner}: ₹{self.balance:,}")\n        print(f"Transactions: {self.transactions}")\n\n# Method chaining (return self)\nacc = BankAccount("Sanjay", 10000)\nacc.deposit(5000).withdraw(2000).deposit(3000)\nacc.summary()',
                output: 'Sanjay: ₹16,000\nTransactions: [\'+5000\', \'-2000\', \'+3000\']'
            }
        ],
        takeaways: [
            '<code>__init__</code> is the constructor — runs when you create an object',
            '<code>self</code> refers to the current instance — always the first parameter',
            'Class attributes are shared; instance attributes are unique per object',
            'Return <code>self</code> from methods to enable method chaining',
            'Access class attributes via instance or class name: <code>obj.attr</code> or <code>Class.attr</code>'
        ],
        quiz: [
            { q: 'What does self refer to?', options: ['The class', 'The current instance', 'The parent class', 'A global variable'], answer: 1, explain: 'self is a reference to the specific object (instance) calling the method.' },
            { q: 'When does __init__ run?', options: ['When class is defined', 'When object is created', 'When method is called', 'When object is deleted'], answer: 1, explain: '__init__ runs automatically when you create a new object: Student("Sanjay", 25, 85).' },
            { q: 'Class attribute vs instance attribute?', options: ['No difference', 'Class is shared, instance is unique', 'Instance is shared', 'Class is private'], answer: 1, explain: 'Class attributes are shared by ALL instances. Instance attributes are unique to each object.' },
            { q: 'What does returning self from a method enable?', options: ['Recursion', 'Method chaining', 'Error handling', 'Nothing'], answer: 1, explain: 'Returning self lets you chain method calls: obj.deposit(100).withdraw(50).' }
        ]
    },
    {
        id: '7.2', title: 'Inheritance & Polymorphism', emoji: '🧬',
        analogy: {
            title: 'Inheritance is like a Family Tree',
            emoji: '🧬',
            desc: 'A child inherits traits from parents but can have their own unique features too. In OOP, a child class inherits from a parent class but can override or add new behaviors.',
            type: 'machine',
            input: 'Parent class',
            name: 'inherits',
            output: 'Child class'
        },
        theory: `<p><strong>Inheritance</strong> lets a class reuse code from another class.</p>
        <h3>Key Concepts</h3>
        <ul>
            <li><strong>Parent/Base class</strong> — the class being inherited from</li>
            <li><strong>Child/Derived class</strong> — the class that inherits</li>
            <li><code>super()</code> — call parent class methods</li>
            <li><strong>Method overriding</strong> — child redefines a parent method</li>
            <li><strong>Polymorphism</strong> — same method name, different behavior per class</li>
        </ul>
        <h3>MRO (Method Resolution Order)</h3>
        <p>With multiple inheritance, Python uses C3 linearization to determine which parent's method to call first. Check with <code>ClassName.mro()</code>.</p>`,
        code: [
            {
                title: 'Inheritance, super() & Overriding',
                code: 'class Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n\n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name, "Woof")  # call parent init\n        self.breed = breed\n\n    def fetch(self):\n        return f"{self.name} fetches the ball!"\n\nclass Cat(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Meow")\n\n    def speak(self):  # Override parent method\n        return f"{self.name} purrs softly..."\n\ndog = Dog("Rex", "Labrador")\ncat = Cat("Whiskers")\n\nprint(dog.speak())   # Inherited from Animal\nprint(dog.fetch())   # Dog-specific\nprint(cat.speak())   # Overridden\nprint(isinstance(dog, Animal))  # True',
                output: 'Rex says Woof!\nRex fetches the ball!\nWhiskers purrs softly...\nTrue'
            },
            {
                title: 'Polymorphism & Multiple Inheritance',
                code: '# Polymorphism — same interface, different behavior\nclass Shape:\n    def area(self):\n        raise NotImplementedError\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n\nshapes = [Circle(5), Rectangle(4, 6), Circle(3)]\nfor shape in shapes:\n    print(f"{type(shape).__name__}: {shape.area():.2f}")\n\n# Multiple inheritance\nclass Flyable:\n    def fly(self):\n        return "I can fly!"\n\nclass Swimmable:\n    def swim(self):\n        return "I can swim!"\n\nclass Duck(Animal, Flyable, Swimmable):\n    def __init__(self):\n        super().__init__("Duck", "Quack")\n\nd = Duck()\nprint(d.speak(), d.fly(), d.swim())\nprint(Duck.mro())  # Method Resolution Order',
                output: 'Circle: 78.54\nRectangle: 24.00\nCircle: 28.27\nDuck says Quack! I can fly! I can swim!\n[<class \'Duck\'>, <class \'Animal\'>, <class \'Flyable\'>, <class \'Swimmable\'>, <class \'object\'>]'
            }
        ],
        takeaways: [
            '<code>class Child(Parent):</code> inherits all methods and attributes',
            '<code>super()</code> calls the parent class method — essential in <code>__init__</code>',
            'Method overriding: child redefines a parent method to change behavior',
            'Polymorphism: same method name works differently for each class',
            '<code>isinstance(obj, Class)</code> checks if obj is an instance of Class (or child)',
            'MRO: <code>Class.mro()</code> shows method resolution order for multiple inheritance'
        ],
        quiz: [
            { q: 'What does super().__init__() do?', options: ['Creates a new class', 'Calls parent constructor', 'Deletes parent', 'Nothing'], answer: 1, explain: 'super().__init__() calls the parent class constructor to initialize inherited attributes.' },
            { q: 'What is polymorphism?', options: ['Multiple classes', 'Same method, different behavior per class', 'Multiple inheritance', 'Type casting'], answer: 1, explain: 'Polymorphism means the same method name behaves differently depending on the object\'s class.' },
            { q: 'isinstance(Dog(), Animal) returns?', options: ['True', 'False', 'Error', 'None'], answer: 0, explain: 'Dog inherits from Animal, so a Dog instance IS an Animal. isinstance returns True.' },
            { q: 'What is MRO?', options: ['Memory Resource Optimizer', 'Method Resolution Order', 'Multiple Return Object', 'Module Registry Object'], answer: 1, explain: 'MRO determines which parent\'s method Python calls first in multiple inheritance.' }
        ]
    },
    {
        id: '7.3', title: 'Magic Methods', emoji: '✨',
        analogy: {
            title: 'Magic Methods — Teaching Python Your Language',
            emoji: '✨',
            desc: 'Magic methods (dunder methods) let your objects work with Python operators. Define __add__ and your objects can use +. Define __str__ and print() knows how to display them!',
            type: 'machine',
            input: '__add__',
            name: 'magic',
            output: 'a + b works!'
        },
        theory: `<p><strong>Magic methods</strong> (dunder methods) let you customize how objects behave with Python's built-in operations.</p>
        <h3>Common Magic Methods</h3>
        <ul>
            <li><code>__str__</code> — human-readable string (used by print)</li>
            <li><code>__repr__</code> — developer/debug string (used by REPL)</li>
            <li><code>__len__</code> — works with len()</li>
            <li><code>__eq__</code>, <code>__lt__</code>, <code>__gt__</code> — comparison operators</li>
            <li><code>__add__</code>, <code>__sub__</code>, <code>__mul__</code> — arithmetic operators</li>
            <li><code>__getitem__</code>, <code>__setitem__</code> — indexing with []</li>
            <li><code>__contains__</code> — the <code>in</code> operator</li>
        </ul>`,
        code: [
            {
                title: '__str__, __repr__, __len__, __eq__',
                code: 'class Course:\n    def __init__(self, name, students):\n        self.name = name\n        self.students = students\n\n    def __str__(self):\n        return f"{self.name} ({len(self.students)} students)"\n\n    def __repr__(self):\n        return f"Course(\'{self.name}\', {self.students})"\n\n    def __len__(self):\n        return len(self.students)\n\n    def __eq__(self, other):\n        return self.name == other.name\n\n    def __contains__(self, student):\n        return student in self.students\n\nc = Course("Python", ["Sanjay", "Priya", "Raj"])\nprint(c)              # __str__\nprint(repr(c))        # __repr__\nprint(len(c))         # __len__\nprint("Sanjay" in c)  # __contains__',
                output: 'Python (3 students)\nCourse(\'Python\', [\'Sanjay\', \'Priya\', \'Raj\'])\n3\nTrue'
            },
            {
                title: 'Operator Overloading — __add__, __getitem__',
                code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __mul__(self, scalar):\n        return Vector(self.x * scalar, self.y * scalar)\n\n    def __abs__(self):\n        return (self.x**2 + self.y**2) ** 0.5\n\n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n\n    def __repr__(self):\n        return self.__str__()\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\n\nprint(v1 + v2)      # __add__\nprint(v1 * 3)       # __mul__\nprint(abs(v1))      # __abs__\nprint(f"|v1| = {abs(v1):.2f}")',
                output: 'Vector(4, 6)\nVector(9, 12)\n5.0\n|v1| = 5.00'
            }
        ],
        takeaways: [
            '<code>__str__</code> for human-readable output; <code>__repr__</code> for debugging',
            '<code>__add__</code> enables <code>+</code>, <code>__mul__</code> enables <code>*</code>',
            '<code>__len__</code> makes <code>len(obj)</code> work on your class',
            '<code>__contains__</code> makes <code>in</code> operator work',
            '<code>__eq__</code> defines what <code>==</code> means for your objects',
            'Interview tip: "What are dunder methods?" — special methods with double underscores'
        ],
        quiz: [
            { q: 'What does __str__ do?', options: ['Converts to int', 'Returns string for print()', 'Deletes the object', 'Creates a copy'], answer: 1, explain: '__str__ returns a human-readable string. It\'s what print() calls on your object.' },
            { q: 'Difference between __str__ and __repr__?', options: ['No difference', '__str__ for users, __repr__ for developers', '__repr__ is deprecated', '__str__ returns int'], answer: 1, explain: '__str__ is for human-readable display. __repr__ is for unambiguous developer output.' },
            { q: 'Which magic method enables the + operator?', options: ['__plus__', '__add__', '__sum__', '__concat__'], answer: 1, explain: '__add__(self, other) is called when you use +. Return a new object.' },
            { q: 'Which magic method enables len(obj)?', options: ['__size__', '__count__', '__len__', '__length__'], answer: 2, explain: '__len__ must return an integer. It\'s called by the built-in len() function.' }
        ]
    },
    {
        id: '7.4', title: 'Advanced OOP', emoji: '🔧',
        analogy: {
            title: 'Advanced OOP — Professional Building Tools',
            emoji: '🔧',
            desc: '@property is a security camera (controlled access), @classmethod is the construction company (works on the blueprint), @staticmethod is a general tool (no connection to any house).',
            type: 'machine',
            input: 'class tools',
            name: 'advanced',
            output: 'clean code'
        },
        theory: `<p>Advanced OOP features make your classes cleaner and more professional.</p>
        <h3>Key Features</h3>
        <ul>
            <li><code>@property</code> — controlled attribute access (getter/setter)</li>
            <li><code>@classmethod</code> — method that works on the class, not instance</li>
            <li><code>@staticmethod</code> — utility function inside a class</li>
            <li><code>@dataclass</code> — auto-generates __init__, __repr__, __eq__</li>
            <li><code>__slots__</code> — memory optimization by restricting attributes</li>
        </ul>`,
        code: [
            {
                title: '@property — Controlled Access',
                code: 'class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius  # "private" by convention\n\n    @property\n    def celsius(self):\n        return self._celsius\n\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n\n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n\nt = Temperature(25)\nprint(f"{t.celsius}°C = {t.fahrenheit}°F")\n\nt.celsius = 100  # uses setter\nprint(f"{t.celsius}°C = {t.fahrenheit}°F")\n\ntry:\n    t.celsius = -300  # triggers validation\nexcept ValueError as e:\n    print(e)',
                output: '25°C = 77.0°F\n100°C = 212.0°F\nBelow absolute zero!'
            },
            {
                title: '@classmethod & @staticmethod',
                code: 'class Employee:\n    raise_pct = 1.05  # 5% raise\n\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\n    def apply_raise(self):\n        self.salary = int(self.salary * self.raise_pct)\n\n    @classmethod\n    def set_raise_pct(cls, pct):\n        cls.raise_pct = pct\n\n    @classmethod\n    def from_string(cls, emp_str):\n        name, salary = emp_str.split(",")\n        return cls(name.strip(), int(salary.strip()))\n\n    @staticmethod\n    def is_workday(day):\n        return day.weekday() < 5\n\n# classmethod — alternative constructor\ne = Employee.from_string("Sanjay, 50000")\nprint(f"{e.name}: ₹{e.salary:,}")\n\n# classmethod — modify class state\nEmployee.set_raise_pct(1.10)\ne.apply_raise()\nprint(f"After 10% raise: ₹{e.salary:,}")\n\n# staticmethod — utility function\nfrom datetime import date\nprint(f"Is today a workday? {Employee.is_workday(date.today())}")',
                output: 'Sanjay: ₹50,000\nAfter 10% raise: ₹55,000\nIs today a workday? False'
            },
            {
                title: '@dataclass — Auto-Generated Classes',
                code: 'from dataclasses import dataclass, field\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    quantity: int = 0\n    tags: list = field(default_factory=list)\n\n    @property\n    def total_value(self):\n        return self.price * self.quantity\n\n# __init__, __repr__, __eq__ auto-generated!\np1 = Product("Python Course", 29999, 50)\np2 = Product("Python Course", 29999, 50)\np3 = Product("Java Course", 29999, 30, ["beginner"])\n\nprint(p1)              # auto __repr__\nprint(p1 == p2)        # auto __eq__ (True)\nprint(f"Value: ₹{p1.total_value:,}")\nprint(p3.tags)\n\n# dataclass with ordering\n@dataclass(order=True)\nclass Student:\n    grade: float\n    name: str\n\nstudents = [Student(85, "Raj"), Student(92, "Priya"), Student(78, "Amit")]\nprint(sorted(students))',
                output: "Product(name='Python Course', price=29999, quantity=50)\nTrue\nValue: ₹1,499,950\n['beginner']\n[Student(grade=78, name='Amit'), Student(grade=85, name='Raj'), Student(grade=92, name='Priya')]"
            }
        ],
        takeaways: [
            '<code>@property</code> makes method access look like attribute access: <code>obj.name</code>',
            '<code>@property.setter</code> adds validation when setting values',
            '<code>@classmethod</code> receives <code>cls</code> (the class) — great for factory methods',
            '<code>@staticmethod</code> doesn\'t receive self or cls — just a utility function',
            '<code>@dataclass</code> auto-generates __init__, __repr__, __eq__ — less boilerplate!',
            'Use <code>field(default_factory=list)</code> for mutable default values in dataclass'
        ],
        quiz: [
            { q: 'What does @property do?', options: ['Makes attribute private', 'Lets you access method like attribute', 'Deletes attribute', 'Creates class variable'], answer: 1, explain: '@property lets you call a method using attribute syntax: obj.name instead of obj.name().' },
            { q: '@classmethod receives what as first argument?', options: ['self', 'cls', 'args', 'Nothing'], answer: 1, explain: '@classmethod receives cls (the class itself) as the first argument, not self (an instance).' },
            { q: 'What does @dataclass auto-generate?', options: ['Only __init__', '__init__, __repr__, __eq__', 'Only __str__', 'Nothing'], answer: 1, explain: '@dataclass auto-generates __init__, __repr__, and __eq__ based on the class fields.' },
            { q: 'When to use @staticmethod?', options: ['When you need self', 'When you need cls', 'For utility functions that don\'t need self/cls', 'Never'], answer: 2, explain: '@staticmethod is for functions logically related to the class but not needing instance or class access.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 8: ERROR HANDLING
   ============================================================ */
{
    id: 8, title: 'Error Handling', icon: '🛡️', color: '#ef4444',
    description: 'try/except, custom exceptions, logging, and context managers.',
    topics: [
    {
        id: '8.1', title: 'try / except / finally', emoji: '🥅',
        analogy: {
            title: 'Error Handling is like a Safety Net',
            emoji: '🥅',
            desc: 'A trapeze artist (your code) might fall (error). The safety net (try/except) catches them so the show continues! Finally cleans up the arena regardless.',
            type: 'machine',
            input: 'risky code',
            name: 'try/except',
            output: 'handled safely'
        },
        theory: `<p>Errors (exceptions) happen. Good code anticipates and handles them gracefully.</p>
        <h3>Structure</h3>
        <ul>
            <li><code>try</code> — code that might fail</li>
            <li><code>except</code> — what to do if it fails</li>
            <li><code>else</code> — runs only if try succeeded (no exception)</li>
            <li><code>finally</code> — ALWAYS runs (cleanup)</li>
        </ul>
        <h3>Common Exceptions</h3>
        <ul>
            <li><code>ValueError</code> — wrong value type (e.g., int("hello"))</li>
            <li><code>TypeError</code> — wrong operation on type (e.g., "a" + 1)</li>
            <li><code>KeyError</code> — missing dictionary key</li>
            <li><code>IndexError</code> — list index out of range</li>
            <li><code>FileNotFoundError</code> — file doesn't exist</li>
            <li><code>ZeroDivisionError</code> — division by zero</li>
            <li><code>AttributeError</code> — object has no such attribute</li>
        </ul>`,
        code: [
            {
                title: 'try/except/else/finally',
                code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print("Cannot divide by zero!")\n        return None\n    except TypeError as e:\n        print(f"Type error: {e}")\n        return None\n    else:\n        print(f"Success: {a}/{b} = {result}")\n        return result\n    finally:\n        print("--- Division attempt complete ---")\n\nsafe_divide(10, 3)\nprint()\nsafe_divide(10, 0)\nprint()\nsafe_divide("10", 3)',
                output: 'Success: 10/3 = 3.3333333333333335\n--- Division attempt complete ---\n\nCannot divide by zero!\n--- Division attempt complete ---\n\nType error: unsupported operand type(s) for /: \'str\' and \'int\'\n--- Division attempt complete ---'
            },
            {
                title: 'Multiple Exceptions & EAFP Pattern',
                code: '# Catch multiple exceptions\ndef process_data(data, key, index):\n    try:\n        value = data[key][index]\n        return int(value)\n    except (KeyError, IndexError) as e:\n        print(f"Access error: {type(e).__name__}: {e}")\n    except (ValueError, TypeError) as e:\n        print(f"Conversion error: {type(e).__name__}: {e}")\n    return None\n\ndata = {"scores": [85, "92", "abc"]}\nprint(process_data(data, "scores", 1))  # Works: 92\nprint(process_data(data, "scores", 2))  # ValueError\nprint(process_data(data, "missing", 0)) # KeyError\n\n# EAFP: Easier to Ask Forgiveness than Permission\n# Pythonic: try it and handle the error\nuser = {"name": "Sanjay"}\ntry:\n    phone = user["phone"]\nexcept KeyError:\n    phone = "N/A"\nprint(f"Phone: {phone}")',
                output: '92\nAccess error: ValueError: invalid literal for int() with base 10: \'abc\'\nNone\nAccess error: KeyError: \'missing\'\nNone\nPhone: N/A'
            }
        ],
        takeaways: [
            '<code>try</code> contains risky code, <code>except</code> handles specific errors',
            '<code>else</code> runs only when no exception occurred in try',
            '<code>finally</code> ALWAYS runs — perfect for cleanup (closing files, connections)',
            'Catch specific exceptions, not bare <code>except:</code> (hides bugs)',
            'EAFP pattern: try first, handle errors — more Pythonic than checking beforehand',
            'Use <code>as e</code> to capture the exception object for details'
        ],
        quiz: [
            { q: 'When does the else block run?', options: ['Always', 'When exception occurs', 'When NO exception occurs', 'Never'], answer: 2, explain: 'else runs only if the try block completes without raising any exception.' },
            { q: 'When does finally run?', options: ['Only on success', 'Only on error', 'ALWAYS', 'Never'], answer: 2, explain: 'finally ALWAYS runs — whether try succeeded, failed, or even if return was called.' },
            { q: 'What is wrong with bare "except:"?', options: ['SyntaxError', 'It catches ALL exceptions including SystemExit', 'It\'s slow', 'Nothing'], answer: 1, explain: 'Bare except catches everything including SystemExit and KeyboardInterrupt, hiding bugs.' },
            { q: 'What exception does int("hello") raise?', options: ['TypeError', 'ValueError', 'SyntaxError', 'NameError'], answer: 1, explain: 'int("hello") raises ValueError because "hello" is not a valid integer string.' }
        ]
    },
    {
        id: '8.2', title: 'Custom Exceptions & Logging', emoji: '📋',
        analogy: {
            title: 'Custom Exceptions — Specific Warning Signs',
            emoji: '⚠️',
            desc: 'Generic exceptions are like a "Danger" sign. Custom exceptions are specific signs: "Wet Floor", "High Voltage". They tell you exactly what went wrong.',
            type: 'machine',
            input: 'specific error',
            name: 'custom exc',
            output: 'clear message'
        },
        theory: `<p>Create your own exception classes for domain-specific errors. This makes your code clearer and easier to debug.</p>
        <h3>Custom Exception Pattern</h3>
        <ul>
            <li>Inherit from <code>Exception</code> (or a more specific built-in exception)</li>
            <li>Add custom attributes and messages</li>
            <li>Create a hierarchy for related errors</li>
        </ul>
        <h3>Logging</h3>
        <p>The <code>logging</code> module is better than print() for debugging — it has levels, formatting, and can write to files.</p>`,
        code: [
            {
                title: 'Custom Exception Classes',
                code: '# Define custom exceptions\nclass AppError(Exception):\n    """Base exception for our app."""\n    pass\n\nclass ValidationError(AppError):\n    def __init__(self, field, message):\n        self.field = field\n        self.message = message\n        super().__init__(f"{field}: {message}")\n\nclass NotFoundError(AppError):\n    def __init__(self, resource, id):\n        self.resource = resource\n        self.id = id\n        super().__init__(f"{resource} with id={id} not found")\n\n# Using custom exceptions\ndef create_user(name, age):\n    if not name:\n        raise ValidationError("name", "cannot be empty")\n    if age < 0 or age > 150:\n        raise ValidationError("age", f"invalid value: {age}")\n    return {"name": name, "age": age}\n\ntry:\n    user = create_user("", 25)\nexcept ValidationError as e:\n    print(f"Validation failed — {e.field}: {e.message}")\n\ntry:\n    user = create_user("Sanjay", -5)\nexcept ValidationError as e:\n    print(f"Validation failed — {e.field}: {e.message}")',
                output: 'Validation failed — name: cannot be empty\nValidation failed — age: invalid value: -5'
            },
            {
                title: 'Logging — Better than print()',
                code: 'import logging\n\n# Configure logging\nlogging.basicConfig(\n    level=logging.DEBUG,\n    format="%(asctime)s [%(levelname)s] %(message)s",\n    datefmt="%H:%M:%S"\n)\n\nlogger = logging.getLogger(__name__)\n\ndef process_order(order_id, amount):\n    logger.info(f"Processing order #{order_id}")\n\n    if amount <= 0:\n        logger.error(f"Invalid amount: {amount}")\n        raise ValueError("Amount must be positive")\n\n    if amount > 100000:\n        logger.warning(f"Large order: ₹{amount:,}")\n\n    logger.debug(f"Amount validated: ₹{amount:,}")\n    logger.info(f"Order #{order_id} completed")\n    return True\n\ntry:\n    process_order(101, 50000)\n    print()\n    process_order(102, -100)\nexcept ValueError as e:\n    logger.error(f"Order failed: {e}")',
                output: '14:30:00 [INFO] Processing order #101\n14:30:00 [DEBUG] Amount validated: ₹50,000\n14:30:00 [INFO] Order #101 completed\n\n14:30:00 [INFO] Processing order #102\n14:30:00 [ERROR] Invalid amount: -100\n14:30:00 [ERROR] Order failed: Amount must be positive'
            }
        ],
        takeaways: [
            'Custom exceptions inherit from <code>Exception</code> or a more specific base',
            'Create exception hierarchies: <code>AppError → ValidationError, NotFoundError</code>',
            'Add custom attributes (<code>field</code>, <code>message</code>) for detailed error info',
            '<code>logging</code> is better than print: levels (DEBUG/INFO/WARNING/ERROR), formatting, file output',
            'Use <code>raise</code> to throw exceptions, <code>raise from</code> to chain exceptions',
            'Interview tip: "How do you handle errors in production?" → custom exceptions + logging'
        ],
        quiz: [
            { q: 'Custom exceptions should inherit from?', options: ['object', 'Exception', 'Error', 'BaseException'], answer: 1, explain: 'Custom exceptions should inherit from Exception (or a subclass). BaseException is too broad.' },
            { q: 'Why use logging instead of print?', options: ['Faster', 'Has levels, formatting, and file output', 'Required by Python', 'No advantage'], answer: 1, explain: 'logging has severity levels, timestamps, and can write to files. print is just stdout.' },
            { q: 'What logging level is most severe?', options: ['DEBUG', 'INFO', 'WARNING', 'CRITICAL'], answer: 3, explain: 'Levels: DEBUG < INFO < WARNING < ERROR < CRITICAL.' },
            { q: 'What does "raise" do?', options: ['Catches exceptions', 'Throws/raises an exception', 'Logs an error', 'Returns None'], answer: 1, explain: 'raise throws an exception that propagates up the call stack until caught by try/except.' }
        ]
    },
    {
        id: '8.3', title: 'Context Managers', emoji: '🚪',
        analogy: {
            title: 'Context Managers — Auto-Closing Doors',
            emoji: '🚪',
            desc: 'Walk into a room (enter), do your work, and the door closes automatically (exit) — even if you trip and fall (exception). The "with" statement handles setup and cleanup.',
            type: 'machine',
            input: '__enter__',
            name: 'with',
            output: '__exit__'
        },
        theory: `<p>A <strong>context manager</strong> handles setup and cleanup automatically using the <code>with</code> statement.</p>
        <h3>How It Works</h3>
        <ul>
            <li><code>__enter__</code> — runs at the start of the with block</li>
            <li><code>__exit__</code> — runs at the end (even if an exception occurs)</li>
        </ul>
        <h3>Common Uses</h3>
        <ul>
            <li>File handling — auto-close files</li>
            <li>Database connections — auto-commit/rollback</li>
            <li>Locks — auto-release</li>
            <li>Timing — measure execution time</li>
        </ul>`,
        code: [
            {
                title: 'with Statement & Custom Context Manager',
                code: '# Built-in: file handling\nwith open("test.txt", "w") as f:\n    f.write("Hello, Soseeks!")\n# File is auto-closed here, even if error occurs\n\n# Custom context manager using class\nclass Timer:\n    def __enter__(self):\n        import time\n        self.start = time.time()\n        print("Timer started")\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        import time\n        elapsed = time.time() - self.start\n        print(f"Timer stopped: {elapsed:.4f}s")\n        return False  # don\'t suppress exceptions\n\nwith Timer():\n    total = sum(range(1000000))\n    print(f"Sum: {total:,}")',
                output: 'Timer started\nSum: 499,999,500,000\nTimer stopped: 0.0312s'
            },
            {
                title: 'contextlib — Easy Context Managers',
                code: 'from contextlib import contextmanager\n\n# Context manager using decorator (simpler!)\n@contextmanager\ndef managed_resource(name):\n    print(f"Opening {name}")\n    resource = {"name": name, "status": "open"}\n    try:\n        yield resource  # this is the "body" of with\n    except Exception as e:\n        print(f"Error: {e}")\n        resource["status"] = "error"\n    finally:\n        resource["status"] = "closed"\n        print(f"Closing {name}")\n\n# Use it\nwith managed_resource("Database") as db:\n    print(f"Working with: {db}")\n    db["data"] = "processed"\n\nprint()\n\n# With an error\nwith managed_resource("File") as f:\n    print(f"Working with: {f}")\n    raise ValueError("Something went wrong")',
                output: 'Opening Database\nWorking with: {\'name\': \'Database\', \'status\': \'open\'}\nClosing Database\n\nOpening File\nWorking with: {\'name\': \'File\', \'status\': \'open\'}\nError: Something went wrong\nClosing File'
            }
        ],
        takeaways: [
            '<code>with</code> statement ensures cleanup happens even if exceptions occur',
            '<code>__enter__</code> sets up the resource, <code>__exit__</code> cleans it up',
            '<code>@contextmanager</code> from contextlib is the easiest way to create context managers',
            'Common uses: files, database connections, locks, timers',
            '<code>__exit__</code> receives exception info — return True to suppress the exception',
            'Interview tip: "Why use with open() instead of open()?" — guarantees file is closed'
        ],
        quiz: [
            { q: 'What does the with statement guarantee?', options: ['Faster execution', 'Cleanup runs even on error', 'No exceptions', 'Thread safety'], answer: 1, explain: 'with ensures __exit__ runs even if an exception occurs in the block.' },
            { q: 'Which methods define a context manager?', options: ['__init__, __del__', '__enter__, __exit__', '__start__, __stop__', '__open__, __close__'], answer: 1, explain: 'The context manager protocol requires __enter__ (setup) and __exit__ (cleanup).' },
            { q: 'What does @contextmanager simplify?', options: ['Class creation', 'Writing context managers with a generator', 'Error handling', 'File operations'], answer: 1, explain: '@contextmanager lets you write a context manager as a generator function instead of a class.' },
            { q: 'If __exit__ returns True, what happens to exceptions?', options: ['They are re-raised', 'They are suppressed/swallowed', 'They are logged', 'Program exits'], answer: 1, explain: 'Returning True from __exit__ suppresses the exception. Returning False (default) lets it propagate.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 9: FILE HANDLING & MODULES
   ============================================================ */
{
    id: 9, title: 'File Handling & Modules', icon: '📁', color: '#14b8a6',
    description: 'Read/write files, JSON, CSV, pathlib, os module, and Python packages.',
    topics: [
    {
        id: '9.1', title: 'File I/O & JSON', emoji: '📖',
        analogy: {
            title: 'File I/O is like Reading & Writing in a Diary',
            emoji: '📔',
            desc: 'Open the diary, read or write something, then close it. In Python: open() → read()/write() → close(). Always use "with" to auto-close!',
            type: 'diary',
            lines: 'Line 1: Hello<br>Line 2: World'
        },
        theory: `<p>Python can read and write text files, JSON, CSV, and binary files.</p>
        <h3>File Modes</h3>
        <ul>
            <li><code>"r"</code> — Read (default). Error if file doesn't exist.</li>
            <li><code>"w"</code> — Write. Creates or overwrites.</li>
            <li><code>"a"</code> — Append. Adds to end.</li>
            <li><code>"r+"</code> — Read and write.</li>
            <li><code>"rb"</code>, <code>"wb"</code> — Binary read/write.</li>
        </ul>`,
        code: [
            {
                title: 'Reading & Writing Text Files',
                code: '# Writing to a file\nwith open("notes.txt", "w") as f:\n    f.write("Python is fun!\\n")\n    f.write("Soseeks Academy\\n")\n    f.writelines(["Line 3\\n", "Line 4\\n"])\n\n# Reading entire file\nwith open("notes.txt", "r") as f:\n    content = f.read()\n    print(content)\n\n# Reading line by line (memory efficient)\nprint("Line by line:")\nwith open("notes.txt", "r") as f:\n    for line in f:\n        print(f">> {line.strip()}")\n\n# Append to file\nwith open("notes.txt", "a") as f:\n    f.write("Appended line!\\n")',
                output: 'Python is fun!\nSoseeks Academy\nLine 3\nLine 4\n\nLine by line:\n>> Python is fun!\n>> Soseeks Academy\n>> Line 3\n>> Line 4'
            },
            {
                title: 'Working with JSON',
                code: 'import json\n\n# Python dict → JSON file\ndata = {\n    "name": "Sanjay",\n    "courses": ["Python", "Java", "Gen AI"],\n    "rating": 4.9,\n    "active": True\n}\n\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)\n\n# JSON file → Python dict\nwith open("data.json", "r") as f:\n    loaded = json.load(f)\n\nprint(f"Name: {loaded[\'name\']}")\nprint(f"Courses: {loaded[\'courses\']}")\n\n# JSON string operations\njson_str = json.dumps(data, indent=2)\nprint(json_str[:50] + "...")\n\nparsed = json.loads(json_str)\nprint(f"Parsed type: {type(parsed)}")',
                output: 'Name: Sanjay\nCourses: [\'Python\', \'Java\', \'Gen AI\']\n{\n  "name": "Sanjay",\n  "courses": [\n    "Pytho...\nParsed type: <class \'dict\'>'
            }
        ],
        takeaways: [
            'Always use <code>with open()</code> — guarantees file is closed properly',
            '<code>"w"</code> overwrites; <code>"a"</code> appends to existing content',
            'Read large files line by line: <code>for line in file:</code> — memory efficient',
            '<code>json.dump()</code> writes to file; <code>json.load()</code> reads from file',
            '<code>json.dumps()</code> converts to string; <code>json.loads()</code> parses string',
            'Interview tip: "How to read a large file?" → line by line with for loop'
        ],
        quiz: [
            { q: 'What mode overwrites an existing file?', options: ['"r"', '"w"', '"a"', '"r+"'], answer: 1, explain: '"w" mode creates a new file or completely overwrites existing content.' },
            { q: 'What does json.load() return?', options: ['A string', 'A Python dict/list', 'A JSON object', 'A file object'], answer: 1, explain: 'json.load() reads a JSON file and converts it to a Python dictionary or list.' },
            { q: 'Best way to read a 10GB file?', options: ['f.read()', 'f.readlines()', 'for line in f:', 'json.load(f)'], answer: 2, explain: 'for line in f: reads one line at a time, using minimal memory.' },
            { q: 'json.dump() vs json.dumps()?', options: ['No difference', 'dump writes to file, dumps returns string', 'dumps writes to file', 'dump is deprecated'], answer: 1, explain: 'json.dump() writes to a file object. json.dumps() returns a JSON string.' }
        ]
    },
    {
        id: '9.2', title: 'CSV & pathlib', emoji: '📊',
        analogy: {
            title: 'CSV is like a Spreadsheet, pathlib is Your File Explorer',
            emoji: '📊',
            desc: 'CSV files are like Excel spreadsheets — rows and columns of data. pathlib is your file explorer — navigate folders, check if files exist, create paths.',
            type: 'machine',
            input: 'CSV / paths',
            name: 'csv / pathlib',
            output: 'structured data'
        },
        theory: `<p>The <code>csv</code> module reads/writes CSV files. <code>pathlib</code> provides modern file path operations.</p>
        <h3>csv Module</h3>
        <ul>
            <li><code>csv.reader()</code> — read rows as lists</li>
            <li><code>csv.writer()</code> — write rows</li>
            <li><code>csv.DictReader()</code> — read rows as dictionaries</li>
            <li><code>csv.DictWriter()</code> — write from dictionaries</li>
        </ul>
        <h3>pathlib.Path</h3>
        <ul>
            <li>Cross-platform path manipulation</li>
            <li><code>.exists()</code>, <code>.is_file()</code>, <code>.is_dir()</code></li>
            <li><code>.mkdir()</code>, <code>.rename()</code>, <code>.unlink()</code> (delete)</li>
            <li><code>.glob()</code> — find files matching a pattern</li>
        </ul>`,
        code: [
            {
                title: 'Reading & Writing CSV Files',
                code: 'import csv\n\n# Writing CSV\nstudents = [\n    ["Name", "Age", "Grade"],\n    ["Sanjay", 25, "A"],\n    ["Priya", 22, "A+"],\n    ["Raj", 24, "B"]\n]\n\nwith open("students.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerows(students)\n\n# Reading CSV\nwith open("students.csv", "r") as f:\n    reader = csv.reader(f)\n    header = next(reader)  # skip header\n    for row in reader:\n        print(f"{row[0]} - Grade: {row[2]}")\n\n# DictReader — access by column name\nprint("\\nUsing DictReader:")\nwith open("students.csv", "r") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(f"{row[\'Name\']}: {row[\'Grade\']}")',
                output: 'Sanjay - Grade: A\nPriya - Grade: A+\nRaj - Grade: B\n\nUsing DictReader:\nSanjay: A\nPriya: A+\nRaj: B'
            },
            {
                title: 'pathlib — Modern File Path Operations',
                code: 'from pathlib import Path\n\n# Create a Path object\np = Path("my_project")\n\n# Create directory\np.mkdir(exist_ok=True)\n\n# Create files\n(p / "readme.txt").write_text("Hello!")\n(p / "data.json").write_text("{}")\n(p / "script.py").write_text("print(\'hi\')")\n\n# Check existence\nprint(f"Exists: {p.exists()}")\nprint(f"Is dir: {p.is_dir()}")\n\n# List directory contents\nprint("\\nFiles:")\nfor f in sorted(p.iterdir()):\n    print(f"  {f.name} ({f.suffix})")\n\n# Glob — find files by pattern\nprint("\\n.py files:")\nfor f in p.glob("*.py"):\n    print(f"  {f}")\n\n# Path components\nfile_path = Path("/Users/sanjay/project/main.py")\nprint(f"\\nName: {file_path.name}")\nprint(f"Stem: {file_path.stem}")\nprint(f"Suffix: {file_path.suffix}")\nprint(f"Parent: {file_path.parent}")',
                output: 'Exists: True\nIs dir: True\n\nFiles:\n  data.json (.json)\n  readme.txt (.txt)\n  script.py (.py)\n\n.py files:\n  my_project/script.py\n\nName: main.py\nStem: main\nSuffix: .py\nParent: /Users/sanjay/project'
            }
        ],
        takeaways: [
            '<code>csv.DictReader</code> is more readable than <code>csv.reader</code> — access by column name',
            'Use <code>newline=""</code> when opening CSV files for writing (prevents blank rows)',
            '<code>pathlib.Path</code> is the modern way to handle file paths (replaces os.path)',
            '<code>.glob("*.py")</code> finds files matching patterns — very useful!',
            '<code>Path / "subdir" / "file.txt"</code> uses <code>/</code> operator to join paths',
            'Always use <code>exist_ok=True</code> with <code>.mkdir()</code> to avoid errors'
        ],
        quiz: [
            { q: 'What does csv.DictReader return per row?', options: ['A list', 'A tuple', 'A dictionary', 'A string'], answer: 2, explain: 'DictReader returns each row as a dictionary with column headers as keys.' },
            { q: 'What does Path("a") / "b" / "c.txt" give?', options: ['"a/b/c.txt"', 'Error', 'Path("a/b/c.txt")', '"abc.txt"'], answer: 2, explain: 'The / operator on Path objects joins path segments: Path("a/b/c.txt").' },
            { q: 'How to find all .py files recursively?', options: ['Path.find("*.py")', 'Path.glob("**/*.py")', 'Path.search("*.py")', 'os.find("*.py")'], answer: 1, explain: '.glob("**/*.py") searches recursively in all subdirectories.' },
            { q: 'pathlib.Path replaces which older module?', options: ['sys', 'os.path', 'shutil', 'glob'], answer: 1, explain: 'pathlib.Path is the modern replacement for os.path string-based path manipulation.' }
        ]
    },
    {
        id: '9.3', title: 'Modules & Packages', emoji: '📦',
        analogy: {
            title: 'Modules are like Toolboxes',
            emoji: '🧰',
            desc: 'Instead of carrying every tool in your pocket, you organize them into toolboxes (modules). When you need a hammer, you open the right toolbox (import).',
            type: 'machine',
            input: 'import math',
            name: 'module',
            output: 'math.sqrt()'
        },
        theory: `<p>A <strong>module</strong> is a .py file. A <strong>package</strong> is a folder of modules with an <code>__init__.py</code>.</p>
        <h3>Import Styles</h3>
        <ul>
            <li><code>import math</code> — entire module</li>
            <li><code>from math import sqrt</code> — specific function</li>
            <li><code>from math import *</code> — all (avoid in production!)</li>
            <li><code>import math as m</code> — alias</li>
        </ul>
        <h3>Useful Standard Library Modules</h3>
        <ul>
            <li><code>os</code>, <code>sys</code> — system operations</li>
            <li><code>json</code>, <code>csv</code> — data formats</li>
            <li><code>datetime</code> — dates and times</li>
            <li><code>collections</code> — advanced data structures</li>
            <li><code>re</code> — regular expressions</li>
            <li><code>random</code> — random numbers</li>
        </ul>`,
        code: [
            {
                title: 'Using Standard Library Modules',
                code: 'import math\nfrom datetime import datetime, timedelta\nfrom collections import Counter, defaultdict\nimport random\n\n# math module\nprint(f"sqrt(144) = {math.sqrt(144)}")\nprint(f"pi = {math.pi:.5f}")\nprint(f"ceil(4.2) = {math.ceil(4.2)}")\n\n# datetime\nnow = datetime.now()\nprint(f"Now: {now.strftime(\'%Y-%m-%d %H:%M\')}")\nfuture = now + timedelta(days=30)\nprint(f"30 days later: {future.strftime(\'%Y-%m-%d\')}")\n\n# Counter\nwords = "python is great and python is fun".split()\nprint(f"Word count: {Counter(words).most_common(2)}")\n\n# random\nprint(f"Random int: {random.randint(1, 100)}")\nprint(f"Random choice: {random.choice([\'Python\', \'Java\', \'JS\'])}")',
                output: 'sqrt(144) = 12.0\npi = 3.14159\nceil(4.2) = 5\nNow: 2026-03-08 14:30\n30 days later: 2026-04-07\nWord count: [(\'python\', 2), (\'is\', 2)]\nRandom int: 42\nRandom choice: Python'
            },
            {
                title: 'Creating Your Own Module & __name__',
                code: '# File: my_utils.py\ndef greet(name):\n    return f"Hello, {name}!"\n\ndef add(a, b):\n    return a + b\n\nPI = 3.14159\n\nif __name__ == "__main__":\n    # Only runs when this file is executed directly\n    print(greet("Test"))\n    print(add(2, 3))\n\n# File: main.py\nfrom my_utils import greet, PI\n\nprint(greet("Soseeks"))\nprint(f"PI = {PI}")\n\n# Package structure:\n# my_package/\n#   __init__.py\n#   module_a.py\n#   module_b.py\n# from my_package.module_a import some_function',
                output: 'Hello, Soseeks!\nPI = 3.14159'
            }
        ],
        takeaways: [
            '<code>import module</code> vs <code>from module import func</code> — both valid',
            'Avoid <code>from module import *</code> in production — namespace pollution',
            '<code>__name__ == "__main__"</code> checks if file is run directly vs imported',
            'Standard library is powerful: <code>datetime</code>, <code>collections</code>, <code>json</code>, <code>re</code>, <code>random</code>',
            'Packages need <code>__init__.py</code> (can be empty) to be recognized',
            'Interview tip: "What is __name__ == \'__main__\'?" — very commonly asked!'
        ],
        quiz: [
            { q: 'What is __name__ when a file is run directly?', options: ['The filename', '"__main__"', 'None', '"module"'], answer: 1, explain: 'When you run a file directly, __name__ is "__main__". When imported, it\'s the module name.' },
            { q: 'Why avoid "from module import *"?', options: ['It\'s slower', 'Namespace pollution', 'SyntaxError', 'Only works in Python 2'], answer: 1, explain: 'It imports all names into your namespace, causing potential naming conflicts.' },
            { q: 'What makes a folder a Python package?', options: ['.py files', '__init__.py file', 'Being in PATH', 'setup.py'], answer: 1, explain: 'A folder needs __init__.py to be recognized as a Python package.' },
            { q: 'What does timedelta(days=7) represent?', options: ['A date', 'A duration of 7 days', 'A timestamp', '7 seconds'], answer: 1, explain: 'timedelta represents a DURATION. You can add it to a datetime to get a future/past date.' }
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
        theory: `<p><strong>Multithreading</strong> runs multiple threads within a single process. Good for I/O-bound tasks.</p>
        <h3>The GIL (Global Interpreter Lock)</h3>
        <ul>
            <li>Python's GIL allows only ONE thread to execute Python bytecode at a time</li>
            <li>Threads still help for I/O-bound tasks (while one waits, another runs)</li>
            <li>For CPU-bound tasks, use <code>multiprocessing</code> instead</li>
        </ul>
        <h3>ThreadPoolExecutor</h3>
        <p>The modern, high-level way to use threads. Manages a pool of worker threads automatically.</p>`,
        code: [
            {
                title: 'Threading Basics & Speed Comparison',
                code: 'import threading\nimport time\n\ndef download(name, seconds):\n    print(f"Starting {name}...")\n    time.sleep(seconds)\n    print(f"Finished {name}!")\n\n# Sequential (slow)\nstart = time.time()\ndownload("file1", 2)\ndownload("file2", 2)\nprint(f"Sequential: {time.time()-start:.1f}s\\n")\n\n# Threaded (fast!)\nstart = time.time()\nt1 = threading.Thread(target=download, args=("file1", 2))\nt2 = threading.Thread(target=download, args=("file2", 2))\nt1.start()\nt2.start()\nt1.join()\nt2.join()\nprint(f"Threaded: {time.time()-start:.1f}s")',
                output: 'Starting file1...\nFinished file1!\nStarting file2...\nFinished file2!\nSequential: 4.0s\n\nStarting file1...\nStarting file2...\nFinished file1!\nFinished file2!\nThreaded: 2.0s'
            },
            {
                title: 'ThreadPoolExecutor — Modern Threading',
                code: 'from concurrent.futures import ThreadPoolExecutor, as_completed\nimport time\n\ndef fetch_url(url):\n    time.sleep(1)  # simulate network request\n    return f"Data from {url}"\n\nurls = [\n    "soseeks.com/api/users",\n    "soseeks.com/api/courses",\n    "soseeks.com/api/reviews",\n    "soseeks.com/api/stats"\n]\n\n# ThreadPoolExecutor manages threads for you\nstart = time.time()\nwith ThreadPoolExecutor(max_workers=4) as executor:\n    futures = {executor.submit(fetch_url, url): url for url in urls}\n    for future in as_completed(futures):\n        url = futures[future]\n        result = future.result()\n        print(f"  {result}")\n\nprint(f"Total: {time.time()-start:.1f}s (instead of 4s)")',
                output: '  Data from soseeks.com/api/reviews\n  Data from soseeks.com/api/users\n  Data from soseeks.com/api/courses\n  Data from soseeks.com/api/stats\nTotal: 1.0s (instead of 4s)'
            }
        ],
        takeaways: [
            'Threads share memory — lightweight but need synchronization',
            'GIL limits threads to one at a time for CPU-bound code',
            'Threads excel at I/O-bound tasks: file ops, network calls, DB queries',
            '<code>ThreadPoolExecutor</code> is the modern, preferred way to use threads',
            'Use <code>threading.Lock()</code> to prevent race conditions on shared data',
            'Interview tip: "What is the GIL?" — top Python interview question!'
        ],
        quiz: [
            { q: 'What is the GIL?', options: ['A graphics library', 'Global Interpreter Lock', 'A garbage collector', 'A debugger'], answer: 1, explain: 'GIL ensures only one thread executes Python bytecode at a time.' },
            { q: 'When are threads most useful?', options: ['CPU-heavy math', 'I/O-bound tasks', 'Single operations', 'Never'], answer: 1, explain: 'Threads excel at I/O-bound tasks where threads spend time WAITING.' },
            { q: 'What does thread.join() do?', options: ['Starts thread', 'Waits for thread to finish', 'Kills thread', 'Combines threads'], answer: 1, explain: 'join() blocks the main thread until the specified thread completes.' },
            { q: 'Which is the modern threading API?', options: ['threading.Thread', 'ThreadPoolExecutor', 'thread.start', 'os.fork'], answer: 1, explain: 'ThreadPoolExecutor from concurrent.futures is the high-level, modern API.' }
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
        theory: `<p><strong>Multiprocessing</strong> runs separate processes, each with its own GIL. True parallelism!</p>
        <h3>Threads vs Processes</h3>
        <ul>
            <li><strong>Threads</strong> — share memory, lightweight, limited by GIL (best for I/O)</li>
            <li><strong>Processes</strong> — separate memory, heavier, no GIL (best for CPU)</li>
        </ul>
        <h3>ProcessPoolExecutor</h3>
        <p>Like ThreadPoolExecutor but with processes. Same simple API, true parallelism.</p>`,
        code: [
            {
                title: 'Pool & ProcessPoolExecutor',
                code: 'from multiprocessing import Pool\nfrom concurrent.futures import ProcessPoolExecutor\nimport time\n\ndef compute_square(n):\n    return n * n\n\n# Using Pool\nstart = time.time()\nwith Pool(4) as pool:\n    results = pool.map(compute_square, range(1000000))\nprint(f"Pool: {time.time()-start:.3f}s")\nprint(f"First 5: {results[:5]}")\n\n# Using ProcessPoolExecutor (modern API)\ndef heavy_task(n):\n    total = sum(i*i for i in range(n))\n    return total\n\nstart = time.time()\nwith ProcessPoolExecutor(max_workers=4) as executor:\n    futures = [executor.submit(heavy_task, 100000) for _ in range(4)]\n    results = [f.result() for f in futures]\nprint(f"\\nProcessPool: {time.time()-start:.3f}s")\nprint(f"Results: {[r // 10**12 for r in results]}")',
                output: 'Pool: 0.127s\nFirst 5: [0, 1, 4, 9, 16]\n\nProcessPool: 0.089s\nResults: [333, 333, 333, 333]'
            },
            {
                title: 'Shared State & When to Use What',
                code: 'from multiprocessing import Process, Value, Lock\n\n# Shared state between processes\ndef increment(counter, lock, n):\n    for _ in range(n):\n        with lock:\n            counter.value += 1\n\ncounter = Value("i", 0)  # shared integer\nlock = Lock()\n\nprocesses = []\nfor _ in range(4):\n    p = Process(target=increment, args=(counter, lock, 25000))\n    processes.append(p)\n    p.start()\n\nfor p in processes:\n    p.join()\n\nprint(f"Counter: {counter.value}")  # 100000\n\n# Decision guide:\nprint("\\n--- When to use what? ---")\nprint("I/O-bound (network, files) -> threading")\nprint("CPU-bound (math, data)    -> multiprocessing")\nprint("Many I/O tasks             -> asyncio")\nprint("Simple parallelism         -> concurrent.futures")',
                output: 'Counter: 100000\n\n--- When to use what? ---\nI/O-bound (network, files) -> threading\nCPU-bound (math, data)    -> multiprocessing\nMany I/O tasks             -> asyncio\nSimple parallelism         -> concurrent.futures'
            }
        ],
        takeaways: [
            'Multiprocessing bypasses the GIL — true parallel execution',
            'Each process has its own memory — data must be serialized to share',
            'Use <code>Pool</code> or <code>ProcessPoolExecutor</code> for easy parallelism',
            '<code>Value</code> and <code>Lock</code> for shared state between processes',
            'More memory-heavy than threads — use only for CPU-bound tasks',
            'Interview tip: "Threads vs Processes?" — I/O vs CPU bound!'
        ],
        quiz: [
            { q: 'Why does multiprocessing bypass the GIL?', options: ['Written in C', 'Each process has its own GIL', 'Uses GPU', 'No Python used'], answer: 1, explain: 'Each process runs a separate Python interpreter with its own GIL.' },
            { q: 'When to use multiprocessing over threading?', options: ['Always', 'For I/O tasks', 'For CPU-heavy computation', 'Never'], answer: 2, explain: 'Multiprocessing is for CPU-bound tasks. Threading is for I/O-bound tasks.' },
            { q: 'Downside of multiprocessing?', options: ['Slower than threads', 'Uses more memory', 'Can\'t return values', 'Only works on Linux'], answer: 1, explain: 'Each process has its own memory space, using more memory than threading.' },
            { q: 'Which API works for both threads and processes?', options: ['threading', 'multiprocessing', 'concurrent.futures', 'asyncio'], answer: 2, explain: 'concurrent.futures provides ThreadPoolExecutor and ProcessPoolExecutor — same API for both.' }
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
            <li><code>async def</code> — defines a coroutine</li>
            <li><code>await</code> — pauses until the operation completes</li>
            <li><code>asyncio.gather()</code> — run multiple coroutines concurrently</li>
            <li><code>asyncio.create_task()</code> — schedule a coroutine</li>
            <li><strong>Event loop</strong> — manages and schedules coroutines</li>
        </ul>
        <h3>When to Use What?</h3>
        <ul>
            <li><strong>asyncio</strong> — many I/O tasks, single-threaded (web servers, APIs)</li>
            <li><strong>threading</strong> — I/O tasks needing real threads (legacy code)</li>
            <li><strong>multiprocessing</strong> — CPU-heavy computation</li>
        </ul>`,
        code: [
            {
                title: 'async/await Basics & gather()',
                code: 'import asyncio\n\nasync def fetch_data(name, delay):\n    print(f"Fetching {name}...")\n    await asyncio.sleep(delay)\n    print(f"Got {name}!")\n    return f"{name}_data"\n\nasync def main():\n    # Run concurrently with gather\n    results = await asyncio.gather(\n        fetch_data("users", 2),\n        fetch_data("posts", 1),\n        fetch_data("comments", 3)\n    )\n    print(f"All done! Results: {results}")\n\nasyncio.run(main())',
                output: 'Fetching users...\nFetching posts...\nFetching comments...\nGot posts!\nGot users!\nGot comments!\nAll done! Results: [\'users_data\', \'posts_data\', \'comments_data\']'
            },
            {
                title: 'create_task & Async Patterns',
                code: 'import asyncio\n\nasync def process_item(item, delay):\n    await asyncio.sleep(delay)\n    return f"Processed: {item}"\n\nasync def main():\n    # create_task — schedule and run later\n    tasks = []\n    items = ["order_1", "order_2", "order_3"]\n    for i, item in enumerate(items):\n        task = asyncio.create_task(process_item(item, i + 1))\n        tasks.append(task)\n\n    # Wait for all tasks\n    results = await asyncio.gather(*tasks)\n    for r in results:\n        print(r)\n\n    # Timeout pattern\n    try:\n        result = await asyncio.wait_for(\n            process_item("slow_task", 10),\n            timeout=2.0\n        )\n    except asyncio.TimeoutError:\n        print("Task timed out!")\n\nasyncio.run(main())',
                output: 'Processed: order_1\nProcessed: order_2\nProcessed: order_3\nTask timed out!'
            }
        ],
        takeaways: [
            '<code>async def</code> creates a coroutine, <code>await</code> pauses it',
            '<code>asyncio.gather()</code> runs multiple coroutines concurrently',
            '<code>asyncio.create_task()</code> schedules a coroutine to run soon',
            'Total time = longest task (not sum of all tasks)',
            '<code>asyncio.wait_for()</code> adds timeout to async operations',
            'Asyncio is single-threaded but concurrent — great for I/O-heavy applications',
            'Interview tip: "Explain async/await" — essential modern Python concept'
        ],
        quiz: [
            { q: 'What does await do?', options: ['Kills coroutine', 'Pauses until result is ready', 'Creates new thread', 'Returns immediately'], answer: 1, explain: 'await pauses the current coroutine and lets others run while waiting.' },
            { q: 'If 3 tasks take 1s, 2s, 3s, how long does gather() take?', options: ['6 seconds', '3 seconds', '2 seconds', '1 second'], answer: 1, explain: 'gather runs them concurrently. Total = longest task = 3 seconds.' },
            { q: 'Is asyncio multi-threaded?', options: ['Yes', 'No, single-threaded', 'Depends', 'Uses thread pool'], answer: 1, explain: 'Asyncio is single-threaded. It achieves concurrency through cooperative multitasking.' },
            { q: 'What does asyncio.run() do?', options: ['Creates a thread', 'Runs the event loop with a coroutine', 'Imports asyncio', 'Nothing'], answer: 1, explain: 'asyncio.run() creates an event loop, runs the given coroutine, and closes the loop.' }
        ]
    }
    ]
}

];
