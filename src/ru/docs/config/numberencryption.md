## Number Encryption

The number encryption transformer encrypts any integer-based numeral to be hidden. This is perfect for uglifying
the code in general and making it more of a hardship for reverse-engineers to obtain a clean source code. This
furthermore reinforces any boolean-based conditionals.

The number encryption relies on the GEN3 flow obfuscation and may, in decompiled output, show as follows

Lets assume the following scenario: 
- $x$ is the number we wish to encrypt 
- $n$ is the "seed" of the block
- $d$ is the encryped number

According to simple xor mechanics:
$x\oplus n\oplus n=x$

So, by definition, if $n$ is our seed, at runtime we must compute $d$ such as $d = x\oplus n$. Then, we must modify the bytecode instruction such as:

```java
int value = x;
```

becomes
```java
int value = d ^ n;
```

Where $d$ is the value computed ahead of time in the form of a constant and $n$ the opaque predicate. Eg:
```java
int value = 5;
```
becomes
```java
int predicate = 0x100;
int value = 105 ^ predicate;
```

## Config

Currently, there is only one mode of Number Encryption, `STANDARD`

```js
numberEncryption {
    enabled: true
    exempt: []
}
```

## Examples
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

