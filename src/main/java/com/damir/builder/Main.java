package com.damir.builder;

public final class Main {
    private static final String DEMO_RECIPIENT = "student@example.com";

    private Main() {
    }

    public static void main(String[] args) {
        EmailDirector director = new EmailDirector();

        EmailObjectBuilder objectBuilder = new EmailObjectBuilder();
        director.makeWelcomeEmail(objectBuilder, DEMO_RECIPIENT);
        Email email = objectBuilder.getResult();

        EmailPreviewBuilder previewBuilder = new EmailPreviewBuilder();
        director.makeWelcomeEmail(previewBuilder, DEMO_RECIPIENT);
        String preview = previewBuilder.getResult();

        System.out.println(email);
        System.out.println();
        System.out.println(preview);
    }
}
