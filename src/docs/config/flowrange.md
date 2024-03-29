
## Flow Range
A flow exception range obfuscation pass is a technique used in compiler optimization to add obfuscation to a program's exception handling code.

The idea behind this technique is to modify the program's exception handling routines (such as try-catch blocks) to include additional control flow instructions that make it harder to understand the program's logical flow.

For example, a simple try-catch block might be transformed into a more complex structure that includes nested try-catch blocks or additional branching instructions. This can make it more difficult for an observer to understand the program's exception handling behavior and potentially uncover vulnerabilities that could be exploited.

This technique is often used in conjunction with other obfuscation techniques to provide additional layers of protection. However, it should be noted that adding unnecessary complexity to exception handling code can also make it harder to debug and maintain the program, so it should be used judiciously.

## Config 

```js
flowRange {
     enabled: true
     exempt: []
}
```

## Examples

#### Unobfuscated
```java
final String uwu = "UwU";
System.out.println(uwu);
```

#### Obfuscated
```java
final String uwu = "UwU";

while (true) {
     label1: {
          try {
               if (this.a(0x92A8B44, n) >> 8 != 0x97F7F)
                    throw new IllegalReflectiveException();
               break label1;
          } catch (IllegalReflectiveException ex) {
               System.out.println(uwu);
          }
     }
}
```

#### IR Representation
```
 Original flow:       Obfuscated Flow:

 ┌─────────┐            ┌─────────┐
 │ Block A │            │ Block A │
 └────┬────┘            └────┬────┘
      │                      │
 ┌────▼────┐         ┌───────▼────────┐
 │ Block B │         │ Random If Stmt │
 └─────────┘         └───────┬────────┘
                             │
                   ┌─────┐◄──┴───►┌─────┐
                   │ Yes │        │ No  │
                   └─────┘        └──┬──┘
                                     │
                               ┌─────▼─────┐
                               │ Exception │
                               └───────────┘

                      ┌─────────────┐
                      │  Exception  │
                      │   Catcher   │
                      └──────┬──────┘
                             │
                        ┌────▼────┐
                        │ Block B │
                        └─────────┘
```
