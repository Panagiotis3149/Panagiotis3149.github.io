  
# json

### add

```java
jsonArray.add(Json value);
jsonArray.add(String value);
jsonArray.add(Number value);
jsonArray.add(boolean value);
```

Appends a value to a JSON array.

### add

```java
jsonObject.add(String key, Json value);
jsonObject.add(String key, String value);
jsonObject.add(String key, Number value);
jsonObject.add(String key, boolean value);
```

Adds a key-value pair to a JSON object.

### array

```java
Json jsonArray = Json.array();
```

Creates an empty JSON array.

### asArray

```java
List<Json> arrayValues = jsonArray.asArray();
```

Converts a JSON array into a list of Json objects.

### asBoolean

```java
boolean flag = jsonPrimitive.asBoolean();
```

Extracts a boolean value from a JSON primitive.

### asDouble

```java
double decimal = jsonPrimitive.asDouble();
```

Extracts a double value from a JSON primitive.

### asInt

```java
int number = jsonPrimitive.asInt();
```

Extracts an integer value from a JSON primitive.

### asLong

```java
long number = jsonPrimitive.asLong();
```

Extracts a long value from a JSON primitive.

### asString

```java
String text = jsonPrimitive.asString();
```

Extracts a string value from a JSON primitive.

### get

```java
Json value = jsonObject.get(String key);
```

Retrieves a JSON element by key. Returns a JSON null object if the key doesn't exist.

### has

```java
boolean hasKey = jsonObject.has(String key);
```

Checks if a JSON object has a specific key.

### object

```java
Json jsonObject = Json.object();
```

Creates an empty JSON object.

### parse

```java
Json json = Json.parse(String jsonString);
```

Parses a JSON-formatted string into a Json object.

### keys

```java
Set<String> keys = json.keys();
```

Extracts the keys from a json object.

### toString

```java
String jsonString = json.toString();
```

Returns the JSON object as a formatted string.

### type

```java
Json.Type type = json.type();
```

Returns the type of JSON element. `[OBJECT, ARRAY, STRING, NUMBER, BOOLEAN, NULL]`
