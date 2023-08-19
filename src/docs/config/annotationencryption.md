## Annotation Encryption

The annotation encryption transformer transforms every string and integer contained in annotations into a specific method call, with the purpose of hiding it in runtime. This can be practical for non-sensitive URLs, private keys, etc...

::: warning
You should not trust the client as a basis. Please do not rely on String encryption as the sole protection for your
software. By default, you should assume that a talented enough reverse-engineer could gain access to these with 
enough time and patience.
:::


## Config

```js
stringAnnotationEncryption {
    enabled: true
    exempt: []
}

intAnnotationEncryption {
    enabled: true
    exempt: []
}
```

## Examples

### Unobfuscated

```java
@SecretAnnotation(secret = "Super secret", secret2 = 1337)
public class Fancy {
    public String getSecret() {
        return this.getClass().getAnnotation(SecretAnnotation.class).secret();
    }

    public int getSecre2t() {
        return this.getClass().getAnnotation(SecretAnnotation.class).secret2();
    }
}
```

### Obfuscated

```java
@SecretAnnotation(secret = "oifjaioejaifjea9è!efèaefFEf==", secret2 = 0x9FE7FE7F)
public class Fancy {
    public String getSecret() {
        /* [...] */
        return this.aofheoafo(this.getClass().getAnnotation(SecretAnnotation.class).secret(), n ^ 0x997AF8F);
    }

    public int getSecre2t() {
        /* [...] */
        return this.getClass().getAnnotation(SecretAnnotation.class).secret2() ^ n ^ 0x90AF9F7;
    }

    /* [...] */
}
```
