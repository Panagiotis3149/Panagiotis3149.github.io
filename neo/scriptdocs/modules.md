# modules

{% hint style="warning" %}
The variable `scriptName` is a global variable that is set to the local script name.
{% endhint %}

### disable

```java
modules.disable(String moduleName);
```

Disables a module.

### enable

```java
modules.enable(String moduleName);
```

Enables a module.

### getBedAuraPosition

```java
Vec3 bedAuraPosition = modules.getBedAuraPosition();
```

Returns the position Bed Aura is targetting.

### getBedAuraProgress

```java
float[] progress = modules.getBedAuraProgress();
```

Returns the progress of the targetted block as an array `[modified, vanilla]`.

### getButton

<pre class="language-java"><code class="lang-java"><strong>boolean buttonValue = modules.getButton(String moduleName, String name);
</strong></code></pre>

Returns true if the specified button is enabled.

### getCategories

<pre class="language-java"><code class="lang-java"><strong>Map&#x3C;String, List&#x3C;String> categories = modules.getCategories();
</strong></code></pre>

Retrieves each category with a list of all modules stored under them.

### getKeyPressed

```java
boolean pressed = modules.getKeyPressed(String moduleName, String setting);
```

Returns true if the specified keybind is pressed.

### getKillAuraTarget

```java
Entity killAuraTarget = modules.getKillAuraTarget();
```

Returns the entity killaura is targetting.

### getSettings

```java
Map<String, Object> settings = modules.getSettings(String name);
```

Retrieves a map of a module's settings.

### getSlider

```java
double value = modules.getSlider(String moduleName, String name);
```

Retrieves the current value of a slider. For string arrays, it will return the index of the array.

### isEnabled

```java
boolean enabled = modules.isEnabled(String moduleName);
```

Returns true if the specified module is enabled.

### isHidden

```java
boolean hidden = modules.isHidden(String moduleName);
```

Returns true if the specifiec module is hidden.

### isScaffolding

```java
boolean scaffolding = modules.isScaffolding();
```

Returns true if the player is scaffolding.

### isTowering

```java
boolean towering = modules.isTowering();
```

Returns true if the player is towering.

### registerButton

```java
modules.registerButton(String name, boolean default);
modules.registerButton(String group, String name, boolean default);
```

Registers a toggleable button with a default value.

### registerDescription

```java
modules.registerDescription(String description);
```

Registers a description.

### registerGroup

```java
modules.registerGroup(String group);
```

Registers a group.

### registerKey

```java
modules.registerKey(String name, int key);
modules.registerKey(String group, String name, int key);
```

Registers a keybind.

### registerSlider

{% code fullWidth="false" %}

```java
modules.registerSlider(String name, String suffix, double default, double minimum, double maximum, double interval);
modules.registerSlider(String name, String suffix, int default, String[] stringArray);
modules.registerSlider(String group, String name, String suffix, double default, double minimum, double maximum, double interval);
modules.registerSlider(String group, String name, String suffix, int default, String[] stringArray);
```

{% endcode %}

Registers a slider. Can be set to either display numbers, or an array of strings.

### setButton

```java
modules.setButton(String moduleName, String name, boolean value);
```

Sets the value for a specified button.

### setKey

```java
modules.setKey(String moduleName, String name, int code);
```

Sets the key for a specified keybind.

### setSlider

```java
modules.setSlider(String moduleName, String name, double value);
```

Sets the value for a specified slider.
  
