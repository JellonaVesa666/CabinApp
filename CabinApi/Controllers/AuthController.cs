using CabinApi.Data;
using CabinApi.DTOs;
using CabinApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;

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

        public User Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public User? GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(user => user.Email == email);
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

            _context.Add(user);
            await _context.SaveChangesAsync();

            byte[] utf8bytesJson = JsonSerializer.SerializeToUtf8Bytes(user);
            string strJson = System.Text.Encoding.UTF8.GetString(utf8bytesJson);
            return Ok($"success added user: {strJson}");
        }

        // POST: api/login
        [HttpPost("login")]
        public IActionResult Login(LoginDTO dto)
        {
            User user = GetByEmail(dto.Email);

            // Check for login data
            if (user == null) 
            {
                return BadRequest(new { message = "Invalid Login Data" });
            }

            // Check for password
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Login Data" });
            }

            return Ok(user);
        }
    }
}
