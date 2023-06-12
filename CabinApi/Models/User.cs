using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CabinApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public int? Role { get; set; }

        public string? Name { get; set; }

        public string? Email { get; set; }
        [JsonIgnore]
        public string? Password { get; set; }
    }
}
