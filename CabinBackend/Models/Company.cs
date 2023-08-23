using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace CabinBackend.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CompanyForm { get; set; }

        [StringLength(255)]
        [Required]
        public string? CompanyName { get; set; }

        [StringLength(255)]
        [Required]
        public string? BusinessId { get; set; }
    }
}
