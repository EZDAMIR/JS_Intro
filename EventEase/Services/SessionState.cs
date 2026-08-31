namespace EventEase.Services;

public class SessionState
{
    public string? UserName { get; private set; }
    public HashSet<int> RegisteredEventIds { get; } = new();
    public HashSet<int> AttendedEventIds { get; } = new();

    public bool IsLoggedIn => !string.IsNullOrWhiteSpace(UserName);

    public void StartSession(string userName)
    {
        UserName = userName.Trim();
    }

    public void Register(int eventId)
    {
        RegisteredEventIds.Add(eventId);
    }

    public void ToggleAttendance(int eventId)
    {
        if (!AttendedEventIds.Add(eventId))
        {
            AttendedEventIds.Remove(eventId);
        }
    }
}
