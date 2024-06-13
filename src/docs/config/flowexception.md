## Flow Exceptions

Flow Exception is an obfuscation transformation that adds additional layers of security to your Java code to make it harder for decompilers to output valid Java code. It does this by altering the control flow and introducing exception fall-though code in a way that complicates the logic without changing the program's functionality.

At a high-level, the transformer works in the following way:
- First, the transformer examines methods in your code and skips abstract methods, init methods, and those with no code to avoid compatibility issues. 
- Then, the transformer then determines the appropriate obfuscation strategy (Weak, Good, or Aggressive) based on the configuration settings. Each strategy offers a different level of obfuscation and impacts how often exception-related code is inserted. 
- Once such is done, for each block in the control flow graph, the transformer checks whether it should be exempt from obfuscation. It skips empty blocks, proxy blocks, and exception-sensitive blocks. If a block is eligible for obfuscation, the transformer decides whether to apply the obfuscation based on the chosen strategy. 
- When applied, the transformer generates a unique seed and uses hashing to secure the opaque predicate. It then inserts a bogus conditional jump to a throw statement, causing the flow to fall-through.
- In some cases, the transformer may add an additional layer of obfuscation by inserting a secondary conditional jump statement at both the beginning and random locations in the block.

## Config

There are three modes available for this specific transformer:
- `WEAK`: If was previously executed, run a random boolean, if last wasn't, run (75% average insertion rate)
- `GOOD`: Always run once (100% average insertion rate)
- `AGGRESSIVE`: Always run twice (200% average insertion rate)

```js
flowException {
    enabled: true
    strength: AGGRESSIVE // Can be 'WEAK', 'GOOD' or 'AGGRESSIVE'
    exempt: []
}
```

## Examples

#### Unobfuscated
```java
public static void main(String[] args) {
    int number = callNumber();
    /*[...]*/
}
/*[...]*/
```

#### Obfuscated
```java
public static void main(String[] args) {
    /*[...]*/
    while (true) {
        if (n ^ 0x8AF8EF8F == 0xA88FFA) {
            break;
        }

        n = n ^ 0x28847D;
        int number = callNumber();

        if (n ^ 0xAA9F8FFD == 0x989F7AF) {
            break;
        }

        throw new IllegalStateException();
    }
    
    /*[...]*/
}
/*[...]*/
```
