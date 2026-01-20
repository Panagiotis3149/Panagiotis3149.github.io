# inventory

### click

```java
inventory.click(int slot, int button, int mode);
```

Clicks a slot in the inventory. <https://wiki.vg/Protocol#Click_Container>

### getBookContents

```java
List<String> pages = inventory.getBookContents();
```

Returns a list of pages in a json format.

### getChest

```java
String chestName = inventory.getChest();
```

Gets the current chest name.

### getChestSize

```java
int chestSize = inventory.getChestSize();
```

Gets the current chest's size.

### getContainer

```java
String container = inventory.getContainer();
```

Gets the current container name.

### getSize

```java
int size = inventory.getSize();
```

Gets the current inventory's size.

### getSlot

```java
int slot = inventory.getSlot();
```

Returns the current slot.

### getStackInChestSlot

```java
ItemStack item = inventory.getStackInChestSlot(int slot);
```

Gets the item in a specified chest slot.

### getStackInSlot

```java
ItemStack item = inventory.getStackInSlot(int slot);
```

Gets the item in a specified slot.

### open

```java
inventory.open();
```

Opens your inventory menu.

### setSlot

```java
inventory.setSlot(int slot);
```

Sets your slot.
  
