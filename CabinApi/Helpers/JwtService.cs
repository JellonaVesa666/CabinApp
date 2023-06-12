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
            SymmetricSecurityKey symmetricSecurityKey = new(Encoding.UTF8.GetBytes(securityKey));
            SigningCredentials credentials = new(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            JwtHeader header = new(credentials);

            // HTML payload, token expiration time
            JwtPayload payload = new(id.ToString(), null, null, null, DateTime.Now.AddHours(2));

            JwtSecurityToken securityToken = new(header, payload);
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            byte[] key = Encoding.ASCII.GetBytes(securityKey);
            JwtSecurityTokenHandler tokenHandler = new();
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
        }
    }
}
