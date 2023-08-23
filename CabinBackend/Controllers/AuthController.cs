using CabinBackend.Data;
using CabinBackend.DTOs;
using CabinBackend.Helpers;
using CabinBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Text.Json;


namespace CabinBackend.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly AppDBContext _context;
        private readonly JwtService _jwtService;

        public AuthController(AppDBContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        // POST: api/register
        [HttpPost("register")]
        public async Task<ActionResult<IEnumerable<User>>> Register(RegisterDTO dto)
        {
            var company = new Company
            {
                CompanyForm = dto.CompanyForm,
                CompanyName = dto.CompanyName,
                BusinessId = dto.BusinessId,
            };

            // Add Company
            _context.Add(company);
            // Save Context
            await _context.SaveChangesAsync();

            var user = new User
            {
                FullName = dto.FullName,
                Username = dto.Username,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Phone = dto.Phone,
                Address = dto.Address,
                PostalCode = dto.PostalCode,
                Role = dto.Role,
                Company = company.Id,
                CreatedDate = dto.CreatedDate,
                ModifiedDate = dto.ModifiedDate,
                IsActive = dto.IsActive,
            };

            // Add User
            _context.Add(user);
            // Save Context
            await _context.SaveChangesAsync();

            // Stringify user
            byte[] utf8bytesJson = JsonSerializer.SerializeToUtf8Bytes(user);
            string strJson = System.Text.Encoding.UTF8.GetString(utf8bytesJson);
            return Ok($"success added user: {strJson}");
        }

        // POST: api/login
        [HttpPost("login")]
        public async Task<ActionResult<IEnumerable<User>>> Login(LoginDTO dto)
        {
            // Find user by email or username
            User? user = await _context.User.FirstOrDefaultAsync(user => user.Email == dto.Email || user.Username == dto.Username);

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

            // Generates jwt by using user id
            var jwt = _jwtService.Generate(user.Id);

            // HTML response adds a cookie which contains the jwt
            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true,
            });

            byte[] utf8bytesJson = JsonSerializer.SerializeToUtf8Bytes(user);
            string strJson = System.Text.Encoding.UTF8.GetString(utf8bytesJson);

            return Ok(new { message = $"Logged in successfully{strJson}" });
        }

        // GET: api/user
        [HttpGet("user")]
        public async Task<ActionResult<IEnumerable<User>>> VerifyUser()
        {
            string? jwt = Request.Cookies["jwt"];
            JwtSecurityToken token = _jwtService.Verify(jwt);
            int usedId = int.Parse(token.Issuer);

            User? user = null;

            try
            {
                user = await _context.User.FirstOrDefaultAsync(user => user.Id == usedId);

                return Ok(user);
            }
            catch
            {
                return Unauthorized();
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok(new { message = "Logged out successfully" });
        }
    }
}
