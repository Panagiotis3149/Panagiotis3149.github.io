# entity

{% hint style="warning" %}
Assumes variable `entity` is defined.

Example: `Entity entity = client.getPlayer();`
{% endhint %}

### distanceTo

```java
double distance = entity1.getPosition().distanceTo(entity2.getPosition());
```

Returns the distance to a position in blocks.

### distanceToGround

```java
double distance = entity1.distanceToGround();
```

Returns the distance from the entity to the ground.

### distanceToSq

```java
double distanceSquared = entity1.getPosition().distanceToSq(entity2.getPosition());
```

Returns the distance to a position in blocks squared.

### getAbsorption

```java
float absorption = entity.getAbsorption();
```

Returns the absorption level of the entity.

### getAir

```java
float air = entity.getAir();
```

Returns the air level of the entity.

### getArmorInSlot

```java
ItemStack armor = entity.getArmorInSlot(int slot);
```

Returns the specified armor piece the entity is wearing.

### getBlockPosition

```java
Vec3 blockPosition = entity.getBlockPosition();
```

Returns the block position of the entity.

### getBPS

```java
double bps = entity.getBPS();
```

Returns the movement speed of the entity in blocks per second.

### getDisplayName

```java
String displayName = entity.getDisplayName();
```

Returns the display name of the entity.

### getExperience

```java
float experience = entity.getExperience();
```

Returns the experience of the entity.

### getExperienceLevel

```java
int level = entity.getExperienceLevel();
```

Returns the experience level of the entity.

### getEyeHeight

```java
float eyeHeight = entity.getEyeHeight();
```

Returns the eye height of the entity.

### getFacing

```java
String facing = entity.getFacing();
```

Returns which direction the entity is facing.

### getFallDistance

```java
float fallDistance = entity.getFallDistance();
```

Returns the fall distance of the entity.

### getFireResistance

```java
int fireResistance = entity.getFireResistance();
```

Returns the fire resistance of the entity.

### getFisher

```java
Entity fisher = entity.getFisher();
```

Returns the entity which cast the fishing hook.

### getHealth

```java
float health = entity.getHealth();
```

Returns the health of the entity.

### getHeight

```java
float height = entity.getHeight();
```

Returns the height of the entity.

### getHeldItem

```java
ItemStack item = entity.getHeldItem();
```

Returns the item held by the entity.

### getHunger

```java
int hunger = entity.getHunger();
```

Returns the hunger level of the entity.

### getHurtTime

```java
int hurtTime = entity.getHurtTime();
```

Returns the hurt time of the entity.

### getLastPosition

```java
Vec3 lastPosition = entity.getLastPosition();
```

Returns the previous position of the entity.

### getMaxHealth

```java
float maxHealth = entity.getMaxHealth();
```

Returns the maximum health of the entity.

### getMaxHurtTime

```java
int maxHurtTime = entity.getMaxHurtTime();
```

Returns the maximum hurt time of the entity.

### getName

```java
String name = entity.getName();
```

Returns the name of the entity.

### getNetworkPlayer

```java
NetworkPlayer networkPlayer = player.getNetworkPlayer();
```

Returns the NetworkPlayerInfo object of a player.

### getPitch

```java
float pitch = entity.getPitch();
```

Returns the pitch of the entity.

### getPosition

```java
Vec3 position = entity.getPosition();
```

Returns the position of the entity.

### getPotionEffects

```java
List<Object[]> effects = entity.getPotionEffects();
```

Returns the active potion effects of the entity.

| property  | index | type   |
| --------- | ----- | ------ |
| id        | 0     | int    |
| name      | 1     | String |
| amplifier | 2     | int    |
| duration  | 3     | int    |

### getPrevPitch

```java
float pitch = entity.getPrevPitch();
```

Returns the previous pitch of the entity.

### getPrevYaw

```java
float yaw = entity.getPrevYaw();
```

Returns the previous yaw of the entity.

### getRiddenByEntity

```java
Entity riddenBy = entity.getRiddenByEntity();
```

Returns the entity riding the entity.

### getRidingEntity

```java
Entity riding = entity.getRidingEntity();
```

Returns the entity the entity is riding.

### getSaturation

```java
float saturation = entity.getSaturation();
```

Returns the saturation of the entity.

### getServerPosition

```java
Vec3 position = entity.getServerPosition();
```

Returns the server position of the entity.

### getSpeed

```java
double speed = entity.getSpeed();
```

Returns the speed of the entity.

### getSwingProgress

```java
int swingProgress = entity.getSwingProgress();
```

Returns the swing animation progress of the entity.

### getTicksExisted

```java
int ticksExisted = entity.getTicksExisted();
```

Returns the number of ticks the entity has existed.

### getWidth

```java
float width = entity.getWidth();
```

Returns the width of the entity.

### getYaw

```java
float yaw = entity.getYaw();
```

Returns the yaw of the entity.

### isBurning

```java
boolean burning = entity.isBurning();
```

Returns true if the entity is burning.

### isCollided

```java
boolean collided = entity.isCollided();
```

Returns true if the entity is collided.

### isCollidedHorizontally

```java
boolean collidedHorizontally = entity.isCollidedHorizontally();
```

Returns true if the entity is collided horizontally.

### isCollidedVertically

```java
boolean collidedVertically = entity.isCollidedVertically();
```

Returns true if the entity is collided vertically.

### isConsuming

```java
boolean consuming = entity.isConsuming();
```

Returns true if the entity is consuming an item.

### isCreative

```java
boolean creative = entity.isCreative();
```

Returns true if the entity is in creative mode.

### isDead

```java
boolean dead = entity.isDead();
```

Returns true if the entity is dead.

### isHoldingBlock

```java
boolean holdingBlock = entity.isHoldingBlock();
```

Returns true if the entity is holding a block.

### isHoldingWeapon

```java
boolean holdingWeapon = entity.isHoldingWeapon();
```

Returns true if the entity is holding a weapon.

### isInLava

```java
boolean inLava = entity.isInLava();
```

Returns true if the entity is in lava.

### isInLiquid

```java
boolean inLiquid = entity.isInLiquid();
```

Returns true if the entity is in liquid.

### isInvisible

```java
boolean invisible = entity.isInvisible();
```

Returns true if the entity is invisible.

### isInWater

```java
boolean inWater = entity.isInWater();
```

Returns true if the entity is in water.

### isOnEdge

```java
boolean isOnEdge = entity.isOnEdge();
```

Returns true if the entity is on an edge.

### isOnLadder

```java
boolean onLadder = entity.isOnLadder();
```

Returns true if the entity is on a ladder.

### isRiding

```java
boolean riding = entity.isRiding();
```

Returns true if the entity is riding.

### isSleeping

```java
boolean sleeping = entity.isSleeping();
```

Returns true if the entity is sleeping.

### isSneaking

```java
boolean sneaking = entity.isSneaking();
```

Returns true if the entity is sneaking.

### isSprinting

```java
boolean sprinting = entity.isSprinting();
```

Returns true if the entity is sprinting.

### isUsingItem

```java
boolean usingItem = entity.isUsingItem();
```

Returns true if the entity is using an item.

### onGround

```java
boolean onGround = entity.onGround();
```

Returns true if the entity is on the ground.

### setPitch

```java
entity.setPitch(float pitch);
```

Sets the pitch of the entity.

### setPosition

```java
entity.setPosition(Vec3 position);
entity.setPosition(double x, double y, double z)
```

Sets the position of the entity.

### setYaw

```java
entity.setYaw(float yaw);
```

Sets the yaw of the entity.
