# keybinds

{% hint style="info" %}
Minecraft Keycodes: <https://minecraft.fandom.com/wiki/Key_codes>
{% endhint %}

### getKeycode

```java
int code = keybinds.getKeycode(String key);
```

Returns the keycode for a specified minecraft keybind.

### getKeyIndex

```java
int code = keybinds.getKeyIndex(String key);
```

Returns the keycode for a specified key.

### getMousePosition

```java
int[] position = keybinds.getMousePosition();
```

Returns the position of the cursor as an array `[x, y]`.

### isKeyDown

```java
boolean keyDown = keybinds.isKeyDown(int key);
```

Returns true if the specified key is being pressed.

### isMouseDown

```java
boolean mouseDown = keybinds.isMouseDown(int mouseButton);
```

Returns true if the specified mouse button is currently pressed. Use `0` for left click, `1` for right click, and `2` for middle click.

### isPressed

```java
boolean isPressed = keybinds.isPressed(String key);
```

Returns true if the specified keybind is being pressed.

### leftClick

```java
keybinds.leftClick();
```

Simulates a left click on the mouse.

### rightClick

```java
keybinds.rightClick();
```

Simulates a right click on the mouse.

### setPressed

```java
keybinds.setPressed(String key, boolean pressed);
```

Sets the pressed state of a specified keybind. Taken from `%appdata%/.minecraft/options.txt`.
  
