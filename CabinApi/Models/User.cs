using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CabinApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public int? Role { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Name { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Email { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Password { get; set; }
    }
}
