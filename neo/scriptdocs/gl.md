# gl

### alpha

```java
gl.alpha(boolean alpha);
```

Enables or disables alpha testing.

### begin

```java
gl.begin(int mode);
```

Starts specifying vertices for a primitive shape.

### blend

```java
gl.blend(boolean blend);
```

Enables or disables blending.

### color

```java
gl.color(float r, float g, float b, float a);
```

Sets the current drawing color with the specified RGBA values.

### cull

```java
gl.cull(boolean cull);
```

Enables or disables face culling.

### depth

```java
gl.depth(boolean depth);
```

Enables or disables depth testing.

### depthMask

```java
gl.depthMask(boolean depthMask);
```

Sets whether writing to the depth buffer is enabled or disabled.

### disable

```java
gl.disable(int cap);
```

Disables a specific OpenGL capability.

### disableItemLighting

```java
gl.disableItemLighting();
```

Disables item lighting.

### enable

```java
gl.enable(int cap);
```

Enables a specific OpenGL capability, such as blending or depth testing.

### enableItemLighting

```java
gl.enableItemLighting(boolean gui);
```

Enables item lighting, optionally for GUI items.

### end

```java
gl.end();
```

Completes the vertex specification.

### lighting

```java
gl.lighting(boolean lighting);
```

Enables or disables lighting.

### lineSmooth

```java
gl.lineSmooth(boolean lineSmooth);
```

Enables or disables line smoothing.

### lineWidth

```java
gl.lineWidth(float width);
```

Sets the width of lines in OpenGL.

### normal

```java
gl.normal(float x, float y, float z);
```

Specifies a normal vector for lighting calculations.

### pop

```java
gl.pop();
```

Pops the current matrix stack, restoring the previous transformation state.

### push

```java
gl.push();
```

Pushes the current matrix stack, saving the current transformation state.

### rotate

```java
gl.rotate(float angle, float x, float y, float z);
```

Applies rotation to the current transformation matrix around the specified axis.

### scale

```java
gl.scale(float x, float y, float z);
```

Applies scaling to the current transformation matrix.

### scissor

```java
gl.scissor(boolean scissor);
```

Enables or disables scissoring.

### scissor

```java
gl.scissor(int x, int y, int width, int height);
```

Sets the scissor box to the specified rectangle, restricting rendering operations to the defined area.

### texture2d

```java
gl.texture2d(boolean texture2d);
```

Enables or disables 2D texturing.

### translate

```java
gl.translate(float x, float y, float z);
```

Applies translation to the current transformation matrix.

### vertex2

```java
gl.vertex2(float x, float y);
```

Specifies a vertex with 2D coordinates.

### vertex3

```java
gl.vertex3(float x, float y, float z);
```

Specifies a vertex with 3D coordinates.
  
