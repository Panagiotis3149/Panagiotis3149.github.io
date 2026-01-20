# events

### onAntiCheatFlag

```java
void onAntiCheatFlag(String flag, Entity entity)
```

This event will be called when AntiCheat flags a player.

### onAttackEntity

```java
boolean onAttackEntity(Entity target, Entity attacker)
```

This event will be called when the player attacks an entity.

### onLoad

```java
void onLoad()
```

This event will be called when the script is loaded. Register buttons/sliders here.

### onChat

```java
boolean onChat(String msg)
```

This event will be called whenever a message is sent in chat.

### onDisconnect

```java
void onDisconnect()
```

This event will be called whenever the client disconnects from a server.

### onEnable

```java
void onEnable()
```

This event will be called whenever the script is enabled.

### onDisable

```java
void onDisable()
```

This event will be called whenever the script is disabled.

### onKeyPress

```java
boolean onKeyPress(char key, int code)
```

This event will be called when key is pressed.

### onPacketSent

```java
boolean onPacketSent(CPacket packet)
```

This event will be called before a packet gets sent to the server.

### onPacketReceived

```java
boolean onPacketReceived(SPacket packet)
```

This event will be called before a packet gets processed by the client.

### onGuiUpdate

```java
void onGuiUpdate(String name, boolean opened)
```

This event will be called when a GUI updates.

### getRotations

```java
Float[] getRotations()
```

This event is called when minecraft sets your yaw and pitch for movement calculations. Return null to return the vanilla yaw and pitch. Calling client.enableMovementFix() on this event will enable movement correction.

### onPreUpdate

```java
void onPreUpdate()
```

This event will be called at the beginning of every update to the local player.

### onPrePlayerInput

```javascript
void onPrePlayerInput(MovementInput input)
```

This event will be called before the client processes player inputs.

| property | type    |
| -------- | ------- |
| forward  | float   |
| strafe   | float   |
| jump     | boolean |
| sneak    | boolean |

### onPostPlayerInput

```javascript
void onPostPlayerInput()
```

This event will be called after the client processes player inputs.

### onPlayerMove

```javascript
void onPlayerMove(Vec3 motion)
```

This event will be called before the local player is moved.

### onPreMotion

```java
void onPreMotion(PlayerState state)
```

This event will be called before player updates are sent to the server.

| property    | type    |
| ----------- | ------- |
| x           | double  |
| y           | double  |
| z           | double  |
| yaw         | float   |
| pitch       | float   |
| onGround    | boolean |
| isSprinting | boolean |
| isSneaking  | boolean |

### onPostMotion

```java
void onPostMotion()
```

This event will be called at the end of every update to the local player.

### onRenderTick

```java
void onRenderTick(float partialTicks)
```

This event is called every time the HUD renders.

### onRenderWorld

```java
void onRenderWorld(float partialTicks)
```

This event is called every time the world renders.

### onWorldJoin

```java
void onWorldJoin(Entity entity)
```

This event is called whenever an entity spawns in.

### onMouse

```java
boolean onMouse(int button, boolean state)
```

This event is called whenever a button on the mouse is pressed.
