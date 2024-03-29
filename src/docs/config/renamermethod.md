## Method Renamer

The method renamer seeks to accurately renamer a whole method to prevent the conservation of method names. To achieve this, Skidfuscator creates "method groups" to effectively preserve method hierachy. For example, if `class B` extends `class A`, and `class A` implements `methodA()`, all calls to `methodA()` for both `class A` and `class B` will need to be renamed. 

## Config
The method renamer currently supports one dictionary, `ALPHABETICAL`, alongside the traditional custom dictionary, `CUSTOM`, based on input. In this scenario, the following options are available:
- Depth: How many literals will be used by default (eg: 3 depth will lead to o0o0o0 for the first item, or 1 depth will lead to o0 for the first item)
- Chars: Characters to be used by the transformer. 

::: warning
As of right now, the transformer does not handle duplicate characters and will improperly create identical method names. For example, do not use "o", "0" and "o0" as the latter is a combination of the previous two characters.
::: 

```js
methodRenamer {
    enabled: false
    type: CUSTOM // or 'ALPHABETICAL'
    chars: [
        "K"
        "oO",
        "o0"
    ]
    depth: 3
}
```

## Examples

#### Unobfuscated

```java
public static void main(String[] args) {
    int number = callNumber();
    /*[...]*/
}

static int callNumber() {
    return 1;
}
```

#### Obfuscated
```java
public static void main(String[] args) {
    int number = o0k0k0Kk();
    /*[...]*/
}


static int o0k0k0Kk() {
    return 1;
}
```
