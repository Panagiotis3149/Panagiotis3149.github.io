# packets

{% hint style="warning" %}
Cast a packet: `PacketType variableName = (PacketType) packet;`

This must be done to be able to access the data stored in the packet.
{% endhint %}

### C0APacketAnimation

```java
new C0A();
```

### C0BPacketEntityAction

```java
new C0B(String action, int horsePower);
C0B entityAction = (C0B) packet;
```

| property   | description                                                                                                                     | type   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ------ |
| action     | START\_SNEAKING STOP\_SNEAKING STOP\_SLEEPING START\_SPRINTING STOP\_SPRINTING RIDING\_JUMP OPEN\_INVENTORY START\_FALL\_FLYING | String |
| horsePower | Horse jump power, 0-100                                                                                                         | int    |

### C0DPacketCloseWindow

```java
new C0D(int windowId);
C0D closeWindow = (C0D) packet;
```

| property | description          | type |
| -------- | -------------------- | ---- |
| windowId | The ID of the window | int  |

### C0EPacketClickWindow

```java
new C0E(int windowId, int slot, int button, int mode, ItemStack itemStack);
C0E clickWindow = (C0E) packet;
```

| property  | description    | type      |
| --------- | -------------- | --------- |
| windowId  | window id      | int       |
| slot      | inventory slot | int       |
| button    | button pressed | int       |
| mode      | button mode    | int       |
| itemStack | item stack     | ItemStack |

### C0FPacketConfirmTransaction

```java
new C0F(int windowId, short uid);
C0F confirmTransaction = (C0F) packet;
```

| property | description                  | type  |
| -------- | ---------------------------- | ----- |
| windowId | The ID of the window         | int   |
| uid      | Unique identifier for packet | short |

### C01PacketChatMessage

```java
new C01(String message);
C01 chatMessage = (C01) packet;
```

| property | description  | type   |
| -------- | ------------ | ------ |
| message  | Chat message | String |

### C02PacketUseEntity

```java
new C02(Entity entity, String action, Vec3 hitVec);
C02 useEntity = (C02) packet;
```

| property | description                                     | type   |
| -------- | ----------------------------------------------- | ------ |
| entity   | Entity                                          | Entity |
| action   | <p>ATTACK</p><p>INTERACT</p><p>INTERACT\_AT</p> | String |
| hitVec   | Hit Vector                                      | Vec3   |

### C03PacketPlayer

```java
new C03(boolean ground);
C03 playerGround = (C03) packet;
```

| property | description                   | type    |
| -------- | ----------------------------- | ------- |
| ground   | If player is on ground or not | boolean |

### C04PacketPlayerPosition

```java
new C03(Vec3 position, boolean ground);
C03 playerPosition = (C03) packet;
```

| property | description                   | type    |
| -------- | ----------------------------- | ------- |
| position | Player's position             | Vec3    |
| ground   | If player is on ground or not | boolean |

### C05PacketPlayerLook

```java
new C03(float yaw, float pitch, boolean ground);
C03 playerLook = (C03) packet;
```

| property | description                   | type    |
| -------- | ----------------------------- | ------- |
| yaw      | Player's yaw                  | float   |
| pitch    | Player's pitch                | float   |
| ground   | If player is on ground or not | boolean |

### C06PacketPlayerPosLook

```java
new C03(Vec3 position, float yaw, float pitch, boolean ground);
C03 playerPosLook = (C03) packet;
```

| property | description                   | type    |
| -------- | ----------------------------- | ------- |
| position | Player's position             | Vec3    |
| yaw      | Player's yaw                  | float   |
| pitch    | Player's pitch                | float   |
| ground   | If player is on ground or not | boolean |

### C07PacketPlayerDigging

```java
new C07(Vec3 position, String status, String facing);
C07 playerDigging = (C07) packet;
```

| property | description                                                                                                     | type   |
| -------- | --------------------------------------------------------------------------------------------------------------- | ------ |
| position | Block placement position                                                                                        | Vec3   |
| status   | START\_DESTROY\_BLOCK STOP\_DESTROY\_BLOCK ABORT\_DESTROY\_BLOCK DROP\_ALL\_ITEMS DROP\_ITEM RELEASE\_USE\_ITEM | String |
| facing   | <p>UP<br>DOWN<br>NORTH<br>SOUTH<br>EAST<br>WEST</p>                                                             | String |

### C08PacketPlayerBlockPlacement

```java
new C08(ItemStack itemStack, Vec3 position, int direction, Vec3 offset);
C08 playerBlockPlacement = (C08) packet;
```

| property  | description               | type      |
| --------- | ------------------------- | --------- |
| itemStack | Player's current item     | ItemStack |
| position  | Block placement position  | Vec3      |
| direction | Block placement direction | int       |
| offset    | Block placement offset    | Vec3      |

### C09PacketHeldItemChange

```java
new C09(int slot);
C09 heldItemChange = (C09) packet;
```

| property | description             | type |
| -------- | ----------------------- | ---- |
| slot     | Player's held item slot | int  |

### C10PacketCreativeInventoryAction

```java
new C10(int slot, ItemStack itemStack);
C10 creativeInventoryAction = (C10) packet;
```

| property  | description             | type      |
| --------- | ----------------------- | --------- |
| slot      | Player's held item slot | int       |
| itemStack | Item being affected     | ItemStack |

### C13PacketPlayerAbilities

```java
new C13(boolean invulnerable, boolean flying, boolean allowFlying, boolean creativeMode, float flySpeed, float walkSpeed);
C13 playerAbilities = (C13) packet;
```

<table><thead><tr><th>property</th><th width="302.3333333333333">description</th><th>type</th></tr></thead><tbody><tr><td>invulnerable</td><td>True if the player is invulnerable</td><td>boolean</td></tr><tr><td>flying</td><td>True if the player is flying</td><td>boolean</td></tr><tr><td>allowFlying</td><td>True if the player is allowed to fly</td><td>boolean</td></tr><tr><td>creativeMode</td><td>True if the player is in creative</td><td>boolean</td></tr><tr><td>flySpeed</td><td>Flying speed of the player</td><td>float</td></tr><tr><td>walkSpeed</td><td>Walking speed of the player</td><td>float</td></tr></tbody></table>

### C16PacketClientStatus

```java
new C16(String status);
C16 clientStatus = (C16) packet;
```

<table><thead><tr><th>property</th><th width="302.3333333333333">description</th><th>type</th></tr></thead><tbody><tr><td>status</td><td><p>PERFORM_RESPAWN</p><p>REQUEST_STATS</p><p>OPEN_INVENTORY_ACHIEVEMENT</p></td><td>String</td></tr></tbody></table>

### S02PacketChat

<pre class="language-java"><code class="lang-java"><strong>new S02(byte type, String message);
</strong><strong>S02 s02 = (S02) packet;
</strong></code></pre>

| property | description           | type   |
| -------- | --------------------- | ------ |
| type     | The type of message   | byte   |
| message  | The message displayed | String |

### S08PacketPlayerPosLook

<pre class="language-java"><code class="lang-java"><strong>new S08(Vec3 position, float yaw, float pitch);
</strong><strong>S08 s08 = (S08) packet;
</strong></code></pre>

| property | description       | type  |
| -------- | ----------------- | ----- |
| position | Entity's position | Vec3  |
| yaw      | Entity's yaw      | float |
| pitch    | Entity's pitch    | float |

### S12PacketEntityVelocity

```java
new S12(int entityId, Vec3 motion);
S12 s12 = (S12) packet;
```

| property | description                    | type |
| -------- | ------------------------------ | ---- |
| entityId | Entity ID packet is applied to | int  |
| motion   | Entity's new motion            | Vec3 |

### S23PacketBlockChange

```java
new S23(Vec3 position, Block block);
S23 s23 = (S23) packet;
```

| property | description            | type  |
| -------- | ---------------------- | ----- |
| position | Position of the block  | Vec3  |
| block    | Block that was changed | Block |

### S25PacketBlockBreakAnim

```java
new S25(int entityId, Block block, int progress);
S25 s25 = (S25) packet;
```

| property | description                 | type  |
| -------- | --------------------------- | ----- |
| entityId | Entity id                   | int   |
| block    | Block being animated        | Block |
| progress | Breaking animation progress | int   |

### S27PacketExplosion

```java
new S27(float strength, Vec3 position, Vec3 motion);
S27 s27 = (S27) packet;
```

| property | description                       | type  |
| -------- | --------------------------------- | ----- |
| strength | Explosion's strength              | float |
| position | Position of the explosion         | Vec3  |
| motion   | Applied motion from the explosion | Vec3  |

### S45PacketTitle

```java
new S45(String type, String message, int fadeInTime, int displayTime, int fadeOutTime);
S45 s45 = (S45) packet;
```

| property    | description            | type   |
| ----------- | ---------------------- | ------ |
| type        | Type of title          | String |
| message     | The message displayed  | String |
| fadeInTime  | Fade in time in ticks  | int    |
| displayTime | Display time in ticks  | int    |
| fadeOutTime | Fade out time in ticks | int    |

### S2APacketParticles

<pre class="language-java"><code class="lang-java"><strong>new S2A(String type, Vec3 position, Vec3 offset, Vec3 speed, int count, int[] args);
</strong><strong>S2A s2a = (S2A) packet;
</strong></code></pre>

| property | description                   | type   |
| -------- | ----------------------------- | ------ |
| type     | Packet identifier             | String |
| position | Position of the particle      | Vec3   |
| offset   | Random offset of the particle | Vec3   |
| speed    | Velocity of the particle      | Vec3   |
| count    | Amount of particles           | int    |
| args     | Arguments                     | int\[] |

### S3EPacketPlayOutScoreboardTeam

<pre class="language-java"><code class="lang-java"><strong>new S3E(String name, String displayName, String prefix, String suffix, String nametagVisibility, Collection&#x3C;String> playerList, int action, int friendlyFlags, int color);
</strong><strong>S3E s3e = (S3E) packet;
</strong></code></pre>

| property          | description                      | type                |
| ----------------- | -------------------------------- | ------------------- |
| name              | Unique team identifier           | String              |
| displayName       | Display name for players         | String              |
| prefix            | String before player names       | String              |
| suffix            | String after player names        | String              |
| nametagVisibility | Controls nametag visibility      | String              |
| playerList        | List of player names on the team | Collection\<String> |
| action            | Specifies packet action          | int                 |
| friendlyFlags     | Flags for team behavior          | int                 |
| color             | Team color                       | int                 |
