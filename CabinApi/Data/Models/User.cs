using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CabinApi.Data.Models
{
    public class User
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public int? isActive { get; set; }

        [Required]
        public int? Role { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string? Name { get; set; }

        [Required]
        [StringLength(8, ErrorMessage = "{0} length must be between {2} and {1}.", MinimumLength = 6)]
        [Column(TypeName = "nvarchar(50)")]
        public string? Email { get; set; }

        [Required]
        [StringLength(8, ErrorMessage = "{0} length must be between {2} and {1}.", MinimumLength = 6)]
        [Column(TypeName = "nvarchar(50)")]
        public string? Password { get; set; }
    }
}
