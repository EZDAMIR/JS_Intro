package com.damir.builder;

final class EmailValidator {
    private static final String EMAIL_SEPARATOR = "@";

    private EmailValidator() {
    }

    static void validate(String sender, String recipient, String subject, String body) {
        requireEmail(sender, "Sender");
        requireEmail(recipient, "Recipient");
        requireText(subject, "Subject");
        requireText(body, "Body");
    }

    private static void requireEmail(String value, String fieldName) {
        requireText(value, fieldName);
        if (!value.contains(EMAIL_SEPARATOR)) {
            throw new IllegalStateException(fieldName + " must be a valid email address");
        }
    }

    private static void requireText(String value, String fieldName) {
        if (value == null || value.isBlank()) {
            throw new IllegalStateException(fieldName + " is required");
        }
    }
}
