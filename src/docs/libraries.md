# Libraries

Ahhh we all hate 'em but for the sake of not screwing up your software, we have to make use of these. It helps simplify your
configurations and so and forth. Hopefully, in the maven plugin, these will be handled automatically. However that's just 
another thing on our todo list for now.

To add dependencies, it's quite simple:
1. Create a folder called "libs"
2. Drag all your dependencies into said folder
3. Add "-li=\<path to folder\>" to your command line execution for skidfuscator

Example:
```console
java -jar obfuscator-1.0.0-SNAPSHOT.jar -li=libs obfuscate FluffyClicker.jar
```
![Image of example](https://i.imgur.com/AYxEoYp.png)

## How to get dependencies from a Gradle project ?

### Gradle Groovy

Add this task to your build.gradle file:
```groovy
task copyDeps(type: Copy) {
    from configurations.compile
    into 'libs'
}
```

Then run the task:
```console
gradlew copyDeps
```

### Gradle Kotlin

Add this task to your build.gradle.kts file:
```kotlin
tasks.register<Copy>("copyDeps") {
    from(configurations.compile)
    into("libs")
}
```

Then run the task:
```console
gradlew copyDeps
```

## How to get dependencies from a Maven project ?

Add this task to your pom.xml file:
```xml
<build>
    <plugins>
        <plugin>
            <artifactId>maven-dependency-plugin</artifactId>
            <executions>
                <execution>
                    <id>copy-dependencies</id>
                    <phase>package</phase>
                    <goals>
                        <goal>copy-dependencies</goal>
                    </goals>
                    <configuration>
                        <outputDirectory>${project.build.directory}/libs</outputDirectory>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

Then run the task:
```console
mvn package
```
