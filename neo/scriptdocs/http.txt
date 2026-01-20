# http

### loadstring

```java
load - "URL"
```

Loads and compiles code from an external website. Must be outside of a function in the documented format on a separate line.

### request

```java
Request request = new Request(String method, String URL);
```

Creates a new request to a specified URL. Supported methods: "GET", "POST".

### addHeader

```java
request.addHeader(String header, String value);
```

Adds a header to the request.

### setUserAgent

```java
request.setUserAgent(String userAgent);
```

Sets the User-Agent header for the request.

### setConnectionTimeout

```java
request.setConnectTimeout(int timeout);
```

Sets the connection timeout for the request.

### setReadTimeout

```java
request.setReadTimeout(int timeout);
```

Sets the read timeout for the request.

### setContent

```java
request.setContent(String content);
```

Sets the content to be sent with a POST request.

### fetch

```java
Response response = request.fetch();
```

Executes the request.

### code

```java
int code = response.code();
```

Returns the response code for a request.

### string

```java
String string = response.string();
```

Returns the data from a request as a string.

### json

```java
Json json = response.json();
```

Returns the data from a request as json.
