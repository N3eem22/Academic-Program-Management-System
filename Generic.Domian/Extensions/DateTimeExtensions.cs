using System.Reflection.Emit;

namespace Generic.Domian.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTime Now(this DateTime dateToCheck)
        {
            //TimeZoneInfo egyptZone = TimeZoneInfo.FindSystemTimeZoneById("Egypt Standard Time");
            //return TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, egyptZone);

            return DateTime.Now;
        }
    }
}
