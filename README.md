# Assignment 1 - Builder Pattern

Java implementation of the Builder design pattern using an **Email** product.

The same construction steps create two different representations:

- `EmailObjectBuilder` -> immutable `Email` object
- `EmailPreviewBuilder` -> formatted text preview

`EmailDirector` contains two reusable configurations: `makeWelcomeEmail()` and `makePasswordResetEmail()`.

## Structure

- `Email` - immutable Product
- `EmailBuilder` - Builder interface
- `EmailObjectBuilder` - ConcreteBuilder #1
- `EmailPreviewBuilder` - ConcreteBuilder #2
- `EmailDirector` - Director
- `Main` - Client/demo
- `EmailValidator` - shared validation helper
- `EmailPriority` - enum used instead of magic strings

## Run

```bash
javac -d out src/main/java/com/damir/builder/*.java
java -cp out com.damir.builder.Main
```

## Expected output

```text
Email{sender='no-reply@example.com', recipient='student@example.com', subject='Welcome to Builder Demo', priority=NORMAL}

=== EMAIL PREVIEW ===
From: no-reply@example.com
To: student@example.com
Priority: NORMAL
Subject: Welcome to Builder Demo

Thanks for joining. Your account is ready to use.
```
