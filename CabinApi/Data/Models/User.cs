using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CabinApi.Data.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public int? Role { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Name { get; set; }
    }
}
