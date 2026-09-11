package com.damir.builder;

/**
 * Declares construction steps shared by all email representations.
 */
public interface EmailBuilder {
    EmailBuilder setSender(String sender);

    EmailBuilder setRecipient(String recipient);

    EmailBuilder setSubject(String subject);

    EmailBuilder setBody(String body);

    EmailBuilder setPriority(EmailPriority priority);
}
