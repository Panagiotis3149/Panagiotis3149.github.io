# client

### addEnemy

```java
client.addEnemy(String username);
```

Adds the specified player to your enemies list.

### addFriend

```java
client.addFriend(String username);
```

Adds the specified player to your friends list.

### allowEditing

```java
boolean allowEditing = client.allowEditing();
```

Returns true if the player can edit the world.

### allowFlying

```java
boolean allowFlying = client.allowFlying();
```

Returns true if the  player has the ability to fly.

### async

```java
client.async(() -> {});
```

Executes a task asynchronously, allowing it to run independently of the main thread.

### attack

```java
client.attack(Entity entity);
```

Performs an attack on the specified entity.

### chat

```java
client.chat(String message);
```

Sends the specified message in chat.

### closeScreen

```java
client.closeScreen();
```

Closes the currently open screen.

### debug

```java
String key = client.debug(String key);
```

Performs a debug action using the specified key.

### dropItem

```java
client.dropItem(boolean dropStack);
```

Drops the currently held item, optionally dropping the entire stack.

### enableMovementFix

```java
client.enableMovementFix();
```

Enables movement correction for the current tick. Call on the getRotations event when returning a custom yaw.

### getDirection

```java
String direction = client.getDirection();
```

Returns the direction the player is moving based on input.

### getDisplaySize

```java
int[] displaySize = client.getDisplaySize();
```

Returns the dimensions of the Minecraft window as an array `[width, height, size]`.

### getForward

```java
float forward = client.getForward();
```

Returns the forward movement value of the player.

### getFPS

```java
int fps = client.getFPS();
```

Returns the current frames per second (FPS) of the client.

### getFreeMemory

```java
long memory = client.getFreeMemory();
```

Returns the amount of free memory available to the client.

### getMaxMemory

```java
long memory = client.getMaxMemory();
```

Returns the maximum memory allocated to the client.

### getMotion

```java
Vec3 motion = client.getMotion();
```

Returns the motion vector of the local player.

### getPlayer

```java
Entity player = client.getPlayer();
```

Returns the Entity object of the local player.

### getRecordPlaying

```java
String record = client.getRecordPlaying();
```

Returns the record string above the hotbar.

### getRenderArmPitch

```java
float pitch = client.getRenderArmPitch();
```

Returns the arm pitch of the player.

### getRenderArmYaw

```java
float yaw = client.getRenderArmYaw();
```

Returns the arm yaw of the player.

### getResourcePacks

```java
List<String[]> packs = client.getResourcePacks();
```

Returns a list of resource packs as an array `[name, description]`.

### getRotations

```java
float[] rotations = client.getRotations(Vec3 position);
```

Returns the yaw and pitch to aim at the specified position as an array `[yaw, pitch]`.

### getRotationsToBlock

```java
float[] rotations = client.getRotationsToBlock(Vec3 position, String face);
float[] rotations = client.getRotationsToBlock(Vec3 position);
```

Returns the yaw and pitch to aim at the specified block and face as an array `[yaw, pitch]`.

### getRotationsToEntity

```java
float[] rotations = client.getRotationsToEntity(Entity entity);
```

Returns the yaw and pitch to aim at the specified entity as an array `[yaw, pitch]`.

### getScreen

```java
String screen = client.getScreen();
```

Returns the name of the currently open screen.

### getServerDirection

```java
float yaw = client.getServerDirection(PlayerState state);
```

Returns the server yaw of the player.

### getServerIP

```java
String serverIP = client.getServerIP();
```

Returns the IP address of the connected server.

### getStrafe

```java
float strafe = client.getStrafe();
```

Returns the strafe movement value of the player.

### getSubTitle

```java
String subtitle = client.getSubTitle();
```

Returns the current subtitle on screen.

### getTabFooter

```java
String footer = client.getTabFooter();
```

Returns the footer in the tablist.

### getTabHeader

```java
String header = client.getTabHeader();
```

Returns the header in the tablist.

### getTitle

```java
String title = client.getTitle();
```

Returns the current title on screen.

### getTotalMemory

```java
long memory = client.getTotalMemory();
```

Returns the total memory currently in use by the client.

### getUID

```java
int uid = client.getUID();
```

Returns the Raven client unique identifier.

### getUser

```java
String username = client.getUser()
```

Returns the Raven client username.

### inFocus

```java
boolean focused = client.inFocus();
```

Returns true if the minecraft instance is in focus.

### isCreative

```java
boolean creative = client.isCreative();
```

Returns true if the player is in creative mode.

### isDiagonal

```java
boolean diagonal = client.isDiagonal();
```

Returns true if the player is moving diagonally.

### isEnemy

```java
boolean isEnemy = client.isEnemy(String username);
```

Returns true if the specified username is on the enemy list.

### isFacingDiagonal

```java
boolean diagonal = client.isFacingDiagonal();
```

Returns true if the player is facing diagonally.

### isFlying

```java
boolean flying = client.isFlying();
```

Returns true if the player is currently flying.

### isFriend

```java
boolean isFriend = client.isFriend(String username);
```

Returns true if the specified username is on the friends list.

### isJump

```java
boolean jump = client.isJump();
```

Returns true if the player is currently jumping.

### isMoving

```java
boolean moving = client.isMoving();
```

Returns true if the player is actively moving.

### isRiding

```java
boolean riding = client.isRiding();
```

Returns true if the player is riding another entity.

### isSinglePlayer

```java
boolean singleplayer = client.isSinglePlayer();
```

Returns true if the player is in a single-player world.

### isSneak

```java
boolean sneaking = client.isSneak();
```

Returns true if the player is crouched.

### isSpectator

```java
boolean spectating = client.isSpectator();
```

Returns true if the player is in gamemode spectator.

### jump

```java
client.jump();
```

Makes the player perform a jump.

### log

```java
client.log(Object message);
```

Writes the specified message to `latest.log`.

### ping

```java
client.ping();
```

Plays a ping sound.

### placeBlock

```java
boolean placed = client.placeBlock(Vec3 target, String side, Vec3 hitVec); 
```

Places a block at the specified target with a defined hit vector.

### playSound

```java
client.playSound(String name, float volume, float pitch);
```

Plays the specified sound with the given volume and pitch.

### print

```java
client.print(Object message);
```

Prints the specified message to the chat.

### processPacket

```java
client.processPacket(SPacket packet);
```

Sends a serverside packet to yourself.

### processPacketNoEvent

```java
client.processPacketNoEvent(SPacket packet);
```

Sends a serverside packet to yourself without triggering events.

### raycastBlock

```java
Object[] block = client.raycastBlock(double distance, float yaw, float pitch);
```

Performs a raycast and returns the position, offset, and face of the hit block.

| property | index | type   |
| -------- | ----- | ------ |
| position | 0     | Vec3   |
| offset   | 1     | Vec3   |
| face     | 2     | String |

### raycastEntity

```java
Object[] entity = client.raycastEntity(double distance, float yaw, float pitch);
```

Performs a raycast and returns the hit entity, offset, and squared distance.

| property   | index | type   |
| ---------- | ----- | ------ |
| entity     | 0     | Entity |
| offset     | 1     | Vec3   |
| distance^2 | 2     | double |

### removeEnemy

```java
client.removeEnemy(String username);
```

Removes the specified username from the enemy list.

### removeFriend

```java
client.removeFriend(String username);
```

Removes the specified player from the friends list.

### removePotionEffect

```java
client.removePotionEffect(int id);
```

Removes a potion effect by its ID client-side.

### sendPacket

```java
client.sendPacket(CPacket packet);
```

Sends the specified packet to the server.

### sendPacketNoEvent

```java
client.sendPacketNoEvent(CPacket packet);
```

Sends the specified packet to the server without triggering events.

### setFlying

```java
client.setFlying(boolean flying);
```

Sets the flying state of the player

### setForward

```java
client.setForward(float forward);
```

Sets the forward movement value of the player.

### setItemInUse

```java
client.setItemInUse(int count);
```

Activates the using animation on the held item of the player.

### setJump

```java
client.setJump(boolean jump);
```

Sets the jumping state of the player.

### setMotion

```java
client.setMotion(Vec3 motion);
```

Sets the motion vector of the player.

### setRenderArmPitch

```java
client.setRenderArmPitch(float pitch);
```

Sets the arm pitch of the player.

### setRenderArmYaw

```java
client.setRenderArmYaw(float yaw);
```

Sets the arm yaw of the player.

### setSneak

```java
client.setSneak(boolean sneak);
```

Sets the sneaking state of the player.

### setSpeed

```java
client.setSpeed(double speed);
```

Sets the movement speed of the player.

### setSprinting

```java
client.setSprinting(boolean sprinting);
```

Sets the sprinting state of the player.

### setSpeedForward

```java
client.setSpeedForward(double speed);
```

Sets the forward speed of the player.

### setStrafe

```java
client.setStrafe(float strafe);
```

Sets the strafe movement value of the player.

### setTimer

```java
client.setTimer(float timer);
```

Sets the speed multiplier of the player.

### sleep

```java
client.sleep(int ms);
```

Pauses execution on the current thread for the specified duration in milliseconds.

### swing

```java
client.swing();
```

Performs an arm swing for the player.

### time

```java
long time = client.time();
```

Returns the current system time in milliseconds.
