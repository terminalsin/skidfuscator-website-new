## Flow Condition

This transfomer serves as a first shield to opaque predicate analysis. To prevent static analysis from detecting which integer is an opaque predicate, we use this specific integer to add extra conditions to already existing if statements. Not only does this add extra security to your software, but it hinders the deobfuscation and decompilation process of many tools.

Compared to the Flow Exception transformer, this is a much more simplified version which only handles one edge case.

## Config

```js
flowCondition {
    enabled: true
    exempt: []
}
```

## Examples

#### Unobfuscated
```java
public static void main(String[] args) {
    int number = callNumber();

    if (number == 1) {
        System.out.println("Hello world");
    }
    /*[...]*/
}
/*[...]*/
```

#### Obfuscated
```java
public static void main(String[] args) {
    /*[...]*/
    label1: {
        while (true) {
            if (n ^ 0x8AF8EF8F == 0xA88FFA) {
                break;
            }

            n = n ^ 0x28847D;
            int number = callNumber();

            label2: {
                if (number != 1)
                    break label1;
                
                if (n ^ 0xAA9F8FFD != 0x989F7AF)
                    break label2;

                System.out.println("Hello world");
                break label1;
            }

            throw new IllegalStateException();
        }
    }
    /*[...]*/
}
/*[...]*/
```