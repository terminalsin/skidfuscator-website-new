## Exception Return

Exception return obfuscation is a programming technique used to make the control flow of a program more difficult to understand and analyze by obfuscating return results and standardizing every method to have a void return value.

In a nutshell, this technique replaces normal return statements with exception handling blocks that make the program's control flow less predictable. When an exception is raised, the program jumps to a designated exception handler, which then returns the desired value or performs the intended action. This makes the code harder to read, analyze, and reverse engineer, thus providing a level of protection against tampering or piracy.

'''warning
This obfuscation technique is still experimental and may not successfully compile on larger programs. For this very reason, it is disabled by default. 
'''

## Config

```js
exceptionReturn {
    enabled: false
    exempt: []
}
```

## Examples

### Unobfuscated

```java
int number = callNumber();
 [...]
}

int callNumber() {
    return 1;
}
```

### Obfuscated
```java
try {
    callNumber();
} catch (IntNumberException ex) {
    int number = ex.getValue();
}

[...]

void callNumber() {
    throw new IntNumberException(1);
}
```
