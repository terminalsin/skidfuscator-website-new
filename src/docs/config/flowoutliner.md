## Outliner

Outlining refers to the process of extracting code from a method and placing it into a separate, standalone method. This is often done as a way to improve the readability and maintainability of code, as it can make it easier to understand what a method is doing by breaking it down into smaller, more focused pieces of code.

Outlining can also be used as a form of code obfuscation, as it can make it more difficult for someone attempting to reverse engineer or understand the code to see the overall flow and structure of the program. By breaking the code into smaller pieces and separating it out into different methods, it can be a much harsher procedure for someone to understand the relationships between different parts of the flow and how they fit together to perform a particular function.

![Outlining graph explanation](https://i.imgur.com/2HMq0a4.png)

The fantastic thing about outlining is: it's not *technically* reversible! To be able to return to an original state of a good outline obfuscation, a deobfuscator *has to do inlining*, which is a heuristic and *doesn't* guarantee the output to always be semantically correct with the original source code. Furthermore, this necessites the deobfuscator to mangle with variables and other various forms of sensitive bytecode manipulation which all can lead to frame and computation exceptions. 

Overall, outlining obfuscation is pretty neat :)

::: warning
The outliner transformer is still very early into development. Due to how the Java verifier works, not all scenarios may be correctly verified, which may lead to some compilation issues. Please use at your own risk, and if any issue arise, please report these.

Note to self: I hate stack frames
:::

## Config

```js
outliner {
     enabled: true
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

static int callNumber() {
    return 1;
}
```

#### Obfuscated
```java
public static void main(String[] args) {
    step1_AF8FZE8EF7Z89F();
    /*[...]*/
}

static void step1_AF8FZE8EF7Z89F() {
    int number = callNumber();
}


static int callNumber() {
    return 1;
}
```
