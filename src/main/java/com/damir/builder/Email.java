package com.damir.builder;

/**
 * Immutable product created by EmailObjectBuilder.
 */
public final class Email {
    private final String sender;
    private final String recipient;
    private final String subject;
    private final String body;
    private final EmailPriority priority;

    Email(String sender, String recipient, String subject, String body, EmailPriority priority) {
        this.sender = sender;
        this.recipient = recipient;
        this.subject = subject;
        this.body = body;
        this.priority = priority;
    }

    public String getSender() {
        return sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public String getSubject() {
        return subject;
    }

    public String getBody() {
        return body;
    }

    public EmailPriority getPriority() {
        return priority;
    }

    @Override
    public String toString() {
        return "Email{" +
                "sender='" + sender + '\'' +
                ", recipient='" + recipient + '\'' +
                ", subject='" + subject + '\'' +
                ", priority=" + priority +
                '}';
    }
}
