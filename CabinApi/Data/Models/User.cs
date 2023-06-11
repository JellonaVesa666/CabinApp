using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CabinApi.Data.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public int? isActive { get; set; }

        public int? Role { get; set; }

        [StringLength(8, ErrorMessage = "{0} length must be between {2} and {1}.", MinimumLength = 6)]
        [Column(TypeName = "nvarchar(50)")]
        public string? Name { get; set; }

        [StringLength(8, ErrorMessage = "{0} length must be between {2} and {1}.", MinimumLength = 6)]
        [Column(TypeName = "nvarchar(50)")]
        public string? Email { get; set; }

        [StringLength(8, ErrorMessage = "{0} length must be between {2} and {1}.", MinimumLength = 6)]
        [Column(TypeName = "nvarchar(50)")]
        public string? Password { get; set; }
    }
}
