namespace Generic.Domian.Dtos.Requests.Auth
{
    public class GetTokenRequest
    {
        [Required]
        [MaxLength(50)]
        public string Username { get; set; }

        [Required]
        [MaxLength(50)]
        public string Password { get; set; }
    }
}
