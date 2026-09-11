package com.damir.builder;

/**
 * Concrete builder that produces an immutable Email object.
 */
public final class EmailObjectBuilder implements EmailBuilder {
    private String sender;
    private String recipient;
    private String subject;
    private String body;
    private EmailPriority priority = EmailPriority.NORMAL;

    @Override
    public EmailObjectBuilder setSender(String sender) {
        this.sender = sender;
        return this;
    }

    @Override
    public EmailObjectBuilder setRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }

    @Override
    public EmailObjectBuilder setSubject(String subject) {
        this.subject = subject;
        return this;
    }

    @Override
    public EmailObjectBuilder setBody(String body) {
        this.body = body;
        return this;
    }

    @Override
    public EmailObjectBuilder setPriority(EmailPriority priority) {
        this.priority = priority;
        return this;
    }

    public Email getResult() {
        EmailValidator.validate(sender, recipient, subject, body);
        if (priority == null) {
            throw new IllegalStateException("Priority is required");
        }
        return new Email(sender, recipient, subject, body, priority);
    }
}
