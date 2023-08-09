namespace CabinBackend.DTOs
{
    public class CabinDTO
    {
        public int OwnerId { get; set; }
        public string? Name { get; set; } = string.Empty;
        public string? Region { get; set; } = string.Empty;
        public string? Address { get; set; } = string.Empty;
        public string? PostalCode { get; set; } = string.Empty;
        public string? MapCoordinates { get; set; } = string.Empty;
        public byte IsActive { get; set; } = 0;
        public int Status { get; set; } = 0;
        public string? Capacity { get; set; } = string.Empty;
        public int Floors { get; set; } = 1;
        public int Bedrooms { get; set; } = 1;
        public int Bathrooms { get; set; } = 1;
        public float Squares { get; set; }
        public float PlotSize { get; set; }
        public int Type { get; set; }
        public string Features { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public TimeSpan? ArrivalTime { get; set; }
        public TimeSpan? DepartureTime { get; set; }
        public decimal Price { get; set; } = 0;
        public decimal Discount { get; set; }
        public float DiscountPercent { get; set; }
        public DateTime DiscountExpriration { get; set; }
        public int DiscountMultiplier { get; set; }
        public int DiscountFromDays { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime ModifiedDate { get; set; } = DateTime.Now;
    }
}
