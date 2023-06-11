using CabinApi.Data;
using CabinApi.DTOs;
using CabinApi.Models;
using Microsoft.AspNetCore.Mvc;

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

        // GET: api/Users
        [HttpPost("register")]
        public IActionResult Register(RegisterDTO dto)
        {

            var user = new User
            {
                Role = dto.Role,
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            };

            return Created("success", user);
            //return Ok("success");
        }
    }
}
