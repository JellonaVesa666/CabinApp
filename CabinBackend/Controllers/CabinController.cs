using CabinBackend.Data;
using CabinBackend.DTOs;
using CabinBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CabinBackend.Controllers
{
    [Route("api/cabin")]
    [ApiController]
    public class CabinController : ControllerBase
    {
        private readonly AppDBContext _context;

        public CabinController(AppDBContext context)
        {
            _context = context;
        }

        // GET: api/
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cabin>>> GetCabins()
        {
            var cabin = await _context.Cabin.ToListAsync();

            if (cabin == null)
            {
                return NotFound("Cabins not found");
            }

            return cabin;
        }

        // GET api/<CabinController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/>
        [HttpPost()]
        public async Task<ActionResult<IEnumerable<Cabin>>> Register(CabinDTO dto)
        {
            var cabin = new Cabin
            {
                OwnerId = dto.OwnerId,
                Name = dto.Name,
                Region = dto.Region,
                Address = dto.Address,
                PostalCode = dto.PostalCode,
                MapCoordinates = dto.MapCoordinates,
                IsActive = dto.IsActive,
                Status = dto.Status,
                Capacity = dto.Capacity,
                Floors = dto.Floors,
                Bedrooms = dto.Bedrooms,
                Bathrooms = dto.Bathrooms,
                Squares = dto.Squares,
                PlotSize = dto.PlotSize,
                Type = dto.Type,
                Features = dto.Features,
                Description = dto.Description,
                ArrivalTime = dto.ArrivalTime,
                DepartureTime = dto.DepartureTime,
                Price = dto.Price,
                Discount = dto.Discount,
                DiscountPercent = dto.DiscountPercent,
                DiscountExpriration = dto.DiscountExpriration,
                DiscountMultiplier = dto.DiscountMultiplier,
                CreatedDate = dto.CreatedDate,
                ModifiedDate = dto.ModifiedDate,
            };

            // Add Cabin
            _context.Add(cabin);
            await _context.SaveChangesAsync();

            // Stringify cabin
            byte[] utf8bytesJson = JsonSerializer.SerializeToUtf8Bytes(cabin);
            string strJson = System.Text.Encoding.UTF8.GetString(utf8bytesJson);
            return Ok($"success added cabin: {cabin}");
        }

        // PUT api/<CabinController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<CabinController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }

    }
}
