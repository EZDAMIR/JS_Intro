package com.damir.builder;

/**
 * Concrete builder that produces a formatted text preview.
 */
public final class EmailPreviewBuilder implements EmailBuilder {
    private static final String PREVIEW_HEADER = "=== EMAIL PREVIEW ===";

    private String sender;
    private String recipient;
    private String subject;
    private String body;
    private EmailPriority priority = EmailPriority.NORMAL;

    @Override
    public EmailPreviewBuilder setSender(String sender) {
        this.sender = sender;
        return this;
    }

    @Override
    public EmailPreviewBuilder setRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }

    @Override
    public EmailPreviewBuilder setSubject(String subject) {
        this.subject = subject;
        return this;
    }

    @Override
    public EmailPreviewBuilder setBody(String body) {
        this.body = body;
        return this;
    }

    @Override
    public EmailPreviewBuilder setPriority(EmailPriority priority) {
        this.priority = priority;
        return this;
    }

    public String getResult() {
        EmailValidator.validate(sender, recipient, subject, body);
        if (priority == null) {
            throw new IllegalStateException("Priority is required");
        }
        return formatPreview();
    }

    private String formatPreview() {
        return PREVIEW_HEADER + System.lineSeparator()
                + "From: " + sender + System.lineSeparator()
                + "To: " + recipient + System.lineSeparator()
                + "Priority: " + priority + System.lineSeparator()
                + "Subject: " + subject + System.lineSeparator()
                + System.lineSeparator()
                + body;
    }
}
