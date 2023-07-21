using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CabinBackend.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Required]
        public string? FullName { get; set; }

        [StringLength(50)]
        [Required]
        public string? Username { get; set; }

        [StringLength(255)]
        [Required]
        public string? Email { get; set; }

        [JsonIgnore]
        [Required]
        [StringLength(255)]
        public string? Password { get; set; }

        [StringLength(22)]
        [Required]
        public string? Phone { get; set; }

        [StringLength(50)]
        [Required]
        public string? Address { get; set; }

        [StringLength(10)]
        [Required]
        public string? PostalCode { get; set; }

        [Required]
        public int Role { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public DateTime ModifiedDate { get; set; }

        [Required]
        public byte IsActive { get; set; }
    }
}
