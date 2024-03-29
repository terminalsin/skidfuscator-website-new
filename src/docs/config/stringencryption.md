## String Encryption

The string encryption transformer transforms every string into a specific method call, with the purpose of hiding
it in runtime. This can be practical for non-sensitive URLs, private keys, etc...

::: warning
You should not trust the client as a basis. Please do not rely on String encryption as the sole protection for your
software. By default, you should assume that a talented enough reverse-engineer could gain access to these with 
enough time and patience.
:::


## Config

There are currently two modes for String encryption: `STANDARD` and `POLYMORPHIC`

```js
stringEncryption {
    enabled: true
    type: POLYMORPHIC
    exempt: []
}
```

## Examples

### Unobfuscated

```java
System.out.println("Hello world");
```

### Standard

```java
System.out.println(superDuperMethod("\u2be6\uabec\uebfe\uebfe\uabe0\uabf7\ue7f1", n ^ 0x9F878R));
```

### Polymorphic
```java
StringBuilder string = new StringBuilder("\u2be6\uabec\uebfe\uebfe\uabe0\uabf7\ue7f1\uabe0\u6bfa\uebfe\uabee\uabf5");
for (int a=0, b, c; a < string.length(); a++) {
    b = string.charAt(a);
    b = (((b & 0xffff) << 0x6) | (b >> 0xa)) & 0xffff;
    c = ((b >> 0x0) ^ (b >> 0x7)) & ((1 << 0x4) - 1);
    b ^= (c << 0x0) | (c << 0x7);
    b ^= 0x600f ^ n;
    b -= 0x2aa2 ^ n;
    b += 0x25b0 ^ n;
    b ^= 0x9852 ^ n;
    string.setCharAt(a, (char) b);
}
System.out.println(string)
```
