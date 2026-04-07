/* ==========================================================
   SOSEEKS ACADEMY — FastAPI Course Content Data
   10 modules: topics, analogies, code, quizzes
   ========================================================== */

const MODULES = [
/* ============================================================
   MODULE 1: FASTAPI FUNDAMENTALS
   ============================================================ */
{
    id: 1, title: 'FastAPI Fundamentals', icon: '🚀', color: '#6366f1',
    description: 'Why FastAPI wins for modern APIs, your first app, and how HTTP methods map to Python functions.',
    topics: [
    {
        id: '1.1', title: 'What is FastAPI & Why?', emoji: '❓',
        analogy: {
            title: 'FastAPI is a Restaurant That Takes Orders Fast',
            emoji: '🍽️',
            desc: 'A good restaurant takes your order (HTTP request), the kitchen cooks (your Python code), and the waiter brings the meal (JSON response). FastAPI is the trained staff: it reads the menu (OpenAPI), validates orders (Pydantic), and keeps the line moving (async-ready ASGI).',
            type: 'waiter'
        },
        theory: `<p><strong>FastAPI</strong> is a modern Python web framework for building APIs. It is built on top of <strong>Starlette</strong> (ASGI toolkit) and <strong>Pydantic</strong> (data validation).</p>
        <h3>Why teams pick FastAPI</h3>
        <ul>
            <li><strong>Speed</strong> — Very high performance; async support fits I/O-heavy APIs.</li>
            <li><strong>Type hints</strong> — You declare types; FastAPI validates and documents them.</li>
            <li><strong>OpenAPI / Swagger</strong> — Interactive docs are generated automatically.</li>
            <li><strong>Interview angle</strong> — Expect questions on ASGI vs WSGI and why validation lives at the edge.</li>
        </ul>
        <p><strong>ASGI</strong> (Asynchronous Server Gateway Interface) lets one worker handle many concurrent connections—unlike classic WSGI, which is more request-at-a-time oriented.</p>`,
        code: [
            {
                title: 'Install FastAPI & Uvicorn',
                code: '# Terminal (example — run in your project venv)\n# pip install fastapi uvicorn[standard]\n\n# uvicorn runs the ASGI app:\n# uvicorn main:app --reload\n# main.py defines variable `app` below',
                output: '# Server starts at http://127.0.0.1:8000\n# --reload restarts on file changes (dev only)'
            },
            {
                title: 'Minimal ASGI-Style Mental Model',
                code: '# FastAPI app is an ASGI application\nfrom fastapi import FastAPI\n\napp = FastAPI(title="Soseeks Demo")\n\n@app.get("/health")\ndef health():\n    return {"status": "ok", "service": "orders-api"}\n\n# Interview note: path operations are registered on `app`\n# OpenAPI: GET /health → 200 + JSON body',
                output: '# GET /health → {"status":"ok","service":"orders-api"}'
            }
        ],
        takeaways: [
            'FastAPI = Starlette + Pydantic-style validation + automatic OpenAPI docs',
            'Run locally with <code>uvicorn module:variable --reload</code> (module file, app object name)',
            'ASGI is the async-capable interface; interviewers often contrast it with WSGI (Flask/Django classic)',
            'Type hints on parameters and return values drive validation and documentation',
            'Production = ASGI server (Uvicorn, Hypercorn) often behind a reverse proxy (Nginx, Caddy)'
        ],
        quiz: [
            { q: 'What does ASGI stand for?', options: ['Asynchronous Server Gateway Interface', 'Application Static Gateway Integration', 'Advanced SQL Graph Interface', 'Automatic Schema Generation Input'], answer: 0, explain: 'ASGI is the Asynchronous Server Gateway Interface. It is the modern Python standard for async-capable web apps, which FastAPI/Starlette use.' },
            { q: 'Which command typically runs a FastAPI app in development?', options: ['flask run', 'python manage.py runserver', 'uvicorn main:app --reload', 'gunicorn wsgi:app'], answer: 2, explain: 'FastAPI apps are ASGI. Uvicorn is the common dev server: `uvicorn main:app --reload` loads `app` from `main.py`.' },
            { q: 'What library provides automatic request/response validation in FastAPI?', options: ['Requests', 'Pydantic', 'Jinja2', 'Celery'], answer: 1, explain: 'FastAPI uses Pydantic models and type hints to validate and parse data. That is a frequent interview talking point.' },
            { q: 'FastAPI automatically generates which API description format?', options: ['SOAP WSDL only', 'OpenAPI (Swagger UI)', 'GraphQL SDL only', 'Protobuf'], answer: 1, explain: 'FastAPI exposes OpenAPI (JSON) and a Swagger UI / ReDoc UI out of the box—great for teams and interviews.' }
        ]
    },
    {
        id: '1.2', title: 'Your First API', emoji: '🌱',
        analogy: {
            title: 'Request → Handler → Response',
            emoji: '⚙️',
            desc: 'A client sends raw input (HTTP). Your path operation function is the machine that turns that into a Python return value. FastAPI serializes it to JSON for the wire.',
            type: 'machine',
            input: 'GET /items',
            name: 'read_items()',
            output: '[{"id":1,"name":"Milk"}]'
        },
        theory: `<p>You create a <code>FastAPI()</code> instance, then register <strong>path operations</strong> with decorators like <code>@app.get()</code>. The function return value becomes the response body (JSON by default).</p>
        <h3>First steps</h3>
        <ul>
            <li>Save as <code>main.py</code>, define <code>app = FastAPI()</code></li>
            <li>Use <code>@app.get("/path")</code> for read-only endpoints</li>
            <li>Return dicts or Pydantic models—FastAPI encodes JSON</li>
            <li>Visit <code>/docs</code> for Swagger UI</li>
        </ul>`,
        code: [
            {
                title: 'Hello World JSON API',
                code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef root():\n    return {"message": "Welcome to Soseeks FastAPI Academy"}\n\n@app.get("/courses")\ndef list_courses():\n    return [\n        {"id": 1, "title": "FastAPI", "hours": 12},\n        {"id": 2, "title": "Python Core", "hours": 20},\n    ]',
                output: '# GET / → {"message":"Welcome to Soseeks FastAPI Academy"}\n# GET /courses → JSON array of two objects'
            },
            {
                title: 'Path Segment as a Resource',
                code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/users/{user_id}")\ndef get_user(user_id: int):\n    # `user_id` is validated as int; invalid → 422\n    return {"user_id": user_id, "name": f"User {user_id}"}',
                output: '# GET /users/42 → {"user_id":42,"name":"User 42"}\n# GET /users/abc → 422 Unprocessable Entity'
            }
        ],
        takeaways: [
            'The <code>app</code> object is the ASGI application passed to Uvicorn',
            '<code>@app.get("/path")</code> registers a GET handler; other methods use <code>.post()</code>, <code>.put()</code>, etc.',
            'Returning a <code>dict</code> or <code>list</code> produces a JSON response',
            'Path parameters in <code>{name}</code> become function arguments—types are validated',
            'Swagger UI lives at <code>/docs</code> by default'
        ],
        quiz: [
            { q: 'What must Uvicorn import path refer to?', options: ['Any .py file', 'The module and the FastAPI instance variable', 'Only functions named run', 'A WSGI callable'], answer: 1, explain: 'You pass `file:variable`, e.g. `main:app`, where `app = FastAPI()` lives in `main.py`.' },
            { q: 'Which decorator registers a GET route?', options: ['@app.route', '@app.read', '@app.get', '@fastapi.handler'], answer: 2, explain: 'FastAPI uses explicit HTTP method decorators: `@app.get`, `@app.post`, etc.' },
            { q: 'Where is interactive Swagger UI served by default?', options: ['/openapi', '/swagger-only', '/docs', '/admin'], answer: 2, explain: 'FastAPI mounts Swagger UI at `/docs` and ReDoc at `/redoc` by default.' },
            { q: 'If a path parameter is typed as int but the URL has text, what happens?', options: ['500 error', 'Silent cast to 0', '422 validation error', '404 Not Found'], answer: 2, explain: 'FastAPI validates path parameters. Wrong types produce HTTP 422 with error details—very interview-relevant.' }
        ]
    },
    {
        id: '1.3', title: 'Path Operations & HTTP Methods', emoji: '🧴',
        analogy: {
            title: 'HTTP Methods Are Labeled Jars',
            emoji: '🏷️',
            desc: 'GET reads what is on the shelf. POST ships something new. PUT replaces a whole jar. PATCH relabels part of it. DELETE empties it. Same URL, different verbs = different intentions.',
            type: 'jars',
            items: [
                { label: 'GET', value: 'read safe' },
                { label: 'POST', value: 'create' },
                { label: 'PUT', value: 'replace' },
                { label: 'DELETE', value: 'remove' }
            ]
        },
        theory: `<p>REST-style APIs use <strong>HTTP verbs</strong> to express intent. FastAPI maps each verb to a separate function on the same or different paths.</p>
        <h3>Common mapping</h3>
        <ul>
            <li><code>GET</code> — Retrieve; should not change server state (in principle).</li>
            <li><code>POST</code> — Create or trigger an action; body often carries payload.</li>
            <li><code>PUT</code> — Replace a resource (idempotent when possible).</li>
            <li><code>PATCH</code> — Partial update.</li>
            <li><code>DELETE</code> — Remove a resource.</li>
        </ul>
        <p>Interview tip: idempotency—repeating GET/PUT/DELETE should not multiply side effects the way repeated POST might.</p>`,
        code: [
            {
                title: 'CRUD-Style Methods on One Resource',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\nfake_db = {1: {"name": "Notebook", "price": 9.99}}\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int):\n    return fake_db.get(item_id, {})\n\n@app.post("/items", status_code=201)\ndef create_item(item: Item):\n    new_id = max(fake_db.keys(), default=0) + 1\n    fake_db[new_id] = item.model_dump()\n    return {"id": new_id, **fake_db[new_id]}\n\n@app.delete("/items/{item_id}")\ndef delete_item(item_id: int):\n    return fake_db.pop(item_id, None) is not None',
                output: '# POST /items with JSON body creates resource (201)\n# GET /items/1 returns stored dict\n# DELETE /items/1 removes it'
            },
            {
                title: 'PUT vs PATCH (Pattern)',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass ItemFull(BaseModel):\n    name: str\n    price: float\n\nclass ItemPartial(BaseModel):\n    name: str | None = None\n    price: float | None = None\n\nstore = {1: {"name": "Pen", "price": 1.5}}\n\n@app.put("/items/{item_id}")\ndef replace_item(item_id: int, body: ItemFull):\n    store[item_id] = body.model_dump()\n    return store[item_id]\n\n@app.patch("/items/{item_id}")\ndef patch_item(item_id: int, body: ItemPartial):\n    data = body.model_dump(exclude_unset=True)\n    store[item_id] = {**store.get(item_id, {}), **data}\n    return store[item_id]',
                output: '# PUT replaces the whole resource shape\n# PATCH merges only fields the client sent'
            }
        ],
        takeaways: [
            'Use the HTTP verb that matches semantics—interviewers care about REST basics',
            '<code>@app.post(..., status_code=201)</code> sets Created for new resources',
            'PUT often replaces; PATCH merges—design your models accordingly',
            'GET should be safe (no destructive side effects) in well-behaved APIs',
            'FastAPI lets you declare a <code>response_model</code> later to shape outgoing JSON'
        ],
        quiz: [
            { q: 'Which method is usually used to create a new resource with a body?', options: ['GET', 'POST', 'HEAD', 'OPTIONS'], answer: 1, explain: 'POST carries a body and is the usual choice for creation. GET should not create resources.' },
            { q: 'What is a key idea of idempotency?', options: ['Faster JSON', 'Same request repeated has the same effect as once', 'Only one database table', 'No authentication'], answer: 1, explain: 'Idempotent operations (like PUT/DELETE in good designs) do not keep stacking new side effects when retried.' },
            { q: 'In FastAPI, how do you register a DELETE handler?', options: ['@app.remove', '@app.delete', '@app.del', '@http.delete'], answer: 1, explain: 'Use `@app.delete("/path")`—mirrors other verb decorators.' },
            { q: 'Why might POST return 201 instead of 200?', options: ['Random choice', '201 Created signals a new resource was made', 'Browsers require it', 'Only for files'], answer: 1, explain: 'HTTP 201 Created is the standard success code after creating a resource; FastAPI sets it with `status_code=201`.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 2: PATH & QUERY PARAMETERS
   ============================================================ */
{
    id: 2, title: 'Path & Query Parameters', icon: '🧭', color: '#8b5cf6',
    description: 'URL path segments, query strings, and validation with Query() and Path().',
    topics: [
    {
        id: '2.1', title: 'Path Parameters', emoji: '🚃',
        analogy: {
            title: 'Each URL Segment Is a Train Car',
            emoji: '🚆',
            desc: 'https://shop.com/orders/42/items/7 — cars chain together: orders → 42 → items → 7. Each car is a path segment; FastAPI binds them to typed parameters.',
            type: 'train',
            items: ['orders', '42', 'items', '7']
        },
        theory: `<p>Path parameters appear in the route string as <code>{name}</code>. FastAPI injects them into your function and coerces types from strings in the URL.</p>
        <h3>Interview topics</h3>
        <ul>
            <li>Order matters—paths are matched in registration order; put static paths before variable ones when needed.</li>
            <li>Use <code>Path()</code> for min length, regex patterns, and documentation metadata.</li>
            <li>Enum path params restrict allowed values—great for categories.</li>
        </ul>`,
        code: [
            {
                title: 'Typed Path Parameters',
                code: 'from enum import Enum\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\nclass Region(str, Enum):\n    in_ = "in"  # `in` is reserved — use alias\n    us = "us"\n    eu = "eu"\n\n@app.get("/regions/{region}/stores/{store_id:int}")\ndef store_detail(region: Region, store_id: int):\n    return {"region": region.value, "store_id": store_id}',
                output: '# GET /regions/in/stores/3 → valid\n# Invalid region → 422'
            },
            {
                title: 'Path Constraints with Path()',
                code: 'from fastapi import FastAPI, Path\n\napp = FastAPI()\n\n@app.get("/products/{slug}")\ndef product_by_slug(\n    slug: str = Path(..., min_length=3, max_length=64, pattern=r"^[a-z0-9-]+$")\n):\n    return {"slug": slug}',
                output: '# Slug validated: lowercase, digits, hyphens only\n# Too short slug → 422'
            }
        ],
        takeaways: [
            'Declare types on path params for automatic parsing and 422 on bad input',
            'Use <code>Path(...)</code> for validation and OpenAPI descriptions',
            'Prefer <code>str, Enum</code> for a fixed set of string path values',
            'Avoid shadowing Python keywords—use Field aliases or Enum member names',
            'Register specific routes before generic <code>{id}</code> routes to avoid shadowing'
        ],
        quiz: [
            { q: 'What happens if a path parameter cannot be parsed to the declared type?', options: ['404', '500', '422 Unprocessable Entity', '200 with null'], answer: 2, explain: 'FastAPI validation errors return 422 with a structured error body—common interview answer.' },
            { q: 'What is Path(...) used for?', options: ['Import paths only', 'Extra validation and docs on path parameters', 'Database paths', 'File system paths'], answer: 1, explain: '`Path()` wraps a path parameter with constraints (length, regex, ge/le for numbers, etc.).' },
            { q: 'Why use Enum for a path segment?', options: ['Speed only', 'Restrict allowed values and document them in OpenAPI', 'Required for async', 'Encryption'], answer: 1, explain: 'Enums make invalid values fail validation and show up as choices in `/docs`.' },
            { q: 'In `/users/{user_id}`, where does user_id come from?', options: ['Request body', 'Query string only', 'The URL path segment', 'Headers only'], answer: 2, explain: 'Curly braces in the route template capture path segments, not query or body.' }
        ]
    },
    {
        id: '2.2', title: 'Query Parameters', emoji: '🔎',
        analogy: {
            title: 'Query String = Contact Form Fields',
            emoji: '📇',
            desc: 'After ? you have key=value pairs: ?page=2&sort=price. Like labeled lines on a contact card—keys point to values FastAPI reads automatically.',
            type: 'contact',
            items: [
                { key: 'page', value: '2' },
                { key: 'size', value: '20' },
                { key: 'sort', value: 'price' }
            ]
        },
        theory: `<p>Query parameters are optional function parameters not in the path. FastAPI reads them from the URL query string.</p>
        <ul>
            <li>Defaults make them optional: <code>q: str | None = None</code></li>
            <li>Lists: <code>tags: list[str] = Query(default=[])</code> or repeated keys</li>
            <li>Use <code>Query()</code> when you need validation, aliases, or deprecation notes</li>
        </ul>`,
        code: [
            {
                title: 'Pagination Query Params',
                code: 'from fastapi import FastAPI, Query\n\napp = FastAPI()\n\nITEMS = [{"id": i, "name": f"Item {i}"} for i in range(1, 101)]\n\n@app.get("/items")\ndef list_items(\n    skip: int = Query(0, ge=0),\n    limit: int = Query(10, ge=1, le=50),\n    q: str | None = None,\n):\n    rows = ITEMS\n    if q:\n        rows = [r for r in rows if q.lower() in r["name"].lower()]\n    return rows[skip : skip + limit]',
                output: '# GET /items?skip=0&limit=10\n# GET /items?q=5&limit=5'
            },
            {
                title: 'Boolean and List Query Params',
                code: 'from fastapi import FastAPI, Query\n\napp = FastAPI()\n\n@app.get("/filter")\ndef filter_demo(\n    active: bool = True,\n    tag: list[str] = Query(default=[]),\n):\n    return {"active": active, "tags": tag}',
                output: '# GET /filter?active=false&tag=a&tag=b\n# → {"active":false,"tags":["a","b"]}'
            }
        ],
        takeaways: [
            'Non-path parameters with defaults are treated as query parameters',
            '<code>Query(default, ge=1)</code> adds numeric bounds and OpenAPI metadata',
            'Use <code>list[str]</code> + <code>Query()</code> for repeated query keys',
            'Booleans accept true/false, 1/0, yes/no in query strings',
            'Optional search: <code>str | None = None</code> means parameter can be omitted'
        ],
        quiz: [
            { q: 'Where do query parameters appear?', options: ['Request body', 'URL path only', 'After ? in the URL', 'Only in headers'], answer: 2, explain: 'Query parameters are the part of the URL after `?`, separated by `&`.' },
            { q: 'What does Query(10, ge=1, le=100) enforce for a query param?', options: ['String length only', 'Value between 1 and 100 inclusive', 'Required header', 'Database constraint'], answer: 1, explain: '`ge` and `le` are greater-or-equal / less-or-equal—Pydantic validation via FastAPI.' },
            { q: 'How can you accept multiple values for one query name?', options: ['Impossible', 'Use a list type with Query()', 'Only POST', 'Use cookies'], answer: 1, explain: 'Declare `list[str]` and `Query()` so repeated `?tag=a&tag=b` becomes a list.' },
            { q: 'If a query param has a default value in Python, is it required in the URL?', options: ['Yes always', 'No—it is optional', 'Only on Tuesdays', 'Only for GET'], answer: 1, explain: 'Parameters with defaults are optional; missing query keys use the default.' }
        ]
    },
    {
        id: '2.3', title: 'Parameter Validation', emoji: '🥅',
        analogy: {
            title: 'Validation Catches Bad Input Before Your Logic',
            emoji: '🤸',
            desc: 'Try the happy path; invalid data falls into the validation net (422) before your business code runs—like a gymnast caught safely instead of crashing.',
            type: 'net'
        },
        theory: `<p>FastAPI uses Pydantic v2 under the hood. Combining <code>Annotated</code> with <code>Query()</code> and <code>Path()</code> is the modern style (Python 3.9+).</p>
        <ul>
            <li><code>Annotated[str, Query(min_length=1)]</code> — clear and reusable</li>
            <li>Errors return JSON with <code>detail</code> listing field errors</li>
            <li>Great interview topic: validation at the boundary reduces bugs deep in services</li>
        </ul>`,
        code: [
            {
                title: 'Annotated + Query / Path (Recommended Style)',
                code: 'from typing import Annotated\nfrom fastapi import FastAPI, Query, Path\n\napp = FastAPI()\n\n@app.get("/search")\ndef search(\n    q: Annotated[str, Query(min_length=2, max_length=50)],\n    page: Annotated[int, Query(ge=1)] = 1,\n):\n    return {"q": q, "page": page}\n\n@app.get("/files/{name}")\ndef file_meta(\n    name: Annotated[str, Path(pattern=r"^[A-Za-z0-9_.-]+$")],\n):\n    return {"safe_name": name}',
                output: '# Short q → 422\n# page=0 → 422\n# name with slashes → 422'
            },
            {
                title: 'Body + Query Together (Preview Pattern)',
                code: 'from typing import Annotated\nfrom fastapi import FastAPI, Query\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Note(BaseModel):\n    text: str\n\n@app.post("/notes")\ndef create_note(\n    note: Note,\n    draft: Annotated[bool, Query()] = False,\n):\n    return {"saved": not draft, "chars": len(note.text)}',
                output: '# POST JSON body + ?draft=true in query\n# Both validated independently'
            }
        ],
        takeaways: [
            'Prefer <code>Annotated[..., Query()]</code> over bare defaults for clarity',
            'Validation failures are 422 with machine-readable <code>detail</code>',
            'Combine path, query, and body parameters in one function signature',
            'Use regex <code>pattern</code> on Path/Query for allow-lists',
            'Interview: separating transport validation from domain rules is good architecture'
        ],
        quiz: [
            { q: 'Which HTTP status does FastAPI usually return for validation errors?', options: ['404', '400', '422', '500'], answer: 2, explain: '422 Unprocessable Entity is standard for well-formed requests that fail validation.' },
            { q: 'Why use typing.Annotated with Query()?', options: ['Faster CPU', 'Attach validation metadata without changing the Python type', 'Required by SQLAlchemy', 'Disables OpenAPI'], answer: 1, explain: '`Annotated[str, Query(...)]` keeps the type as `str` while adding FastAPI/Pydantic constraints.' },
            { q: 'Can one endpoint use path, query, and body parameters together?', options: ['No', 'Yes', 'Only in GraphQL', 'Only PUT'], answer: 1, explain: 'FastAPI binds each parameter from the right source—very flexible and common in real APIs.' },
            { q: 'What does min_length on a string query param do?', options: ['Database column size', 'Rejects strings shorter than the limit', 'Sets cookie size', 'Changes TCP buffer'], answer: 1, explain: 'Pydantic validates the string length after decoding the query value.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 3: REQUEST BODY & PYDANTIC
   ============================================================ */
{
    id: 3, title: 'Request Body & Pydantic', icon: '📦', color: '#ec4899',
    description: 'Models that validate JSON bodies, nested data, and custom validators.',
    topics: [
    {
        id: '3.1', title: 'Pydantic Models', emoji: '📐',
        analogy: {
            title: 'A Model Is a Blueprint for JSON',
            emoji: '📋',
            desc: 'You sketch a blueprint once (class fields). Every JSON payload is checked against it—wrong shape, wrong types, or missing required fields are rejected before your code runs.',
            type: 'blueprint',
            className: 'CourseEnrollment',
            objects: ['row_1', 'row_2']
        },
        theory: `<p><code>BaseModel</code> defines the expected JSON shape. Pydantic v2 parses and validates, then gives you a Python object with <code>.model_dump()</code> for dicts.</p>
        <ul>
            <li>Field types map to JSON types (str, int, float, bool, list, nested models).</li>
            <li><code>Field()</code> adds defaults, constraints, and JSON schema metadata.</li>
            <li>Interview: Pydantic separates transport DTOs from domain entities—clean layering.</li>
        </ul>`,
        code: [
            {
                title: 'BaseModel with Field Constraints',
                code: '# Pydantic ships with FastAPI (pip install fastapi)\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass Product(BaseModel):\n    name: str = Field(min_length=1, max_length=120)\n    sku: str = Field(pattern=r"^[A-Z0-9-]+$")\n    price: float = Field(gt=0, le=1_000_000)\n    tags: list[str] = []\n\n@app.post("/products")\ndef create_product(p: Product):\n    return {"ok": True, "data": p.model_dump()}',
                output: '# POST JSON matching Product → 200\n# Negative price or bad sku → 422'
            },
            {
                title: 'model_dump and Config (frozen example)',
                code: 'from pydantic import BaseModel, ConfigDict\n\nclass User(BaseModel):\n    model_config = ConfigDict(str_strip_whitespace=True)\n    email: str\n    age: int\n\nu = User(email="  a@b.com ", age=21)\nprint(u.model_dump())\nprint(u.model_dump_json())',
                output: '{\'email\': \'a@b.com\', \'age\': 21}\n{"email":"a@b.com","age":21}'
            }
        ],
        takeaways: [
            'Declare bodies as <code>BaseModel</code> subclasses—automatic validation + OpenAPI schema',
            '<code>Field()</code> adds min/max, regex, descriptions for docs',
            'Use <code>model_dump()</code> for dicts, <code>model_dump_json()</code> for strings',
            '<code>ConfigDict</code> replaces old <code>class Config</code> in Pydantic v2',
            'Interview: validation errors are consistent 422 responses—easy for API clients'
        ],
        quiz: [
            { q: 'What class do you inherit from for a request body model?', options: ['FastAPI', 'BaseHTTPRequest', 'BaseModel', 'TypedDict'], answer: 2, explain: 'Pydantic `BaseModel` is the standard base for request/response schemas in FastAPI.' },
            { q: 'Which method turns a model instance into a plain dict?', options: ['.json()', '.dict() only in v1', '.model_dump()', '.serialize_xml()'], answer: 2, explain: 'Pydantic v2 uses `model_dump()`. (v1 used `.dict()`.)' },
            { q: 'What does Field(gt=0) on a float mean?', options: ['Greater than database', 'Value must be strictly greater than 0', 'GraphQL type', 'Greater than string length'], answer: 1, explain: '`gt` is "greater than"—the float must be positive in this example.' },
            { q: 'Why strip whitespace on strings?', options: ['Security only', 'Avoid accidental spaces from clients breaking uniqueness/logins', 'Required by HTTP', 'Faster JSON'], answer: 1, explain: 'Users paste emails with spaces; stripping keeps data clean—common production tweak.' }
        ]
    },
    {
        id: '3.2', title: 'Request Body', emoji: '✉️',
        analogy: {
            title: 'JSON Body Is a Sealed Envelope',
            emoji: '📮',
            desc: 'The client seals structured data (JSON) and posts it. You open it only through the Pydantic model—if the seal is broken (invalid JSON or shape), you never trust the contents.',
            type: 'envelope',
            content: '{"title":"Learn FastAPI","hours":12,"pro":true}'
        },
        theory: `<p>For <code>POST</code>/<code>PUT</code>/<code>PATCH</code>, declare a body parameter with a Pydantic model. FastAPI reads <code>Content-Type: application/json</code> and parses it.</p>
        <ul>
            <li>Multiple bodies are unusual—prefer one model or embed sub-objects.</li>
            <li>Optional nested objects use <code>Model | None</code>.</li>
            <li>Interview: keep request models separate from DB models (don\'t expose ORM directly).</li>
        </ul>`,
        code: [
            {
                title: 'Single JSON Body',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel, EmailStr\n\napp = FastAPI()\n\nclass Signup(BaseModel):\n    email: EmailStr\n    password: str  # never log this in real apps\n    newsletter: bool = False\n\n@app.post("/signup")\ndef signup(payload: Signup):\n    return {"received_email": payload.email, "newsletter": payload.newsletter}',
                output: '# Valid email required (EmailStr)\n# Invalid email → 422'
            },
            {
                title: 'Optional Body Fields',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass ProfileUpdate(BaseModel):\n    display_name: str | None = None\n    bio: str | None = None\n\n@app.patch("/me")\ndef patch_me(body: ProfileUpdate):\n    # Only update keys actually sent\n    return body.model_dump(exclude_unset=True)',
                output: '# PATCH with partial JSON → only sent keys in response dict'
            }
        ],
        takeaways: [
            'One Pydantic parameter = one JSON object body',
            '<code>exclude_unset=True</code> is the usual pattern for PATCH updates',
            '<code>EmailStr</code> requires <code>email-validator</code> package installed',
            'Never return raw passwords—this sample is for learning validation only',
            'Interview: DTOs (Pydantic) vs ORM models is a deliberate design choice'
        ],
        quiz: [
            { q: 'Which content type does FastAPI expect for default JSON bodies?', options: ['text/plain', 'application/json', 'multipart/mixed', 'application/xml'], answer: 1, explain: 'FastAPI\'s default JSON parsing uses `application/json`.' },
            { q: 'What does model_dump(exclude_unset=True) do?', options: ['Deletes the database', 'Omits fields the client did not include', 'Removes all optional fields always', 'Encrypts output'], answer: 1, explain: 'Only fields that were explicitly set on the model instance appear—ideal for PATCH.' },
            { q: 'Can a path operation have two separate JSON bodies by default?', options: ['Yes, always', 'Not the usual pattern—combine into one model', 'Only with GraphQL', 'Only GET'], answer: 1, explain: 'Design one envelope model (possibly nested) instead of two independent JSON bodies.' },
            { q: 'Why use EmailStr instead of str for emails?', options: ['Faster CPU', 'Built-in format validation', 'Required by OAuth2', 'Disables docs'], answer: 1, explain: '`EmailStr` validates common email shapes so bad data stops at 422.' }
        ]
    },
    {
        id: '3.3', title: 'Nested Models & Validation', emoji: '✅',
        analogy: {
            title: 'Validators Are Quality Stamps on Each Field',
            emoji: '📮',
            desc: 'Each stamp checks one concern: non-empty title, price positive, child rows consistent. Stamped fields pass; failed checks are marked invalid before shipping.',
            type: 'stamps',
            items: [
                { val: 'title', dup: false },
                { val: 'price>0', dup: false },
                { val: 'nested items', dup: false },
                { val: 'duplicate row', dup: true }
            ]
        },
        theory: `<p>Nest models inside models for structured JSON. Use <code>field_validator</code> and <code>model_validator</code> in Pydantic v2 for cross-field rules.</p>
        <ul>
            <li><code>model_validator(mode="after")</code> sees the whole object.</li>
            <li>Great for "end_date after start_date" style rules.</li>
            <li>Serialization: response models can differ from input models.</li>
        </ul>`,
        code: [
            {
                title: 'Nested Models',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass LineItem(BaseModel):\n    sku: str\n    qty: int\n\nclass Order(BaseModel):\n    order_id: str\n    lines: list[LineItem]\n\n@app.post("/orders")\ndef create_order(o: Order):\n    total_lines = sum(x.qty for x in o.lines)\n    return {"order_id": o.order_id, "units": total_lines}',
                output: '# Nested JSON array maps to list[LineItem]'
            },
            {
                title: 'model_validator (cross-field)',
                code: 'from datetime import date\nfrom pydantic import BaseModel, model_validator\n\nclass Booking(BaseModel):\n    start: date\n    end: date\n\n    @model_validator(mode="after")\n    def check_range(self):\n        if self.end < self.start:\n            raise ValueError("end must be on or after start")\n        return self\n\n# Used inside FastAPI body same as any BaseModel',
                output: '# Invalid range → ValueError → 422 via Pydantic'
            }
        ],
        takeaways: [
            'Nest <code>BaseModel</code> classes for structured arrays and objects',
            'Use <code>model_validator</code> when one field depends on another',
            'Validators raise <code>ValueError</code>—FastAPI turns them into 422 responses',
            'Split <code>OrderIn</code> vs <code>OrderOut</code> when internal fields differ',
            'Interview: complex validation at the edge keeps services dumb and testable'
        ],
        quiz: [
            { q: 'How do you model a JSON array of objects in Pydantic?', options: ['list[str] only', 'list[YourModel]', 'dict only', 'tuple only'], answer: 1, explain: 'Use `list[LineItem]` where `LineItem` is a `BaseModel`.' },
            { q: 'When prefer model_validator over field_validator?', options: ['Never', 'Rules involving multiple fields together', 'Only strings', 'Only async routes'], answer: 1, explain: 'Cross-field constraints (ranges, matching passwords) need the whole model.' },
            { q: 'What happens if a validator raises ValueError?', options: ['500 always', 'FastAPI responds with 422 and error details', 'Silent ignore', 'Retry'], answer: 1, explain: 'Pydantic validation errors become request validation failures—typically HTTP 422.' },
            { q: 'Why separate input and output models?', options: ['No reason', 'Hide secrets and internal IDs from public JSON', 'Required by TCP', 'Faster DNS'], answer: 1, explain: 'Response models exclude passwords and DB-only fields—critical API hygiene.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 4: RESPONSE HANDLING
   ============================================================ */
{
    id: 4, title: 'Response Handling', icon: '📤', color: '#14b8a6',
    description: 'Shape JSON with response_model, set status codes, and return HTML, files, or raw JSON.',
    topics: [
    {
        id: '4.1', title: 'Response Models', emoji: '🎁',
        analogy: {
            title: 'response_model Wraps Your Data for the Client',
            emoji: '🎀',
            desc: 'Inner box = your Python object. Outer gift wrap = what the client is allowed to see. Extra internal fields stay inside the wrapping paper.',
            type: 'wrap',
            inner: 'UserORM',
            label: 'response_model=UserPublic → only public fields in JSON'
        },
        theory: `<p><code>response_model=...</code> tells FastAPI how to serialize the return value. It can strip fields, convert types, and document the response schema.</p>
        <ul>
            <li>Use a dedicated public schema for listings vs detail views.</li>
            <li><code>response_model_exclude</code> / <code>exclude_unset</code> fine-tune output.</li>
            <li>Interview: never leak ORM internals—always an explicit response type when needed.</li>
        </ul>`,
        code: [
            {
                title: 'response_model Hides Internal Fields',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel, EmailStr\n\napp = FastAPI()\n\nclass UserInDb(BaseModel):\n    id: int\n    email: EmailStr\n    hashed_password: str\n\nclass UserPublic(BaseModel):\n    id: int\n    email: EmailStr\n\nfake = UserInDb(id=1, email="a@b.com", hashed_password="secret")\n\n@app.get("/users/me", response_model=UserPublic)\ndef me():\n    return fake  # password field dropped from JSON',
                output: '# GET /users/me → {"id":1,"email":"a@b.com"}'
            },
            {
                title: 'List Response Model',
                code: 'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    id: int\n    title: str\n\n@app.get("/items", response_model=list[Item])\ndef items():\n    return [{"id": 1, "title": "Milk", "cost": 0.5}]  # extra keys stripped if not in model',
                output: '# cost removed from output if not in Item (depends on model config)'
            }
        ],
        takeaways: [
            '<code>response_model</code> filters and documents outgoing data',
            'Return richer internal objects; FastAPI serializes to the public model',
            'Use <code>list[Model]</code> for array responses',
            'Combine with status codes for create/update semantics',
            'Interview question: "How do you avoid exposing internal fields?" → response models'
        ],
        quiz: [
            { q: 'What is the main purpose of response_model?', options: ['Parse query params', 'Validate and shape the serialized response', 'Connect to Redis', 'Compile TypeScript'], answer: 1, explain: 'It controls what the client receives and appears in OpenAPI as the response schema.' },
            { q: 'If your handler returns extra fields not in response_model, what happens?', options: ['500 error', 'They are usually omitted from JSON output', 'They replace the model', 'They go only to logs'], answer: 1, explain: 'FastAPI serializes through the response model—extra fields are dropped for that schema (unless configured otherwise).' },
            { q: 'Can response_model be a list of models?', options: ['No', 'Yes: response_model=list[Item]', 'Only tuples', 'Only strings'], answer: 1, explain: 'Annotate with `list[MyModel]` for array responses.' },
            { q: 'Why not return SQLAlchemy objects directly to clients?', options: ['They are too small', 'They may expose columns and lazy-load traps', 'They are not Python objects', 'OpenAPI forbids it'], answer: 1, explain: 'ORM instances carry DB details and relationships—map to Pydantic DTOs for stable APIs.' }
        ]
    },
    {
        id: '4.2', title: 'Status Codes', emoji: '🚦',
        analogy: {
            title: 'Status Codes Are Traffic Lights for Clients',
            emoji: '🚦',
            desc: 'Green: success (2xx). Yellow: you should look again (redirect/cache). Red: client mistake (4xx) or server pain (5xx). Machines (clients) decide next move from the color.',
            type: 'traffic',
            active: 'green',
            label: '2xx OK · 4xx client fix · 5xx server fix'
        },
        theory: `<p>Use <code>status_code=...</code> on decorators or <code>Response</code> objects. Common choices: 200 OK, 201 Created, 204 No Content, 404 Not Found, 401 Unauthorized.</p>
        <ul>
            <li>Raising <code>HTTPException</code> sets status and a JSON detail.</li>
            <li>Consistent codes make mobile apps and retries predictable.</li>
        </ul>`,
        code: [
            {
                title: 'Decorator status_code',
                code: 'from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Task(BaseModel):\n    title: str\n\nDB = {}\nnext_id = 1\n\n@app.post("/tasks", status_code=201)\ndef create_task(t: Task):\n    global next_id\n    DB[next_id] = t.model_dump()\n    next_id += 1\n    return {"id": next_id - 1}\n\n@app.get("/tasks/{task_id}")\ndef get_task(task_id: int):\n    if task_id not in DB:\n        raise HTTPException(status_code=404, detail="Task not found")\n    return DB[task_id]',
                output: '# POST → 201\n# Missing id → 404 with {"detail":"..."}'
            },
            {
                title: 'JSONResponse with Custom Code',
                code: 'from fastapi import FastAPI\nfrom fastapi.responses import JSONResponse\n\napp = FastAPI()\n\n@app.get("/teapot")\ndef teapot():\n    return JSONResponse(\n        status_code=418,\n        content={"msg": "I am a teapot", "rfc": "2324"},\n    )',
                output: '# 418 I\'m a teapot (joke code — shows custom status)'
            }
        ],
        takeaways: [
            'Set <code>status_code=201</code> on creates; 204 on delete-with-no-body patterns',
            '<code>HTTPException</code> is the idiomatic 4xx/5xx with <code>detail</code>',
            'Clients and proxies rely on codes—don\'t always use 200 for errors',
            '<code>JSONResponse</code> when you need headers + code + dict manually',
            'Interview: idempotent DELETE often returns 204 or 404 depending on API style'
        ],
        quiz: [
            { q: 'Which status is conventional after successfully creating a resource?', options: ['200 only', '201 Created', '302 Found', '418'], answer: 1, explain: '201 Created signals a new resource—very common REST practice.' },
            { q: 'How do you return 404 in FastAPI?', options: ['return None', 'raise HTTPException(status_code=404, ...)', 'status_code=404 on decorator only', 'print(404)'], answer: 1, explain: '`HTTPException` stops the handler and returns the status with JSON detail.' },
            { q: 'What is wrong with using HTTP 200 for every error with {error: true}?', options: ['Nothing', 'Caches and clients assume success; retries break', 'Faster', 'Required by REST'], answer: 1, explain: 'HTTP semantics matter—middleware, CDNs, and clients use real status codes.' },
            { q: 'What does JSONResponse let you set explicitly?', options: ['Only HTML', 'Status code, headers, and JSON body', 'Only cookies', 'Database URL'], answer: 1, explain: '`JSONResponse` wraps content with a specific status and media type.' }
        ]
    },
    {
        id: '4.3', title: 'Custom Responses', emoji: '🖨️',
        analogy: {
            title: 'Different Outputs, Same Factory Line',
            emoji: '🏭',
            desc: 'Sometimes the product is JSON; sometimes HTML for a preview; sometimes a file download. Same FastAPI app, different response class at the end of the line.',
            type: 'machine',
            input: 'Route handler',
            name: 'Response class',
            output: 'JSON / HTML / File'
        },
        theory: `<p>Beyond JSON, return <code>HTMLResponse</code>, <code>FileResponse</code>, <code>StreamingResponse</code>, or <code>PlainTextResponse</code>. Set <code>media_type</code> when needed.</p>
        <ul>
            <li>File responses stream from disk—good for exports and images.</li>
            <li>Use templates (Jinja2) for server-rendered HTML micro-pages.</li>
        </ul>`,
        code: [
            {
                title: 'HTMLResponse',
                code: 'from fastapi import FastAPI\nfrom fastapi.responses import HTMLResponse\n\napp = FastAPI()\n\n@app.get("/report", response_class=HTMLResponse)\ndef report():\n    return """\n    <html><body>\n      <h1>Soseeks — Daily API Health</h1>\n      <p>All systems nominal.</p>\n    </body></html>\n    """',
                output: '# Browser shows HTML; still a FastAPI route'
            },
            {
                title: 'FileResponse (download)',
                code: 'import tempfile\nfrom pathlib import Path\nfrom fastapi import FastAPI\nfrom fastapi.responses import FileResponse\n\napp = FastAPI()\n\n# Example: create temp file at startup for demo\n_tmp = Path(tempfile.gettempdir()) / "soseeks-demo.txt"\n_tmp.write_text("export,line1\\nexport,line2\\n", encoding="utf-8")\n\n@app.get("/export.csv")\ndef export_csv():\n    return FileResponse(\n        path=_tmp,\n        filename="orders.csv",\n        media_type="text/csv",\n    )',
                output: '# Triggers download with filename orders.csv'
            }
        ],
        takeaways: [
            '<code>response_class=HTMLResponse</code> sets Content-Type for HTML',
            '<code>FileResponse</code> streams files with proper headers',
            'Use <code>StreamingResponse</code> for large generated data',
            'JSON is default—explicit classes for other media types',
            'Interview: separate API JSON from occasional HTML admin pages'
        ],
        quiz: [
            { q: 'Which response class is suited for returning a .pdf download?', options: ['JSONResponse', 'FileResponse', 'RedirectResponse only', 'PlainTextResponse only'], answer: 1, explain: '`FileResponse` serves a file path with attachment-friendly headers.' },
            { q: 'What does response_class=HTMLResponse change?', options: ['Database dialect', 'Default Content-Type to HTML', 'JWT algorithm', 'SQL mode'], answer: 1, explain: 'It tells FastAPI the string body should be treated as HTML.' },
            { q: 'When might StreamingResponse beat building a huge string?', options: ['Never', 'Large exports or slow generation—memory and time', 'Only for images', 'Only GET'], answer: 1, explain: 'Stream chunks instead of holding the entire payload in RAM.' },
            { q: 'Can one app mix JSON routes and HTML routes?', options: ['No', 'Yes', 'Only with two frameworks', 'Only /docs'], answer: 1, explain: 'FastAPI is fine with multiple response types across routes.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 5: DEPENDENCY INJECTION
   ============================================================ */
{
    id: 5, title: 'Dependency Injection', icon: '🔌', color: '#f59e0b',
    description: 'Reusable Depends() hooks for DB sessions, auth, and shared setup/teardown.',
    topics: [
    {
        id: '5.1', title: 'What is Dependency Injection?', emoji: '🔌',
        analogy: {
            title: 'Plug In → Power Flows → Your Route Runs',
            emoji: '⚡',
            desc: 'You do not hard-wire the wall inside every lamp. You plug into an outlet (dependency). FastAPI\'s Depends() is the socket—swap implementations for tests or different environments.',
            type: 'machine',
            input: 'Depends(get_db)',
            name: 'FastAPI resolver',
            output: 'Session in your route'
        },
        theory: `<p><strong>Dependency injection</strong> means FastAPI calls your dependency functions before the route, injects their return values as parameters, and caches them per request when appropriate.</p>
        <ul>
            <li>Test win: override dependencies with fakes.</li>
            <li>Interview: contrasts with global singletons and manual wiring in views.</li>
        </ul>`,
        code: [
            {
                title: 'Simple Depends Function',
                code: 'from typing import Annotated\nfrom fastapi import Depends, FastAPI\n\napp = FastAPI()\n\ndef get_settings():\n    return {"app_name": "Soseeks API", "debug": True}\n\n@app.get("/info")\ndef info(settings: Annotated[dict, Depends(get_settings)]):\n    return settings',
                output: '# settings injected per request'
            },
            {
                title: 'Depends with Parameterized Dependency',
                code: 'from typing import Annotated\nfrom fastapi import Depends, FastAPI, Header, HTTPException\n\napp = FastAPI()\n\ndef verify_api_key(x_api_key: str | None = Header(default=None)):\n    if x_api_key != "soseeks-dev-key":\n        raise HTTPException(status_code=401, detail="Invalid API key")\n    return x_api_key\n\n@app.get("/private")\ndef private(_: Annotated[str, Depends(verify_api_key)]):\n    return {"secret": "interview-ready"}',
                output: '# Missing/wrong X-Api-Key → 401'
            }
        ],
        takeaways: [
            'Use <code>Annotated[Type, Depends(fn)]</code> for readable signatures',
            'Dependencies can themselves depend on other dependencies',
            'Raise <code>HTTPException</code> inside dependencies for auth failures',
            'Override in tests via <code>app.dependency_overrides</code>',
            'Interview: DI keeps routes thin and logic reusable'
        ],
        quiz: [
            { q: 'What does Depends() do?', options: ['Deletes cookies', 'Tells FastAPI to call another function and inject its result', 'Compiles models', 'Runs migrations'], answer: 1, explain: 'FastAPI resolves dependency callables before your path operation runs.' },
            { q: 'Why inject settings instead of importing a global config?', options: ['Globals are faster', 'Easier testing and explicit wiring', 'Required by JSON', 'Banned in Python'], answer: 1, explain: 'Overrides and explicit parameters make unit tests and multiple configs simpler.' },
            { q: 'Can dependencies raise HTTPException?', options: ['No', 'Yes—short-circuits the request', 'Only in middleware', 'Only 500'], answer: 1, explain: 'Dependencies are part of the request pipeline—401/403 are common.' },
            { q: 'What is dependency_overrides used for?', options: ['CSS themes', 'Replacing dependencies in tests', 'Changing emoji', 'Docker only'], answer: 1, explain: 'Tests swap real DB/auth deps with fakes via `app.dependency_overrides`.' }
        ]
    },
    {
        id: '5.2', title: 'Creating Dependencies', emoji: '⛓️',
        analogy: {
            title: 'Dependencies Chain Like Conveyor Stations',
            emoji: '📦',
            desc: 'A box might pass stamping, then weighing, then labeling. Each station is a Depends(). The route receives the final prepared context.',
            type: 'conveyor',
            items: ['parse JWT', 'load user', 'open DB session', 'handler'],
            consumed: 3
        },
        theory: `<p>Dependencies can be functions or callable classes. Class dependencies use <code>__call__</code> patterns for stateful services (with care).</p>
        <ul>
            <li>Keep dependencies fast or async-aware.</li>
            <li>Return plain objects—sessions, users, feature flags.</li>
        </ul>`,
        code: [
            {
                title: 'Callable Class Dependency',
                code: 'from typing import Annotated\nfrom fastapi import Depends, FastAPI\n\napp = FastAPI()\n\nclass Pagination:\n    def __init__(self, skip: int = 0, limit: int = 10):\n        self.skip = skip\n        self.limit = limit\n\n@app.get("/items")\ndef list_items(p: Annotated[Pagination, Depends()]):\n    return {"skip": p.skip, "limit": p.limit}',
                output: '# Query params skip & limit bound to Pagination'
            },
            {
                title: 'Dependency Using Another Dependency',
                code: 'from typing import Annotated\nfrom fastapi import Depends, FastAPI\n\napp = FastAPI()\n\ndef get_tenant_id() -> str:\n    return "acme"\n\ndef get_quota(tenant: Annotated[str, Depends(get_tenant_id)]) -> int:\n    return 1000 if tenant == "acme" else 100\n\n@app.get("/usage")\ndef usage(\n    tenant: Annotated[str, Depends(get_tenant_id)],\n    quota: Annotated[int, Depends(get_quota)],\n):\n    return {"tenant": tenant, "quota": quota}',
                output: '# get_quota receives tenant from get_tenant_id'
            }
        ],
        takeaways: [
            'Callable classes work with <code>Depends()</code> when FastAPI can construct them',
            'Chain dependencies by adding <code>Depends</code> parameters to dependency functions',
            'Good place to open per-request resources (before yield—next topic)',
            'Avoid heavy work in global module import—use lazy init inside deps',
            'Interview: DI graph should stay understandable—no hidden globals'
        ],
        quiz: [
            { q: 'Can a dependency function take other Depends parameters?', options: ['No', 'Yes', 'Only async', 'Only classes'], answer: 1, explain: 'Nested Depends form a dependency graph resolved per request.' },
            { q: 'What is a common use for class-based dependencies?', options: ['Replace Python', 'Bundle parameters with defaults (pagination, filters)', 'Compile C++', 'Render React'], answer: 1, explain: 'Classes group related query parameters or configurable services.' },
            { q: 'Are dependency return values shared automatically across one request?', options: ['Never', 'Same dependency callable is cached per request by default', 'Always global', 'Only on Sundays'], answer: 1, explain: 'FastAPI caches the result of a dependency for the lifetime of a single request.' },
            { q: 'Should business rules live only inside route functions?', options: ['Always yes', 'Often split: deps for cross-cutting, services for domain rules', 'Never split', 'Only in middleware'], answer: 1, explain: 'Interviewers like clear layering: transport (deps) vs domain services.' }
        ]
    },
    {
        id: '5.3', title: 'Sub-dependencies & Yield', emoji: '👨‍🍳',
        analogy: {
            title: 'Yield = Prep Before Service, Cleanup After',
            emoji: '🍳',
            desc: 'Chefs prep mise en place before service, cook during rush, then clean stations. A yield dependency opens the DB session before the route, yields it, then closes in finally.',
            type: 'chefs',
            chefs: [
                { emoji: '🔓', task: 'open DB session' },
                { emoji: '🍽️', task: 'run route logic' },
                { emoji: '🧹', task: 'close session / rollback' }
            ]
        },
        theory: `<p><code>yield</code> dependencies run code before and after the request. Code after <code>yield</code> executes during teardown—even if errors occur (combine with try/finally inside).</p>
        <ul>
            <li>Perfect for DB sessions and transactions.</li>
            <li>Interview: contrasts with WSGI teardown hooks; explicit and testable.</li>
        </ul>`,
        code: [
            {
                title: 'Yielding a Fake Session (Pattern)',
                code: 'from typing import Annotated, Generator\nfrom fastapi import Depends, FastAPI\n\napp = FastAPI()\n\nclass FakeSession:\n    def __init__(self):\n        self.closed = False\n    def close(self):\n        self.closed = True\n\ndef get_session() -> Generator[FakeSession, None, None]:\n    s = FakeSession()\n    try:\n        yield s\n    finally:\n        s.close()\n\n@app.get("/db-check")\ndef db_check(s: Annotated[FakeSession, Depends(get_session)]):\n    return {"session_open": not s.closed}',
                output: '# After response, close() runs'
            },
            {
                title: 'Sub-dependency Injects Session into Repository',
                code: 'from typing import Annotated, Generator\nfrom fastapi import Depends, FastAPI\n\napp = FastAPI()\n\nclass Session:\n    pass\n\ndef get_session() -> Generator[Session, None, None]:\n    s = Session()\n    try:\n        yield s\n    finally:\n        pass  # close real DB connection here\n\ndef get_repo(s: Annotated[Session, Depends(get_session)]):\n    return {"session_id": id(s)}\n\n@app.get("/repo")\ndef repo_info(r: Annotated[dict, Depends(get_repo)]):\n    return r',
                output: '# get_repo shares the same Session instance as the route would'
            }
        ],
        takeaways: [
            'Use <code>yield</code> in dependencies for setup/teardown',
            'Put <code>finally</code> inside the generator for guaranteed cleanup',
            'Teardown runs after the response is produced (be mindful of streaming)',
            'Same-session-per-request comes from Depends graph + cache',
            'Interview: SQLAlchemy session scope matches this pattern'
        ],
        quiz: [
            { q: 'When does code after yield in a dependency run?', options: ['Before the request', 'After the request finishes', 'Never', 'Only on 500'], answer: 1, explain: 'Teardown runs after the path operation completes—cleanup window.' },
            { q: 'Why use try/finally around yield?', options: ['Style only', 'Ensure cleanup even if errors occur', 'Required by JSON', 'Faster routing'], answer: 1, explain: 'Guarantees resources close even when exceptions propagate.' },
            { q: 'Can multiple parameters depend on the same session dependency?', options: ['No', 'Yes—they share one cached instance per request', 'Only async', 'Only classes'], answer: 1, explain: 'FastAPI resolves shared dependencies once per request.' },
            { q: 'Is yield dependency the same as middleware?', options: ['Identical', 'Related but scoped—deps attach to routes that declare them', 'Opposite', 'Only for files'], answer: 1, explain: 'Middleware wraps everything; dependencies are per-route composition.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 6: DATABASE WITH SQLALCHEMY
   ============================================================ */
{
    id: 6, title: 'Database with SQLAlchemy', icon: '🗄️', color: '#10b981',
    description: 'Engine, sessions, ORM models, CRUD patterns, and simple relationships.',
    topics: [
    {
        id: '6.1', title: 'SQLAlchemy Setup', emoji: '📓',
        analogy: {
            title: 'The Database Is a Diary with Indexed Pages',
            emoji: '📔',
            desc: 'The engine opens the diary binding, sessions turn one page at a time (transaction), and metadata remembers every table name like chapter titles.',
            type: 'diary',
            lines: 'CREATE TABLE users (...);<br>Session.begin() → work → commit/rollback<br>engine.dispose() when shutting down'
        },
        theory: `<p>SQLAlchemy 2.0 style uses <code>DeclarativeBase</code>, <code>mapped_column</code>, and typed <code>Mapped[]</code>. The engine manages connections; <code>sessionmaker</code> builds session factories.</p>
        <ul>
            <li>Use <code>sqlite:///./app.db</code> for local files; <code>:memory:</code> for tests.</li>
            <li>Interview: Session is not thread-safe—one session per request is standard.</li>
        </ul>`,
        code: [
            {
                title: 'Engine + SessionLocal + Base',
                code: '# pip install sqlalchemy\nfrom sqlalchemy import create_engine\nfrom sqlalchemy.orm import sessionmaker, DeclarativeBase\n\nclass Base(DeclarativeBase):\n    pass\n\nSQLALCHEMY_DATABASE_URL = "sqlite:///./soseeks.db"\nengine = create_engine(\n    SQLALCHEMY_DATABASE_URL,\n    connect_args={"check_same_thread": False},  # SQLite + FastAPI\n)\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\n\n# Call once at startup:\n# Base.metadata.create_all(bind=engine)',
                output: '# Engine + session factory ready for models'
            },
            {
                title: 'FastAPI Yield Dependency for Session',
                code: 'from typing import Annotated, Generator\nfrom fastapi import Depends, FastAPI\nfrom sqlalchemy.orm import Session\n\napp = FastAPI()\n# Assume SessionLocal exists from previous snippet\n\ndef get_db() -> Generator[Session, None, None]:\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\nDb = Annotated[Session, Depends(get_db)]\n\n@app.get("/db/ping")\ndef ping(db: Db):\n    return {"closed": False}  # use db.execute(...) in real routes',
                output: '# Each request gets one Session, closed after response'
            }
        ],
        takeaways: [
            'Create one <code>engine</code> and reuse; sessions are short-lived per request',
            'SQLite needs <code>check_same_thread: False</code> with async workers',
            '<code>create_all</code> is for dev—production uses Alembic migrations',
            'Always <code>close()</code> sessions—yield dependencies handle this',
            'Interview: explain why global sessions are dangerous under concurrency'
        ],
        quiz: [
            { q: 'What does SQLAlchemy sessionmaker produce?', options: ['A table', 'A factory that builds Session objects', 'Only raw SQL', 'Pydantic models'], answer: 1, explain: '`sessionmaker()` returns a callable that creates new `Session` instances bound to an engine.' },
            { q: 'Why pass check_same_thread=False for SQLite in FastAPI?', options: ['Security', 'SQLite default blocks cross-thread use; workers may differ', 'Faster JSON', 'Required by OpenAPI'], answer: 1, explain: 'FastAPI/Starlette may use thread pools; SQLite\'s default safety check must be relaxed for typical patterns.' },
            { q: 'Where should create_all usually NOT be the only migration strategy?', options: ['Production', 'Unit tests', 'Notebooks', 'REPL'], answer: 0, explain: 'Production needs versioned migrations (Alembic) instead of implicit create_all only.' },
            { q: 'What is the main role of the Engine?', options: ['Render HTML', 'Connection pool and dialect interface to the DB', 'JWT signing', 'Parse query strings'], answer: 1, explain: 'The engine knows how to talk to your database backend and hands connections to sessions.' }
        ]
    },
    {
        id: '6.2', title: 'Models & CRUD', emoji: '📐',
        analogy: {
            title: 'ORM Model = Blueprint of a Table Row',
            emoji: '📋',
            desc: 'The blueprint lists columns (props) and behaviors (methods). Each row in SQL is an instance built from that blueprint.',
            type: 'blueprint',
            className: 'User',
            objects: ['row id=1', 'row id=2']
        },
        theory: `<p>Map tables with classes inheriting <code>Base</code>. CRUD in services or route handlers: add to session, commit, refresh for generated keys.</p>
        <ul>
            <li>Use <code>db.get(Model, id)</code> for primary key lookup.</li>
            <li>Interview: keep fat logic out of models or routes—service layer in between.</li>
        </ul>`,
        code: [
            {
                title: 'Model Definition',
                code: 'from sqlalchemy import Integer, String\nfrom sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase\n\nclass Base(DeclarativeBase):\n    pass\n\nclass User(Base):\n    __tablename__ = "users"\n    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)\n    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)\n    full_name: Mapped[str] = mapped_column(String(255))',
                output: '# Maps to CREATE TABLE users (...)'
            },
            {
                title: 'CRUD in a Route (Runnable SQLite Memory)',
                code: 'from fastapi import Depends, FastAPI\nfrom pydantic import BaseModel, EmailStr\nfrom sqlalchemy import Integer, String, create_engine\nfrom sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column, sessionmaker\n\nclass Base(DeclarativeBase):\n    pass\n\nclass User(Base):\n    __tablename__ = "users"\n    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)\n    email: Mapped[str] = mapped_column(String(255), unique=True)\n    full_name: Mapped[str] = mapped_column(String(255))\n\nengine = create_engine("sqlite:///:memory:", connect_args={"check_same_thread": False})\nBase.metadata.create_all(bind=engine)\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\napp = FastAPI()\n\nclass UserCreate(BaseModel):\n    email: EmailStr\n    full_name: str\n\n@app.post("/users")\ndef create_user(payload: UserCreate, db: Session = Depends(get_db)):\n    u = User(email=payload.email, full_name=payload.full_name)\n    db.add(u)\n    db.commit()\n    db.refresh(u)\n    return {"id": u.id, "email": u.email, "full_name": u.full_name}',
                output: '# New row persisted; id assigned after refresh'
            }
        ],
        takeaways: [
            'Use Pydantic schemas for input; ORM models for persistence',
            '<code>db.add</code> + <code>commit</code> persists; <code>rollback</code> on errors',
            '<code>refresh</code> loads DB defaults (e.g., autoincrement id)',
            'Unique constraints surface as IntegrityError—map to HTTP 409 in real apps',
            'Interview: idempotent creates often need upsert patterns or natural keys'
        ],
        quiz: [
            { q: 'Which method persists pending changes in SQLAlchemy 2.0 style?', options: ['db.flush()', 'db.commit()', 'db.refresh()', 'db.rollback()'], answer: 1, explain: '`commit()` ends the transaction and writes changes; flush sends SQL but stays in transaction.' },
            { q: 'Why refresh after commit for a new row?', options: ['Delete row', 'Load server-generated values like autoincrement id', 'Clear cookies', 'Compile OpenAPI'], answer: 1, explain: 'Python object may not have DB-assigned fields until refreshed.' },
            { q: 'What is a common pattern for API input vs DB model?', options: ['Same class always', 'Pydantic DTO in, ORM model internal', 'Only dicts', 'Only XML'], answer: 1, explain: 'DTOs validate transport; ORM maps storage—keeps layers clean.' },
            { q: 'What does db.get(User, 5) do?', options: ['Deletes user 5', 'Fetch by primary key 5', 'Runs raw SQL only', 'Creates user 5'], answer: 1, explain: '`get()` is a convenient PK lookup in SQLAlchemy 2.0 sessions.' }
        ]
    },
    {
        id: '6.3', title: 'Relationships', emoji: '🚃',
        analogy: {
            title: 'Foreign Keys Link Cars Like a Train',
            emoji: '🚆',
            desc: 'Order car hooks to Customer car via coupling (foreign key). ORM relationship() lets you walk from one car to the next in Python without manual JOIN boilerplate every time.',
            type: 'train',
            items: ['Customer', 'orders FK', 'Order', 'line_items FK', 'LineItem']
        },
        theory: `<p>Use <code>relationship()</code> and <code>ForeignKey</code> for one-to-many and many-to-one. Use <code>selectinload</code> or <code>joinedload</code> to avoid N+1 queries.</p>
        <ul>
            <li>Interview: always mention lazy loading vs eager loading trade-offs.</li>
        </ul>`,
        code: [
            {
                title: 'One-to-Many Models',
                code: 'from sqlalchemy import Float, ForeignKey, Integer, String\nfrom sqlalchemy.orm import Mapped, mapped_column, relationship, DeclarativeBase\n\nclass Base(DeclarativeBase):\n    pass\n\nclass Customer(Base):\n    __tablename__ = "customers"\n    id: Mapped[int] = mapped_column(Integer, primary_key=True)\n    name: Mapped[str] = mapped_column(String(120))\n    orders: Mapped[list["Order"]] = relationship(back_populates="customer")\n\nclass Order(Base):\n    __tablename__ = "orders"\n    id: Mapped[int] = mapped_column(Integer, primary_key=True)\n    customer_id: Mapped[int] = mapped_column(ForeignKey("customers.id"))\n    total: Mapped[float] = mapped_column(Float, default=0.0)\n    customer: Mapped[Customer] = relationship(back_populates="orders")',
                output: '# Customer.orders ↔ Order.customer bidirectional'
            },
            {
                title: 'Query with selectinload (Pattern)',
                code: 'from sqlalchemy import select\nfrom sqlalchemy.orm import Session, selectinload\n\n# def list_customers_with_orders(db: Session):\n#     stmt = (\n#         select(Customer)\n#         .options(selectinload(Customer.orders))\n#         .where(Customer.id == 1)\n#     )\n#     return db.scalars(stmt).first()\n\n# Preloads orders in fewer queries — mention in interviews',
                output: '# Avoids N+1 when accessing customer.orders in a loop'
            }
        ],
        takeaways: [
            '<code>ForeignKey</code> enforces DB-level link; <code>relationship</code> is Python navigation',
            '<code>back_populates</code> keeps both sides in sync',
            'Watch N+1: use <code>selectinload</code> / <code>joinedload</code> when listing related data',
            'Cascade rules (<code>cascade="all, delete-orphan"</code>) need care—interview topic',
            'Many-to-many uses association table + two relationships'
        ],
        quiz: [
            { q: 'What problem does selectinload address?', options: ['JWT expiry', 'N+1 query problem when accessing relationships', 'CORS', 'File upload size'], answer: 1, explain: 'Eager loading fetches related rows efficiently instead of one query per parent.' },
            { q: 'What does ForeignKey("customers.id") declare?', options: ['HTTP redirect', 'This column references customers.id', 'A Python import', 'A Pydantic alias'], answer: 1, explain: 'Database foreign key constraint + ORM join hint.' },
            { q: 'What is back_populates for?', options: ['HTTP caching', 'Links two relationship attributes on both models', 'OpenAPI tags', 'bcrypt rounds'], answer: 1, explain: 'Keeps in-memory relationship graph consistent on both sides.' },
            { q: 'N+1 means?', options: ['One query total', 'One query for parents plus one per child row (bad at scale)', 'No queries', 'Only NoSQL'], answer: 1, explain: 'Classic ORM pitfall: looping relations triggers many extra SELECTs.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 7: AUTHENTICATION & SECURITY
   ============================================================ */
{
    id: 7, title: 'Authentication & Security', icon: '🔐', color: '#ef4444',
    description: 'OAuth2 password flow pattern, JWT access tokens, password hashing, and simple roles.',
    topics: [
    {
        id: '7.1', title: 'OAuth2 & JWT', emoji: '🎫',
        analogy: {
            title: 'JWT Is a Stamped Pass at the Door',
            emoji: '🎟️',
            desc: 'Login proves identity once; the issuer stamps a signed token. Guards at each route check the stamp (signature + expiry) instead of asking for your password again.',
            type: 'stamps',
            items: [
                { val: 'sign with secret', dup: false },
                { val: 'exp claim', dup: false },
                { val: 'sub=user id', dup: false },
                { val: 'tampered sig', dup: true }
            ]
        },
        theory: `<p>FastAPI\'s <code>OAuth2PasswordBearer</code> extracts <code>Authorization: Bearer &lt;token&gt;</code>. You verify JWT (signature + exp) and load the user.</p>
        <ul>
            <li>Store secrets in environment variables—never in git.</li>
            <li>Interview: refresh tokens vs access tokens; HTTPS only in production.</li>
        </ul>`,
        code: [
            {
                title: 'OAuth2PasswordBearer Dependency',
                code: '# pip install python-jose passlib bcrypt python-multipart\nfrom typing import Annotated\nfrom fastapi import Depends, FastAPI, HTTPException, status\nfrom fastapi.security import OAuth2PasswordBearer\n\napp = FastAPI()\noauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")\n\nasync def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):\n    if token != "fake-access-token":\n        raise HTTPException(\n            status_code=status.HTTP_401_UNAUTHORIZED,\n            detail="Invalid authentication credentials",\n        )\n    return {"username": "learner", "sub": "user-1"}\n\n@app.get("/me")\nasync def read_me(user: Annotated[dict, Depends(get_current_user)]):\n    return user',
                output: '# Swagger "Authorize" sends Bearer token\n# Wrong/missing token → 401'
            },
            {
                title: 'Create Access Token (python-jose pattern)',
                code: 'from datetime import datetime, timedelta, timezone\nfrom jose import jwt\n\nSECRET_KEY = "change-me-in-env"\nALGORITHM = "HS256"\nACCESS_TOKEN_EXPIRE_MINUTES = 30\n\ndef create_access_token(subject: str) -> str:\n    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)\n    to_encode = {"sub": subject, "exp": expire}\n    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\n\n# pip install "python-jose[cryptography]"\n# Verify in dependency with jwt.decode(..., SECRET_KEY, algorithms=[ALGORITHM])',
                output: '# Returns compact JWT string for Authorization header'
            }
        ],
        takeaways: [
            '<code>OAuth2PasswordBearer</code> does not implement login—only reads Bearer tokens',
            'Real apps expose <code>POST /token</code> returning access_token JSON',
            'JWT payload is base64-decodable—never put secrets inside, only claims',
            'Always validate <code>exp</code> and signature before trusting <code>sub</code>',
            'Interview: symmetric HS256 vs asymmetric RS256 for microservices'
        ],
        quiz: [
            { q: 'What header carries a Bearer JWT?', options: ['Cookie: jwt=', 'Authorization: Bearer ...', 'X-Body-Token', 'Query token='], answer: 1, explain: 'OAuth2 bearer tokens are sent in the Authorization header.' },
            { q: 'Why set exp on JWT?', options: ['Smaller JSON', 'Limit damage if token leaks', 'Required by HTML', 'Faster bcrypt'], answer: 1, explain: 'Short-lived access tokens reduce the window attackers can reuse a stolen token.' },
            { q: 'What does OAuth2PasswordBearer tokenUrl describe?', options: ['Static file folder', 'Where clients fetch tokens (docs/metadata)', 'Database URL', 'CORS origin'], answer: 1, explain: 'OpenAPI uses it to document the OAuth2 password flow token endpoint.' },
            { q: 'Is a JWT payload encrypted by default?', options: ['Yes', 'No—signed, not encrypted; don\'t put secrets in claims', 'Only in dev', 'Only with HTTPS'], answer: 1, explain: 'Standard JWT is signed for integrity; confidentiality needs JWE or TLS + careful design.' }
        ]
    },
    {
        id: '7.2', title: 'Password Hashing', emoji: '🔒',
        analogy: {
            title: 'Traffic Light: Never Store Green Plaintext Passwords',
            emoji: '🚦',
            desc: 'Red = never store raw passwords. Yellow = use slow adaptive hash. Green = compare with verify, constant time.',
            type: 'traffic',
            active: 'yellow',
            label: 'bcrypt / Argon2 — slow on purpose to resist guessing'
        },
        theory: `<p>Use slow password hashing (bcrypt, Argon2). <code>passlib</code> with <code>CryptContext</code> is common in tutorials; verify with <code>verify()</code>, never == compare.</p>
        <ul>
            <li>Interview: salt is embedded in modern hashes—no DIY concatenation.</li>
        </ul>`,
        code: [
            {
                title: 'Hash and Verify with passlib',
                code: 'from passlib.context import CryptContext\n\npwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")\n\ndef hash_password(plain: str) -> str:\n    return pwd_context.hash(plain)\n\ndef verify_password(plain: str, hashed: str) -> bool:\n    return pwd_context.verify(plain, hashed)\n\nh = hash_password("Soseeks!2026")\nassert verify_password("Soseeks!2026", h) is True\nassert verify_password("wrong", h) is False',
                output: '# pip install passlib[bcrypt]\n# Store `h` in DB; never store plain text'
            },
            {
                title: 'Fake User Table + authenticate_user (Runnable)',
                code: 'from passlib.context import CryptContext\n\npwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")\n\ndef hash_password(plain: str) -> str:\n    return pwd_context.hash(plain)\n\ndef verify_password(plain: str, hashed: str) -> bool:\n    return pwd_context.verify(plain, hashed)\n\nfake_users_db = {\n    "alice": {\n        "username": "alice",\n        "hashed_password": hash_password("secret"),\n    }\n}\n\ndef authenticate_user(username: str, password: str):\n    user = fake_users_db.get(username)\n    if not user or not verify_password(password, user["hashed_password"]):\n        return None\n    return user\n\nassert authenticate_user("alice", "secret") is not None\nassert authenticate_user("alice", "wrong") is None',
                output: '# On failed login → 401; on success → issue JWT in /token route'
            }
        ],
        takeaways: [
            'Never log or return password fields',
            'Use established libraries—don\'t invent crypto',
            'Tune bcrypt rounds / Argon2 params as hardware improves',
            'Rate-limit login endpoints against brute force',
            'Interview: explain why fast hashes like SHA-256 alone are wrong for passwords'
        ],
        quiz: [
            { q: 'Why bcrypt for passwords instead of SHA-256 alone?', options: ['Shorter strings', 'Intentionally slow + salted per password', 'Required by FastAPI', 'Works without pip'], answer: 1, explain: 'Password hashes must resist brute force; bcrypt is adaptive and includes salt.' },
            { q: 'How should you compare a login password to stored hash?', options: ['plain == hash', 'verify() from password library', 'encode both base64', 'zip files'], answer: 1, explain: 'Timing-safe verify handles salt and algorithm version embedded in the hash.' },
            { q: 'Where should SECRET_KEY for JWT live?', options: ['GitHub README', 'Environment variable / secret manager', 'Client localStorage only', 'Inside JWT payload'], answer: 1, explain: 'Secrets belong in env or vaults—never committed to source control.' },
            { q: 'What HTTP code fits wrong credentials on login?', options: ['200', '401 Unauthorized', '301', '500'], answer: 1, explain: '401 tells the client authentication failed; avoid revealing whether username exists.' }
        ]
    },
    {
        id: '7.3', title: 'Role-Based Access', emoji: '👨‍🍳',
        analogy: {
            title: 'Kitchen Hierarchy — Roles Decide Who Touches the Grill',
            emoji: '👩‍🍳',
            desc: 'Line cook, sous-chef, head chef—each role unlocks different stations. Same in APIs: admin vs user claims gate dangerous routes.',
            type: 'chefs',
            chefs: [
                { emoji: '🥗', task: 'role=student — read courses' },
                { emoji: '👨‍🍳', task: 'role=instructor — mutate content' },
                { emoji: '⭐', task: 'role=admin — billing & users' }
            ]
        },
        theory: `<p>Put roles in JWT claims or load from DB after user id. Build dependencies like <code>require_role("admin")</code> that wrap user loading.</p>
        <ul>
            <li>Principle of least privilege—default deny.</li>
            <li>Interview: never trust client-sent role without server verification.</li>
        </ul>`,
        code: [
            {
                title: 'Role Check via Header (Demo, Runnable)',
                code: 'from typing import Annotated\nfrom fastapi import Depends, FastAPI, Header, HTTPException, status\n\napp = FastAPI()\n\ndef get_current_user(x_mock_role: str = Header(default="user")):\n    """Real apps decode JWT; we mock role from a header for learning."""\n    return {"username": "learner", "role": x_mock_role}\n\ndef require_admin(user: Annotated[dict, Depends(get_current_user)]):\n    if user.get("role") != "admin":\n        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient role")\n    return user\n\n@app.get("/admin/stats")\ndef admin_stats(_: Annotated[dict, Depends(require_admin)]):\n    return {"sales": 12345}\n\n# curl -H "X-Mock-Role: admin" http://127.0.0.1:8000/admin/stats',
                output: '# 403 without admin role header; 200 with X-Mock-Role: admin'
            },
            {
                title: 'Cleaner Pattern Sketch',
                code: 'from typing import Annotated\nfrom fastapi import Depends\n\n# async def get_current_user(token: str = Depends(oauth2_scheme)) -> User:\n#     payload = decode_jwt(token)\n#     return load_user(payload["sub"])\n#\n# def require_admin(user: User = Depends(get_current_user)):\n#     if user.role != "admin":\n#         raise HTTPException(403, ...)\n#     return user\n#\n# @app.get("/admin", dependencies=[Depends(require_admin)])\n# def panel(): ...',
                output: '# Interview: centralize decode + one User object'
            }
        ],
        takeaways: [
            '403 Forbidden = authenticated but not allowed; 401 = not authenticated',
            'Encode roles in JWT only if you accept stale role until expiry—or re-query DB',
            'Use dependencies or a small ACL module—avoid scattered if-role checks',
            'Audit sensitive actions (who changed billing?)',
            'Interview: RBAC vs ABAC (attribute-based) trade-offs'
        ],
        quiz: [
            { q: '401 vs 403 in APIs?', options: ['Same', '401 not authenticated, 403 authenticated but not allowed', '403 never used', '401 only for SQL'], answer: 1, explain: '401 = missing/invalid auth. 403 = valid auth but insufficient permissions.' },
            { q: 'Should clients be trusted to send their role in a JSON field only?', options: ['Yes', 'No—verify against DB or signed claims', 'Only admins', 'Only GET'], answer: 1, explain: 'Anyone can craft HTTP; server must validate role from trusted source.' },
            { q: 'Where do OAuth2 scopes often appear?', options: ['Only CSS', 'Token claims / authorization server metadata', 'Dockerfile', 'robots.txt'], answer: 1, explain: 'Scopes limit what a token can do—common in OAuth2/OIDC systems.' },
            { q: 'Why rate-limit login routes?', options: ['Faster JWT', 'Reduce brute-force password guessing', 'Improve SEO', 'Required by JSON'], answer: 1, explain: 'Attackers try many passwords; throttling and lockouts mitigate that.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 8: MIDDLEWARE & CORS
   ============================================================ */
{
    id: 8, title: 'Middleware & CORS', icon: '🛡️', color: '#6366f1',
    description: 'Request/response hooks, browser CORS rules, and centralized exception handling.',
    topics: [
    {
        id: '8.1', title: 'Middleware Basics', emoji: '📦',
        analogy: {
            title: 'Middleware Stations on a Conveyor Belt',
            emoji: '🏭',
            desc: 'Each box passes stations: logging, gzip, auth trace. Request goes in one end, response comes back through the same line.',
            type: 'conveyor',
            items: ['request in', 'log', 'add request id', 'route', 'log response'],
            consumed: 2
        },
        theory: `<p><code>@app.middleware("http")</code> wraps every request. Call <code>await call_next(request)</code> to continue the chain.</p>
        <ul>
            <li>Order matters—first added runs first on request, last on response (onion model).</li>
            <li>Interview: middleware vs dependencies—global vs per-route.</li>
        </ul>`,
        code: [
            {
                title: 'HTTP Middleware with Timer',
                code: 'import time\nfrom fastapi import FastAPI, Request\n\napp = FastAPI()\n\n@app.middleware("http")\nasync def add_timing_header(request: Request, call_next):\n    start = time.perf_counter()\n    response = await call_next(request)\n    duration_ms = (time.perf_counter() - start) * 1000\n    response.headers["X-Process-Time-Ms"] = f"{duration_ms:.2f}"\n    return response',
                output: '# Every response gets X-Process-Time-Ms'
            },
            {
                title: 'Request ID (Pattern)',
                code: 'import uuid\nfrom fastapi import FastAPI, Request\n\napp = FastAPI()\n\n@app.middleware("http")\nasync def request_id_mw(request: Request, call_next):\n    rid = request.headers.get("X-Request-ID") or str(uuid.uuid4())\n    request.state.request_id = rid\n    response = await call_next(request)\n    response.headers["X-Request-ID"] = rid\n    return response',
                output: '# Correlation id for logs across services'
            }
        ],
        takeaways: [
            'Middleware is async-friendly—use <code>await call_next</code>',
            'Attach per-request data on <code>request.state</code>',
            'Add security headers in middleware in production (CSP, HSTS via reverse proxy)',
            'Too much logic in middleware hurts testability—keep it thin',
            'Interview: Starlette middleware stack underpins FastAPI'
        ],
        quiz: [
            { q: 'What must you call inside HTTP middleware to reach the route?', options: ['return 404', 'await call_next(request)', 'db.commit()', 'jwt.encode'], answer: 1, explain: '`call_next` continues the chain; skipping it would never hit your path operations.' },
            { q: 'Where can middleware attach per-request data?', options: ['request.state', 'global list only', 'JWT only', 'CSS variables'], answer: 0, explain: '`request.state` is the idiomatic bag for request-scoped values.' },
            { q: 'Middleware runs for which routes?', options: ['Only /docs', 'Typically all HTTP requests through the app', 'Only WebSocket', 'Only POST'], answer: 1, explain: 'HTTP middleware wraps the whole app unless excluded at mount level.' },
            { q: 'Why keep middleware thin?', options: ['Thick is faster', 'Easier testing and clearer separation vs domain logic', 'OpenAPI requires it', 'SQLite needs it'], answer: 1, explain: 'Heavy business rules belong in services; middleware handles cross-cutting concerns.' }
        ]
    },
    {
        id: '8.2', title: 'CORS Configuration', emoji: '🥅',
        analogy: {
            title: 'CORS Is a Net Between Browser and API',
            emoji: '🌐',
            desc: 'Browsers block random sites from calling your API unless you explicitly allow origins and methods. Like a net: wrong origin gets caught; allowed ones pass.',
            type: 'net'
        },
        theory: `<p>Add <code>CORSMiddleware</code> with explicit <code>allow_origins</code> in production (avoid <code>["*"]</code> with credentials).</p>
        <ul>
            <li>Preflight <code>OPTIONS</code> requests happen for non-simple requests.</li>
            <li>Interview: CORS is a browser feature—curl/Postman ignore it.</li>
        </ul>`,
        code: [
            {
                title: 'CORSMiddleware Setup',
                code: 'from fastapi import FastAPI\nfrom fastapi.middleware.cors import CORSMiddleware\n\napp = FastAPI()\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["http://localhost:3000", "https://app.soseeks.example"],\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)',
                output: '# Dev SPA on :3000 can call API with cookies if configured'
            },
            {
                title: 'Wildcards vs Credentials',
                code: '# Interview trap: allow_origins=["*"] + allow_credentials=True is invalid combo\n# Browsers reject it — list explicit origins when using cookies\n\n# For public read-only JSON from any site:\n# allow_origins=["*"], allow_credentials=False',
                output: '# Know this pairing for interviews'
            }
        ],
        takeaways: [
            'CORS protects users browsing malicious sites—it is not server-side auth',
            'Never disable CORS by returning * everywhere in production blindly',
            'Explicit <code>allow_origins</code> when using cookies / Authorization',
            'Expose custom headers with <code>expose_headers</code> when needed',
            'Server-to-server calls (same DC) typically do not hit browser CORS'
        ],
        quiz: [
            { q: 'Does Postman enforce CORS?', options: ['Yes', 'No—CORS is enforced by browsers', 'Only GET', 'Only JWT'], answer: 1, explain: 'CORS is a browser security mechanism; CLI tools are not subject to it.' },
            { q: 'What is an OPTIONS preflight?', options: ['Database migration', 'Browser checks if cross-origin request is allowed', 'JWT refresh only', 'Docker build'], answer: 1, explain: 'Non-simple requests trigger OPTIONS before the real method.' },
            { q: 'Why avoid * origins with credentials?', options: ['Faster', 'Browser security rules forbid that combination', 'Required by SQL', 'OpenAPI'], answer: 1, explain: 'Credential mode requires explicit trusted origins.' },
            { q: 'Which middleware adds Access-Control-* headers?', options: ['GZipMiddleware only', 'CORSMiddleware', 'HTTPSRedirectMiddleware only', 'SessionMiddleware only'], answer: 1, explain: 'Starlette\'s CORSMiddleware emits the CORS response headers.' }
        ]
    },
    {
        id: '8.3', title: 'Custom Middleware & Exception Handlers', emoji: '🧑‍💼',
        analogy: {
            title: 'Waiter Notices Spills Before Guests Do',
            emoji: '🍽️',
            desc: 'A good waiter spots a dropped glass, replaces it, and apologizes—without shutting the restaurant. Exception handlers convert errors into clean JSON for clients.',
            type: 'waiter'
        },
        theory: `<p>Use <code>@app.exception_handler</code> for consistent JSON on domain errors. Combine with logging middleware for observability.</p>
        <ul>
            <li>Return <code>JSONResponse</code> with stable error codes for mobile apps.</li>
        </ul>`,
        code: [
            {
                title: 'HTTPException Still Default',
                code: 'from fastapi import FastAPI, HTTPException\n\napp = FastAPI()\n\nclass DomainError(Exception):\n    pass\n\n@app.exception_handler(DomainError)\nasync def domain_error_handler(request, exc: DomainError):\n    from fastapi.responses import JSONResponse\n    return JSONResponse(status_code=409, content={"code": "domain_conflict", "message": str(exc)})\n\n@app.post("/reserve")\nasync def reserve():\n    raise DomainError("Seat already taken")',
                output: '# 409 with stable machine-readable body'
            },
            {
                title: 'Validation Error Customization (hook idea)',
                code: '# from fastapi.exceptions import RequestValidationError\n# @app.exception_handler(RequestValidationError)\n# async def validation_handler(request, exc):\n#     return JSONResponse(422, {"errors": exc.errors()})\n\n# Interview: unify error shape for mobile clients',
                output: '# Optional: wrap Pydantic validation errors'
            }
        ],
        takeaways: [
            'Custom exception handlers keep responses consistent',
            'Log server errors with request id; return generic message to clients',
            'Do not leak stack traces in production JSON',
            'HTTPException is built-in; domain exceptions need handlers',
            'Interview: 500 vs 4xx—unexpected bugs vs expected failures'
        ],
        quiz: [
            { q: 'What decorator registers a custom exception handler?', options: ['@app.get', '@app.exception_handler', '@app.on_event', '@app.route'], answer: 1, explain: '`@app.exception_handler(MyError)` maps exceptions to responses.' },
            { q: 'Should production responses include Python tracebacks?', options: ['Yes always', 'No—log server-side, return safe message', 'Only XML', 'Only 404'], answer: 1, explain: 'Tracebacks leak internals; use logging/monitoring instead.' },
            { q: 'What status fits "seat already booked" business rule?', options: ['500', '409 Conflict or 422 depending on API design', '301', '200'], answer: 1, explain: '409 signals resource state conflict—common for bookings and duplicates.' },
            { q: 'Middleware vs exception handler?', options: ['Same', 'Middleware wraps all requests; handlers map specific exception types', 'Only WS', 'Only SQL'], answer: 1, explain: 'Middleware is broader; handlers target typed errors after they bubble.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 9: BACKGROUND TASKS & WEBSOCKETS
   ============================================================ */
{
    id: 9, title: 'Background Tasks & WebSockets', icon: '⚡', color: '#8b5cf6',
    description: 'Defer work after responses, handle uploads, and push live updates over WebSockets.',
    topics: [
    {
        id: '9.1', title: 'Background Tasks', emoji: '👨‍🍳',
        analogy: {
            title: 'Kitchen Prep While Plates Go Out',
            emoji: '🍳',
            desc: 'The waiter serves the table immediately; the kitchen keeps prepping sauces in the back. BackgroundTasks runs after you return a response—good for email, logs, fan-out.',
            type: 'chefs',
            chefs: [
                { emoji: '🍽️', task: 'return HTTP 202 + body' },
                { emoji: '📧', task: 'background: send email' },
                { emoji: '📊', task: 'background: write audit log' }
            ]
        },
        theory: `<p><code>BackgroundTasks</code> schedules callables to run after the response is sent. Not for heavy CPU work—use a task queue (Celery, RQ, ARQ) for that.</p>
        <ul>
            <li>Interview: tasks share the same event loop—keep them quick.</li>
        </ul>`,
        code: [
            {
                title: 'BackgroundTasks Parameter',
                code: 'from fastapi import BackgroundTasks, FastAPI\n\napp = FastAPI()\n\ndef write_log(message: str):\n    with open("bg.log", "a", encoding="utf-8") as f:\n        f.write(message + "\\n")\n\n@app.post("/signup")\nasync def signup(email: str, bg: BackgroundTasks):\n    bg.add_task(write_log, f"signup {email}")\n    return {"status": "ok", "email": email}',
                output: '# Response returns; log write happens after'
            },
            {
                title: 'When Not to Use BackgroundTasks',
                code: '# Heavy video transcoding → job queue + worker\n# Need retries / visibility → Celery / cloud tasks\n# Need exactly-once guarantees → transactional outbox pattern\n\n# Interview: BackgroundTasks is lightweight, in-process convenience',
                output: '# Know limits for system design answers'
            }
        ],
        takeaways: [
            'BackgroundTasks runs after response—user sees fast ACK',
            'Not a distributed queue—dies if process dies mid-task',
            'Pass kwargs via add_task(fn, *args, **kwargs)',
            'For email, webhooks, analytics—great fit',
            'Interview: compare with Celery/Redis queues for scale'
        ],
        quiz: [
            { q: 'When do BackgroundTasks run?', options: ['Before route starts', 'After the response is sent', 'Never', 'Only on WebSocket'], answer: 1, explain: 'FastAPI schedules them post-response in the same process.' },
            { q: 'Is BackgroundTasks suitable for 10-minute video encoding?', options: ['Yes always', 'No—use a worker queue', 'Only GET', 'Only SQLite'], answer: 1, explain: 'Long jobs need durable queues, retries, and separate workers.' },
            { q: 'What happens if the server crashes during a background task?', options: ['Task always completes', 'Task may be lost—no durability guarantee', 'Browser retries', 'JWT refreshes'], answer: 1, explain: 'In-process tasks are not persisted—design for at-least-once elsewhere if needed.' },
            { q: 'add_task signature idea?', options: ['add_task only strings', 'add_task(callable, *args, **kwargs)', 'add_task(sql)', 'add_task(html)'], answer: 1, explain: 'You pass the function plus positional args for the callable.' }
        ]
    },
    {
        id: '9.2', title: 'File Upload', emoji: '📮',
        analogy: {
            title: 'UploadFile Is a Sealed Parcel Inspected at the Door',
            emoji: '📦',
            desc: 'The client ships multipart data; FastAPI streams it to temp storage. You choose whether to read chunks, save to disk, or push to object storage.',
            type: 'envelope',
            content: 'multipart/form-data · filename · content-type'
        },
        theory: `<p>Use <code>UploadFile</code> for large files—spooled to disk over a threshold. <code>File()</code> loads into memory—OK for tiny uploads.</p>
        <ul>
            <li>Validate extensions and size—never trust filenames.</li>
            <li>Interview: virus scan and content inspection in real systems.</li>
        </ul>`,
        code: [
            {
                title: 'UploadFile Save to Disk',
                code: '# pip install python-multipart\nfrom pathlib import Path\nfrom fastapi import FastAPI, File, UploadFile\n\napp = FastAPI()\nUPLOAD_DIR = Path("uploads")\nUPLOAD_DIR.mkdir(exist_ok=True)\n\n@app.post("/upload")\nasync def upload(file: UploadFile = File(...)):\n    dest = UPLOAD_DIR / file.filename.replace("/", "_")\n    with dest.open("wb") as out:\n        while chunk := await file.read(1024 * 1024):\n            out.write(chunk)\n    return {"saved_as": dest.name, "content_type": file.content_type}',
                output: '# Streams 1 MiB chunks—good for larger files'
            },
            {
                title: 'Multiple Files',
                code: 'from fastapi import FastAPI, File, UploadFile\n\napp = FastAPI()\n\n@app.post("/bulk")\nasync def bulk(files: list[UploadFile] = File(...)):\n    names = [f.filename for f in files]\n    return {"count": len(names), "names": names}',
                output: '# Client sends multiple parts with same field name pattern'
            }
        ],
        takeaways: [
            'Prefer <code>UploadFile</code> for big uploads to avoid RAM spikes',
            'Sanitize filenames—path traversal is a real risk',
            'Enforce max size at reverse proxy (Nginx, CloudFront) too',
            'Consider S3 presigned URLs for very large direct uploads',
            'Interview: multipart vs base64-in-JSON trade-offs'
        ],
        quiz: [
            { q: 'Why UploadFile over bytes for large uploads?', options: ['Smaller code', 'Spooled streaming reduces memory use', 'Required by JWT', 'Faster DNS'], answer: 1, explain: 'Reading the whole body into RAM does not scale; UploadFile streams.' },
            { q: 'What content type is typical for file forms?', options: ['application/json', 'multipart/form-data', 'text/css', 'image/svg only'], answer: 1, explain: 'Browsers send files as multipart encoding.' },
            { q: 'Why sanitize filenames?', options: ['Fashion', 'Prevent path traversal / overwrite attacks', 'OpenAPI', 'bcrypt'], answer: 1, explain: 'Attackers may send `../../etc/passwd` style names.' },
            { q: 'Can you upload multiple files in one request?', options: ['No', 'Yes with list[UploadFile]', 'Only FTP', 'Only SOAP'], answer: 1, explain: 'FastAPI accepts lists of UploadFile for repeated parts.' }
        ]
    },
    {
        id: '9.3', title: 'WebSockets', emoji: '💬',
        analogy: {
            title: 'WebSocket Is a Waiter Who Stays at Your Table',
            emoji: '🗣️',
            desc: 'HTTP asks one question and leaves. WebSocket keeps the conversation open—push scores, chats, or live dashboards without polling.',
            type: 'waiter'
        },
        theory: `<p>Use <code>@app.websocket("/ws")</code>, <code>await websocket.accept()</code>, then <code>receive_text</code>/<code>send_text</code> in a loop. Production needs auth on connect and heartbeat/ping.</p>
        <ul>
            <li>Interview: horizontal scaling requires pub/sub (Redis) for broadcast.</li>
        </ul>`,
        code: [
            {
                title: 'Echo WebSocket',
                code: 'from fastapi import FastAPI, WebSocket, WebSocketDisconnect\n\napp = FastAPI()\n\n@app.websocket("/ws")\nasync def ws_echo(websocket: WebSocket):\n    await websocket.accept()\n    try:\n        while True:\n            data = await websocket.receive_text()\n            await websocket.send_text(f"echo: {data}")\n    except WebSocketDisconnect:\n        pass',
                output: '# ws://host/ws — persistent bidirectional channel'
            },
            {
                title: 'In-Memory Broadcast Sketch',
                code: 'from fastapi import FastAPI, WebSocket, WebSocketDisconnect\n\napp = FastAPI()\nclients: list[WebSocket] = []\n\n@app.websocket("/chat")\nasync def chat(websocket: WebSocket):\n    await websocket.accept()\n    clients.append(websocket)\n    try:\n        while True:\n            msg = await websocket.receive_text()\n            for c in list(clients):\n                await c.send_text(msg)\n    except WebSocketDisconnect:\n        clients.remove(websocket)\n\n# Production: Redis pub/sub + many workers',
                output: '# Demo only — not multi-worker safe'
            }
        ],
        takeaways: [
            'Always <code>accept()</code> before send/receive',
            'Handle <code>WebSocketDisconnect</code> to clean up',
            'Auth via query token or first message—cookies tricky cross-site',
            'Use ping/pong or timeouts to detect dead peers',
            'Interview: WebSocket vs SSE for one-way live updates'
        ],
        quiz: [
            { q: 'First call after client connects?', options: ['send_text only', 'await websocket.accept()', 'db.commit()', 'CORSMiddleware'], answer: 1, explain: 'Server must accept the handshake before messaging.' },
            { q: 'Why in-memory client lists fail with multiple workers?', options: ['They don\'t', 'Each process has its own memory—use pub/sub broker', 'JWT forbids', 'Only HTTP2'], answer: 1, explain: 'Broadcast across machines/processes needs Redis, Kafka, or similar.' },
            { q: 'WebSocket vs polling?', options: ['Same', 'WS pushes; polling repeatedly requests HTTP', 'Only CSV', 'Only GraphQL'], answer: 1, explain: 'WS keeps a channel open—lower latency for live feeds.' },
            { q: 'What exception ends a typical receive loop when user closes tab?', options: ['ValueError', 'WebSocketDisconnect', 'HTTPException', 'JSONDecodeError'], answer: 1, explain: 'Starlette raises WebSocketDisconnect on clean close.' }
        ]
    }
    ]
},

/* ============================================================
   MODULE 10: TESTING & DEPLOYMENT
   ============================================================ */
{
    id: 10, title: 'Testing & Deployment', icon: '🧪', color: '#10b981',
    description: 'TestClient, pytest fixtures, containers, and production-minded defaults.',
    topics: [
    {
        id: '10.1', title: 'Testing with TestClient', emoji: '📋',
        analogy: {
            title: 'Test Plan Blueprint Before Shipping',
            emoji: '📝',
            desc: 'Your test file is the blueprint: arrange data, act on the API, assert JSON and status. Same routes as production—different database.',
            type: 'blueprint',
            className: 'TestSuite',
            objects: ['test_create', 'test_401', 'test_validation']
        },
        theory: `<p><code>TestClient</code> from Starlette/FastAPI wraps your app and issues HTTP without a real network port. Combine with pytest fixtures for DB rollback or SQLite :memory:.</p>
        <ul>
            <li>Interview: test happy path, auth failure, and validation errors.</li>
        </ul>`,
        code: [
            {
                title: 'Basic TestClient',
                code: '# pip install httpx pytest\nfrom fastapi import FastAPI\nfrom fastapi.testclient import TestClient\n\napp = FastAPI()\n\n@app.get("/add")\ndef add(x: int, y: int):\n    return {"sum": x + y}\n\nclient = TestClient(app)\n\ndef test_add():\n    r = client.get("/add", params={"x": 2, "y": 3})\n    assert r.status_code == 200\n    assert r.json() == {"sum": 5}',
                output: '# pytest discovers test_add'
            },
            {
                title: 'pytest Fixture with Dependency Override',
                code: 'import pytest\nfrom fastapi.testclient import TestClient\n\n# app = create_app()\n# @pytest.fixture\n# def client():\n#     with TestClient(app) as c:\n#         yield c\n#\n# def test_me(client):\n#     app.dependency_overrides[get_current_user] = lambda: {"role": "admin"}\n#     r = client.get("/admin/stats")\n#     assert r.status_code == 200\n\n# Interview: overrides isolate auth in tests',
                output: '# Pattern for swapping DI during tests'
            }
        ],
        takeaways: [
            'Use <code>TestClient(app)</code> for synchronous tests',
            'For async tests, prefer <code>httpx.AsyncClient(app=app, base_url="http://test")</code> with ASGITransport in newer stacks',
            'Override dependencies instead of mocking globals',
            'Assert status code AND response shape',
            'Interview: contract tests vs unit tests for APIs'
        ],
        quiz: [
            { q: 'What does TestClient wrap?', options: ['Only TCP sockets', 'ASGI app directly—no real server port needed', 'Only GraphQL', 'Only Docker'], answer: 1, explain: 'It drives the app through the ASGI interface in-process.' },
            { q: 'Why override dependencies in tests?', options: ['Slower tests', 'Inject fake users/DB without production wiring', 'Required by OpenAPI', 'Replace HTML'], answer: 1, explain: 'FastAPI\'s dependency_overrides make auth and DB fakes straightforward.' },
            { q: 'What should you assert besides status_code?', options: ['Nothing', 'JSON body / schema, headers when relevant', 'Only cookies', 'CPU temp'], answer: 1, explain: 'APIs are contracts—validate payloads, not just 200 OK.' },
            { q: 'Good practice for DB in tests?', options: ['Always production DB', 'Isolated DB per test run (memory or transactions)', 'No database', 'Shared global state'], answer: 1, explain: 'Tests must be independent—ephemeral DBs or rollbacks prevent flakiness.' }
        ]
    },
    {
        id: '10.2', title: 'Docker Deployment', emoji: '📔',
        analogy: {
            title: 'Dockerfile Is a Recipe Diary',
            emoji: '🐳',
            desc: 'Step 1: base image. Step 2: install deps. Step 3: copy app. Step 4: CMD to start uvicorn. Anyone can replay the diary and get the same dish.',
            type: 'diary',
            lines: 'FROM python:3.12-slim<br>COPY requirements.txt .<br>RUN pip install -r requirements.txt<br>COPY . /app<br>CMD ["uvicorn","main:app","--host","0.0.0.0","--port","8000"]'
        },
        theory: `<p>Multi-stage builds shrink images. Run as non-root. Put <code>UVICORN</code> behind a process manager or use gunicorn with uvicorn workers in production.</p>
        <ul>
            <li>Interview: one container per process; DB is separate container/service.</li>
        </ul>`,
        code: [
            {
                title: 'Dockerfile (Single Stage)',
                code: '# Dockerfile\nFROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nENV PYTHONUNBUFFERED=1\nEXPOSE 8000\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]',
                output: '# docker build -t soseeks-api .\n# docker run -p 8000:8000 soseeks-api'
            },
            {
                title: 'docker-compose Sketch',
                code: '# docker-compose.yml (conceptual)\n# services:\n#   api:\n#     build: .\n#     ports: ["8000:8000"]\n#     environment:\n#       DATABASE_URL: postgresql+psycopg://user:pass@db:5432/app\n#   db:\n#     image: postgres:16\n# Interview: secrets via env files / orchestrator secrets',
                output: '# Local stack: API + Postgres + optional Redis'
            }
        ],
        takeaways: [
            'Pin base image tags—avoid silent `latest` drift',
            'Use <code>--no-cache-dir</code> in pip to shrink layers',
            'Healthchecks on /health for orchestrators',
            'Do not bake SECRET_KEY into the image—inject at runtime',
            'Interview: 12-factor app config via environment'
        ],
        quiz: [
            { q: 'Why expose 8000 in Dockerfile?', options: ['Encrypt TLS inside container', 'Document which port the process listens on', 'Required by pytest', 'Disable CORS'], answer: 1, explain: 'EXPOSE documents intent; you still map ports with -p in docker run.' },
            { q: 'Good CMD for FastAPI in container?', options: ['python -m http.server', 'uvicorn main:app --host 0.0.0.0 --port 8000', 'flask run', 'node index.js'], answer: 1, explain: 'Uvicorn binds all interfaces so the container port is reachable.' },
            { q: 'Where should DATABASE_URL usually come from in prod?', options: ['Hardcoded in main.py', 'Environment / secret store', 'Git branch name', 'CSS file'], answer: 1, explain: '12-factor: config varies by environment; secrets are injected, not committed.' },
            { q: 'Why separate DB container?', options: ['Slower', 'Independent scaling, backups, and failure domains', 'Required by JSON', 'Same process always'], answer: 1, explain: 'Stateful databases and stateless APIs scale and deploy differently.' }
        ]
    },
    {
        id: '10.3', title: 'Production Best Practices', emoji: '✅',
        analogy: {
            title: 'Checklist Stamps Before Go-Live',
            emoji: '✔️',
            desc: 'HTTPS stamp, secrets stamp, logging stamp, rate limit stamp—each quality gate before customers touch the API.',
            type: 'stamps',
            items: [
                { val: 'HTTPS + HSTS', dup: false },
                { val: 'structured logs', dup: false },
                { val: 'metrics / health', dup: false },
                { val: 'skip security review', dup: true }
            ]
        },
        theory: `<p>Run multiple Uvicorn workers or use Gunicorn + UvicornWorker. Terminate TLS at a reverse proxy. Centralize logs (JSON), traces, and metrics.</p>
        <ul>
            <li>Environment variables for config—<code>pydantic-settings</code> is popular.</li>
            <li>Interview: graceful shutdown, connection pools, and readiness vs liveness probes.</li>
        </ul>`,
        code: [
            {
                title: 'pydantic-settings (Pattern)',
                code: 'from pydantic_settings import BaseSettings, SettingsConfigDict\n\nclass Settings(BaseSettings):\n    model_config = SettingsConfigDict(env_file=".env", extra="ignore")\n    app_name: str = "Soseeks API"\n    database_url: str = "sqlite:///./app.db"\n    secret_key: str  # must be provided via env\n\n# settings = Settings()\n# pip install pydantic-settings',
                output: '# Loads SECRET_KEY from environment — fails fast if missing'
            },
            {
                title: 'Gunicorn + Uvicorn Workers (shell)',
                code: '# pip install gunicorn uvicorn[standard]\n# gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000\n\n# Interview: workers handle concurrent requests; tune CPU cores',
                output: '# Common production process model'
            }
        ],
        takeaways: [
            'Never commit <code>.env</code> with production secrets',
            'Separate <code>/health/live</code> vs <code>/health/ready</code> when using K8s',
            'Use structured logging (JSON) for aggregators',
            'Rate limit and WAF at edge; validate input at app',
            'Interview: explain worker count vs async concurrency'
        ],
        quiz: [
            { q: 'Why use pydantic-settings?', options: ['Replace SQLAlchemy', 'Type-safe loading of env vars into a Settings object', 'Compile TypeScript', 'WebSocket only'], answer: 1, explain: 'Centralizes configuration with validation—common FastAPI pattern.' },
            { q: 'What does Gunicorn with UvicornWorker provide?', options: ['Only static files', 'Multiple worker processes running ASGI app', 'JWT library', 'ORM migrations'], answer: 1, explain: 'Process-level parallelism plus Uvicorn\'s ASGI handling per worker.' },
            { q: 'Liveness vs readiness probe purpose?', options: ['Same', 'Liveness: restart unhealthy pod; Readiness: stop sending traffic until ready', 'Only CSS', 'Only SQL'], answer: 1, explain: 'Kubernetes uses them to manage rollouts and failures differently.' },
            { q: 'Where should TLS usually terminate?', options: ['Never', 'Often at reverse proxy / load balancer in front of Uvicorn', 'Only in Python', 'Only WebSocket'], answer: 1, explain: 'Let edge handle certificates; app servers focus on HTTP.' }
        ]
    }
    ]
}

];

