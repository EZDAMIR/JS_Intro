package com.damir.builder;

/**
 * Defines reusable construction sequences and depends only on EmailBuilder.
 */
public final class EmailDirector {
    private static final String SYSTEM_SENDER = "no-reply@example.com";
    private static final String WELCOME_SUBJECT = "Welcome to Builder Demo";
    private static final String WELCOME_BODY = "Thanks for joining. Your account is ready to use.";
    private static final String RESET_SUBJECT = "Password reset request";
    private static final String RESET_BODY = "Use the secure reset link to choose a new password.";

    public void makeWelcomeEmail(EmailBuilder builder, String recipient) {
        builder.setSender(SYSTEM_SENDER)
                .setRecipient(recipient)
                .setSubject(WELCOME_SUBJECT)
                .setBody(WELCOME_BODY)
                .setPriority(EmailPriority.NORMAL);
    }

    public void makePasswordResetEmail(EmailBuilder builder, String recipient) {
        builder.setSender(SYSTEM_SENDER)
                .setRecipient(recipient)
                .setSubject(RESET_SUBJECT)
                .setBody(RESET_BODY)
                .setPriority(EmailPriority.HIGH);
    }
}
