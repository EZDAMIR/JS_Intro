# EventEase

EventEase is a Blazor WebAssembly event-management project created for the Blazor for Front-End Development course.

## Features
- Reusable Event Card component with fields and two-way data binding
- Routed event details pages with invalid-route handling
- Registration form with DataAnnotations validation
- Session state for the current user and registered events
- Attendance tracker
- Responsive styling

## Copilot-assisted development summary
Copilot was used during planning to break the application into reusable components and routes. It assisted with the first Event Card structure and the two-way bound notes field, then helped identify routing and null-handling cases while the details page was implemented. During refinement, Copilot suggestions were used to improve input validation, simplify state-management methods, and avoid invalid event IDs. It also assisted with the advanced registration, session-state, and attendance-tracking features, followed by a final review for readability and responsive behavior.

## Run locally
```bash
dotnet restore
dotnet run
```
