 
# objects

## Block

| property     | type    |
| ------------ | ------- |
| type         | String  |
| name         | String  |
| interactable | boolean |
| variant      | int     |
| heigth       | double  |
| width        | double  |
| length       | double  |
| x            | double  |
| y            | double  |
| z            | double  |

## Entity

| property | type   |
| -------- | ------ |
| type     | String |
| entityId | String |

## Image

```java
Image image = new Image(String url, boolean cache);
```

Creates a new image. The image will be requested from the URL. Cache determines whether or not the image will be reloaded when reloading scripts.

### getDimensions

```java
float[] dimensions = image.getDimensions();
```

Returns the image's dimensions.

### isLoaded

```java
boolean loaded = image.isLoaded();
```

Returns true if the image is loaded.

## ItemStack

| property      | type    |
| ------------- | ------- |
| type          | String  |
| name          | String  |
| displayName   | String  |
| stackSize     | int     |
| maxStackSize  | int     |
| durability    | int     |
| maxDurability | int     |
| isBlock       | boolean |
| meta          | int     |

### getEnchantments

```java
List<Object[]> enchantments = itemStack.getEnchantments();
```

Returns a list of a specific item stack's enchantments.

### getTooltip

```java
List<String> tooltips = itemStack.getTooltip();
```

Returns a list of a specific item stack's tool tips.

## Message

### appendStyle

| action              | description                    |
| ------------------- | ------------------------------ |
| OPEN\_URL           | Opens a URL                    |
| OPEN\_FILE          | Opens a file on your computer  |
| RUN\_COMMAND        | Sends text in the chat         |
| SUGGEST\_COMMAND    | Puts text into your chat field |
| CHANGE\_PAGE        | Switches to a page in a book   |
| COPY\_TO\_CLIPBOARD | Copies text to your clipboard  |

```java
Message message = new Message().appendStyle(String style, String action, String styleMessage, String message);
```

Adds different actions to messages.

## TileEntity

| property | type   |
| -------- | ------ |
| name     | String |
| type     | String |

## Simulation

### create

```java
Simulation simulation = Simulation.create();
```

Initializes a simulation with the local player's movement inputs.

### getMotion

```java
Vec3 motion = simulation.getMotion();
```

Returns the motion vector of the simulation.

### onGround

```java
boolean onGround = simulation.onGround();
```

Returns true if the simulation is on the ground.

### setForward

```java
simulation.setForward(float forward);
```

Sets the forward movement input for the simulation.

### setJump

```java
simulation.setJump(boolean jump);
```

Sets the jump movement input for the simulation.

### setSneak

```java
simulation.setSneak(boolean sneak);
```

Sets the sneak movement input for the simulation.

### setStrafe

```java
simulation.setStrafe(float strafe);
```

Sets the strafe movement input for the simulation.

### getPosition

```java
Vec3 position = simulation.getPosition();
```

Returns the position of the simulation.

### setYaw

```java
simulation.setYaw(float yaw);
```

Sets the rotation yaw for the simulation.

### tick

```java
simulation.tick();
```

Moves the simulation to the next tick.

## Vec3

| property | type   |
| -------- | ------ |
| x        | double |
| y        | double |
| z        | double |

### ceil

```java
Vec3 ceiled = position.ceil();
```

Ceils a Vec3.

### equals

```java
boolean equal = vector1.equals(Vec3 vector2);
```

Returns true if both vectors are equal.

### floor

```java
Vec3 floored = position.floor();
```

Floors a Vec3.

### inverse

```java
Vec3 inverse = position.inverse();
```

Sets a Vec3 to its inverse.

### offset

```java
Vec3 offset = position.offset(Vec3 position);
Vec3 offset = position.offset(double x, double y, double z);
```

Adds a specified offset to all three axes.

### translate

```java
Vec3 translated = position.translate(Vec3 position);
Vec3 translated = position.translate(double x, double y, double z);
```

Adds a specified translation to all three axes.
