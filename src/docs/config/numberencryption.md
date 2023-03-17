## Number Encryption

The number encryption transformer encrypts any integer-based numeral to be hidden. This is perfect for uglifying
the code in general and making it more of a hardship for reverse-engineers to obtain a clean source code. This
furthermore reinforces any boolean-based conditionals.

The number encryption relies on the GEN3 flow obfuscation and may, in decompiled output, show as follows

## Config

Currently, there is only one mode of Number Encryption, `STANDARD`

```js
numberEncryption {
    enabled: true
    exempt: []
}
```

## Behind-the-scenes
#### Unobfuscated
```java
int var = 1000;
System.out.println(var + 1 + 2 + 3);
```

#### Obfuscated
```java
int var = 0xA0290233 ^ n;
System.out.println(var + 0x92083838 ^ n + 0x92083839 ^ n + 0x92083840 ^ n);
```

