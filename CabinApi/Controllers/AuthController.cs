using CabinApi.Data;
using CabinApi.DTOs;
using CabinApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Runtime.ConstrainedExecution;
using System.Text.Json;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace CabinApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly AppDBContext _context;

        public AuthController(AppDBContext context)
        {
            _context = context;
        }

        // POST: api/register
        [HttpPost("register")]
        public async Task<ActionResult<IEnumerable<User>>> Register(RegisterDTO dto)
        {

            var user = new User
            {
                Role = dto.Role,
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            };

            // Add User
            _context.Add(user);
            await _context.SaveChangesAsync();

            byte[] utf8bytesJson = JsonSerializer.SerializeToUtf8Bytes(user);
            string strJson = System.Text.Encoding.UTF8.GetString(utf8bytesJson);
            return Ok($"success added user: {strJson}");
        }

        // POST: api/login
        [HttpPost("login")]
        public async Task<ActionResult<IEnumerable<User>>> Login(LoginDTO dto)
        {
            User? user = null;
            
            // Find user by email
            user = await _context.Users.FirstOrDefaultAsync(user => user.Email == dto.Email);

            // Check email
            if (user == null)
            {
                return BadRequest(new { message = "Invalid Login Data" });
            }
            // Check password
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Login Data" });
            }

            return Ok(user);
        }
    }
}
