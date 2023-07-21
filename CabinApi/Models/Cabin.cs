using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CabinApi.Models
{
    public class Cabin
    {
        [Key]
        public int Id { get; set; }


        // -- Ownership -- /
        [StringLength(50)]
        [Required]
        public int OwnerId { get; set; }


        // -- Location -- /
        [StringLength(50)]
        public string? Name { get; set; }

        [StringLength(50)]
        public string? Region { get; set; }

        [StringLength(50)]
        [Required]
        public string? Address { get; set; }

        [StringLength(10)]
        [Required]
        public string? PostalCode { get; set; }
        public string? MapCoordinates { get; set; }


        // -- Status -- /
        [Required]
        public byte IsActive { get; set; }

        public int Status { get; set; }


        // -- Size -- /
        public int Capacity { get; set; }
        public int Floors { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public float Squares { get; set; }
        public float PlotSize { get; set; }


        // -- Features -- /
        public int Type { get; set; }
        public int Features { get; set; }
        public string? Description { get; set; }
        public TimeSpan? ArrivalTime { get; set; }
        public TimeSpan? DepartureTime { get; set; }


        // -- Price Details -- /
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Discount { get; set; }

        public float DiscountPercent { get; set; }
        [Required]
        public DateTime discountExpriration { get; set; }
        public int DiscountMultiplier { get; set; }
        public int DiscountFromDays { get; set; }


        // -- Record -- //

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public DateTime ModifiedDate { get; set; }
    }
}
