using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace CabinApi.Helpers
{
    public class JwtService
    {
        private string securityKey = "HerpDerpMonkeySlingGunGOTJammedByOldGoat";
        public string Generate(int id)
        {
            // HTML header, creates security key
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            // HTML payload, token expiration time
            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddMinutes(20));

            var securityToken = new JwtSecurityToken(header, payload);
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
    }
}
