namespace CabinBackend.DTOs
{
    public class RegisterDTO
    {
        public string FullName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
        public int Role { get; set; } = 0;
        public string Company { get; set; } = string.Empty;
        public int CompanyForm { get; set; } = 0;
        public string CompanyName { get; set; } = string.Empty;
        public string BusinessId { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime ModifiedDate { get; set; } = DateTime.Now;
        public byte IsActive { get; set; } = 0;
    }
}
