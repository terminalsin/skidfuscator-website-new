## Flow Switch

This specific transformer targets exclusively your switch statements to obfuscate away any variables, effectively hiding enums, constants, and string targets. This is done via the use of the opaque predicate and a special hashing mechanism to prevent any obvious reverse engineering techniques.

## Config

```js
flowSwitch {
    enabled: true
    exempt: []
}
```

## Examples

#### Unobfuscated
```java
public static void main(String[] args) {
    int number = callNumber();
    
    switch (number) {
        case 1: 
            System.out.println("Oh no!");
            break;
        case 2: 
            System.out.println("Hello world!");
            break
        default: 
            throw new IllegalStateException("Something went wrong!");
    }
    /*[...]*/
}
/*[...]*/
```

#### Obfuscated
```java
public static void main(String[] args) {
    /*[...]*/
    int number = callNumber();

    switch (number ^ hash(n ^ 0x9932783)) {
        case 0x928EF8C: 
            System.out.println("Hello world!");
            break
        case 0x9873783: 
            System.out.println("Oh no!");
            break;
        default: 
            throw new IllegalStateException("Something went wrong!");
    }
    /*[...]*/
}
/*[...]*/
```
