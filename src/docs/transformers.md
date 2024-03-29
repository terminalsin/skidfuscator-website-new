# Transformers 

Here's the index where I'll be detailing every transformer one by one. This should help you grasp a bit what's happening behind the scenes and how such transformations are effective against reverse engineering.

We'll be going over the following index:
- Number Obfuscation
- String Encryption

## Number Obfuscation

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

## String Encryption

String encryption relies on three basic conditions before being able to be processed:
1. The string constant must be available in the constant pool
2. The string constant must be formatted under UTF-8
3. The string must not be empty

With the such, we are able to inject a symmetric encryption system inside the code to be able to obscure the string from typical decompiler/dissassemblers.

### Xor Algorithm

As of right now, we use a simple xor algorithm which is quite resilient to be able to compute our encrypted string. Whilst this algorithm is mathematically of the poorest quality, and could be cracked most likely in polynomial time if not linear time, our objective here is to propose an easy and proof-of-concept implementation of how an opaque predicate can harden string encryption. In future versions of Skidfuscator, we will make use of a polymorphic engine.

The algorithm currently functions this way:

Let $f_y(x)=x\oplus y\oplus n$ represent the encryption and decryption method for a character in a String for a given $n$ and $m_{max}$ of 255

$y=i\mod m$

where $i$ represents the index of the character in the String, $m$ represents the size of the random integer array with random "keys", $n$ represents the integer opaque predicate, $x$ the character at the index $i$ of the String. 

By definition:
$$
\begin{align}
f_y(f_y(x))&=x\oplus y\oplus n\oplus y\oplus n\\
&=x\oplus y\oplus y\oplus n\oplus n\\
f_y(f_y(x))&=x
\end{align}
$$

Hence we obtain a usable encryption/decryption algorithm which is hardened by an opaque predicate and a suite of integer keys stored locally. The implementation may be seen [here](https://github.com/terminalsin/skidfuscator-java-obfuscator/blob/master/dev.skidfuscator.obfuscator/obfuscator/src/main/java/dev/skidfuscator/obfuscator/transform/impl/string/BasicEncryptionGenerator.java)

Outlining refers to the process of extracting code from a method and placing it into a separate, standalone method. This is often done as a way to improve the readability and maintainability of code, as it can make it easier to understand what a method is doing by breaking it down into smaller, more focused pieces of code.

Outlining can also be used as a form of code obfuscation, as it can make it more difficult for someone attempting to reverse engineer or understand the code to see the overall flow and structure of the program. By breaking the code into smaller pieces and separating it out into different methods, it can be a much harsher procedure for someone to understand the relationships between different parts of the flow and how they fit together to perform a particular function.

![Outlining graph explanation](https://i.imgur.com/2HMq0a4.png)

The fantastic thing about outlining is: it's not *technically* reversible! To be able to return to an original state of a good outline obfuscation, a deobfuscator *has to do inlining*, which is a heuristic and *doesn't* guarantee the output to always be semantically correct with the original source code. Furthermore, this necessites the deobfuscator to mangle with variables and other various forms of sensitive bytecode manipulation which all can lead to frame and computation exceptions. 

Overall, outlining obfuscation is pretty neat :)
